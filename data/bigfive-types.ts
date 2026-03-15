export interface BigFiveDimension {
  name: { ko: string; en: string };
  highLabel: { ko: string; en: string };
  lowLabel: { ko: string; en: string };
  highDesc: { ko: string; en: string };
  lowDesc: { ko: string; en: string };
  color: string;
}

export const bigFiveDimensions: Record<'O' | 'C' | 'E' | 'A' | 'N', BigFiveDimension> = {
  O: {
    name: { ko: '개방성', en: 'Openness' },
    highLabel: { ko: '상상력이 풍부한', en: 'Imaginative' },
    lowLabel: { ko: '현실적인', en: 'Practical' },
    highDesc: { ko: '새로운 경험을 적극적으로 추구하고 창의적 사고를 즐깁니다.', en: 'Actively seeks new experiences and enjoys creative thinking.' },
    lowDesc: { ko: '실용적이고 구체적인 것을 선호하며 변화보다 안정을 추구합니다.', en: 'Prefers practical and concrete things, seeking stability over change.' },
    color: '#7c3aed',
  },
  C: {
    name: { ko: '성실성', en: 'Conscientiousness' },
    highLabel: { ko: '체계적인', en: 'Organized' },
    lowLabel: { ko: '즉흥적인', en: 'Spontaneous' },
    highDesc: { ko: '목표 지향적이고 자기 통제력이 강하며 책임감이 높습니다.', en: 'Goal-oriented with strong self-control and a high sense of responsibility.' },
    lowDesc: { ko: '유연하고 자유로우며 규칙보다 흐름을 따르는 경향이 있습니다.', en: 'Flexible and free-spirited, tending to go with the flow rather than follow rules.' },
    color: '#2563eb',
  },
  E: {
    name: { ko: '외향성', en: 'Extraversion' },
    highLabel: { ko: '사교적인', en: 'Sociable' },
    lowLabel: { ko: '내향적인', en: 'Introverted' },
    highDesc: { ko: '사람들과의 교류에서 에너지를 얻고 적극적으로 관계를 형성합니다.', en: 'Gains energy from social interactions and actively builds relationships.' },
    lowDesc: { ko: '혼자만의 시간으로 에너지를 충전하며 깊은 관계를 선호합니다.', en: 'Recharges with alone time and prefers deep, meaningful relationships.' },
    color: '#16a34a',
  },
  A: {
    name: { ko: '친화성', en: 'Agreeableness' },
    highLabel: { ko: '배려하는', en: 'Caring' },
    lowLabel: { ko: '독립적인', en: 'Independent' },
    highDesc: { ko: '타인과의 조화를 중시하고 협력적이며 공감 능력이 뛰어납니다.', en: 'Values harmony with others, cooperative, and highly empathetic.' },
    lowDesc: { ko: '독립적이고 비판적이며 자신의 관점을 분명히 표현합니다.', en: 'Independent and analytical, clearly expresses their own perspective.' },
    color: '#d97706',
  },
  N: {
    name: { ko: '신경성', en: 'Neuroticism' },
    highLabel: { ko: '감수성 높은', en: 'Sensitive' },
    lowLabel: { ko: '안정적인', en: 'Stable' },
    highDesc: { ko: '감정적으로 예민하고 스트레스 상황에 민감하게 반응합니다.', en: 'Emotionally sensitive and reacts strongly to stressful situations.' },
    lowDesc: { ko: '감정적으로 안정적이며 스트레스 상황에서도 침착함을 유지합니다.', en: 'Emotionally stable and maintains composure even under stress.' },
    color: '#dc2626',
  },
};

export function getBigFiveLabel(score: number, lang: 'ko' | 'en' = 'ko'): string {
  const labels = {
    ko: ['매우 낮음', '낮음', '보통', '높음', '매우 높음'],
    en: ['Very Low', 'Low', 'Average', 'High', 'Very High'],
  };
  const l = labels[lang];
  if (score >= 75) return l[4];
  if (score >= 55) return l[3];
  if (score >= 40) return l[2];
  if (score >= 25) return l[1];
  return l[0];
}
