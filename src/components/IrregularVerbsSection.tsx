import React, { useState, useEffect, useRef } from 'react';
import { 
  Volume2, 
  Search, 
  Play, 
  Pause, 
  RotateCcw, 
  Sparkles, 
  BookOpen, 
  Check, 
  Layers, 
  Award, 
  ChevronRight, 
  Filter, 
  CheckCircle2, 
  XCircle, 
  Zap, 
  X, 
  Copy,
  Star,
  Trash2
} from 'lucide-react';
import { IRREGULAR_VERBS_100, IrregularVerb } from '../data/irregularVerbs.ts';
import { pronounceThreeForms, pronounceSingle, stopSpeaking } from '../utils/speech.ts';

export const IrregularVerbsSection: React.FC = () => {
  // Search & Filters
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [selectedGroup, setSelectedGroup] = useState<string>('all');
  const [selectedPattern, setSelectedPattern] = useState<string>('all');
  const [speechRate, setSpeechRate] = useState<number>(0.85); // 0.85 for clear Grade 7 learner shadowing

  // Favorites / Bookmarked difficult verbs state (persisted to localStorage)
  const [favoriteStts, setFavoriteStts] = useState<number[]>(() => {
    try {
      const saved = localStorage.getItem('grade7_favorite_verbs');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  // Save favorites to localStorage whenever it changes
  useEffect(() => {
    try {
      localStorage.setItem('grade7_favorite_verbs', JSON.stringify(favoriteStts));
    } catch (e) {
      console.warn('Cannot persist favorites to localStorage:', e);
    }
  }, [favoriteStts]);

  const [confirmingClearFavorites, setConfirmingClearFavorites] = useState<boolean>(false);

  const toggleFavorite = (stt: number) => {
    setFavoriteStts((prev) => 
      prev.includes(stt) ? prev.filter((id) => id !== stt) : [...prev, stt]
    );
  };

  const handleClearFavorites = () => {
    setFavoriteStts([]);
    setConfirmingClearFavorites(false);
  };

  // Quick lookup state
  const [quickLookupTerm, setQuickLookupTerm] = useState<string>('');
  const [activeLookupVerb, setActiveLookupVerb] = useState<IrregularVerb | null>(() => {
    // Default preview with 'go'
    return IRREGULAR_VERBS_100.find(v => v.v1 === 'go') || IRREGULAR_VERBS_100[0];
  });
  const [copiedNotification, setCopiedNotification] = useState<boolean>(false);

  // Active word playing state
  const [currentlySpeakingStt, setCurrentlySpeakingStt] = useState<number | null>(null);

  // Auto-play (Shadowing Continuous Mode)
  const [isAutoPlaying, setIsAutoPlaying] = useState<boolean>(false);
  const [autoPlayIndex, setAutoPlayIndex] = useState<number>(0);
  const autoPlayTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Learning mode view toggle: 'table' | 'flashcards' | 'minigame'
  const [viewMode, setViewMode] = useState<'table' | 'flashcards' | 'minigame'>('table');

  // Flashcard state
  const [cardIndex, setCardIndex] = useState<number>(0);
  const [isFlipped, setIsFlipped] = useState<boolean>(false);

  // Minigame state
  const [gameScore, setGameScore] = useState<number>(0);
  const [gameQuestionIdx, setGameQuestionIdx] = useState<number>(0);
  const [v2Input, setV2Input] = useState<string>('');
  const [v3Input, setV3Input] = useState<string>('');
  const [gameResult, setGameResult] = useState<{ checked: boolean; isV2Correct: boolean; isV3Correct: boolean } | null>(null);

  // Matching verbs for Quick Lookup
  const quickLookupMatches = quickLookupTerm.trim()
    ? IRREGULAR_VERBS_100.filter((verb) => {
        const q = quickLookupTerm.toLowerCase().trim();
        return (
          verb.v1.toLowerCase().includes(q) ||
          verb.v2.toLowerCase().includes(q) ||
          verb.v3.toLowerCase().includes(q) ||
          verb.meaning.toLowerCase().includes(q)
        );
      })
    : [];

  // Update activeLookupVerb when quickLookupTerm changes
  useEffect(() => {
    if (quickLookupTerm.trim()) {
      const q = quickLookupTerm.toLowerCase().trim();
      // Look for exact match first
      const exactMatch = IRREGULAR_VERBS_100.find(
        (v) =>
          v.v1.toLowerCase() === q ||
          v.v2.toLowerCase().split('/').some((part) => part.trim() === q) ||
          v.v3.toLowerCase().split('/').some((part) => part.trim() === q)
      );
      if (exactMatch) {
        setActiveLookupVerb(exactMatch);
      } else if (quickLookupMatches.length > 0) {
        setActiveLookupVerb(quickLookupMatches[0]);
      }
    }
  }, [quickLookupTerm]);

  // Filter verbs for table
  const filteredVerbs = IRREGULAR_VERBS_100.filter((verb) => {
    // Favorites filter
    if (selectedGroup === 'favorites') {
      if (!favoriteStts.includes(verb.stt)) return false;
    } else if (selectedGroup !== 'all' && verb.group !== selectedGroup) {
      return false;
    }
    // Pattern filter
    if (selectedPattern !== 'all' && verb.pattern !== selectedPattern) {
      return false;
    }
    // Search text filter (matches v1, v2, v3, or Vietnamese meaning)
    if (searchTerm.trim()) {
      const q = searchTerm.toLowerCase().trim();
      const matchV1 = verb.v1.toLowerCase().includes(q);
      const matchV2 = verb.v2.toLowerCase().includes(q);
      const matchV3 = verb.v3.toLowerCase().includes(q);
      const matchMeaning = verb.meaning.toLowerCase().includes(q);
      return matchV1 || matchV2 || matchV3 || matchMeaning;
    }
    return true;
  });

  // Handle single verb pronunciation (reads 3 columns: V1 - V2 - V3)
  const handlePronounceVerb = (verb: IrregularVerb) => {
    setCurrentlySpeakingStt(verb.stt);
    pronounceThreeForms(verb.v1, verb.v2, verb.v3, {
      rate: speechRate,
      onEnd: () => {
        setCurrentlySpeakingStt(null);
      },
      onError: () => {
        setCurrentlySpeakingStt(null);
      }
    });
  };

  const handleCopyVerbDetails = (verb: IrregularVerb) => {
    const text = `${verb.v1} - ${verb.v2} - ${verb.v3}: ${verb.meaning}`;
    navigator.clipboard?.writeText(text);
    setCopiedNotification(true);
    setTimeout(() => setCopiedNotification(false), 2000);
  };

  // Shadowing Autoplay logic
  useEffect(() => {
    if (!isAutoPlaying || filteredVerbs.length === 0) return;

    const currentVerb = filteredVerbs[autoPlayIndex];
    if (!currentVerb) {
      setIsAutoPlaying(false);
      return;
    }

    setCurrentlySpeakingStt(currentVerb.stt);
    pronounceThreeForms(currentVerb.v1, currentVerb.v2, currentVerb.v3, {
      rate: speechRate,
      onEnd: () => {
        setCurrentlySpeakingStt(null);
        // Wait 2.2 seconds for the student to repeat (Shadowing) before reading next word
        autoPlayTimeoutRef.current = setTimeout(() => {
          if (autoPlayIndex + 1 < filteredVerbs.length) {
            setAutoPlayIndex((prev) => prev + 1);
          } else {
            setIsAutoPlaying(false);
            setAutoPlayIndex(0);
          }
        }, 2200);
      },
      onError: () => {
        setCurrentlySpeakingStt(null);
        setIsAutoPlaying(false);
      }
    });

    return () => {
      if (autoPlayTimeoutRef.current) clearTimeout(autoPlayTimeoutRef.current);
    };
  }, [isAutoPlaying, autoPlayIndex, filteredVerbs, speechRate]);

  const toggleAutoplay = () => {
    if (isAutoPlaying) {
      stopSpeaking();
      setIsAutoPlaying(false);
      setCurrentlySpeakingStt(null);
      if (autoPlayTimeoutRef.current) clearTimeout(autoPlayTimeoutRef.current);
    } else {
      setAutoPlayIndex(0);
      setIsAutoPlaying(true);
    }
  };

  // Minigame check answers
  const handleCheckGameAnswer = () => {
    const currentVerb = filteredVerbs[gameQuestionIdx] || IRREGULAR_VERBS_100[gameQuestionIdx];
    if (!currentVerb) return;

    const norm = (s: string) => s.trim().toLowerCase().replace(/\s+/g, '');
    const cleanV2Correct = currentVerb.v2.toLowerCase().split('/').map(s => norm(s));
    const cleanV3Correct = currentVerb.v3.toLowerCase().split('/').map(s => norm(s));

    const isV2Correct = cleanV2Correct.includes(norm(v2Input));
    const isV3Correct = cleanV3Correct.includes(norm(v3Input));

    if (isV2Correct && isV3Correct) {
      setGameScore(prev => prev + 1);
    }

    setGameResult({
      checked: true,
      isV2Correct,
      isV3Correct
    });
  };

  const handleNextGameQuestion = () => {
    setV2Input('');
    setV3Input('');
    setGameResult(null);
    if (gameQuestionIdx + 1 < (filteredVerbs.length || IRREGULAR_VERBS_100.length)) {
      setGameQuestionIdx(prev => prev + 1);
    } else {
      setGameQuestionIdx(0);
    }
  };

  return (
    <div className="space-y-6">
      {/* Header & Feature Intro */}
      <div className="bg-white rounded-3xl p-6 sm:p-7 shadow-sm border border-slate-200 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="px-3 py-1 rounded-full text-xs font-bold bg-emerald-100 text-emerald-800 border border-emerald-200">
              Chuẩn ZIM Academy & SGK Lớp 7
            </span>
            <span className="text-xs text-slate-500">
              Đầy đủ 100 Động Từ Bất Quy Tắc Hay Gặp Nhất
            </span>
          </div>
          <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-slate-900 tracking-tight">
            100 Động Từ Bất Quy Tắc (Irregular Verbs)
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-2xl leading-relaxed">
            Hiển thị chuẩn 4 cột: <strong>V1 (Nguyên mẫu)</strong> - <strong>V2 (Quá khứ đơn)</strong> - <strong>V3 (Quá khứ phân từ)</strong> - <strong>Nghĩa tiếng Việt</strong>. 
            Nhấn nút <Volume2 className="w-3.5 h-3.5 inline text-indigo-600" /> để nghe đọc mẫu liên tục 3 cột kèm phiên âm IPA chuẩn để luyện Shadowing!
          </p>
        </div>

        {/* View Mode Tabs */}
        <div className="flex items-center p-1 bg-slate-100 rounded-2xl border border-slate-200/80 shrink-0">
          <button
            onClick={() => { setViewMode('table'); stopSpeaking(); setIsAutoPlaying(false); }}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
              viewMode === 'table'
                ? 'bg-white text-indigo-700 shadow-sm'
                : 'text-slate-600 hover:text-indigo-600'
            }`}
          >
            Bảng 4 Cột Tra Cứu
          </button>
          <button
            onClick={() => { setViewMode('flashcards'); stopSpeaking(); setIsAutoPlaying(false); }}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
              viewMode === 'flashcards'
                ? 'bg-white text-indigo-700 shadow-sm'
                : 'text-slate-600 hover:text-indigo-600'
            }`}
          >
            Thẻ Flashcards
          </button>
          <button
            onClick={() => { setViewMode('minigame'); stopSpeaking(); setIsAutoPlaying(false); }}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
              viewMode === 'minigame'
                ? 'bg-white text-indigo-700 shadow-sm'
                : 'text-slate-600 hover:text-indigo-600'
            }`}
          >
            Thử Thách Điền V2/V3
          </button>
        </div>
      </div>

      {/* QUICK LOOKUP SEARCH BOX & INSTANT RESULT CARD */}
      <div className="bg-gradient-to-br from-indigo-50/90 via-sky-50/50 to-white rounded-3xl p-6 sm:p-7 shadow-sm border border-indigo-200/80 space-y-5">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-indigo-600 text-white flex items-center justify-center shadow-md shadow-indigo-200">
              <Zap className="w-5 h-5 text-amber-300" />
            </div>
            <div>
              <h3 className="font-heading font-extrabold text-lg sm:text-xl text-slate-900 tracking-tight">
                Tra Cứu Nhanh Động Từ Bất Quy Tắc (Xem Ngay V1 - V2 - V3 & Nghĩa)
              </h3>
              <p className="text-xs text-slate-600">
                Nhập bất kỳ dạng nào (V1, V2, V3 hoặc nghĩa) để xem ngay đáp án tức thì mà không cần cuộn danh sách.
              </p>
            </div>
          </div>

          {copiedNotification && (
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-emerald-100 text-emerald-800 border border-emerald-300 animate-bounce">
              <Check className="w-3.5 h-3.5" />
              Đã sao chép!
            </span>
          )}
        </div>

        {/* Search Input Box */}
        <div className="relative">
          <Search className="w-5 h-5 text-indigo-500 absolute left-4 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={quickLookupTerm}
            onChange={(e) => {
              setQuickLookupTerm(e.target.value);
              // Also sync with table filter for convenience
              setSearchTerm(e.target.value);
            }}
            placeholder="Nhập động từ cần tra (ví dụ: go, went, gone, buy, bought, ăn, bắt đầu, viết, be, see...)"
            className="w-full pl-12 pr-10 py-3.5 rounded-2xl bg-white border-2 border-indigo-200/90 text-sm sm:text-base font-semibold text-slate-900 placeholder:text-slate-400 placeholder:font-normal shadow-sm focus:border-indigo-600 focus:ring-4 focus:ring-indigo-100 outline-hidden transition-all"
          />
          {quickLookupTerm && (
            <button
              onClick={() => {
                setQuickLookupTerm('');
                setSearchTerm('');
              }}
              title="Xóa tìm kiếm"
              className="absolute right-3.5 top-1/2 -translate-y-1/2 p-1.5 rounded-full hover:bg-slate-100 text-slate-400 hover:text-slate-600 transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>

        {/* Quick Suggestion Chips (Common Grade 7 verbs) */}
        <div className="flex flex-wrap items-center gap-1.5 text-xs">
          <span className="font-bold text-slate-500 mr-1">⚡ Tra nhanh từ hay gặp:</span>
          {[
            { word: 'go', label: 'go (đi)' },
            { word: 'see', label: 'see (nhìn thấy)' },
            { word: 'eat', label: 'eat (ăn)' },
            { word: 'buy', label: 'buy (mua)' },
            { word: 'write', label: 'write (viết)' },
            { word: 'be', label: 'be (thì, là, ở)' },
            { word: 'do', label: 'do (làm)' },
            { word: 'have', label: 'have (có)' },
            { word: 'take', label: 'take (cầm, lấy)' },
            { word: 'make', label: 'make (làm, chế tạo)' },
            { word: 'begin', label: 'begin (bắt đầu)' },
          ].map((item) => (
            <button
              key={item.word}
              onClick={() => {
                setQuickLookupTerm(item.word);
                setSearchTerm(item.word);
              }}
              className={`px-2.5 py-1 rounded-lg font-medium transition-all cursor-pointer ${
                quickLookupTerm.toLowerCase() === item.word
                  ? 'bg-indigo-600 text-white font-bold shadow-xs'
                  : 'bg-white/80 hover:bg-indigo-100 text-slate-700 border border-slate-200/80'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* Multiple Matches Suggestion Bar (When student typed something with multiple matches) */}
        {quickLookupMatches.length > 1 && (
          <div className="flex flex-wrap items-center gap-1.5 pt-1 text-xs">
            <span className="font-bold text-indigo-700 mr-1">
              Tìm thấy {quickLookupMatches.length} từ phù hợp:
            </span>
            {quickLookupMatches.slice(0, 8).map((match) => (
              <button
                key={match.stt}
                onClick={() => setActiveLookupVerb(match)}
                className={`px-2.5 py-1 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                  activeLookupVerb?.stt === match.stt
                    ? 'bg-indigo-600 text-white font-bold shadow-xs'
                    : 'bg-indigo-100/70 hover:bg-indigo-200 text-indigo-800'
                }`}
              >
                #{match.stt} {match.v1} ({match.v2})
              </button>
            ))}
            {quickLookupMatches.length > 8 && (
              <span className="text-[11px] text-slate-500 italic">
                +{quickLookupMatches.length - 8} từ khác...
              </span>
            )}
          </div>
        )}

        {/* INSTANT LOOKUP RESULT HERO CARD */}
        {activeLookupVerb && (
          <div className="bg-white rounded-2xl p-5 sm:p-6 border border-indigo-100 shadow-md relative overflow-hidden transition-all">
            <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-slate-100">
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-1 rounded-lg bg-indigo-100 text-indigo-800 text-xs font-bold font-mono">
                  STT #{activeLookupVerb.stt}
                </span>
                <span className="text-xs font-semibold text-slate-500">
                  Dạng quy luật: <strong className="text-indigo-600">{activeLookupVerb.pattern}</strong>
                </span>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => toggleFavorite(activeLookupVerb.stt)}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl border text-xs font-bold transition-all cursor-pointer ${
                    favoriteStts.includes(activeLookupVerb.stt)
                      ? 'bg-amber-50 text-amber-900 border-amber-300 shadow-xs'
                      : 'border-slate-200 hover:bg-slate-50 text-slate-700'
                  }`}
                  title={favoriteStts.includes(activeLookupVerb.stt) ? "Bỏ lưu từ này" : "Lưu từ vào danh sách cần ôn kỹ"}
                >
                  <Star className={`w-3.5 h-3.5 ${
                    favoriteStts.includes(activeLookupVerb.stt)
                      ? 'fill-amber-400 text-amber-500'
                      : 'text-slate-400'
                  }`} />
                  <span>
                    {favoriteStts.includes(activeLookupVerb.stt) ? 'Đã lưu (Cần ôn)' : 'Lưu yêu thích'}
                  </span>
                </button>

                <button
                  onClick={() => handleCopyVerbDetails(activeLookupVerb)}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-slate-200 hover:bg-slate-50 text-slate-600 text-xs font-semibold transition-colors cursor-pointer"
                  title="Sao chép thông tin từ này"
                >
                  <Copy className="w-3.5 h-3.5" />
                  <span>Sao chép</span>
                </button>

                <button
                  onClick={() => handlePronounceVerb(activeLookupVerb)}
                  className={`flex items-center gap-1.5 px-4 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                    currentlySpeakingStt === activeLookupVerb.stt
                      ? 'bg-amber-500 text-white shadow-md animate-pulse'
                      : 'bg-indigo-600 hover:bg-indigo-700 text-white shadow-sm'
                  }`}
                >
                  <Volume2 className="w-4 h-4" />
                  <span>
                    {currentlySpeakingStt === activeLookupVerb.stt
                      ? 'Đang đọc mẫu...'
                      : 'Phát âm 3 cột (V1 - V2 - V3)'}
                  </span>
                </button>
              </div>
            </div>

            {/* 4 Columns Presentation */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 my-4">
              {/* Col 1: V1 */}
              <div className="p-3.5 sm:p-4 rounded-xl bg-slate-50 border border-slate-200/80 text-center">
                <div className="text-[11px] font-bold uppercase text-slate-400 tracking-wider">
                  Nguyên Mẫu (V1)
                </div>
                <div className="font-heading font-extrabold text-2xl sm:text-3xl text-slate-900 mt-1">
                  {activeLookupVerb.v1}
                </div>
                <div className="font-mono text-xs text-indigo-600 font-semibold mt-0.5">
                  {activeLookupVerb.v1Ipa}
                </div>
              </div>

              {/* Col 2: V2 */}
              <div className="p-3.5 sm:p-4 rounded-xl bg-indigo-50/70 border border-indigo-200 text-center">
                <div className="text-[11px] font-bold uppercase text-indigo-600 tracking-wider">
                  Quá Khứ Đơn (V2)
                </div>
                <div className="font-heading font-extrabold text-2xl sm:text-3xl text-indigo-900 mt-1">
                  {activeLookupVerb.v2}
                </div>
                <div className="font-mono text-xs text-indigo-600 font-semibold mt-0.5">
                  {activeLookupVerb.v2Ipa}
                </div>
              </div>

              {/* Col 3: V3 */}
              <div className="p-3.5 sm:p-4 rounded-xl bg-sky-50/70 border border-sky-200 text-center">
                <div className="text-[11px] font-bold uppercase text-sky-600 tracking-wider">
                  Quá Khứ Phân Từ (V3)
                </div>
                <div className="font-heading font-extrabold text-2xl sm:text-3xl text-sky-900 mt-1">
                  {activeLookupVerb.v3}
                </div>
                <div className="font-mono text-xs text-sky-600 font-semibold mt-0.5">
                  {activeLookupVerb.v3Ipa}
                </div>
              </div>

              {/* Col 4: Nghĩa tiếng Việt */}
              <div className="p-3.5 sm:p-4 rounded-xl bg-amber-50/70 border border-amber-200 text-center flex flex-col justify-center">
                <div className="text-[11px] font-bold uppercase text-amber-700 tracking-wider">
                  Nghĩa Tiếng Việt
                </div>
                <div className="font-heading font-bold text-lg sm:text-xl text-amber-950 mt-1">
                  {activeLookupVerb.meaning}
                </div>
              </div>
            </div>

            {/* Example Sentence */}
            <div className="mt-3 p-3 bg-slate-50/80 rounded-xl border border-slate-200/60 text-xs sm:text-sm flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div>
                <span className="font-bold text-slate-700 mr-2">📖 Ví dụ câu:</span>
                <span className="font-semibold text-indigo-950">"{activeLookupVerb.example.en}"</span>
                <span className="text-slate-500 italic ml-2">— {activeLookupVerb.example.vi}</span>
              </div>
              <button
                onClick={() => pronounceSingle(activeLookupVerb.example.en)}
                className="inline-flex items-center gap-1 text-xs text-indigo-600 font-bold hover:underline shrink-0"
              >
                <Volume2 className="w-3.5 h-3.5" />
                <span>Nghe câu ví dụ</span>
              </button>
            </div>
          </div>
        )}
      </div>

      {/* FILTER & SHADOWING TOOLBAR */}
      <div className="bg-white rounded-2xl p-4 sm:p-5 shadow-xs border border-slate-200 space-y-4">
        {/* Top Controls: Search & Group Filters */}
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-3">
          {/* Search box */}
          <div className="relative grow max-w-md">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Tìm theo V1, V2, V3 hoặc nghĩa (ví dụ: begin, began, bắt đầu)..."
              className="w-full pl-10 pr-4 py-2 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm focus:bg-white focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200/50 outline-hidden"
            />
            {searchTerm && (
              <button 
                onClick={() => setSearchTerm('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-600"
              >
                Xóa
              </button>
            )}
          </div>

          {/* Autoplay Shadowing Mode & Speed */}
          <div className="flex flex-wrap items-center gap-2.5">
            {/* Speed toggle */}
            <div className="flex items-center gap-1 text-xs text-slate-600 bg-slate-50 px-2.5 py-1.5 rounded-xl border border-slate-200">
              <span className="font-semibold text-slate-500">Tốc độ đọc:</span>
              <button
                onClick={() => setSpeechRate(0.75)}
                className={`px-2 py-0.5 rounded-md font-bold transition-colors ${speechRate === 0.75 ? 'bg-indigo-600 text-white' : 'hover:bg-slate-200'}`}
              >
                0.75x (Chậm)
              </button>
              <button
                onClick={() => setSpeechRate(0.85)}
                className={`px-2 py-0.5 rounded-md font-bold transition-colors ${speechRate === 0.85 ? 'bg-indigo-600 text-white' : 'hover:bg-slate-200'}`}
              >
                0.85x (Chuẩn)
              </button>
              <button
                onClick={() => setSpeechRate(1.0)}
                className={`px-2 py-0.5 rounded-md font-bold transition-colors ${speechRate === 1.0 ? 'bg-indigo-600 text-white' : 'hover:bg-slate-200'}`}
              >
                1.0x (Nhanh)
              </button>
            </div>

            {/* Continuous Shadowing Autoplay Button */}
            <button
              onClick={toggleAutoplay}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-bold shadow-xs transition-all cursor-pointer ${
                isAutoPlaying
                  ? 'bg-rose-500 hover:bg-rose-600 text-white animate-pulse'
                  : 'bg-indigo-600 hover:bg-indigo-700 text-white'
              }`}
            >
              {isAutoPlaying ? (
                <>
                  <Pause className="w-4 h-4" />
                  <span>Dừng Shadowing (Đang đọc từ #{autoPlayIndex + 1})</span>
                </>
              ) : (
                <>
                  <Play className="w-4 h-4 fill-white" />
                  <span>Tự Động Đọc Lần Lượt (Shadowing)</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Group Filter Tabs (1-20, 21-40, 41-60, 61-80, 81-100) */}
        <div className="flex flex-wrap items-center gap-1.5 pt-2 border-t border-slate-100">
          <span className="text-xs font-bold text-slate-500 mr-1 flex items-center gap-1">
            <Filter className="w-3.5 h-3.5" />
            Nhóm từ:
          </span>
          {[
            { id: 'all', label: 'Tất cả (100 từ)' },
            { id: 'favorites', label: `⭐ Từ yêu thích / Cần ôn (${favoriteStts.length})`, highlight: true },
            { id: '1-20', label: 'Nhóm 1 (1 - 20: be -> dream)' },
            { id: '21-40', label: 'Nhóm 2 (21 - 40: drink -> hide)' },
            { id: '41-60', label: 'Nhóm 3 (41 - 60: hit -> read)' },
            { id: '61-80', label: 'Nhóm 4 (61 - 80: ride -> spend)' },
            { id: '81-100', label: 'Nhóm 5 (81 - 100: stand -> spell)' },
          ].map((grp) => (
            <button
              key={grp.id}
              onClick={() => { setSelectedGroup(grp.id); setAutoPlayIndex(0); }}
              className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                selectedGroup === grp.id
                  ? grp.id === 'favorites'
                    ? 'bg-amber-500 text-white shadow-xs font-bold'
                    : 'bg-indigo-600 text-white shadow-xs'
                  : grp.id === 'favorites'
                    ? 'bg-amber-50 text-amber-900 border border-amber-300 font-bold hover:bg-amber-100'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200/80'
              }`}
            >
              {grp.label}
            </button>
          ))}

          {selectedGroup === 'favorites' && favoriteStts.length > 0 && (
            <div className="ml-auto flex items-center gap-1.5">
              {confirmingClearFavorites ? (
                <div className="flex items-center gap-1 text-xs bg-rose-50 border border-rose-200 rounded-xl px-2 py-1">
                  <span className="text-rose-700 font-medium">Xóa hết?</span>
                  <button
                    onClick={handleClearFavorites}
                    className="px-2 py-0.5 bg-rose-600 hover:bg-rose-700 text-white rounded-lg font-bold cursor-pointer"
                  >
                    Xóa
                  </button>
                  <button
                    onClick={() => setConfirmingClearFavorites(false)}
                    className="px-2 py-0.5 bg-slate-200 hover:bg-slate-300 text-slate-700 rounded-lg cursor-pointer"
                  >
                    Hủy
                  </button>
                </div>
              ) : (
                <button
                  onClick={() => setConfirmingClearFavorites(true)}
                  className="inline-flex items-center gap-1 px-2.5 py-1 rounded-xl text-xs font-semibold text-rose-600 hover:bg-rose-50 border border-rose-200 transition-colors cursor-pointer"
                  title="Xóa tất cả các từ trong danh sách yêu thích"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                  <span>Xóa tất cả</span>
                </button>
              )}
            </div>
          )}
        </div>
      </div>

      {/* VIEW 1: TABLE VIEW (4 COLUMNS) */}
      {viewMode === 'table' && (
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-gradient-to-r from-slate-50 to-indigo-50/50 border-b border-slate-200 text-xs font-bold uppercase tracking-wider text-slate-600">
                  <th className="py-3.5 px-3 w-12 text-center" title="Lưu từ vào danh sách yêu thích">⭐</th>
                  <th className="py-3.5 px-4 w-16 text-center">STT</th>
                  <th className="py-3.5 px-4">Nguyên Mẫu (V1)</th>
                  <th className="py-3.5 px-4">Quá Khứ Đơn (V2)</th>
                  <th className="py-3.5 px-4">Quá Khứ Phân Từ (V3)</th>
                  <th className="py-3.5 px-4">Nghĩa Tiếng Việt</th>
                  <th className="py-3.5 px-4 text-center w-36">Phát Âm 3 Cột</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-sm">
                {filteredVerbs.length === 0 ? (
                  <tr>
                    <td colSpan={7} className="py-12 text-center text-slate-500">
                      {selectedGroup === 'favorites' ? (
                        <div className="max-w-md mx-auto space-y-3">
                          <div className="w-12 h-12 rounded-2xl bg-amber-100 text-amber-600 flex items-center justify-center mx-auto text-2xl">
                            ⭐
                          </div>
                          <h4 className="font-heading font-bold text-base text-slate-800">
                            Chưa có động từ nào trong danh sách yêu thích!
                          </h4>
                          <p className="text-xs text-slate-500 leading-relaxed">
                            Em hãy bấm vào biểu tượng ngôi sao <Star className="w-3.5 h-3.5 inline fill-amber-400 text-amber-500" /> ở mỗi hàng hoặc ở thẻ tra cứu nhanh để lưu lại các động từ khó cần ôn kỹ nhé!
                          </p>
                          <button
                            onClick={() => setSelectedGroup('all')}
                            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-indigo-600 text-white text-xs font-bold hover:bg-indigo-700 transition-colors cursor-pointer"
                          >
                            <span>Xem tất cả 100 từ</span>
                          </button>
                        </div>
                      ) : (
                        <span>Không tìm thấy động từ nào phù hợp với "{searchTerm}".</span>
                      )}
                    </td>
                  </tr>
                ) : (
                  filteredVerbs.map((verb) => {
                    const isSpeakingThis = currentlySpeakingStt === verb.stt;
                    const isFavorited = favoriteStts.includes(verb.stt);

                    return (
                      <tr 
                        key={verb.stt}
                        className={`transition-colors group hover:bg-indigo-50/40 ${
                          isSpeakingThis ? 'bg-amber-50/70' : ''
                        }`}
                      >
                        {/* Toggle Favorite Star Button */}
                        <td className="py-3.5 px-3 text-center">
                          <button
                            onClick={() => toggleFavorite(verb.stt)}
                            title={isFavorited ? "Bỏ lưu khỏi danh sách yêu thích" : "Lưu vào danh sách từ khó cần ôn kỹ"}
                            className="p-1.5 rounded-lg hover:bg-amber-100/70 transition-transform active:scale-90 cursor-pointer"
                          >
                            <Star className={`w-4 h-4 transition-colors ${
                              isFavorited
                                ? 'fill-amber-400 text-amber-500'
                                : 'text-slate-300 hover:text-amber-400'
                            }`} />
                          </button>
                        </td>

                        {/* STT */}
                        <td className="py-3.5 px-4 text-center font-mono text-xs font-bold text-slate-400">
                          {verb.stt}
                        </td>

                        {/* V1 + IPA */}
                        <td className="py-3.5 px-4">
                          <div className="flex flex-col">
                            <span className="font-heading font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">
                              {verb.v1}
                            </span>
                            <span className="text-[11px] font-mono text-slate-400">
                              {verb.v1Ipa}
                            </span>
                          </div>
                        </td>

                        {/* V2 + IPA */}
                        <td className="py-3.5 px-4">
                          <div className="flex flex-col">
                            <span className="font-heading font-bold text-indigo-700">
                              {verb.v2}
                            </span>
                            <span className="text-[11px] font-mono text-slate-400">
                              {verb.v2Ipa}
                            </span>
                          </div>
                        </td>

                        {/* V3 + IPA */}
                        <td className="py-3.5 px-4">
                          <div className="flex flex-col">
                            <span className="font-heading font-bold text-sky-700">
                              {verb.v3}
                            </span>
                            <span className="text-[11px] font-mono text-slate-400">
                              {verb.v3Ipa}
                            </span>
                          </div>
                        </td>

                        {/* Nghĩa tiếng Việt */}
                        <td className="py-3.5 px-4">
                          <span className="font-medium text-slate-700">
                            {verb.meaning}
                          </span>
                        </td>

                        {/* Action: Phát âm 3 cột liên tục */}
                        <td className="py-3.5 px-4 text-center">
                          <button
                            onClick={() => handlePronounceVerb(verb)}
                            title="Nghe đọc liên tục 3 cột: V1 - V2 - V3"
                            className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                              isSpeakingThis
                                ? 'bg-amber-500 text-white shadow-md animate-pulse'
                                : 'bg-slate-100 hover:bg-indigo-600 hover:text-white text-slate-700'
                            }`}
                          >
                            <Volume2 className="w-3.5 h-3.5" />
                            <span>{isSpeakingThis ? 'Đang đọc...' : 'Đọc 3 cột'}</span>
                          </button>
                        </td>
                      </tr>
                    );
                  })
                )}
              </tbody>
            </table>
          </div>

          {/* Footer note */}
          <div className="p-4 bg-slate-50 border-t border-slate-200 text-xs text-slate-500 flex flex-col sm:flex-row items-center justify-between gap-2">
            <div>
              Hiển thị <strong>{filteredVerbs.length}</strong> / 100 động từ {selectedGroup === 'favorites' ? '(trong danh sách yêu thích)' : 'chuẩn'}.
            </div>
            <div className="text-slate-400">
              💡 Mẹo: Bấm ngôi sao ⭐ để lưu lại các từ hay nhầm lẫn và ôn lại trước ngày kiểm tra!
            </div>
          </div>
        </div>
      )}

      {/* VIEW 2: FLASHCARD MODE */}
      {viewMode === 'flashcards' && (
        <div className="max-w-xl mx-auto space-y-6">
          <div className="text-center">
            <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
              Thẻ Ghi Nhớ Lớp 7 ({cardIndex + 1} / {filteredVerbs.length})
            </span>
          </div>

          {(() => {
            const verb = filteredVerbs[cardIndex] || filteredVerbs[0];
            if (!verb) {
              return (
                <div className="p-8 text-center bg-white rounded-3xl border border-slate-200 space-y-3">
                  <div className="text-3xl">⭐</div>
                  <h4 className="font-heading font-bold text-base text-slate-800">
                    Danh sách yêu thích đang trống!
                  </h4>
                  <p className="text-xs text-slate-500">
                    Hãy lưu một số từ khó vào danh sách yêu thích để luyện thẻ ghi nhớ nhé.
                  </p>
                  <button
                    onClick={() => setSelectedGroup('all')}
                    className="px-4 py-2 bg-indigo-600 text-white rounded-xl text-xs font-bold"
                  >
                    Xem tất cả từ
                  </button>
                </div>
              );
            }

            const isCardFavorited = favoriteStts.includes(verb.stt);

            return (
              <div 
                onClick={() => setIsFlipped(!isFlipped)}
                className="relative h-72 sm:h-80 w-full rounded-3xl bg-gradient-to-br from-indigo-600 to-sky-700 text-white p-8 shadow-xl flex flex-col items-center justify-between text-center cursor-pointer select-none transition-all duration-300 hover:scale-[1.01]"
              >
                <div className="w-full flex justify-between items-center text-xs opacity-85">
                  <div className="flex items-center gap-2">
                    <span>Từ #{verb.stt}</span>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleFavorite(verb.stt);
                      }}
                      className="p-1 rounded-full bg-white/10 hover:bg-white/20 transition-transform active:scale-90"
                      title={isCardFavorited ? "Bỏ lưu từ này" : "Lưu vào danh sách cần ôn kỹ"}
                    >
                      <Star className={`w-4 h-4 ${isCardFavorited ? 'fill-amber-400 text-amber-400' : 'text-white/60 hover:text-white'}`} />
                    </button>
                  </div>
                  <span>Bấm vào thẻ để lật mặt sau 🔄</span>
                </div>

                {!isFlipped ? (
                  /* Mặt trước: V1 và Nghĩa */
                  <div className="space-y-3">
                    <span className="text-xs uppercase font-bold tracking-widest text-amber-300">
                      Nguyên Mẫu (V1)
                    </span>
                    <h3 className="font-heading text-4xl sm:text-5xl font-extrabold tracking-tight">
                      {verb.v1}
                    </h3>
                    <p className="font-mono text-indigo-200 text-base">
                      {verb.v1Ipa}
                    </p>
                    <div className="mt-4 px-4 py-1.5 rounded-full bg-white/15 backdrop-blur-md text-sm font-semibold">
                      {verb.meaning}
                    </div>
                  </div>
                ) : (
                  /* Mặt sau: V2, V3 & Ví dụ */
                  <div className="space-y-4">
                    <span className="text-xs uppercase font-bold tracking-widest text-emerald-300">
                      Quá Khứ Đơn (V2) & Phân Từ (V3)
                    </span>
                    <div className="grid grid-cols-2 gap-6 bg-white/10 rounded-2xl p-4 backdrop-blur-md">
                      <div>
                        <div className="text-[11px] uppercase opacity-75 font-semibold">V2 (Quá khứ)</div>
                        <div className="font-heading font-black text-2xl text-amber-200">{verb.v2}</div>
                        <div className="font-mono text-xs opacity-80">{verb.v2Ipa}</div>
                      </div>
                      <div>
                        <div className="text-[11px] uppercase opacity-75 font-semibold">V3 (Phân từ)</div>
                        <div className="font-heading font-black text-2xl text-sky-200">{verb.v3}</div>
                        <div className="font-mono text-xs opacity-80">{verb.v3Ipa}</div>
                      </div>
                    </div>
                    <div className="text-xs text-indigo-100 italic bg-black/15 p-2.5 rounded-xl">
                      "{verb.example.en}" — {verb.example.vi}
                    </div>
                  </div>
                )}

                <div className="w-full flex justify-between items-center pt-2">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handlePronounceVerb(verb);
                    }}
                    className="p-2.5 bg-white/20 hover:bg-white/30 rounded-full transition-transform hover:scale-110"
                    title="Nghe phát âm 3 cột"
                  >
                    <Volume2 className="w-5 h-5" />
                  </button>

                  <span className="text-xs font-semibold opacity-80">
                    {isFlipped ? "Đã lật xem đáp án" : "Chạm để xem V2 & V3"}
                  </span>
                </div>
              </div>
            );
          })()}

          {/* Flashcard Navigation */}
          <div className="flex items-center justify-center gap-4">
            <button
              onClick={() => {
                setIsFlipped(false);
                setCardIndex(prev => (prev > 0 ? prev - 1 : filteredVerbs.length - 1));
              }}
              className="px-5 py-2.5 rounded-xl bg-white border border-slate-200 font-bold text-slate-700 text-sm hover:bg-slate-50 cursor-pointer shadow-xs"
            >
              ← Từ trước
            </button>
            <button
              onClick={() => {
                setIsFlipped(false);
                setCardIndex(prev => (prev + 1 < filteredVerbs.length ? prev + 1 : 0));
              }}
              className="px-6 py-2.5 rounded-xl bg-indigo-600 font-bold text-white text-sm hover:bg-indigo-700 cursor-pointer shadow-md shadow-indigo-200"
            >
              Từ tiếp theo →
            </button>
          </div>
        </div>
      )}

      {/* VIEW 3: MINIGAME (ĐIỀN V2 & V3) */}
      {viewMode === 'minigame' && (
        <div className="max-w-xl mx-auto bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-slate-200 space-y-6">
          <div className="flex items-center justify-between border-b border-slate-100 pb-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-indigo-600">
                Trò Chơi Rèn Luyện
              </span>
              <h3 className="font-heading font-extrabold text-xl text-slate-900">
                Thử Thách Điền V2 & V3
              </h3>
            </div>
            <div className="flex items-center gap-2 bg-amber-50 border border-amber-200 px-3.5 py-1.5 rounded-full">
              <Award className="w-4 h-4 text-amber-600" />
              <span className="text-xs font-bold text-amber-900">
                Điểm: {gameScore}
              </span>
            </div>
          </div>

          {(() => {
            const currentVerb = filteredVerbs[gameQuestionIdx] || IRREGULAR_VERBS_100[0];

            return (
              <div className="space-y-6">
                {/* Question Prompt */}
                <div className="bg-gradient-to-br from-indigo-50 to-sky-50 rounded-2xl p-6 text-center border border-indigo-100">
                  <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                    Động từ nguyên mẫu (V1)
                  </span>
                  <div className="font-heading text-4xl font-extrabold text-indigo-900 my-1">
                    {currentVerb.v1}
                  </div>
                  <div className="text-sm font-semibold text-slate-600">
                    Nghĩa: <span className="text-slate-900 font-bold">{currentVerb.meaning}</span>
                  </div>
                </div>

                {/* Input Fields for V2 & V3 */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* V2 Input */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-700">
                      Điền Quá Khứ Đơn (V2):
                    </label>
                    <input
                      type="text"
                      disabled={gameResult?.checked}
                      value={v2Input}
                      onChange={(e) => setV2Input(e.target.value)}
                      placeholder="Ví dụ: went, ate..."
                      className={`w-full px-4 py-2.5 rounded-xl border text-sm font-bold ${
                        gameResult?.checked
                          ? gameResult.isV2Correct
                            ? 'bg-emerald-50 border-emerald-300 text-emerald-900'
                            : 'bg-rose-50 border-rose-300 text-rose-900'
                          : 'bg-slate-50 border-slate-300 focus:bg-white focus:border-indigo-500'
                      }`}
                    />
                    {gameResult?.checked && !gameResult.isV2Correct && (
                      <p className="text-xs text-rose-600 font-medium">
                        Đáp án đúng: <strong>{currentVerb.v2}</strong>
                      </p>
                    )}
                  </div>

                  {/* V3 Input */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-700">
                      Điền Quá Khứ Phân Từ (V3):
                    </label>
                    <input
                      type="text"
                      disabled={gameResult?.checked}
                      value={v3Input}
                      onChange={(e) => setV3Input(e.target.value)}
                      placeholder="Ví dụ: gone, eaten..."
                      className={`w-full px-4 py-2.5 rounded-xl border text-sm font-bold ${
                        gameResult?.checked
                          ? gameResult.isV3Correct
                            ? 'bg-emerald-50 border-emerald-300 text-emerald-900'
                            : 'bg-rose-50 border-rose-300 text-rose-900'
                          : 'bg-slate-50 border-slate-300 focus:bg-white focus:border-indigo-500'
                      }`}
                    />
                    {gameResult?.checked && !gameResult.isV3Correct && (
                      <p className="text-xs text-rose-600 font-medium">
                        Đáp án đúng: <strong>{currentVerb.v3}</strong>
                      </p>
                    )}
                  </div>
                </div>

                {/* Result announcement */}
                {gameResult?.checked && (
                  <div className={`p-4 rounded-xl flex items-center gap-3 ${
                    gameResult.isV2Correct && gameResult.isV3Correct
                      ? 'bg-emerald-50 text-emerald-800 border border-emerald-200'
                      : 'bg-amber-50 text-amber-800 border border-amber-200'
                  }`}>
                    {gameResult.isV2Correct && gameResult.isV3Correct ? (
                      <>
                        <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                        <span className="text-xs sm:text-sm font-bold">
                          Chính xác 100%! Em nhớ từ rất tốt (+1 Điểm)!
                        </span>
                      </>
                    ) : (
                      <>
                        <XCircle className="w-5 h-5 text-amber-600 shrink-0" />
                        <span className="text-xs sm:text-sm font-semibold">
                          Chưa chính xác rồi. Hãy nhớ lại: {currentVerb.v1} - {currentVerb.v2} - {currentVerb.v3}!
                        </span>
                      </>
                    )}
                  </div>
                )}

                {/* Buttons */}
                <div className="flex items-center justify-between pt-2">
                  <button
                    onClick={() => handlePronounceVerb(currentVerb)}
                    className="flex items-center gap-1.5 text-xs font-bold text-slate-600 hover:text-indigo-600 cursor-pointer"
                  >
                    <Volume2 className="w-4 h-4" />
                    <span>Nghe phát âm chuẩn</span>
                  </button>

                  {!gameResult?.checked ? (
                    <button
                      onClick={handleCheckGameAnswer}
                      className="px-6 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-sm shadow-md shadow-indigo-200 cursor-pointer"
                    >
                      Kiểm tra đáp án
                    </button>
                  ) : (
                    <button
                      onClick={handleNextGameQuestion}
                      className="px-6 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow-md shadow-emerald-200 cursor-pointer"
                    >
                      Từ tiếp theo →
                    </button>
                  )}
                </div>
              </div>
            );
          })()}
        </div>
      )}
    </div>
  );
};
