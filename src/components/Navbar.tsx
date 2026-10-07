import React from 'react';
import { BookOpen, FileCheck, Sparkles, GraduationCap, MessageCircle } from 'lucide-react';
import { ActiveTab } from '../types.ts';
import { TEACHER_THOMAS_AVATAR } from '../constants/assets.ts';

interface NavbarProps {
  activeTab: ActiveTab;
  setActiveTab: (tab: ActiveTab) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activeTab, setActiveTab }) => {
  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-indigo-100 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18">
          {/* Logo & Teacher Profile */}
          <div 
            onClick={() => setActiveTab('quiz')}
            className="flex items-center gap-3 cursor-pointer group"
          >
            <div className="relative">
              <div className="w-11 h-11 rounded-2xl bg-gradient-to-tr from-indigo-600 via-indigo-500 to-sky-400 p-0.5 shadow-md shadow-indigo-200 group-hover:scale-105 transition-transform overflow-hidden">
                <div className="w-full h-full bg-slate-900 rounded-[14px] flex items-center justify-center overflow-hidden">
                  <img 
                    src={TEACHER_THOMAS_AVATAR} 
                    alt="Thầy Thomas" 
                    className="w-full h-full object-cover object-top" 
                  />
                </div>
              </div>
              <span className="absolute -bottom-1 -right-1 flex h-3.5 w-3.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-500 border-2 border-white"></span>
              </span>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-heading font-bold text-slate-800 text-lg sm:text-xl tracking-tight group-hover:text-indigo-600 transition-colors">
                  Thầy Thomas Tiếng Anh
                </span>
                <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-semibold bg-indigo-50 text-indigo-700 border border-indigo-200/60">
                  Lớp 7
                </span>
              </div>
              <p className="text-xs text-slate-500 hidden sm:block">
                Luyện tập Ngữ pháp & 100 Động từ bất quy tắc
              </p>
            </div>
          </div>

          {/* Navigation Tabs */}
          <nav className="flex items-center gap-1 sm:gap-2">
            <button
              onClick={() => setActiveTab('quiz')}
              className={`flex items-center gap-1.5 px-3 py-2 sm:px-4 sm:py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                activeTab === 'quiz'
                  ? 'bg-indigo-600 text-white shadow-md shadow-indigo-200'
                  : 'text-slate-600 hover:text-indigo-600 hover:bg-slate-100/80'
              }`}
            >
              <FileCheck className="w-4 h-4" />
              <span>Làm đề 15 câu</span>
            </button>

            <button
              onClick={() => setActiveTab('irregular_verbs')}
              className={`flex items-center gap-1.5 px-3 py-2 sm:px-4 sm:py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                activeTab === 'irregular_verbs'
                  ? 'bg-indigo-600 text-white shadow-md shadow-indigo-200'
                  : 'text-slate-600 hover:text-indigo-600 hover:bg-slate-100/80'
              }`}
            >
              <BookOpen className="w-4 h-4" />
              <span className="hidden md:inline">Ôn tập</span>
              <span>100 Từ Bất Quy Tắc</span>
            </button>

            <button
              onClick={() => setActiveTab('tense_study')}
              className={`flex items-center gap-1.5 px-3 py-2 sm:px-4 sm:py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                activeTab === 'tense_study'
                  ? 'bg-indigo-600 text-white shadow-md shadow-indigo-200'
                  : 'text-slate-600 hover:text-indigo-600 hover:bg-slate-100/80'
              }`}
            >
              <GraduationCap className="w-4 h-4" />
              <span className="hidden sm:inline">Chuyên sâu</span>
              <span>Các thì</span>
            </button>

            <button
              onClick={() => setActiveTab('ask_teacher')}
              className={`flex items-center gap-1.5 px-3 py-2 sm:px-3.5 sm:py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                activeTab === 'ask_teacher'
                  ? 'bg-amber-500 text-white shadow-md shadow-amber-200'
                  : 'text-slate-600 hover:text-amber-600 hover:bg-amber-50/70'
              }`}
            >
              <MessageCircle className="w-4 h-4 text-amber-500 group-hover:text-amber-600" />
              <span className="hidden lg:inline">Hỏi Thầy Thomas</span>
              <Sparkles className="w-3.5 h-3.5 text-amber-300 hidden sm:inline" />
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
};
