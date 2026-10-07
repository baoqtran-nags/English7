import React, { useState, useRef, useEffect } from 'react';
import { Send, Sparkles, Loader2, Bot, User, HelpCircle, MessageSquare } from 'lucide-react';
import { TEACHER_THOMAS_AVATAR } from '../constants/assets.ts';

interface ChatMessage {
  id: string;
  sender: 'student' | 'teacher';
  text: string;
  timestamp: string;
}

interface TeacherChatSectionProps {
  initialQuestion?: string;
}

export const TeacherChatSection: React.FC<TeacherChatSectionProps> = ({ initialQuestion }) => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'welcome',
      sender: 'teacher',
      text: 'Chào em! Thầy là Thầy Thomas đây. Em đang gặp khó khăn ở câu bài tập nào, hay có thắc mắc gì về thì Hiện tại đơn, Quá khứ đơn và 100 Động từ bất quy tắc không? Hãy nhắn cho thầy biết nhé, thầy sẽ giải thích thật dễ hiểu cho em ngay!',
      timestamp: 'Vừa xong'
    }
  ]);
  const [inputText, setInputText] = useState<string>(initialQuestion || '');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const chatBottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (initialQuestion) {
      setInputText(initialQuestion);
    }
  }, [initialQuestion]);

  useEffect(() => {
    chatBottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSendMessage = async (textToSend?: string) => {
    const question = (textToSend || inputText).trim();
    if (!question || isLoading) return;

    const userMsg: ChatMessage = {
      id: Date.now().toString(),
      sender: 'student',
      text: question,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputText('');
    setIsLoading(true);

    try {
      const response = await fetch('/api/ask-teacher', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ question })
      });

      if (!response.ok) {
        throw new Error('Lỗi kết nối với Thầy Thomas');
      }

      const data = await response.json();
      const teacherMsg: ChatMessage = {
        id: (Date.now() + 1).toString(),
        sender: 'teacher',
        text: data.answer || 'Thầy Thomas đã nhận được câu hỏi. Em hãy đọc lại kỹ đề bài và lưu ý các dấu hiệu nhận biết nhé!',
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setMessages((prev) => [...prev, teacherMsg]);
    } catch (error) {
      // Friendly fallback teacher answer
      const fallbackMsg: ChatMessage = {
        id: (Date.now() + 1).toString(),
        sender: 'teacher',
        text: 'Cảm ơn câu hỏi của em nhé! Về ngữ pháp Lớp 7, em hãy luôn nhớ:\n1. Nhìn dấu hiệu nhận biết thời gian trước tiên (yesterday, last, ago -> Quá khứ đơn; always, usually, every day -> Hiện tại đơn).\n2. Khi câu đã mượn trợ động từ "didn\'t" hoặc "doesn\'t", động từ chính BẮT BUỘC phải trở về dạng nguyên mẫu (V-inf) em nhé!',
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setMessages((prev) => [...prev, fallbackMsg]);
    } finally {
      setIsLoading(false);
    }
  };

  const sampleQuestions = [
    'Thầy ơi, khi nào dùng did/didn\'t và khi nào dùng was/were?',
    'Thầy chỉ em mẹo nhớ khi nào thêm s và khi nào thêm es với ạ!',
    'Mẹo nhớ quy tắc phát âm đuôi -ed (/t/, /d/, /ɪd/)?',
    'Tại sao nói "She didn\'t went to school" lại bị sai ạ?'
  ];

  return (
    <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-slate-200 space-y-6">
      {/* Top Banner */}
      <div className="flex items-center gap-4 pb-4 border-b border-slate-100">
        <div className="w-14 h-14 rounded-2xl overflow-hidden shadow-md shadow-indigo-100 border border-slate-200 shrink-0">
          <img 
            src={TEACHER_THOMAS_AVATAR} 
            alt="Thầy Thomas - Giáo viên Tiếng Anh Lớp 7 trẻ trung" 
            className="w-full h-full object-cover object-top" 
          />
        </div>
        <div>
          <div className="flex items-center gap-2">
            <h3 className="font-heading font-extrabold text-xl text-slate-900">
              Phòng Hỏi Đáp Với Thầy Thomas
            </h3>
            <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[11px] font-bold bg-emerald-100 text-emerald-800">
              Đang trực tuyến
            </span>
          </div>
          <p className="text-xs text-slate-500 mt-0.5">
            Trợ lý giáo viên Tiếng Anh Lớp 7 AI — Trẻ trung, nhiệt tình, giải thích cặn kẽ và truyền cảm hứng
          </p>
        </div>
      </div>

      {/* Suggested Questions */}
      <div className="space-y-1.5">
        <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
          Gợi ý câu hỏi thường gặp:
        </span>
        <div className="flex flex-wrap gap-2">
          {sampleQuestions.map((q, idx) => (
            <button
              key={idx}
              onClick={() => handleSendMessage(q)}
              className="text-xs font-semibold px-3 py-1.5 rounded-xl bg-slate-100 hover:bg-indigo-50 hover:text-indigo-700 text-slate-700 transition-colors border border-slate-200/80 cursor-pointer text-left"
            >
              💬 {q}
            </button>
          ))}
        </div>
      </div>

      {/* Chat Messages Log */}
      <div className="h-96 overflow-y-auto space-y-4 p-4 rounded-2xl bg-slate-50/70 border border-slate-200/70">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`flex items-start gap-3 ${
              msg.sender === 'student' ? 'flex-row-reverse' : ''
            }`}
          >
            {msg.sender === 'student' ? (
              <div className="w-8 h-8 rounded-full flex items-center justify-center text-xs shrink-0 shadow-xs bg-indigo-600 text-white font-bold">
                Em
              </div>
            ) : (
              <img 
                src={TEACHER_THOMAS_AVATAR} 
                alt="Thầy Thomas" 
                className="w-8 h-8 rounded-full object-cover shrink-0 shadow-xs border border-indigo-200" 
              />
            )}

            <div className={`max-w-[85%] rounded-2xl px-4 py-3 text-xs sm:text-sm leading-relaxed whitespace-pre-line shadow-xs ${
              msg.sender === 'student'
                ? 'bg-indigo-600 text-white font-medium rounded-tr-none'
                : 'bg-white text-slate-800 border border-slate-200 rounded-tl-none'
            }`}>
              {msg.text}
              <div className={`text-[10px] mt-1.5 ${
                msg.sender === 'student' ? 'text-indigo-200 text-right' : 'text-slate-400'
              }`}>
                {msg.timestamp}
              </div>
            </div>
          </div>
        ))}

        {isLoading && (
          <div className="flex items-start gap-3">
            <img 
              src={TEACHER_THOMAS_AVATAR} 
              alt="Thầy Thomas" 
              className="w-8 h-8 rounded-full object-cover shrink-0 border border-indigo-200" 
            />
            <div className="bg-white text-slate-600 border border-slate-200 rounded-2xl rounded-tl-none px-4 py-3 text-xs sm:text-sm flex items-center gap-2">
              <Loader2 className="w-4 h-4 animate-spin text-indigo-600" />
              <span>Thầy Thomas đang gõ câu trả lời cho em...</span>
            </div>
          </div>
        )}
        <div ref={chatBottomRef} />
      </div>

      {/* Chat Input */}
      <div className="flex items-center gap-2">
        <input
          type="text"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
          placeholder="Nhập thắc mắc của em (ví dụ: Thầy giải thích thì Hiện tại đơn giúp em với)..."
          className="grow px-4 py-3 rounded-2xl bg-slate-50 border border-slate-300 text-xs sm:text-sm focus:bg-white focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200/50 outline-hidden"
        />
        <button
          onClick={() => handleSendMessage()}
          disabled={!inputText.trim() || isLoading}
          className="px-5 py-3 rounded-2xl bg-indigo-600 hover:bg-indigo-700 disabled:opacity-50 text-white font-bold text-sm shadow-md shadow-indigo-200 transition-transform active:scale-95 flex items-center gap-1.5 cursor-pointer shrink-0"
        >
          <Send className="w-4 h-4" />
          <span className="hidden sm:inline">Gửi câu hỏi</span>
        </button>
      </div>
    </div>
  );
};
