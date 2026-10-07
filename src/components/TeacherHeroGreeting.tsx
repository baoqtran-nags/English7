import React from 'react';
import { Sparkles, ArrowRight, BookOpen, CheckCircle2, Target, Volume2 } from 'lucide-react';
import { ActiveTab } from '../types.ts';
import { pronounceSingle } from '../utils/speech.ts';
import { TEACHER_THOMAS_AVATAR } from '../constants/assets.ts';

interface TeacherHeroGreetingProps {
  onSelectOption: (tab: ActiveTab) => void;
  onGenerateNewAiTest?: () => void;
}

export const TeacherHeroGreeting: React.FC<TeacherHeroGreetingProps> = ({
  onSelectOption,
}) => {
  const handlePlayVoiceIntro = () => {
    pronounceSingle(
      "Hello everyone! I'm Teacher Thomas, your Grade 7 English teacher. Welcome to our English practice class! Today we will master Present Simple, Past Simple, Present Continuous and the top 100 irregular verbs together. Let's do your best!",
      { rate: 0.9 }
    );
  };

  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-indigo-700 via-indigo-600 to-sky-700 rounded-3xl text-white shadow-xl shadow-indigo-500/15 mb-8 p-6 sm:p-8 lg:p-10 border border-white/10">
      {/* Decorative background glows */}
      <div className="absolute top-0 right-0 -mr-16 -mt-16 w-80 h-80 rounded-full bg-sky-400/20 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 -mb-16 w-60 h-60 rounded-full bg-indigo-400/20 blur-2xl pointer-events-none" />

      <div className="relative z-10">
        {/* Teacher Avatar & Introduction Speech */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5 sm:gap-6 mb-8">
          <div className="relative shrink-0">
            <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-3xl bg-white/10 backdrop-blur-md p-1.5 shadow-xl border border-white/20">
              <div className="w-full h-full rounded-[20px] overflow-hidden shadow-inner bg-slate-800">
                <img 
                  src={TEACHER_THOMAS_AVATAR} 
                  alt="Thầy Thomas - Giáo viên Tiếng Anh Lớp 7 trẻ trung, năng động"
                  className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-300" 
                />
              </div>
            </div>
            <button
              onClick={handlePlayVoiceIntro}
              title="Nghe lời chào của Thầy Thomas bằng tiếng Anh"
              className="absolute -bottom-2 -right-2 p-2 bg-amber-400 hover:bg-amber-300 text-amber-950 rounded-full shadow-lg transition-transform hover:scale-110 active:scale-95 flex items-center justify-center cursor-pointer"
            >
              <Volume2 className="w-4 h-4" />
            </button>
          </div>

          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-white/15 text-indigo-100 backdrop-blur-sm border border-white/20">
              <Sparkles className="w-3.5 h-3.5 text-amber-300" />
              <span>Trợ lý Giáo viên Tiếng Anh Lớp 7 AI Thân Thiện</span>
            </div>
            <h1 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-white leading-tight">
              Chào các em học sinh Lớp 7 thân yêu! 👋
            </h1>
            <p className="text-indigo-100 text-sm sm:text-base max-w-2xl leading-relaxed">
              Thầy là <span className="font-semibold text-amber-200">Thầy Thomas</span> — giáo viên đồng hành cùng các em ôn tập tiếng Anh. 
              Hôm nay thầy đã chuẩn bị sẵn các bài tập vui nhộn và dễ hiểu để giúp các em nắm chắc <span className="underline decoration-amber-300 font-semibold">Hiện tại đơn</span>, <span className="underline decoration-amber-300 font-semibold">Quá khứ đơn</span>, <span className="underline decoration-amber-300 font-semibold">Hiện tại tiếp diễn</span> và <span className="underline decoration-amber-300 font-semibold">100 Động từ bất quy tắc</span>. 
              Em muốn bắt đầu với phần nào trước nhé?
            </p>
          </div>
        </div>

        {/* 3 Main Choice Cards (Exact Prompt Requirement) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-5">
          {/* Choice 1 */}
          <button
            onClick={() => onSelectOption('quiz')}
            className="group relative flex flex-col justify-between p-5 sm:p-6 rounded-2xl bg-white/10 hover:bg-white/18 border border-white/15 hover:border-white/30 backdrop-blur-sm transition-all duration-200 text-left shadow-lg hover:shadow-xl hover:-translate-y-1 cursor-pointer"
          >
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="w-10 h-10 rounded-xl bg-amber-400/90 text-amber-950 flex items-center justify-center font-bold text-lg shadow-sm">
                  📝
                </span>
                <span className="text-[11px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-white/15 text-indigo-100">
                  Lựa chọn 1
                </span>
              </div>
              <h3 className="font-heading font-bold text-lg text-white mb-2 group-hover:text-amber-200 transition-colors">
                Làm bộ đề ngữ pháp 15 câu mới
              </h3>
              <p className="text-xs sm:text-sm text-indigo-100/90 leading-relaxed">
                15 câu chia động từ: <strong>Hiện tại đơn</strong>, <strong>Quá khứ đơn</strong> & <strong>Hiện tại tiếp diễn</strong> (3 thể +, -, ?). Có chấm điểm và giải thích ngữ pháp chi tiết từng câu!
              </p>
            </div>
            <div className="mt-5 flex items-center text-xs font-semibold text-amber-200 group-hover:text-white transition-colors">
              <span>Bắt đầu làm bài ngay</span>
              <ArrowRight className="w-4 h-4 ml-1.5 group-hover:translate-x-1 transition-transform" />
            </div>
          </button>

          {/* Choice 2 */}
          <button
            onClick={() => onSelectOption('irregular_verbs')}
            className="group relative flex flex-col justify-between p-5 sm:p-6 rounded-2xl bg-white/10 hover:bg-white/18 border border-white/15 hover:border-white/30 backdrop-blur-sm transition-all duration-200 text-left shadow-lg hover:shadow-xl hover:-translate-y-1 cursor-pointer"
          >
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="w-10 h-10 rounded-xl bg-emerald-400/90 text-emerald-950 flex items-center justify-center font-bold text-lg shadow-sm">
                  📖
                </span>
                <span className="text-[11px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-white/15 text-indigo-100">
                  Lựa chọn 2
                </span>
              </div>
              <h3 className="font-heading font-bold text-lg text-white mb-2 group-hover:text-emerald-200 transition-colors">
                Ôn tập 100 Động từ bất quy tắc
              </h3>
              <p className="text-xs sm:text-sm text-indigo-100/90 leading-relaxed">
                Chuẩn tài liệu ZIM Academy. Bảng 4 cột <strong>V1 - V2 - V3 - Nghĩa</strong>, có chức năng <strong>đọc mẫu liên tục 3 cột</strong> kèm phiên âm IPA chuẩn xác.
              </p>
            </div>
            <div className="mt-5 flex items-center text-xs font-semibold text-emerald-200 group-hover:text-white transition-colors">
              <span>Mở bảng 100 từ & Nghe đọc</span>
              <ArrowRight className="w-4 h-4 ml-1.5 group-hover:translate-x-1 transition-transform" />
            </div>
          </button>

          {/* Choice 3 */}
          <button
            onClick={() => onSelectOption('tense_study')}
            className="group relative flex flex-col justify-between p-5 sm:p-6 rounded-2xl bg-white/10 hover:bg-white/18 border border-white/15 hover:border-white/30 backdrop-blur-sm transition-all duration-200 text-left shadow-lg hover:shadow-xl hover:-translate-y-1 cursor-pointer"
          >
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="w-10 h-10 rounded-xl bg-sky-300 text-sky-950 flex items-center justify-center font-bold text-lg shadow-sm">
                  🎯
                </span>
                <span className="text-[11px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-white/15 text-indigo-100">
                  Lựa chọn 3
                </span>
              </div>
              <h3 className="font-heading font-bold text-lg text-white mb-2 group-hover:text-sky-200 transition-colors">
                Luyện tập chuyên sâu các thì
              </h3>
              <p className="text-xs sm:text-sm text-indigo-100/90 leading-relaxed">
                Sổ tay tổng hợp công thức, dấu hiệu nhận biết (yesterday, usually...), mẹo phát âm đuôi <strong>-ed</strong> và phân biệt To be vs Động từ thường.
              </p>
            </div>
            <div className="mt-5 flex items-center text-xs font-semibold text-sky-200 group-hover:text-white transition-colors">
              <span>Xem công thức & Bí quyết</span>
              <ArrowRight className="w-4 h-4 ml-1.5 group-hover:translate-x-1 transition-transform" />
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};
