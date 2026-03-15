export interface BigFiveDimension {
  name: string;
  highLabel: string;
  lowLabel: string;
  highDesc: string;
  lowDesc: string;
  color: string;
}

export const bigFiveDimensions: Record<'O' | 'C' | 'E' | 'A' | 'N', BigFiveDimension> = {
  O: {
    name: '개방성',
    highLabel: '상상력이 풍부한',
    lowLabel: '현실적인',
    highDesc: '새로운 경험을 적극적으로 추구하고 창의적 사고를 즐깁니다.',
    lowDesc: '실용적이고 구체적인 것을 선호하며 변화보다 안정을 추구합니다.',
    color: '#7c3aed',
  },
  C: {
    name: '성실성',
    highLabel: '체계적인',
    lowLabel: '즉흥적인',
    highDesc: '목표 지향적이고 자기 통제력이 강하며 책임감이 높습니다.',
    lowDesc: '유연하고 자유로우며 규칙보다 흐름을 따르는 경향이 있습니다.',
    color: '#2563eb',
  },
  E: {
    name: '외향성',
    highLabel: '사교적인',
    lowLabel: '내향적인',
    highDesc: '사람들과의 교류에서 에너지를 얻고 적극적으로 관계를 형성합니다.',
    lowDesc: '혼자만의 시간으로 에너지를 충전하며 깊은 관계를 선호합니다.',
    color: '#16a34a',
  },
  A: {
    name: '친화성',
    highLabel: '배려하는',
    lowLabel: '독립적인',
    highDesc: '타인과의 조화를 중시하고 협력적이며 공감 능력이 뛰어납니다.',
    lowDesc: '독립적이고 비판적이며 자신의 관점을 분명히 표현합니다.',
    color: '#d97706',
  },
  N: {
    name: '신경성',
    highLabel: '감수성 높은',
    lowLabel: '안정적인',
    highDesc: '감정적으로 예민하고 스트레스 상황에 민감하게 반응합니다.',
    lowDesc: '감정적으로 안정적이며 스트레스 상황에서도 침착함을 유지합니다.',
    color: '#dc2626',
  },
};

export function getBigFiveLabel(score: number): string {
  if (score >= 75) return '매우 높음';
  if (score >= 55) return '높음';
  if (score >= 40) return '보통';
  if (score >= 25) return '낮음';
  return '매우 낮음';
}
