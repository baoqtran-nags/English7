/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar.tsx';
import { TeacherHeroGreeting } from './components/TeacherHeroGreeting.tsx';
import { QuizSection } from './components/QuizSection.tsx';
import { IrregularVerbsSection } from './components/IrregularVerbsSection.tsx';
import { TenseStudySection } from './components/TenseStudySection.tsx';
import { TeacherChatSection } from './components/TeacherChatSection.tsx';
import { ActiveTab } from './types.ts';

export default function App() {
  const [activeTab, setActiveTab] = useState<ActiveTab>('quiz');
  const [teacherChatContext, setTeacherChatContext] = useState<string>('');

  const handleAskTeacherWithContext = (questionText: string) => {
    setTeacherChatContext(questionText);
    setActiveTab('ask_teacher');
    window.scrollTo({ top: 350, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col text-slate-800 antialiased selection:bg-indigo-500 selection:text-white">
      {/* Top Navigation */}
      <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* Main Container */}
      <main className="grow max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        {/* Friendly English Teacher Hero Greeting Banner (With 3 choices) */}
        <TeacherHeroGreeting 
          onSelectOption={(tab) => {
            setActiveTab(tab);
            window.scrollTo({ top: 380, behavior: 'smooth' });
          }}
        />

        {/* Tab Content Display */}
        <div className="transition-all duration-300">
          {activeTab === 'quiz' && (
            <QuizSection onAskTeacherWithContext={handleAskTeacherWithContext} />
          )}

          {activeTab === 'irregular_verbs' && (
            <IrregularVerbsSection />
          )}

          {activeTab === 'tense_study' && (
            <TenseStudySection />
          )}

          {activeTab === 'ask_teacher' && (
            <TeacherChatSection initialQuestion={teacherChatContext} />
          )}
        </div>
      </main>

      {/* Footer */}
      <footer className="mt-16 bg-white border-t border-slate-200/80 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-xs text-slate-500 space-y-2">
          <div className="flex items-center justify-center gap-2 font-semibold text-slate-700">
            <span>👨‍🏫 Thầy Thomas - Trợ Lý Tiếng Anh Lớp 7</span>
            <span>•</span>
            <span>Hiện Tại Đơn, Quá Khứ Đơn & Hiện Tại Tiếp Diễn</span>
            <span>•</span>
            <span>100 Động Từ Bất Quy Tắc Chuẩn ZIM Academy</span>
          </div>
          <p>
            Được thiết kế thân thiện, dễ hiểu, chuẩn kiến thức sách giáo khoa Tiếng Anh Lớp 7. Chúc các em học thật tốt và đạt điểm cao! ✨
          </p>
        </div>
      </footer>
    </div>
  );
}
