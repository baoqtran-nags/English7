import React, { useState } from 'react';
import { BookOpen, FileCheck, Sparkles, GraduationCap, MessageCircle, Eye, Moon, Sun, Leaf } from 'lucide-react';
import { ActiveTab, EyeCareTheme } from '../types.ts';
import { TEACHER_THOMAS_AVATAR } from '../constants/assets.ts';

interface NavbarProps {
  activeTab: ActiveTab;
  setActiveTab: (tab: ActiveTab) => void;
  eyeCareTheme?: EyeCareTheme;
  setEyeCareTheme?: (theme: EyeCareTheme) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ 
  activeTab, 
  setActiveTab,
  eyeCareTheme = 'warm',
  setEyeCareTheme
}) => {
  const [showThemeMenu, setShowThemeMenu] = useState<boolean>(false);

  const headerBg = eyeCareTheme === 'night'
    ? 'bg-[#1C242D]/95 border-[#2E3946] text-[#E5EAEE]'
    : eyeCareTheme === 'sage'
    ? 'bg-[#FFFFFF]/95 border-[#DFE7E1] text-[#22332B]'
    : 'bg-[#FFFFFF]/95 border-[#EAE3D8] text-[#2C3338]';

  const activeBtnClass = eyeCareTheme === 'night'
    ? 'bg-[#3A506B] text-white shadow-xs'
    : eyeCareTheme === 'sage'
    ? 'bg-[#2E6F56] text-white shadow-xs'
    : 'bg-[#2E4765] text-white shadow-xs';

  return (
    <header className={`sticky top-0 z-40 ${headerBg} backdrop-blur-md border-b shadow-xs transition-colors duration-200`}>
      <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-18">
          {/* Logo & Teacher Profile */}
          <div 
            onClick={() => setActiveTab('quiz')}
            className="flex items-center gap-2.5 sm:gap-3 cursor-pointer group shrink-0"
          >
            <div className="relative">
              <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-2xl bg-gradient-to-tr from-amber-600 via-amber-500 to-amber-300 p-0.5 shadow-sm group-hover:scale-105 transition-transform overflow-hidden">
                <div className="w-full h-full bg-slate-900 rounded-[14px] flex items-center justify-center overflow-hidden">
                  <img 
                    src={TEACHER_THOMAS_AVATAR} 
                    alt="Thầy Thomas" 
                    className="w-full h-full object-cover object-top" 
                  />
                </div>
              </div>
              <span className="absolute -bottom-1 -right-1 flex h-3 w-3 sm:h-3.5 sm:w-3.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 sm:h-3.5 sm:w-3.5 bg-emerald-500 border-2 border-white dark:border-slate-800"></span>
              </span>
            </div>
            <div>
              <div className="flex items-center gap-1.5 sm:gap-2">
                <span className="font-heading font-bold text-base sm:text-lg tracking-tight group-hover:text-amber-700 dark:group-hover:text-amber-400 transition-colors">
                  Thầy Thomas
                </span>
                <span className="inline-flex items-center px-1.5 py-0.2 rounded-full text-[10px] sm:text-xs font-semibold bg-amber-100/70 text-amber-900 dark:bg-amber-900/40 dark:text-amber-200 border border-amber-200/50">
                  Lớp 7
                </span>
              </div>
              <p className="text-[11px] text-slate-500 dark:text-slate-400 hidden sm:block">
                Ôn Ngữ Pháp & 100 Động Từ Bất Quy Tắc
              </p>
            </div>
          </div>

          {/* Navigation Tabs (Scrollable on small phones) */}
          <div className="flex items-center gap-1 sm:gap-2">
            <nav className="flex items-center gap-1 overflow-x-auto py-1 max-w-[calc(100vw-190px)] sm:max-w-none no-scrollbar">
              <button
                onClick={() => setActiveTab('quiz')}
                className={`flex items-center gap-1 sm:gap-1.5 px-2.5 py-2 sm:px-3.5 sm:py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all shrink-0 cursor-pointer min-h-[40px] ${
                  activeTab === 'quiz'
                    ? activeBtnClass
                    : 'text-slate-600 dark:text-slate-300 hover:bg-black/5 dark:hover:bg-white/10'
                }`}
              >
                <FileCheck className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" />
                <span>Đề 15 câu</span>
              </button>

              <button
                onClick={() => setActiveTab('irregular_verbs')}
                className={`flex items-center gap-1 sm:gap-1.5 px-2.5 py-2 sm:px-3.5 sm:py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all shrink-0 cursor-pointer min-h-[40px] ${
                  activeTab === 'irregular_verbs'
                    ? activeBtnClass
                    : 'text-slate-600 dark:text-slate-300 hover:bg-black/5 dark:hover:bg-white/10'
                }`}
              >
                <BookOpen className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" />
                <span className="hidden md:inline">100 Từ Bất Quy Tắc</span>
                <span className="md:hidden">100 Từ</span>
              </button>

              <button
                onClick={() => setActiveTab('tense_study')}
                className={`flex items-center gap-1 sm:gap-1.5 px-2.5 py-2 sm:px-3.5 sm:py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all shrink-0 cursor-pointer min-h-[40px] ${
                  activeTab === 'tense_study'
                    ? activeBtnClass
                    : 'text-slate-600 dark:text-slate-300 hover:bg-black/5 dark:hover:bg-white/10'
                }`}
              >
                <GraduationCap className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" />
                <span className="hidden sm:inline">Chuyên sâu</span>
                <span>Các thì</span>
              </button>

              <button
                onClick={() => setActiveTab('ask_teacher')}
                className={`flex items-center gap-1 sm:gap-1.5 px-2.5 py-2 sm:px-3.5 sm:py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all shrink-0 cursor-pointer min-h-[40px] ${
                  activeTab === 'ask_teacher'
                    ? 'bg-amber-600 text-white shadow-xs'
                    : 'text-slate-600 dark:text-slate-300 hover:bg-amber-500/10'
                }`}
              >
                <MessageCircle className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-amber-600 dark:text-amber-400 shrink-0" />
                <span>Hỏi Thầy</span>
              </button>
            </nav>

            {/* Eye-Care Theme Popover Toggle */}
            {setEyeCareTheme && (
              <div className="relative shrink-0">
                <button
                  onClick={() => setShowThemeMenu(!showThemeMenu)}
                  title="Chế độ bảo vệ mắt (Dịu nhẹ cho điện thoại & laptop)"
                  className="flex items-center gap-1 p-2 sm:px-3 sm:py-2 rounded-xl bg-amber-500/15 hover:bg-amber-500/25 text-amber-900 dark:text-amber-200 border border-amber-500/30 text-xs font-bold transition-all cursor-pointer min-h-[40px]"
                >
                  <Eye className="w-4 h-4 text-amber-700 dark:text-amber-300 shrink-0" />
                  <span className="hidden lg:inline">Bảo vệ mắt</span>
                </button>

                {showThemeMenu && (
                  <div 
                    className="absolute right-0 mt-2 w-64 rounded-2xl bg-white dark:bg-[#252E38] shadow-xl border border-slate-200 dark:border-slate-700 p-2 z-50 text-xs animate-in fade-in zoom-in-95 duration-150"
                    onMouseLeave={() => setShowThemeMenu(false)}
                  >
                    <div className="px-3 py-1.5 font-bold text-slate-800 dark:text-slate-200 border-b border-slate-100 dark:border-slate-700 mb-1 flex items-center justify-between">
                      <span>Bảng màu bảo vệ mắt</span>
                      <Eye className="w-3.5 h-3.5 text-amber-600" />
                    </div>

                    <button
                      onClick={() => { setEyeCareTheme('warm'); setShowThemeMenu(false); }}
                      className={`w-full flex items-center justify-between p-2.5 rounded-xl text-left transition-colors cursor-pointer ${
                        eyeCareTheme === 'warm'
                          ? 'bg-amber-50 dark:bg-amber-950/40 text-amber-900 dark:text-amber-200 font-bold'
                          : 'hover:bg-slate-50 dark:hover:bg-slate-700/50 text-slate-700 dark:text-slate-300'
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        <span className="text-base">🌿</span>
                        <div>
                          <div>Giấy Kem Dịu Nhẹ</div>
                          <div className="text-[10px] text-slate-500 dark:text-slate-400 font-normal">Giảm ánh sáng xanh, chống lóa</div>
                        </div>
                      </div>
                      {eyeCareTheme === 'warm' && <span className="text-amber-600 font-bold">✓</span>}
                    </button>

                    <button
                      onClick={() => { setEyeCareTheme('sage'); setShowThemeMenu(false); }}
                      className={`w-full flex items-center justify-between p-2.5 rounded-xl text-left transition-colors cursor-pointer ${
                        eyeCareTheme === 'sage'
                          ? 'bg-emerald-50 dark:bg-emerald-950/40 text-emerald-900 dark:text-emerald-200 font-bold'
                          : 'hover:bg-slate-50 dark:hover:bg-slate-700/50 text-slate-700 dark:text-slate-300'
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        <span className="text-base">🍃</span>
                        <div>
                          <div>Xanh Mát Sage</div>
                          <div className="text-[10px] text-slate-500 dark:text-slate-400 font-normal">Thư giãn võng mạc, êm dịu</div>
                        </div>
                      </div>
                      {eyeCareTheme === 'sage' && <span className="text-emerald-600 font-bold">✓</span>}
                    </button>

                    <button
                      onClick={() => { setEyeCareTheme('night'); setShowThemeMenu(false); }}
                      className={`w-full flex items-center justify-between p-2.5 rounded-xl text-left transition-colors cursor-pointer ${
                        eyeCareTheme === 'night'
                          ? 'bg-slate-100 dark:bg-slate-700 text-slate-900 dark:text-white font-bold'
                          : 'hover:bg-slate-50 dark:hover:bg-slate-700/50 text-slate-700 dark:text-slate-300'
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        <span className="text-base">🌙</span>
                        <div>
                          <div>Ban Đêm Êm Dịu</div>
                          <div className="text-[10px] text-slate-500 dark:text-slate-400 font-normal">Tông xám ấm, không hại mắt tối</div>
                        </div>
                      </div>
                      {eyeCareTheme === 'night' && <span className="text-slate-400 font-bold">✓</span>}
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};
