/**
 * Utility for pronouncing English irregular verbs and examples
 * using Web Speech API (speechSynthesis)
 */

let synth: SpeechSynthesis | null = null;
if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
  synth = window.speechSynthesis;
}

export function getEnglishVoice(lang: 'en-US' | 'en-GB' = 'en-US'): SpeechSynthesisVoice | null {
  if (!synth) return null;
  const voices = synth.getVoices();
  // Try finding voice with preferred language
  const match = voices.find(v => v.lang === lang || v.lang.replace('_', '-').startsWith(lang));
  if (match) return match;
  // Fallback to any English voice
  return voices.find(v => v.lang.startsWith('en')) || null;
}

export interface PronounceOptions {
  rate?: number; // 0.75 - 1.0
  lang?: 'en-US' | 'en-GB';
  onStart?: () => void;
  onEnd?: () => void;
  onError?: () => void;
}

/**
 * Pronounces 3 columns sequentially: V1, then V2, then V3
 * e.g., "begin ... began ... begun"
 */
export function pronounceThreeForms(
  v1: string,
  v2: string,
  v3: string,
  options: PronounceOptions = {}
): void {
  if (!synth) {
    console.warn('SpeechSynthesis is not supported in this browser.');
    options.onEnd?.();
    return;
  }

  // Cancel any ongoing speech
  synth.cancel();

  const rate = options.rate ?? 0.85; // Slightly slower for clear 7th-grade learner shadowing
  const lang = options.lang ?? 'en-US';

  // Format text with commas for natural micro-pauses between the three forms
  // Also clean slashes like was/were -> was or were for pronunciation
  const cleanV2 = v2.replace(/\//g, ' or ');
  const cleanV3 = v3.replace(/\//g, ' or ');
  const speechText = `${v1}, ... ${cleanV2}, ... ${cleanV3}`;

  const utterance = new SpeechSynthesisUtterance(speechText);
  utterance.lang = lang;
  utterance.rate = rate;
  utterance.pitch = 1.0;

  const voice = getEnglishVoice(lang);
  if (voice) {
    utterance.voice = voice;
  }

  utterance.onstart = () => {
    options.onStart?.();
  };

  utterance.onend = () => {
    options.onEnd?.();
  };

  utterance.onerror = (e) => {
    console.warn('Speech error:', e);
    options.onError?.();
    options.onEnd?.();
  };

  synth.speak(utterance);
}

/**
 * Pronounces a single sentence or word
 */
export function pronounceSingle(
  text: string,
  options: PronounceOptions = {}
): void {
  if (!synth) {
    options.onEnd?.();
    return;
  }

  synth.cancel();
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = options.lang ?? 'en-US';
  utterance.rate = options.rate ?? 0.9;

  const voice = getEnglishVoice(utterance.lang as 'en-US' | 'en-GB');
  if (voice) {
    utterance.voice = voice;
  }

  utterance.onstart = () => options.onStart?.();
  utterance.onend = () => options.onEnd?.();
  utterance.onerror = () => {
    options.onError?.();
    options.onEnd?.();
  };

  synth.speak(utterance);
}

export function stopSpeaking(): void {
  if (synth) {
    synth.cancel();
  }
}
