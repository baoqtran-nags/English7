export interface GrammarQuestion {
  id: number;
  sentenceWithBlank: string;
  verbPrompt: string;
  tense: 'Present Simple' | 'Past Simple' | 'Present Continuous';
  form: 'Khẳng định (+)' | 'Phủ định (-)' | 'Nghi vấn (?)';
  verbType: 'Động từ to be' | 'Động từ thường';
  correctAnswers: string[];
  explanation: {
    signalWord: string;
    structure: string;
    translation: string;
  };
}

export interface UserAnswerRecord {
  questionId: number;
  userAnswer: string;
  isCorrect: boolean;
  correctAnswer: string;
  explanation: {
    signalWord: string;
    structure: string;
    translation: string;
  };
}

export type ActiveTab = 'quiz' | 'irregular_verbs' | 'tense_study' | 'ask_teacher';

export type EyeCareTheme = 'warm' | 'sage' | 'night';
