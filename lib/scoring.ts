import { Question, ScoreMap, TestResult, MBTIType, EnneagramType, AttachmentType, UserAnswers, BigFiveScores } from './types';
import { questions } from './questions';

const EMPTY_SCORES: ScoreMap = {
  EI: 0, SN: 0, TF: 0, JP: 0,
  O: 0, C: 0, E: 0, A: 0, N: 0,
  E1: 0, E2: 0, E3: 0, E4: 0, E5: 0, E6: 0, E7: 0, E8: 0, E9: 0,
  secure: 0, anxious: 0, avoidant: 0, disorganized: 0,
};

export function computeScores(answers: UserAnswers): ScoreMap {
  const scores: ScoreMap = { ...EMPTY_SCORES };

  questions.forEach((q: Question) => {
    const chosenIndex = answers[q.id];
    if (chosenIndex === undefined) return;
    const option = q.options[chosenIndex];
    if (!option) return;

    (Object.keys(option.scores) as (keyof ScoreMap)[]).forEach((key) => {
      scores[key] += option.scores[key] ?? 0;
    });
  });

  return scores;
}

export function deriveMBTI(s: ScoreMap): MBTIType {
  const e = s.EI >= 0 ? 'E' : 'I';
  const n = s.SN >= 0 ? 'S' : 'N';
  const t = s.TF >= 0 ? 'T' : 'F';
  const j = s.JP >= 0 ? 'J' : 'P';
  return `${e}${n}${t}${j}` as MBTIType;
}

function normalize(value: number, min: number, max: number): number {
  const clamped = Math.max(min, Math.min(max, value));
  return Math.round(((clamped - min) / (max - min)) * 100);
}

export function deriveBigFive(s: ScoreMap): BigFiveScores {
  return {
    O: normalize(s.O, -4, 8),
    C: normalize(s.C, -4, 8),
    E: normalize(s.E, -4, 6),
    A: normalize(s.A, -3, 7),
    N: normalize(s.N, -3, 6),
  };
}

export function deriveEnneagram(s: ScoreMap): { type: EnneagramType; wing: EnneagramType } {
  const typeScores: [EnneagramType, number][] = [
    [1, s.E1], [2, s.E2], [3, s.E3], [4, s.E4], [5, s.E5],
    [6, s.E6], [7, s.E7], [8, s.E8], [9, s.E9],
  ];
  typeScores.sort((a, b) => b[1] - a[1]);
  const mainType = typeScores[0][0];

  // Wing is adjacent type on the enneagram circle with highest score
  const prev = mainType === 1 ? 9 : (mainType - 1) as EnneagramType;
  const next = mainType === 9 ? 1 : (mainType + 1) as EnneagramType;
  const wing = s[`E${prev}` as keyof ScoreMap] >= s[`E${next}` as keyof ScoreMap] ? prev : next;

  return { type: mainType, wing };
}

export function deriveAttachment(s: ScoreMap): AttachmentType {
  const scores: [AttachmentType, number][] = [
    ['secure', s.secure],
    ['anxious', s.anxious],
    ['avoidant', s.avoidant],
    ['disorganized', s.disorganized],
  ];
  scores.sort((a, b) => b[1] - a[1]);
  return scores[0][0];
}

export function computeResult(answers: UserAnswers): TestResult {
  const raw = computeScores(answers);
  const mbti = deriveMBTI(raw);
  const bigFive = deriveBigFive(raw);
  const { type: enneagram, wing: enneagramWing } = deriveEnneagram(raw);
  const attachment = deriveAttachment(raw);

  return { mbti, bigFive, enneagram, enneagramWing, attachment, rawScores: raw };
}
