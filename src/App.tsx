/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar.tsx';
import { TeacherHeroGreeting } from './components/TeacherHeroGreeting.tsx';
import { QuizSection } from './components/QuizSection.tsx';
import { IrregularVerbsSection } from './components/IrregularVerbsSection.tsx';
import { TenseStudySection } from './components/TenseStudySection.tsx';
import { TeacherChatSection } from './components/TeacherChatSection.tsx';
import { ActiveTab, EyeCareTheme } from './types.ts';
import { Eye, ShieldCheck, Sparkles } from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState<ActiveTab>('quiz');
  const [teacherChatContext, setTeacherChatContext] = useState<string>('');
  
  // Eye-Care Theme state ('warm' default for soothing paper tone on mobile/laptop)
  const [eyeCareTheme, setEyeCareTheme] = useState<EyeCareTheme>(() => {
    try {
      const saved = localStorage.getItem('grade7_eyecare_theme') as EyeCareTheme;
      if (saved && ['warm', 'sage', 'night'].includes(saved)) {
        return saved;
      }
    } catch {
      // fallback
    }
    return 'warm';
  });

  useEffect(() => {
    try {
      localStorage.setItem('grade7_eyecare_theme', eyeCareTheme);
    } catch {
      // ignore
    }
    // Update body theme class
    document.body.className = `theme-${eyeCareTheme} antialiased selection:bg-amber-500 selection:text-white`;
  }, [eyeCareTheme]);

  const handleAskTeacherWithContext = (questionText: string) => {
    setTeacherChatContext(questionText);
    setActiveTab('ask_teacher');
    window.scrollTo({ top: 350, behavior: 'smooth' });
  };

  const themeContainerClass = eyeCareTheme === 'night' 
    ? 'bg-[#1A2129] text-[#E5EAEE]'
    : eyeCareTheme === 'sage'
    ? 'bg-[#F2F6F3] text-[#203328]'
    : 'bg-[#FAF7F2] text-[#2C3338]';

  return (
    <div className={`min-h-screen ${themeContainerClass} flex flex-col transition-colors duration-300 font-sans`}>
      {/* Top Navigation with Eye-Care Controls */}
      <Navbar 
        activeTab={activeTab} 
        setActiveTab={setActiveTab} 
        eyeCareTheme={eyeCareTheme}
        setEyeCareTheme={setEyeCareTheme}
      />

      {/* Main Container */}
      <main className="grow max-w-7xl w-full mx-auto px-3.5 sm:px-6 lg:px-8 py-5 sm:py-8">
        {/* Eye-Care Active Notice Pill */}
        <div className="mb-4 flex flex-wrap items-center justify-between gap-2 px-4 py-2 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-xs text-amber-900/90 dark:text-amber-200">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-amber-600 shrink-0" />
            <span className="font-medium">
              Chế độ bảo vệ mắt: <strong className="font-bold">{eyeCareTheme === 'warm' ? '🌿 Giấy Kem Dịu Nhẹ' : eyeCareTheme === 'sage' ? '🍃 Xanh Mát Sage' : '🌙 Ban Đêm Êm Dịu'}</strong>
            </span>
            <span className="hidden sm:inline text-amber-800/70 dark:text-amber-300/70">
              — Giảm độ chói, chống mỏi mắt tối ưu khi học lâu trên điện thoại và laptop.
            </span>
          </div>
          <div className="flex items-center gap-1.5 ml-auto text-[11px] font-semibold">
            <span className="opacity-75">Đổi tông màu:</span>
            <button
              onClick={() => setEyeCareTheme('warm')}
              className={`px-2 py-0.5 rounded-lg transition-all ${eyeCareTheme === 'warm' ? 'bg-amber-600 text-white font-bold' : 'hover:bg-amber-500/20'}`}
            >
              Kem
            </button>
            <button
              onClick={() => setEyeCareTheme('sage')}
              className={`px-2 py-0.5 rounded-lg transition-all ${eyeCareTheme === 'sage' ? 'bg-emerald-700 text-white font-bold' : 'hover:bg-amber-500/20'}`}
            >
              Sage
            </button>
            <button
              onClick={() => setEyeCareTheme('night')}
              className={`px-2 py-0.5 rounded-lg transition-all ${eyeCareTheme === 'night' ? 'bg-slate-700 text-white font-bold' : 'hover:bg-amber-500/20'}`}
            >
              Đêm
            </button>
          </div>
        </div>

        {/* Friendly English Teacher Hero Greeting Banner (With 3 choices) */}
        <TeacherHeroGreeting 
          onSelectOption={(tab) => {
            setActiveTab(tab);
            window.scrollTo({ top: 380, behavior: 'smooth' });
          }}
          eyeCareTheme={eyeCareTheme}
        />

        {/* Tab Content Display */}
        <div className="transition-all duration-300">
          {activeTab === 'quiz' && (
            <QuizSection onAskTeacherWithContext={handleAskTeacherWithContext} eyeCareTheme={eyeCareTheme} />
          )}

          {activeTab === 'irregular_verbs' && (
            <IrregularVerbsSection eyeCareTheme={eyeCareTheme} />
          )}

          {activeTab === 'tense_study' && (
            <TenseStudySection eyeCareTheme={eyeCareTheme} />
          )}

          {activeTab === 'ask_teacher' && (
            <TeacherChatSection initialQuestion={teacherChatContext} eyeCareTheme={eyeCareTheme} />
          )}
        </div>
      </main>

      {/* Footer */}
      <footer className={`mt-16 py-8 border-t transition-colors ${
        eyeCareTheme === 'night' 
          ? 'bg-[#151B22] border-[#2A3441] text-slate-400' 
          : eyeCareTheme === 'sage'
          ? 'bg-[#EBF2EE] border-[#DCE5DF] text-slate-600'
          : 'bg-[#F3EFE7] border-[#E5DEC9] text-slate-600'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-xs space-y-2">
          <div className="flex flex-wrap items-center justify-center gap-2 font-semibold">
            <span>👨‍🏫 Thầy Thomas - Trợ Lý Tiếng Anh Lớp 7</span>
            <span>•</span>
            <span>Hiện Tại Đơn, Quá Khứ Đơn & Hiện Tại Tiếp Diễn</span>
            <span>•</span>
            <span>100 Động Từ Bất Quy Tắc Chuẩn ZIM Academy</span>
          </div>
          <p className="opacity-80">
            Giao diện dịu nhẹ bảo vệ mắt cho học sinh trên mọi thiết bị. Hỗ trợ chạy tĩnh hoàn hảo trên GitHub Pages. Chúc các em học tốt! ✨
          </p>
        </div>
      </footer>
    </div>
  );
}
