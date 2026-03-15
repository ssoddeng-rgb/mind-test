// ─── Answer Option ────────────────────────────────────────────────────────────
export interface AnswerOption {
  text: string;
  scores: Partial<ScoreMap>;
}

// ─── Question ─────────────────────────────────────────────────────────────────
export interface Question {
  id: number;
  text: string;
  framework: 'mbti' | 'bigfive' | 'enneagram' | 'attachment';
  options: [AnswerOption, AnswerOption, AnswerOption, AnswerOption];
}

// ─── Score Map ─────────────────────────────────────────────────────────────────
export interface ScoreMap {
  // MBTI dimensions (positive = first letter, negative = second)
  EI: number; // E > 0, I < 0
  SN: number; // S > 0, N < 0
  TF: number; // T > 0, F < 0
  JP: number; // J > 0, P < 0

  // Big Five (0–10 each)
  O: number; // Openness
  C: number; // Conscientiousness
  E: number; // Extraversion
  A: number; // Agreeableness
  N: number; // Neuroticism

  // Enneagram types (1–9, add to whichever type)
  E1: number; E2: number; E3: number; E4: number; E5: number;
  E6: number; E7: number; E8: number; E9: number;

  // Attachment styles
  secure: number;
  anxious: number;
  avoidant: number;
  disorganized: number;
}

// ─── Results ──────────────────────────────────────────────────────────────────
export type MBTIType =
  | 'INTJ' | 'INTP' | 'ENTJ' | 'ENTP'
  | 'INFJ' | 'INFP' | 'ENFJ' | 'ENFP'
  | 'ISTJ' | 'ISFJ' | 'ESTJ' | 'ESFJ'
  | 'ISTP' | 'ISFP' | 'ESTP' | 'ESFP';

export type EnneagramType = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;
export type AttachmentType = 'secure' | 'anxious' | 'avoidant' | 'disorganized';

export interface BigFiveScores {
  O: number; C: number; E: number; A: number; N: number;
}

export interface TestResult {
  mbti: MBTIType;
  bigFive: BigFiveScores;
  enneagram: EnneagramType;
  enneagramWing: EnneagramType;
  attachment: AttachmentType;
  rawScores: ScoreMap;
}

// ─── User Answers ──────────────────────────────────────────────────────────────
export type UserAnswers = Record<number, number>; // questionId → optionIndex (0–3)
