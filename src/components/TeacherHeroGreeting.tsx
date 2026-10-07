import React from 'react';
import { Sparkles, ArrowRight, BookOpen, CheckCircle2, Target, Volume2, ShieldCheck } from 'lucide-react';
import { ActiveTab, EyeCareTheme } from '../types.ts';
import { pronounceSingle } from '../utils/speech.ts';
import { TEACHER_THOMAS_AVATAR } from '../constants/assets.ts';

interface TeacherHeroGreetingProps {
  onSelectOption: (tab: ActiveTab) => void;
  onGenerateNewAiTest?: () => void;
  eyeCareTheme?: EyeCareTheme;
}

export const TeacherHeroGreeting: React.FC<TeacherHeroGreetingProps> = ({
  onSelectOption,
  eyeCareTheme = 'warm'
}) => {
  const handlePlayVoiceIntro = () => {
    pronounceSingle(
      "Hello everyone! I'm Teacher Thomas, your Grade 7 English teacher. Welcome to our English practice class! Today we will master Present Simple, Past Simple, Present Continuous and the top 100 irregular verbs together. Let's do your best!",
      { rate: 0.9 }
    );
  };

  const heroGradientClass = eyeCareTheme === 'sage'
    ? 'from-[#1B4332] via-[#2D5A46] to-[#17382A] border-emerald-500/20'
    : eyeCareTheme === 'night'
    ? 'from-[#19242E] via-[#233342] to-[#141C24] border-slate-700/50'
    : 'from-[#233950] via-[#2E4862] to-[#1A2D40] border-amber-900/20';

  return (
    <div className={`relative overflow-hidden bg-gradient-to-br ${heroGradientClass} rounded-3xl text-white shadow-lg mb-6 sm:mb-8 p-5 sm:p-7 lg:p-9 border transition-colors duration-300`}>
      {/* Decorative gentle background glows */}
      <div className="absolute top-0 right-0 -mr-16 -mt-16 w-80 h-80 rounded-full bg-amber-400/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 -mb-16 w-60 h-60 rounded-full bg-emerald-400/10 blur-2xl pointer-events-none" />

      <div className="relative z-10">
        {/* Teacher Avatar & Introduction Speech */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 mb-6 sm:mb-8">
          <div className="relative shrink-0">
            <div className="w-18 h-18 sm:w-22 sm:h-22 rounded-3xl bg-white/10 backdrop-blur-md p-1.5 shadow-lg border border-white/20">
              <div className="w-full h-full rounded-[20px] overflow-hidden shadow-inner bg-slate-900">
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
              className="absolute -bottom-1.5 -right-1.5 p-2 bg-amber-400 hover:bg-amber-300 text-amber-950 rounded-full shadow-md transition-transform hover:scale-110 active:scale-95 flex items-center justify-center cursor-pointer min-h-[36px] min-w-[36px]"
            >
              <Volume2 className="w-4 h-4" />
            </button>
          </div>

          <div className="space-y-1.5 sm:space-y-2">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-white/10 text-amber-100 backdrop-blur-sm border border-white/15">
              <ShieldCheck className="w-3.5 h-3.5 text-amber-300" />
              <span>Trợ lý Giáo viên Tiếng Anh Lớp 7 AI Thân Thiện</span>
            </div>
            <h1 className="font-heading text-xl sm:text-2xl lg:text-3xl font-extrabold tracking-tight text-white leading-tight">
              Chào các em học sinh Lớp 7 thân yêu! 👋
            </h1>
            <p className="text-slate-100/90 text-xs sm:text-sm lg:text-base max-w-2xl leading-relaxed">
              Thầy là <span className="font-semibold text-amber-200">Thầy Thomas</span> — giáo viên đồng hành cùng các em ôn tập tiếng Anh. 
              Giao diện đã được tối ưu bảng màu dịu mắt để các em yên tâm học trên điện thoại và laptop mà không lo mỏi mắt. 
              Hôm nay chúng ta sẽ cùng chinh phục <span className="underline decoration-amber-300/80 font-semibold">Hiện tại đơn</span>, <span className="underline decoration-amber-300/80 font-semibold">Quá khứ đơn</span>, <span className="underline decoration-amber-300/80 font-semibold">Hiện tại tiếp diễn</span> và <span className="underline decoration-amber-300/80 font-semibold">100 Động từ bất quy tắc</span> nhé!
            </p>
          </div>
        </div>

        {/* 3 Main Choice Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5 sm:gap-4 lg:gap-5">
          {/* Choice 1 */}
          <button
            onClick={() => onSelectOption('quiz')}
            className="group relative flex flex-col justify-between p-4.5 sm:p-5 rounded-2xl bg-white/8 hover:bg-white/15 border border-white/15 hover:border-amber-300/40 backdrop-blur-sm transition-all duration-200 text-left shadow-sm hover:shadow-md hover:-translate-y-0.5 cursor-pointer min-h-[140px]"
          >
            <div>
              <div className="flex items-center justify-between mb-2.5">
                <span className="w-9 h-9 rounded-xl bg-amber-400/90 text-amber-950 flex items-center justify-center font-bold text-base shadow-xs">
                  📝
                </span>
                <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-white/10 text-amber-100">
                  Lựa chọn 1
                </span>
              </div>
              <h3 className="font-heading font-bold text-base sm:text-lg text-white mb-1.5 group-hover:text-amber-200 transition-colors">
                Làm bộ đề ngữ pháp 15 câu mới
              </h3>
              <p className="text-xs text-slate-200/90 leading-relaxed">
                15 câu chia động từ: <strong>Hiện tại đơn</strong>, <strong>Quá khứ đơn</strong> & <strong>Hiện tại tiếp diễn</strong> (+, -, ?). Có giải thích ngữ pháp chi tiết.
              </p>
            </div>
            <div className="mt-4 flex items-center text-xs font-semibold text-amber-200 group-hover:text-white transition-colors">
              <span>Bắt đầu làm bài</span>
              <ArrowRight className="w-3.5 h-3.5 ml-1.5 group-hover:translate-x-1 transition-transform" />
            </div>
          </button>

          {/* Choice 2 */}
          <button
            onClick={() => onSelectOption('irregular_verbs')}
            className="group relative flex flex-col justify-between p-4.5 sm:p-5 rounded-2xl bg-white/8 hover:bg-white/15 border border-white/15 hover:border-emerald-300/40 backdrop-blur-sm transition-all duration-200 text-left shadow-sm hover:shadow-md hover:-translate-y-0.5 cursor-pointer min-h-[140px]"
          >
            <div>
              <div className="flex items-center justify-between mb-2.5">
                <span className="w-9 h-9 rounded-xl bg-emerald-400/90 text-emerald-950 flex items-center justify-center font-bold text-base shadow-xs">
                  📖
                </span>
                <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-white/10 text-emerald-100">
                  Lựa chọn 2
                </span>
              </div>
              <h3 className="font-heading font-bold text-base sm:text-lg text-white mb-1.5 group-hover:text-emerald-200 transition-colors">
                Ôn tập 100 Động từ bất quy tắc
              </h3>
              <p className="text-xs text-slate-200/90 leading-relaxed">
                Chuẩn ZIM Academy. Bảng 4 cột <strong>V1 - V2 - V3 - Nghĩa</strong>, tra nhanh tức thì, lưu yêu thích & đọc mẫu audio chuẩn.
              </p>
            </div>
            <div className="mt-4 flex items-center text-xs font-semibold text-emerald-200 group-hover:text-white transition-colors">
              <span>Mở bảng 100 từ</span>
              <ArrowRight className="w-3.5 h-3.5 ml-1.5 group-hover:translate-x-1 transition-transform" />
            </div>
          </button>

          {/* Choice 3 */}
          <button
            onClick={() => onSelectOption('tense_study')}
            className="group relative flex flex-col justify-between p-4.5 sm:p-5 rounded-2xl bg-white/8 hover:bg-white/15 border border-white/15 hover:border-sky-300/40 backdrop-blur-sm transition-all duration-200 text-left shadow-sm hover:shadow-md hover:-translate-y-0.5 cursor-pointer min-h-[140px]"
          >
            <div>
              <div className="flex items-center justify-between mb-2.5">
                <span className="w-9 h-9 rounded-xl bg-sky-300 text-sky-950 flex items-center justify-center font-bold text-base shadow-xs">
                  🎯
                </span>
                <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-white/10 text-sky-100">
                  Lựa chọn 3
                </span>
              </div>
              <h3 className="font-heading font-bold text-base sm:text-lg text-white mb-1.5 group-hover:text-sky-200 transition-colors">
                Luyện tập chuyên sâu các thì
              </h3>
              <p className="text-xs text-slate-200/90 leading-relaxed">
                Sổ tay so sánh 3 thì, câu thần chú thêm <strong>-es</strong>, bí kíp phát âm <strong>-ed</strong> và phân biệt To be vs Động từ thường.
              </p>
            </div>
            <div className="mt-4 flex items-center text-xs font-semibold text-sky-200 group-hover:text-white transition-colors">
              <span>Xem công thức & Bí quyết</span>
              <ArrowRight className="w-3.5 h-3.5 ml-1.5 group-hover:translate-x-1 transition-transform" />
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};
