import express from 'express';
import type { Request, Response } from 'express';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import { GoogleGenAI, Type } from '@google/genai';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT ? parseInt(process.env.PORT, 10) : 3000;

app.use(express.json());

// Initialize GoogleGenAI server-side with telemetry User-Agent header
const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY || '',
  httpOptions: {
    headers: {
      'User-Agent': 'aistudio-build',
    },
  },
});

// API: Generate 15-question quiz for Grade 7 English
app.post('/api/generate-quiz', async (req: Request, res: Response) => {
  try {
    const { topic, focus } = req.body || {};

    const prompt = `Bạn là một Giáo viên Tiếng Anh Lớp 7 giàu kinh nghiệm, thân thiện và tỉ mỉ.
Hãy tạo MỘT BỘ ĐỀ ÔN TẬP GỒM ĐÚNG 15 CÂU bài tập điền từ / chia động từ trong ngoặc dành cho học sinh Lớp 7 (Grade 7).

QUY TẮC BẮT BUỘC:
1. Đối tượng: Học sinh Lớp 7. Câu văn gần gũi, quen thuộc (chủ đề: trường học, gia đình, kỳ nghỉ, sở thích, động vật, hoạt động hàng ngày...).
2. Phạm vi ngữ pháp:
   - 3 thì trọng tâm Lớp 7: Thì Hiện tại đơn (Present Simple), Thì Quá khứ đơn (Past Simple) và Thì Hiện tại tiếp diễn (Present Continuous).
   - Phải có đủ 3 thể: Khẳng định (+), Phủ định (-), Nghi vấn (?).
   - Xen kẽ giữa Động từ 'To be' (is/am/are - was/were) và Động từ thường (bao gồm cả Động từ bất quy tắc phổ biến như go/went, eat/ate, buy/bought, see/saw, write/wrote, do/did... và Động từ có quy tắc thêm -ed, cũng như dạng thêm -ing ở tiếp diễn).
   - Các câu thì Hiện tại tiếp diễn có dấu hiệu nhận biết rõ ràng: now, right now, at the moment, at present, Look!, Listen!, Be quiet!, Keep silent!...
3. Định dạng câu:
   - Dùng '______' để làm chỗ trống cần điền.
   - Để động từ gợi ý trong ngoặc trước hoặc sau chỗ trống. Ví dụ:
     "She (not go) ______ to school yesterday."
     "Look! The bus (come) ______."
     "(be) ______ you happy when you received the gift?"
     "My brother usually (play) ______ badminton on Sundays."
     "Nam (not study) ______ English at the moment."
4. Đưa ra danh sách đáp án đúng (bao gồm cả dạng viết tắt và viết đầy đủ như "didn't go" và "did not go", "wasn't" và "was not", "isn't sleeping" và "is not sleeping").
5. Giải thích ngữ pháp ngắn gọn, dễ hiểu cho học sinh lớp 7:
   - Nhận diện dấu hiệu nhận biết (Signal words: yesterday, last week, every day, usually, look!, at the moment...).
   - Giải thích cấu trúc câu (Chủ ngữ + ...).
   - Dịch nghĩa tiếng Việt trọn vẹn của câu.
${topic ? `Chủ đề ưu tiên: ${topic}` : ''}
${focus ? `Trọng tâm thì: ${focus}` : ''}`;

    const response = await ai.models.generateContent({
      model: 'gemini-3.8-flash',
      contents: prompt,
      config: {
        systemInstruction: 'Bạn là một Giáo viên Tiếng Anh Lớp 7 thân thiện, chuẩn mực và chuẩn sư phạm Việt Nam. Trả về đúng định dạng JSON 15 câu bao gồm Hiện tại đơn, Quá khứ đơn và Hiện tại tiếp diễn.',
        responseMimeType: 'application/json',
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            title: { type: Type.STRING },
            questions: {
              type: Type.ARRAY,
              items: {
                type: Type.OBJECT,
                properties: {
                  id: { type: Type.INTEGER },
                  sentenceWithBlank: { type: Type.STRING },
                  verbPrompt: { type: Type.STRING },
                  tense: { type: Type.STRING, description: 'Present Simple, Past Simple hoặc Present Continuous' },
                  form: { type: Type.STRING, description: 'Khẳng định (+), Phủ định (-), hoặc Nghi vấn (?)' },
                  verbType: { type: Type.STRING, description: 'Động từ to be hoặc Động từ thường' },
                  correctAnswers: {
                    type: Type.ARRAY,
                    items: { type: Type.STRING }
                  },
                  explanation: {
                    type: Type.OBJECT,
                    properties: {
                      signalWord: { type: Type.STRING },
                      structure: { type: Type.STRING },
                      translation: { type: Type.STRING }
                    },
                    required: ['signalWord', 'structure', 'translation']
                  }
                },
                required: ['id', 'sentenceWithBlank', 'verbPrompt', 'tense', 'form', 'verbType', 'correctAnswers', 'explanation']
              }
            }
          },
          required: ['title', 'questions']
        }
      }
    });

    const text = response.text || '{}';
    const parsed = JSON.parse(text);
    return res.json(parsed);
  } catch (error) {
    console.error('Lỗi khi tạo đề với Gemini API:', error);
    // Trả về lỗi để client kích hoạt fallback mượt mà
    return res.status(500).json({
      error: 'Không thể tạo đề tự động lúc này. Hãy sử dụng bộ đề chọn lọc tích hợp sẵn.',
      details: error instanceof Error ? error.message : String(error)
    });
  }
});

// API: Q&A with Friendly English Teacher
app.post('/api/ask-teacher', async (req: Request, res: Response) => {
  try {
    const { question, context } = req.body || {};
    if (!question) {
      return res.status(400).json({ error: 'Thiếu câu hỏi của học sinh' });
    }

    const teacherPrompt = `Bạn là Thầy Thomas - một Giáo viên Tiếng Anh Lớp 7 rất ân cần, nhiệt tình, dễ hiểu và truyền cảm hứng.
Học sinh Lớp 7 đang hỏi bạn thắc mắc về Ngữ pháp (Thì Hiện tại đơn, Thì Quá khứ đơn, Động từ to be, Động từ bất quy tắc):

Câu hỏi của học sinh: "${question}"
${context ? `Ngữ cảnh bài tập học sinh đang làm: "${context}"` : ''}

Hãy trả lời học sinh với phong cách:
- Xưng hô thân mật: "Thầy" và "em" (hoặc "các em").
- Giải thích thật ngắn gọn, rõ ràng, có ví dụ minh họa sinh động phù hợp với tư duy học sinh lớp 7.
- Chỉ ra các "mẹo nhớ" nếu có (ví dụ: mẹo phát âm -ed, mẹo nhớ dấu hiệu thì, mẹo phân biệt khi nào dùng did/didn't vs was/were).
- Kết thúc bằng một lời động viên vui vẻ!`;

    const response = await ai.models.generateContent({
      model: 'gemini-3.8-flash',
      contents: teacherPrompt,
    });

    return res.json({ answer: response.text });
  } catch (error) {
    console.error('Lỗi khi hỏi giáo viên:', error);
    return res.status(500).json({
      error: 'Thầy đang bận một chút, em hãy thử hỏi lại sau giây lát nhé!',
      details: error instanceof Error ? error.message : String(error)
    });
  }
});

// Serve frontend in dev or prod
async function startServer() {
  if (process.env.NODE_ENV !== 'production') {
    const { createServer: createViteServer } = await import('vite');
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    app.use(express.static(path.resolve(__dirname, 'dist')));
    app.get('*', (_req: Request, res: Response) => {
      res.sendFile(path.resolve(__dirname, 'dist/index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server đang chạy trên http://localhost:${PORT}`);
  });
}

startServer();
