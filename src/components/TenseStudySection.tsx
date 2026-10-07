import React, { useState } from 'react';
import { 
  BookOpen, 
  Lightbulb, 
  CheckCircle2, 
  Clock, 
  Flame, 
  Sparkles, 
  ArrowRight,
  HelpCircle,
  Volume2
} from 'lucide-react';
import { pronounceSingle } from '../utils/speech.ts';
import { EyeCareTheme } from '../types.ts';

interface TenseStudySectionProps {
  eyeCareTheme?: EyeCareTheme;
}

export const TenseStudySection: React.FC<TenseStudySectionProps> = ({
  eyeCareTheme = 'warm'
}) => {
  const [activeTab, setActiveTab] = useState<'present' | 'present_continuous' | 'past' | 'comparison' | 'ed_pronunciation'>('present');

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-white rounded-3xl p-6 sm:p-7 shadow-sm border border-slate-200">
        <div className="flex items-center gap-2 mb-2">
          <span className="px-3 py-1 rounded-full text-xs font-bold bg-sky-100 text-sky-800 border border-sky-200">
            Sổ Tay Trọng Tâm Lớp 7
          </span>
          <span className="text-xs text-slate-500">
            Hệ Thống Hóa Toàn Diện 3 Thì Trọng Tâm
          </span>
        </div>
        <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-slate-900 tracking-tight">
          Luyện Tập Chuyên Sâu Các Thì Trong Tiếng Anh
        </h2>
        <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-2xl leading-relaxed">
          Nắm vững bản chất thì <strong>Hiện tại đơn</strong>, <strong>Hiện tại tiếp diễn</strong>, <strong>Quá khứ đơn</strong>, cách chia động từ To be vs Thường và bí kíp phát âm đuôi <strong>-ed</strong> đạt điểm tuyệt đối trong mọi bài kiểm tra!
        </p>

        {/* Tab switchers */}
        <div className="flex flex-wrap items-center gap-2 mt-5">
          {[
            { id: 'present', label: '1. Thì Hiện Tại Đơn (Present Simple)' },
            { id: 'present_continuous', label: '2. Thì Hiện Tại Tiếp Diễn (Present Continuous)' },
            { id: 'past', label: '3. Thì Quá Khứ Đơn (Past Simple)' },
            { id: 'comparison', label: '4. So Sánh 3 Thì (Song Song)' },
            { id: 'ed_pronunciation', label: '5. Mẹo Phát Âm Đuôi -ed (/t/, /d/, /ɪd/)' }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                activeTab === tab.id
                  ? 'bg-indigo-600 text-white shadow-md shadow-indigo-200'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200/80'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* TAB 1: PRESENT SIMPLE */}
      {activeTab === 'present' && (
        <div className="space-y-6">
          {/* Card: Động từ thường vs Động từ to be */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Động từ thường */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200 space-y-4">
              <div className="flex items-center gap-2">
                <span className="w-8 h-8 rounded-lg bg-indigo-100 text-indigo-700 font-bold flex items-center justify-center text-sm">
                  V
                </span>
                <h3 className="font-heading font-bold text-lg text-slate-900">
                  A. Động Từ Thường (Ordinary Verbs)
                </h3>
              </div>

              <div className="space-y-3 text-xs sm:text-sm">
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-200/70">
                  <div className="font-bold text-emerald-700">➕ Khẳng định:</div>
                  <div className="font-mono text-slate-800 mt-1">S + V(s/es)</div>
                  <p className="text-slate-500 text-xs mt-1 italic">
                    • I / You / We / They + V-nguyên thể: <span className="font-semibold text-slate-700">They play soccer.</span><br/>
                    • He / She / It + V(s/es): <span className="font-semibold text-slate-700">She plays soccer.</span>
                  </p>
                </div>

                <div className="p-3 bg-slate-50 rounded-xl border border-slate-200/70">
                  <div className="font-bold text-rose-700">➖ Phủ định:</div>
                  <div className="font-mono text-slate-800 mt-1">S + do not / does not + V-nguyên thể</div>
                  <p className="text-slate-500 text-xs mt-1 italic">
                    • don't = do not | doesn't = does not<br/>
                    • <span className="font-semibold text-slate-700">He doesn't like milk.</span> (Động từ like trở về nguyên mẫu!)
                  </p>
                </div>

                <div className="p-3 bg-slate-50 rounded-xl border border-slate-200/70">
                  <div className="font-bold text-sky-700">❓ Nghi vấn (Câu hỏi):</div>
                  <div className="font-mono text-slate-800 mt-1">Do / Does + S + V-nguyên thể?</div>
                  <p className="text-slate-500 text-xs mt-1 italic">
                    • <span className="font-semibold text-slate-700">Do you live here?</span> - Yes, I do. / No, I don't.<br/>
                    • <span className="font-semibold text-slate-700">Does he work here?</span> - Yes, he does.
                  </p>
                </div>
              </div>
            </div>

            {/* Động từ To be */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200 space-y-4">
              <div className="flex items-center gap-2">
                <span className="w-8 h-8 rounded-lg bg-sky-100 text-sky-700 font-bold flex items-center justify-center text-sm">
                  Be
                </span>
                <h3 className="font-heading font-bold text-lg text-slate-900">
                  B. Động Từ To Be (Am / Is / Are)
                </h3>
              </div>

              <div className="space-y-3 text-xs sm:text-sm">
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-200/70">
                  <div className="font-bold text-emerald-700">➕ Khẳng định:</div>
                  <div className="font-mono text-slate-800 mt-1">S + am / is / are + (Danh từ / Tính từ)</div>
                  <p className="text-slate-500 text-xs mt-1 italic">
                    • I am (I'm)<br/>
                    • He / She / It / Danh từ số ít + is<br/>
                    • You / We / They / Danh từ số nhiều + are
                  </p>
                </div>

                <div className="p-3 bg-slate-50 rounded-xl border border-slate-200/70">
                  <div className="font-bold text-rose-700">➖ Phủ định:</div>
                  <div className="font-mono text-slate-800 mt-1">S + am not / is not (isn't) / are not (aren't)</div>
                  <p className="text-slate-500 text-xs mt-1 italic">
                    • <span className="font-semibold text-slate-700">She isn't at home now.</span><br/>
                    • <span className="font-semibold text-slate-700">They aren't late for school.</span>
                  </p>
                </div>

                <div className="p-3 bg-slate-50 rounded-xl border border-slate-200/70">
                  <div className="font-bold text-sky-700">❓ Nghi vấn:</div>
                  <div className="font-mono text-slate-800 mt-1">Am / Is / Are + S + ...?</div>
                  <p className="text-slate-500 text-xs mt-1 italic">
                    • <span className="font-semibold text-slate-700">Are you ready?</span> - Yes, I am. / No, I'm not.<br/>
                    • <span className="font-semibold text-slate-700">Is she a doctor?</span> - Yes, she is.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Dấu hiệu nhận biết & Mẹo thêm -s/es */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Dấu hiệu */}
            <div className="bg-amber-50/70 rounded-2xl p-6 border border-amber-200 space-y-3">
              <div className="flex items-center gap-2 text-amber-900 font-bold text-base">
                <Clock className="w-5 h-5 text-amber-600" />
                <span>Dấu Hiệu Nhận Biết Thì Hiện Tại Đơn</span>
              </div>
              <ul className="text-xs sm:text-sm text-slate-700 space-y-2">
                <li>• <strong>Trạng từ tần suất:</strong> always (luôn luôn), usually (thường xuyên), often (thường), sometimes (thỉnh thoảng), rarely / seldom (hiếm khi), never (không bao giờ).</li>
                <li>• <strong>Cụm từ chỉ chu kỳ:</strong> every day, every week, every Sunday, once a week (1 lần/tuần), twice a month (2 lần/tháng)...</li>
                <li>• <strong>Chân lý hiển nhiên:</strong> Sự thật về tự nhiên, khoa học (The sun rises in the east).</li>
              </ul>
            </div>

            {/* Thần chú thêm s/es */}
            <div className="bg-indigo-50/70 rounded-2xl p-6 border border-indigo-200 space-y-3">
              <div className="flex items-center gap-2 text-indigo-900 font-bold text-base">
                <Lightbulb className="w-5 h-5 text-indigo-600" />
                <span>Câu Thần Chú Thêm "-es" Cực Dễ Nhớ</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-700">
                Khi chủ ngữ là <strong>He, She, It, Danh từ số ít</strong>, thêm <strong>-es</strong> vào các động từ tận cùng là: <strong>-o, -s, -ch, -x, -sh, -z</strong>.
              </p>
              <div className="p-3 bg-white rounded-xl border border-indigo-200 text-xs sm:text-sm font-semibold text-indigo-800">
                🗣️ Thần chú: <span className="underline decoration-indigo-400 font-bold">"Ông Sáu Chạy Xe Sh Zỏm"</span>
              </div>
              <p className="text-xs text-slate-600">
                Ví dụ: go → <strong className="text-indigo-600">goes</strong>, watch → <strong className="text-indigo-600">watches</strong>, wash → <strong className="text-indigo-600">washes</strong>, fix → <strong className="text-indigo-600">fixes</strong>.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* TAB 2: PAST SIMPLE */}
      {activeTab === 'past' && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Động từ thường quá khứ */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200 space-y-4">
              <div className="flex items-center gap-2">
                <span className="w-8 h-8 rounded-lg bg-indigo-100 text-indigo-700 font-bold flex items-center justify-center text-sm">
                  V2/ed
                </span>
                <h3 className="font-heading font-bold text-lg text-slate-900">
                  A. Động Từ Thường Quá Khứ (V2 / V-ed)
                </h3>
              </div>

              <div className="space-y-3 text-xs sm:text-sm">
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-200/70">
                  <div className="font-bold text-emerald-700">➕ Khẳng định:</div>
                  <div className="font-mono text-slate-800 mt-1">S + V2 / V-ed</div>
                  <p className="text-slate-500 text-xs mt-1 italic">
                    • Có quy tắc: visit → visited, play → played<br/>
                    • Bất quy tắc: go → went, see → saw, eat → ate<br/>
                    • <span className="font-semibold text-slate-700">We played badminton yesterday.</span>
                  </p>
                </div>

                <div className="p-3 bg-slate-50 rounded-xl border border-slate-200/70">
                  <div className="font-bold text-rose-700">➖ Phủ định:</div>
                  <div className="font-mono text-slate-800 mt-1">S + did not (didn't) + V-nguyên thể</div>
                  <p className="text-slate-500 text-xs mt-1 italic">
                    ⚠️ <strong>Lưu ý vàng:</strong> Khi đã có mượn trợ động từ <strong>didn't</strong> thì động từ chính <strong>phải giữ nguyên mẫu</strong>!<br/>
                    • Đúng: <span className="text-emerald-700 font-bold">She didn't go.</span> (KHÔNG dùng: She didn't went ❌)
                  </p>
                </div>

                <div className="p-3 bg-slate-50 rounded-xl border border-slate-200/70">
                  <div className="font-bold text-sky-700">❓ Nghi vấn:</div>
                  <div className="font-mono text-slate-800 mt-1">Did + S + V-nguyên thể?</div>
                  <p className="text-slate-500 text-xs mt-1 italic">
                    • <span className="font-semibold text-slate-700">Did you watch the movie last night?</span><br/>
                    • Trả lời: Yes, I did. / No, I didn't.
                  </p>
                </div>
              </div>
            </div>

            {/* Động từ To be quá khứ */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200 space-y-4">
              <div className="flex items-center gap-2">
                <span className="w-8 h-8 rounded-lg bg-sky-100 text-sky-700 font-bold flex items-center justify-center text-sm">
                  Was/Were
                </span>
                <h3 className="font-heading font-bold text-lg text-slate-900">
                  B. Động Từ To Be Quá Khứ (Was / Were)
                </h3>
              </div>

              <div className="space-y-3 text-xs sm:text-sm">
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-200/70">
                  <div className="font-bold text-emerald-700">➕ Khẳng định:</div>
                  <div className="font-mono text-slate-800 mt-1">S + was / were + (Danh từ / Tính từ / Nơi chốn)</div>
                  <p className="text-slate-500 text-xs mt-1 italic">
                    • I / He / She / It / Danh từ số ít → <strong className="text-indigo-600">was</strong><br/>
                    • You / We / They / Danh từ số nhiều → <strong className="text-indigo-600">were</strong><br/>
                    • <span className="font-semibold text-slate-700">I was at home. They were in Da Nang.</span>
                  </p>
                </div>

                <div className="p-3 bg-slate-50 rounded-xl border border-slate-200/70">
                  <div className="font-bold text-rose-700">➖ Phủ định:</div>
                  <div className="font-mono text-slate-800 mt-1">S + was not (wasn't) / were not (weren't)</div>
                  <p className="text-slate-500 text-xs mt-1 italic">
                    • <span className="font-semibold text-slate-700">He wasn't happy yesterday.</span><br/>
                    • <span className="font-semibold text-slate-700">We weren't tired after school.</span>
                  </p>
                </div>

                <div className="p-3 bg-slate-50 rounded-xl border border-slate-200/70">
                  <div className="font-bold text-sky-700">❓ Nghi vấn:</div>
                  <div className="font-mono text-slate-800 mt-1">Was / Were + S + ...?</div>
                  <p className="text-slate-500 text-xs mt-1 italic">
                    • <span className="font-semibold text-slate-700">Were you at school yesterday?</span> - Yes, I was. / No, I wasn't.<br/>
                    • <span className="font-semibold text-slate-700">Was she sick last week?</span> - Yes, she was.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Dấu hiệu nhận biết quá khứ đơn */}
          <div className="bg-amber-50/70 rounded-2xl p-6 border border-amber-200 space-y-3">
            <div className="flex items-center gap-2 text-amber-900 font-bold text-base">
              <Clock className="w-5 h-5 text-amber-600" />
              <span>Dấu Hiệu Nhận Biết Thì Quá Khứ Đơn (Past Simple)</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs sm:text-sm">
              <div className="p-3 bg-white rounded-xl border border-amber-200">
                <div className="font-bold text-amber-900 mb-1">📅 Yesterday</div>
                <p className="text-slate-600">yesterday (hôm qua), yesterday morning/afternoon...</p>
              </div>
              <div className="p-3 bg-white rounded-xl border border-amber-200">
                <div className="font-bold text-amber-900 mb-1">⏳ Last + Thời gian</div>
                <p className="text-slate-600">last night, last week, last month, last year, last summer...</p>
              </div>
              <div className="p-3 bg-white rounded-xl border border-amber-200">
                <div className="font-bold text-amber-900 mb-1">🕒 ... + ago / in + quá khứ</div>
                <p className="text-slate-600">two days ago, three weeks ago, in 2020, when I was 6...</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* TAB 3: COMPARISON */}
      {activeTab === 'comparison' && (
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200 space-y-6">
          <h3 className="font-heading font-extrabold text-xl text-slate-900">
            Bảng So Sánh Song Song: Hiện Tại Đơn vs Quá Khứ Đơn
          </h3>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-xs sm:text-sm">
              <thead>
                <tr className="bg-slate-100 text-slate-700 font-bold border-b border-slate-200">
                  <th className="p-3.5 w-1/4">Đặc Điểm</th>
                  <th className="p-3.5 w-3/8 text-indigo-700 bg-indigo-50/50">Thì Hiện Tại Đơn (Present Simple)</th>
                  <th className="p-3.5 w-3/8 text-amber-800 bg-amber-50/50">Thì Quá Khứ Đơn (Past Simple)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                <tr>
                  <td className="p-3.5 font-bold text-slate-800">1. Cách Dùng</td>
                  <td className="p-3.5 text-slate-600">Diễn tả thói quen, lặp đi lặp lại ở hiện tại, chân lý sự thật.</td>
                  <td className="p-3.5 text-slate-600">Diễn tả hành động đã xảy ra và ĐÃ KẾT THÚC trong quá khứ.</td>
                </tr>
                <tr>
                  <td className="p-3.5 font-bold text-slate-800">2. Động từ To Be</td>
                  <td className="p-3.5 text-indigo-700 font-mono font-semibold">am / is / are</td>
                  <td className="p-3.5 text-amber-800 font-mono font-semibold">was / were</td>
                </tr>
                <tr>
                  <td className="p-3.5 font-bold text-slate-800">3. Thể Khẳng định (+)</td>
                  <td className="p-3.5 font-mono text-slate-800">S + V(s/es)<br/><span className="text-xs text-slate-500 font-sans italic">He plays football.</span></td>
                  <td className="p-3.5 font-mono text-slate-800">S + V2 / V-ed<br/><span className="text-xs text-slate-500 font-sans italic">He played football yesterday.</span></td>
                </tr>
                <tr>
                  <td className="p-3.5 font-bold text-slate-800">4. Thể Phủ định (-)</td>
                  <td className="p-3.5 font-mono text-slate-800">S + don't / doesn't + V-nguyên thể<br/><span className="text-xs text-slate-500 font-sans italic">He doesn't play.</span></td>
                  <td className="p-3.5 font-mono text-slate-800">S + didn't + V-nguyên thể<br/><span className="text-xs text-slate-500 font-sans italic">He didn't play.</span></td>
                </tr>
                <tr>
                  <td className="p-3.5 font-bold text-slate-800">5. Dấu hiệu cốt lõi</td>
                  <td className="p-3.5 text-slate-600 font-medium">always, usually, every day, often...</td>
                  <td className="p-3.5 text-slate-600 font-medium">yesterday, last week, 2 days ago, in 2021...</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* TAB 4: ED PRONUNCIATION */}
      {activeTab === 'ed_pronunciation' && (
        <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-200 space-y-6">
          <div className="flex items-center gap-3">
            <span className="w-10 h-10 rounded-2xl bg-amber-100 text-amber-900 font-black flex items-center justify-center text-lg">
              🎯
            </span>
            <div>
              <h3 className="font-heading font-extrabold text-xl text-slate-900">
                Quy Tắc Phát Âm Đuôi "-ed" Của Động Từ Quá Khứ
              </h3>
              <p className="text-xs sm:text-sm text-slate-500">
                Đây là dạng bài luôn xuất hiện trong các bài kiểm tra 15 phút, 1 tiết và thi học kỳ Tiếng Anh Lớp 7!
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {/* Trường hợp 1: /ɪd/ */}
            <div className="bg-emerald-50/60 rounded-2xl p-5 border border-emerald-200 space-y-3">
              <div className="flex items-center justify-between">
                <span className="font-heading font-black text-2xl text-emerald-800">/ɪd/</span>
                <span className="text-[11px] font-bold px-2 py-0.5 rounded-full bg-emerald-200 text-emerald-900">
                  Dễ nhất!
                </span>
              </div>
              <p className="text-xs sm:text-sm font-semibold text-slate-700">
                Tận cùng bằng âm: <strong>/t/</strong> hoặc <strong>/d/</strong>
              </p>
              <div className="p-2.5 bg-white rounded-xl text-xs font-bold text-emerald-900 border border-emerald-100">
                🗣️ Thần chú: <span className="underline decoration-emerald-400">"Tiền Đô"</span> hoặc <span className="underline decoration-emerald-400">"Trà Đá"</span>
              </div>
              <div className="space-y-1.5 text-xs text-slate-600">
                <div className="flex justify-between items-center">
                  <span>• wanted /ˈwɒntɪd/</span>
                  <button onClick={() => pronounceSingle("wanted")} title="Nghe"><Volume2 className="w-3.5 h-3.5 text-emerald-700" /></button>
                </div>
                <div className="flex justify-between items-center">
                  <span>• needed /ˈniːdɪd/</span>
                  <button onClick={() => pronounceSingle("needed")} title="Nghe"><Volume2 className="w-3.5 h-3.5 text-emerald-700" /></button>
                </div>
                <div className="flex justify-between items-center">
                  <span>• visited /ˈvɪzɪtɪd/</span>
                  <button onClick={() => pronounceSingle("visited")} title="Nghe"><Volume2 className="w-3.5 h-3.5 text-emerald-700" /></button>
                </div>
              </div>
            </div>

            {/* Trường hợp 2: /t/ */}
            <div className="bg-indigo-50/60 rounded-2xl p-5 border border-indigo-200 space-y-3">
              <div className="flex items-center justify-between">
                <span className="font-heading font-black text-2xl text-indigo-800">/t/</span>
                <span className="text-[11px] font-bold px-2 py-0.5 rounded-full bg-indigo-200 text-indigo-900">
                  Âm vô thanh
                </span>
              </div>
              <p className="text-xs sm:text-sm font-semibold text-slate-700">
                Tận cùng: <strong>/p/, /k/, /f/, /s/, /ʃ/, /tʃ/</strong> (-p, -k, -f, -gh, -ss, -c, -x, -sh, -ch)
              </p>
              <div className="p-2.5 bg-white rounded-xl text-xs font-bold text-indigo-900 border border-indigo-100">
                🗣️ Thần chú: <span className="underline decoration-indigo-400">"Chính Phủ Phát Sách Không Thiếu"</span>
              </div>
              <div className="space-y-1.5 text-xs text-slate-600">
                <div className="flex justify-between items-center">
                  <span>• stopped /stɒpt/</span>
                  <button onClick={() => pronounceSingle("stopped")} title="Nghe"><Volume2 className="w-3.5 h-3.5 text-indigo-700" /></button>
                </div>
                <div className="flex justify-between items-center">
                  <span>• watched /wɒtʃt/</span>
                  <button onClick={() => pronounceSingle("watched")} title="Nghe"><Volume2 className="w-3.5 h-3.5 text-indigo-700" /></button>
                </div>
                <div className="flex justify-between items-center">
                  <span>• washed /wɒʃt/</span>
                  <button onClick={() => pronounceSingle("washed")} title="Nghe"><Volume2 className="w-3.5 h-3.5 text-indigo-700" /></button>
                </div>
                <div className="flex justify-between items-center">
                  <span>• cooked /kʊkt/</span>
                  <button onClick={() => pronounceSingle("cooked")} title="Nghe"><Volume2 className="w-3.5 h-3.5 text-indigo-700" /></button>
                </div>
              </div>
            </div>

            {/* Trường hợp 3: /d/ */}
            <div className="bg-sky-50/60 rounded-2xl p-5 border border-sky-200 space-y-3">
              <div className="flex items-center justify-between">
                <span className="font-heading font-black text-2xl text-sky-800">/d/</span>
                <span className="text-[11px] font-bold px-2 py-0.5 rounded-full bg-sky-200 text-sky-900">
                  Còn lại
                </span>
              </div>
              <p className="text-xs sm:text-sm font-semibold text-slate-700">
                Các âm hữu thanh còn lại (nguyên âm và các phụ âm khác)
              </p>
              <div className="p-2.5 bg-white rounded-xl text-xs font-bold text-sky-900 border border-sky-100">
                🗣️ Ghi nhớ: <span className="underline decoration-sky-400">Không thuộc 2 nhóm trên thì là /d/</span>
              </div>
              <div className="space-y-1.5 text-xs text-slate-600">
                <div className="flex justify-between items-center">
                  <span>• played /pleɪd/</span>
                  <button onClick={() => pronounceSingle("played")} title="Nghe"><Volume2 className="w-3.5 h-3.5 text-sky-700" /></button>
                </div>
                <div className="flex justify-between items-center">
                  <span>• cleaned /kliːnd/</span>
                  <button onClick={() => pronounceSingle("cleaned")} title="Nghe"><Volume2 className="w-3.5 h-3.5 text-sky-700" /></button>
                </div>
                <div className="flex justify-between items-center">
                  <span>• loved /lʌvd/</span>
                  <button onClick={() => pronounceSingle("loved")} title="Nghe"><Volume2 className="w-3.5 h-3.5 text-sky-700" /></button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
