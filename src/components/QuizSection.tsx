import React, { useState } from 'react';
import { 
  CheckCircle2, 
  XCircle, 
  RotateCcw, 
  Sparkles, 
  HelpCircle, 
  MessageCircle, 
  Award, 
  BookOpen, 
  Send,
  Loader2,
  ChevronDown,
  RefreshCw,
  Info
} from 'lucide-react';
import { GrammarQuestion, UserAnswerRecord, EyeCareTheme } from '../types.ts';
import { CURATED_QUESTION_SETS, getRandomSet } from '../data/grammarBank.ts';
import { TEACHER_THOMAS_AVATAR } from '../constants/assets.ts';

interface QuizSectionProps {
  onAskTeacherWithContext?: (questionContext: string) => void;
  eyeCareTheme?: EyeCareTheme;
}

export const QuizSection: React.FC<QuizSectionProps> = ({ 
  onAskTeacherWithContext,
  eyeCareTheme = 'warm'
}) => {
  // Current questions
  const [questions, setQuestions] = useState<GrammarQuestion[]>(() => getRandomSet());
  const [currentSetTitle, setCurrentSetTitle] = useState<string>("Bộ Đề Ôn Tập 15 Câu Chuẩn Lớp 7");

  // User input answers map: { [questionId]: string }
  const [userInputs, setUserInputs] = useState<Record<number, string>>({});
  
  // Quiz state
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [isGeneratingAi, setIsGeneratingAi] = useState<boolean>(false);
  const [generationError, setGenerationError] = useState<string | null>(null);
  const [filterWrongOnly, setFilterWrongOnly] = useState<boolean>(false);
  const [showIncompleteModal, setShowIncompleteModal] = useState<boolean>(false);

  // Normalize answer helper (handles didn't vs did not, wasn't vs was not, etc.)
  const normalize = (str: string): string => {
    return str
      .trim()
      .toLowerCase()
      .replace(/[’']/g, "'")
      .replace(/\s+/g, ' ');
  };

  const checkAnswerMatch = (input: string, correctList: string[]): boolean => {
    const cleanInput = normalize(input);
    if (!cleanInput) return false;

    // Direct check
    for (const ans of correctList) {
      const cleanAns = normalize(ans);
      if (cleanInput === cleanAns) return true;
    }

    // Expanded contraction equivalents check
    const expansions: Record<string, string> = {
      "didn't": "did not",
      "did not": "didn't",
      "wasn't": "was not",
      "was not": "wasn't",
      "weren't": "were not",
      "were not": "weren't",
      "doesn't": "does not",
      "does not": "doesn't",
      "don't": "do not",
      "do not": "don't",
      "isn't": "is not",
      "is not": "isn't",
      "aren't": "are not",
      "are not": "aren't"
    };

    for (const [short, full] of Object.entries(expansions)) {
      const replacedInput = cleanInput.replace(short, full);
      for (const ans of correctList) {
        const cleanAns = normalize(ans);
        if (replacedInput === cleanAns || cleanInput === cleanAns.replace(short, full)) {
          return true;
        }
      }
    }

    return false;
  };

  // Evaluate results
  const results: UserAnswerRecord[] = questions.map((q) => {
    const input = userInputs[q.id] || '';
    const isCorrect = checkAnswerMatch(input, q.correctAnswers);
    return {
      questionId: q.id,
      userAnswer: input,
      isCorrect,
      correctAnswer: q.correctAnswers[0],
      explanation: q.explanation
    };
  });

  const correctCount = results.filter((r) => r.isCorrect).length;
  const answeredCount = Object.values(userInputs).filter((v) => v.trim().length > 0).length;
  const progressPercent = Math.round((answeredCount / questions.length) * 100);

  // Encouraging feedback based on score
  const getTeacherFeedback = (score: number, total: number) => {
    if (score === total) {
      return {
        badge: "🌟 Xuất sắc tuyệt đối (10 Điểm)!",
        message: "Thầy Thomas xin chúc mừng em! Em đã nắm rất vững cả 3 thì Hiện tại đơn, Quá khứ đơn và Hiện tại tiếp diễn rồi đấy! Cứ đà này thì bài kiểm tra trên lớp chắc chắn sẽ đạt điểm 10 trọn vẹn!",
        color: "bg-emerald-50 text-emerald-800 border-emerald-200"
      };
    }
    if (score >= 12) {
      return {
        badge: "🎉 Rất giỏi (Giỏi - Xuất sắc)!",
        message: "Em làm bài rất tốt! Em chỉ nhầm lẫn một vài chi tiết nhỏ (như dạng bất quy tắc hoặc gấp đôi phụ âm khi thêm -ing). Hãy đọc kỹ phần giải thích bên dưới của thầy để khắc sâu bài học nhé!",
        color: "bg-blue-50 text-blue-800 border-blue-200"
      };
    }
    if (score >= 8) {
      return {
        badge: "💪 Khá tốt - Cố gắng thêm chút nữa nhé!",
        message: "Em đã nhớ được cấu trúc cơ bản rồi. Hãy chú ý hơn vào các 'dấu hiệu nhận biết' (yesterday, now, look, usually...) và xem lại bảng động từ bất quy tắc nhé!",
        color: "bg-amber-50 text-amber-800 border-amber-200"
      };
    }
    return {
      badge: "🌱 Đừng nản lòng, chúng ta cùng luyện lại nào!",
      message: "Tiếng Anh cần sự kiên nhẫn luyện tập mỗi ngày. Em hãy đọc kỹ từng lời giải thích và dịch nghĩa của thầy bên dưới, sau đó bấm 'Làm lại' để ghi điểm cao hơn nhé!",
      color: "bg-rose-50 text-rose-800 border-rose-200"
    };
  };

  const handleInputChange = (id: number, value: string) => {
    setUserInputs((prev) => ({
      ...prev,
      [id]: value
    }));
  };

  const executeSubmission = () => {
    setIsSubmitted(true);
    setShowIncompleteModal(false);
    window.scrollTo({ top: 380, behavior: 'smooth' });
  };

  const handleSubmit = () => {
    if (answeredCount < questions.length) {
      setShowIncompleteModal(true);
      return;
    }
    executeSubmission();
  };

  const handleResetQuiz = () => {
    setUserInputs({});
    setIsSubmitted(false);
    setFilterWrongOnly(false);
  };

  const handleRetryWrongQuestions = () => {
    const wrongIds = results.filter(r => !r.isCorrect).map(r => r.questionId);
    const newInputs = { ...userInputs };
    wrongIds.forEach(id => {
      delete newInputs[id];
    });
    setUserInputs(newInputs);
    setIsSubmitted(false);
    setFilterWrongOnly(true);
  };

  // Generate new quiz with Gemini AI
  const handleGenerateAiQuiz = async () => {
    setIsGeneratingAi(true);
    setGenerationError(null);
    try {
      const response = await fetch('/api/generate-quiz', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          topic: 'Hoạt động trường học, kỳ nghỉ, gia đình, sở thích Lớp 7',
          focus: 'Cân bằng cả 3 thì: Hiện tại đơn, Quá khứ đơn và Hiện tại tiếp diễn (khẳng định, phủ định, nghi vấn)'
        })
      });

      if (!response.ok) {
        throw new Error('Không thể kết nối đến máy chủ AI');
      }

      const data = await response.json();
      if (data.questions && Array.isArray(data.questions) && data.questions.length === 15) {
        setQuestions(data.questions);
        setCurrentSetTitle(data.title || "Bộ Đề Mới 15 Câu do AI Tạo Ngẫu Nhiên");
        setUserInputs({});
        setIsSubmitted(false);
        setFilterWrongOnly(false);
      } else {
        throw new Error('Dữ liệu bộ đề không đủ 15 câu chuẩn');
      }
    } catch (err) {
      console.warn('Fallback to curated set due to error:', err);
      // Fallback seamlessly to a curated random set
      const fallbackQuestions = getRandomSet();
      setQuestions(fallbackQuestions);
      setCurrentSetTitle("Bộ Đề Luyện Tập Lớp 7 (Bộ Đề Chọn Lọc Chuẩn)");
      setUserInputs({});
      setIsSubmitted(false);
      setFilterWrongOnly(false);
      setGenerationError("Đã tạo đề mới từ ngân hàng câu hỏi chuẩn Lớp 7!");
    } finally {
      setIsGeneratingAi(false);
    }
  };

  // Switch between curated preset sets
  const handleSelectCuratedSet = (setKey: string) => {
    const targetSet = CURATED_QUESTION_SETS[setKey];
    if (targetSet) {
      setQuestions(targetSet.questions);
      setCurrentSetTitle(targetSet.title);
      setUserInputs({});
      setIsSubmitted(false);
      setFilterWrongOnly(false);
    }
  };

  return (
    <div className="space-y-6">
      {/* Quiz Toolbar & Header */}
      <div className="bg-white rounded-2xl p-5 sm:p-6 shadow-sm border border-slate-200/80 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 mb-1.5">
            <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-indigo-100 text-indigo-700">
              Đề Ôn Tập 15 Câu
            </span>
            <span className="text-xs text-slate-500">
              Hiện tại đơn, Quá khứ đơn & Hiện tại tiếp diễn
            </span>
          </div>
          <h2 className="font-heading font-bold text-xl sm:text-2xl text-slate-900">
            {currentSetTitle}
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 mt-1">
            Điền dạng đúng của động từ trong ngoặc vào chỗ trống <span className="font-mono font-bold bg-slate-100 px-1 py-0.5 rounded text-indigo-600">______</span>
          </p>
        </div>

        {/* Action buttons */}
        <div className="flex flex-wrap items-center gap-2.5">
          {/* Preset Selector */}
          <div className="relative inline-block">
            <select
              aria-label="Chọn bộ đề ôn tập"
              onChange={(e) => handleSelectCuratedSet(e.target.value)}
              className="appearance-none bg-slate-100 hover:bg-slate-200/70 text-slate-700 text-xs sm:text-sm font-semibold py-2.5 pl-3.5 pr-8 rounded-xl border border-slate-200 cursor-pointer focus:outline-hidden focus:ring-2 focus:ring-indigo-500"
            >
              <option value="set1">Đề số 1 (Tổng hợp 3 thì)</option>
              <option value="set2">Đề số 2 (Hoạt động & Hiện tượng)</option>
              <option value="set3">Đề số 3 (Chuyên sâu Hiện tại tiếp diễn)</option>
            </select>
            <ChevronDown className="w-4 h-4 text-slate-500 absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
          </div>

          {/* AI Generator Button */}
          <button
            onClick={handleGenerateAiQuiz}
            disabled={isGeneratingAi}
            className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-indigo-600 to-sky-600 hover:from-indigo-700 hover:to-sky-700 text-white text-xs sm:text-sm font-semibold shadow-md shadow-indigo-200 transition-all active:scale-95 disabled:opacity-50 cursor-pointer"
          >
            {isGeneratingAi ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                <span>Thầy Thomas đang tạo đề...</span>
              </>
            ) : (
              <>
                <Sparkles className="w-4 h-4 text-amber-300" />
                <span>Tạo Đề Mới (AI Ngẫu Nhiên)</span>
              </>
            )}
          </button>
        </div>
      </div>

      {generationError && (
        <div className="p-3 bg-amber-50 border border-amber-200 rounded-xl text-amber-800 text-xs flex items-center gap-2">
          <Info className="w-4 h-4 shrink-0 text-amber-600" />
          <span>{generationError}</span>
        </div>
      )}

      {/* Progress Bar & Status (Before Submit) */}
      {!isSubmitted && (
        <div className="bg-white rounded-2xl p-4 sm:p-5 shadow-xs border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="w-full sm:w-2/3 space-y-1.5">
            <div className="flex justify-between text-xs font-semibold text-slate-600">
              <span>Tiến độ làm bài:</span>
              <span className="text-indigo-600 font-bold">{answeredCount} / {questions.length} câu ({progressPercent}%)</span>
            </div>
            <div className="w-full h-2.5 bg-slate-100 rounded-full overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-indigo-500 to-sky-500 rounded-full transition-all duration-300"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
          </div>

          <button
            onClick={handleSubmit}
            className="w-full sm:w-auto px-6 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-sm font-bold shadow-md shadow-emerald-200 transition-transform active:scale-95 flex items-center justify-center gap-2 cursor-pointer"
          >
            <Send className="w-4 h-4" />
            <span>Nộp bài & Chấm điểm</span>
          </button>
        </div>
      )}

      {/* Evaluation Result Summary Card (After Submit) */}
      {isSubmitted && (
        <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-md border border-slate-200/90 relative overflow-hidden">
          {/* Top highlight bar */}
          <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-indigo-500 via-sky-500 to-emerald-500" />

          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-6 border-b border-slate-100">
            {/* Score Big Display */}
            <div className="flex items-center gap-4">
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-tr from-indigo-600 to-sky-500 text-white flex flex-col items-center justify-center shadow-lg shadow-indigo-200 shrink-0">
                <span className="text-2xl sm:text-3xl font-black font-heading leading-none">
                  {correctCount}
                </span>
                <span className="text-[11px] font-semibold opacity-90">
                  / {questions.length} câu
                </span>
              </div>
              <div>
                <span className="text-xs uppercase font-bold tracking-wider text-slate-400">
                  Kết Quả Chấm Điểm
                </span>
                <div className="flex items-center gap-2 mt-0.5">
                  <h3 className="font-heading font-extrabold text-2xl text-slate-900">
                    {Math.round((correctCount / questions.length) * 100) / 10} / 10 Điểm
                  </h3>
                  <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-indigo-50 text-indigo-700 border border-indigo-200">
                    Đúng {Math.round((correctCount / questions.length) * 100)}%
                  </span>
                </div>
                <p className="text-xs text-slate-500 mt-1">
                  Đã làm đúng: <strong className="text-emerald-600">{correctCount}</strong> câu | Chưa đúng: <strong className="text-rose-600">{questions.length - correctCount}</strong> câu
                </p>
              </div>
            </div>

            {/* Actions for Retrying */}
            <div className="flex flex-wrap items-center gap-2">
              <button
                onClick={handleResetQuiz}
                className="flex items-center gap-1.5 px-4 py-2.5 rounded-xl border border-slate-300 hover:bg-slate-50 text-slate-700 text-xs sm:text-sm font-semibold transition-all cursor-pointer"
              >
                <RotateCcw className="w-4 h-4 text-slate-500" />
                <span>Làm lại từ đầu</span>
              </button>

              {correctCount < questions.length && (
                <button
                  onClick={handleRetryWrongQuestions}
                  className="flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-amber-50 hover:bg-amber-100 text-amber-800 border border-amber-300 text-xs sm:text-sm font-semibold transition-all cursor-pointer"
                >
                  <RefreshCw className="w-4 h-4 text-amber-600" />
                  <span>Chỉ làm lại câu sai ({questions.length - correctCount} câu)</span>
                </button>
              )}

              <button
                onClick={handleGenerateAiQuiz}
                className="flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs sm:text-sm font-bold shadow-md shadow-indigo-200 transition-all cursor-pointer"
              >
                <Sparkles className="w-4 h-4 text-amber-300" />
                <span>Tạo Đề 15 Câu Mới</span>
              </button>
            </div>
          </div>

          {/* Teacher's encouraging message */}
          {(() => {
            const feedback = getTeacherFeedback(correctCount, questions.length);
            return (
              <div className={`mt-6 p-5 rounded-2xl border ${feedback.color} flex items-start gap-3.5`}>
                <img 
                  src={TEACHER_THOMAS_AVATAR} 
                  alt="Thầy Thomas" 
                  className="w-12 h-12 rounded-2xl object-cover shrink-0 shadow-sm border border-black/10" 
                />
                <div className="space-y-1">
                  <div className="font-heading font-bold text-sm sm:text-base">
                    Lời nhắn của Thầy Thomas: {feedback.badge}
                  </div>
                  <p className="text-xs sm:text-sm leading-relaxed opacity-95">
                    {feedback.message}
                  </p>
                </div>
              </div>
            );
          })()}
        </div>
      )}

      {/* 15 Questions List */}
      <div className="space-y-4">
        {questions.map((question, index) => {
          const userAns = userInputs[question.id] || '';
          const result = results.find(r => r.questionId === question.id);
          const isCorrect = result?.isCorrect ?? false;

          // If filtering wrong only, hide correct ones
          if (filterWrongOnly && isSubmitted && isCorrect) {
            return null;
          }

          return (
            <div
              key={question.id}
              className={`rounded-2xl p-5 sm:p-6 transition-all duration-200 border ${
                isSubmitted
                  ? isCorrect
                    ? 'bg-emerald-50/40 border-emerald-200 shadow-xs'
                    : 'bg-rose-50/40 border-rose-200 shadow-xs'
                  : 'bg-white border-slate-200/80 shadow-xs hover:border-indigo-300'
              }`}
            >
              {/* Question Header & Meta Badges */}
              <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                <div className="flex items-center gap-2">
                  <span className={`w-7 h-7 rounded-xl font-heading font-bold text-xs flex items-center justify-center ${
                    isSubmitted
                      ? isCorrect
                        ? 'bg-emerald-600 text-white'
                        : 'bg-rose-600 text-white'
                      : 'bg-indigo-100 text-indigo-700'
                  }`}>
                    {index + 1}
                  </span>
                  <span className="text-xs font-semibold text-slate-500">
                    Câu {index + 1} / 15
                  </span>
                </div>

                {/* Grammar tags */}
                <div className="flex flex-wrap items-center gap-1.5 text-[11px] font-semibold">
                  <span className="px-2 py-0.5 rounded-md bg-slate-100 text-slate-600">
                    {question.tense}
                  </span>
                  <span className="px-2 py-0.5 rounded-md bg-indigo-50 text-indigo-700">
                    {question.form}
                  </span>
                  <span className="px-2 py-0.5 rounded-md bg-sky-50 text-sky-700">
                    {question.verbType}
                  </span>
                </div>
              </div>

              {/* The Sentence with Blank */}
              <div className="text-base sm:text-lg font-medium text-slate-800 leading-relaxed mb-4">
                {/* Render sentence with styled blank */}
                {question.sentenceWithBlank.split('______').map((part, i, arr) => (
                  <React.Fragment key={i}>
                    <span>{part}</span>
                    {i < arr.length - 1 && (
                      <span className="inline-block mx-1 font-mono font-bold text-indigo-600 bg-indigo-50/80 px-2.5 py-0.5 rounded-lg border border-indigo-200/80">
                        {isSubmitted ? (userAns || '...') : '______'}
                      </span>
                    )}
                  </React.Fragment>
                ))}
              </div>

              {/* Input Area (Before or during submission) */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <div className="relative grow">
                  <input
                    type="text"
                    disabled={isSubmitted}
                    value={userAns}
                    onChange={(e) => handleInputChange(question.id, e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' && !isSubmitted) {
                        // Focus next input if available
                        const nextInput = document.querySelector(`input[data-question-idx="${index + 1}"]`) as HTMLInputElement;
                        if (nextInput) nextInput.focus();
                      }
                    }}
                    data-question-idx={index}
                    placeholder={`Nhập dạng đúng của (${question.verbPrompt})...`}
                    className={`w-full px-4 py-2.5 rounded-xl text-sm font-medium transition-all ${
                      isSubmitted
                        ? isCorrect
                          ? 'bg-emerald-100/50 border border-emerald-300 text-emerald-900 font-semibold'
                          : 'bg-rose-100/50 border border-rose-300 text-rose-900 font-semibold'
                        : 'bg-slate-50 border border-slate-300 focus:bg-white focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200/50 outline-hidden'
                    }`}
                  />
                </div>

                {/* Status indicator on submit */}
                {isSubmitted && (
                  <div className="flex items-center gap-2 shrink-0">
                    {isCorrect ? (
                      <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-emerald-100 text-emerald-800 text-xs font-bold border border-emerald-300">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                        <span>✅ Đúng</span>
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-rose-100 text-rose-800 text-xs font-bold border border-rose-300">
                        <XCircle className="w-4 h-4 text-rose-600" />
                        <span>❌ Chưa chính xác</span>
                      </span>
                    )}
                  </div>
                )}
              </div>

              {/* Detailed Feedback & Grammar Breakdown (Visible after submission) */}
              {isSubmitted && (
                <div className="mt-4 pt-4 border-t border-slate-200/70 space-y-3">
                  {/* Correct answer pill */}
                  <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm">
                    <span className="font-semibold text-slate-600">Đáp án chuẩn:</span>
                    <span className="font-mono font-bold text-emerald-700 bg-emerald-100/80 px-2.5 py-0.5 rounded-lg border border-emerald-200">
                      {question.correctAnswers.join(' / ')}
                    </span>
                    {!isCorrect && userAns && (
                      <span className="text-xs text-rose-600 font-medium">
                        (Em đã điền: <span className="font-mono line-through">{userAns}</span>)
                      </span>
                    )}
                  </div>

                  {/* Grammar Explanation Box */}
                  <div className="bg-white/80 rounded-xl p-4 border border-slate-200/80 space-y-2 text-xs sm:text-sm">
                    {/* Signal Word */}
                    <div className="flex items-start gap-2 text-slate-700">
                      <span className="font-bold text-indigo-700 shrink-0">🔍 Dấu hiệu nhận biết:</span>
                      <span>{question.explanation.signalWord}</span>
                    </div>

                    {/* Structure */}
                    <div className="flex items-start gap-2 text-slate-700">
                      <span className="font-bold text-indigo-700 shrink-0">📐 Cấu trúc câu:</span>
                      <span>{question.explanation.structure}</span>
                    </div>

                    {/* Vietnamese Translation */}
                    <div className="flex items-start gap-2 text-slate-700">
                      <span className="font-bold text-amber-700 shrink-0">🇻🇳 Dịch nghĩa câu:</span>
                      <span className="italic text-slate-600">{question.explanation.translation}</span>
                    </div>
                  </div>

                  {/* Button to ask Thầy Thomas for further explanation if student is confused */}
                  {onAskTeacherWithContext && (
                    <div className="flex justify-end pt-1">
                      <button
                        onClick={() => onAskTeacherWithContext(`Thầy giải thích kỹ hơn giúp em câu ${index + 1}: "${question.sentenceWithBlank}" với từ gợi ý (${question.verbPrompt}) được không ạ?`)}
                        className="inline-flex items-center gap-1.5 text-xs font-semibold text-indigo-600 hover:text-indigo-800 hover:underline cursor-pointer"
                      >
                        <MessageCircle className="w-3.5 h-3.5" />
                        <span>Nhờ Thầy Thomas giải thích thêm câu này</span>
                      </button>
                    </div>
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Floating Bottom Action when not submitted yet */}
      {!isSubmitted && answeredCount > 0 && (
        <div className="sticky bottom-4 z-30 bg-white/95 backdrop-blur-md rounded-2xl p-4 shadow-xl border border-indigo-200 flex items-center justify-between gap-4">
          <div className="text-xs sm:text-sm font-semibold text-slate-700">
            Em đã làm xong <span className="text-indigo-600 font-bold">{answeredCount}/{questions.length}</span> câu
          </div>
          <button
            onClick={handleSubmit}
            className="px-6 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-sm font-bold shadow-md shadow-emerald-200 transition-all active:scale-95 cursor-pointer flex items-center gap-2"
          >
            <Send className="w-4 h-4" />
            <span>Nộp bài & Xem lời giải chi tiết</span>
          </button>
        </div>
      )}

      {/* Incomplete Submission Confirmation Modal (Replaces window.confirm) */}
      {showIncompleteModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-xs animate-in fade-in duration-200">
          <div className="bg-white rounded-3xl p-6 sm:p-7 max-w-md w-full shadow-2xl border border-slate-100 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-2xl bg-amber-100 text-amber-600 flex items-center justify-center shrink-0">
                <HelpCircle className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-heading font-bold text-lg text-slate-900">
                  Chưa làm hết các câu hỏi
                </h3>
                <p className="text-xs text-slate-500">
                  Em mới hoàn thành <span className="font-bold text-indigo-600">{answeredCount}/{questions.length}</span> câu
                </p>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Còn <strong>{questions.length - answeredCount} câu</strong> em chưa điền đáp án. Em có muốn tiếp tục làm để thử sức, hay nộp bài ngay để xem Thầy Thomas giải thích từng câu?
            </p>

            <div className="flex flex-col sm:flex-row gap-2.5 pt-2">
              <button
                onClick={() => setShowIncompleteModal(false)}
                className="flex-1 px-4 py-2.5 rounded-xl border border-slate-200 text-slate-700 font-semibold text-xs sm:text-sm hover:bg-slate-50 transition-colors cursor-pointer text-center"
              >
                Tiếp tục làm bài
              </button>
              <button
                onClick={executeSubmission}
                className="flex-1 px-4 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs sm:text-sm shadow-md shadow-indigo-200 transition-all active:scale-95 cursor-pointer text-center"
              >
                Nộp bài & Xem giải thích
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
