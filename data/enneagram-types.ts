import { EnneagramType } from '@/lib/types';

interface EnneagramInfo {
  name: string;
  nickname: string;
  coreDesire: string;
  coreFear: string;
  description: string;
  strengths: string[];
  growthPoint: string;
  color: string;
}

export const enneagramTypes: Record<EnneagramType, EnneagramInfo> = {
  1: {
    name: '유형 1',
    nickname: '완벽주의자',
    coreDesire: '올바르고 도덕적인 사람이 되는 것',
    coreFear: '잘못된 사람이 되는 것',
    description: '이상을 추구하는 원칙주의자. 높은 기준을 갖고 개선을 위해 끊임없이 노력합니다. 정직하고 책임감이 강하며 세상을 더 나은 곳으로 만들고 싶어합니다.',
    strengths: ['도덕성', '책임감', '세심함', '개선 의지'],
    growthPoint: '완벽함보다 충분함을 받아들이고, 자신과 타인에게 더 관대해지세요.',
    color: '#ef4444',
  },
  2: {
    name: '유형 2',
    nickname: '조력자',
    coreDesire: '사랑받고 필요한 사람이 되는 것',
    coreFear: '사랑받지 못하는 것',
    description: '따뜻하고 헌신적인 조력자. 타인의 필요를 직관적으로 파악하고 돕는 것에서 기쁨을 찾습니다. 관계를 소중히 여기며 공감 능력이 뛰어납니다.',
    strengths: ['공감 능력', '따뜻함', '헌신', '대인 관계'],
    growthPoint: '자신의 필요도 중요하다는 것을 인식하고, 돕는 것에 대한 보상을 바라지 않도록 하세요.',
    color: '#f97316',
  },
  3: {
    name: '유형 3',
    nickname: '성취자',
    coreDesire: '성공하고 가치 있는 사람으로 인정받는 것',
    coreFear: '실패하고 가치 없는 사람이 되는 것',
    description: '목표 지향적이고 매력적인 성취자. 효율적으로 목표를 달성하며 성공을 통해 자신의 가치를 증명합니다. 적응력이 뛰어나고 주변에 영감을 줍니다.',
    strengths: ['추진력', '효율성', '목표 달성', '자기 관리'],
    growthPoint: '성취 뒤에 있는 진짜 자신을 발견하고, 존재 자체로도 가치 있다는 것을 인식하세요.',
    color: '#eab308',
  },
  4: {
    name: '유형 4',
    nickname: '개인주의자',
    coreDesire: '자신의 정체성과 중요성을 찾는 것',
    coreFear: '평범하고 의미없는 사람이 되는 것',
    description: '감수성이 풍부하고 독창적인 개인주의자. 깊은 감정과 독특한 개성으로 세상을 표현합니다. 자기인식이 강하며 진정성 있는 관계를 추구합니다.',
    strengths: ['창의성', '깊은 감성', '자기인식', '진정성'],
    growthPoint: '결핍감에서 벗어나 현재의 충만함에 집중하고, 보통의 것에서도 아름다움을 찾으세요.',
    color: '#8b5cf6',
  },
  5: {
    name: '유형 5',
    nickname: '조사자',
    coreDesire: '유능하고 지식이 풍부한 사람이 되는 것',
    coreFear: '무능하고 쓸모없는 사람이 되는 것',
    description: '분석적이고 통찰력 있는 탐구자. 지식을 수집하고 이해하는 것에서 안정을 찾습니다. 독립적이며 자신의 생각과 자원을 보호하려는 경향이 있습니다.',
    strengths: ['분석력', '통찰력', '독립성', '집중력'],
    growthPoint: '지식 축적보다 세상에 참여하는 것을 두려워하지 말고, 자신을 나눌 때 풍요로워짐을 경험하세요.',
    color: '#0891b2',
  },
  6: {
    name: '유형 6',
    nickname: '충성가',
    coreDesire: '안전하고 지지받는 것',
    coreFear: '도움 없이 홀로 세상을 헤쳐나가는 것',
    description: '신뢰할 수 있고 헌신적인 충성가. 안전과 안정을 추구하며 문제를 미리 예측하고 대비합니다. 충성스럽고 책임감이 강하며 공동체를 소중히 여깁니다.',
    strengths: ['충성심', '책임감', '협력', '문제 예측'],
    growthPoint: '두려움에 기반한 결정 대신 자신의 내면 지혜를 신뢰하는 연습을 하세요.',
    color: '#16a34a',
  },
  7: {
    name: '유형 7',
    nickname: '열정가',
    coreDesire: '행복하고 충족되며 만족스러운 것',
    coreFear: '고통과 결핍을 경험하는 것',
    description: '열정적이고 자발적인 모험가. 새로운 경험과 가능성을 추구하며 삶을 즐겁게 살아갑니다. 낙관적이고 창의적이며 다양한 관심사를 가집니다.',
    strengths: ['열정', '낙관성', '창의성', '적응력'],
    growthPoint: '불편한 감정을 피하지 말고, 깊은 만족은 다양성보다 깊이에서 온다는 것을 배우세요.',
    color: '#f59e0b',
  },
  8: {
    name: '유형 8',
    nickname: '도전자',
    coreDesire: '스스로를 보호하고 운명을 통제하는 것',
    coreFear: '타인에게 통제되거나 상처받는 것',
    description: '강렬하고 결단력 있는 도전자. 강인함과 독립성을 추구하며 불의에 맞섭니다. 타고난 리더십을 가지고 약자를 보호하는 데 앞장섭니다.',
    strengths: ['리더십', '결단력', '강인함', '정의감'],
    growthPoint: '취약함을 드러내는 것이 약함이 아님을 인식하고, 신뢰하는 사람들에게 마음을 여세요.',
    color: '#dc2626',
  },
  9: {
    name: '유형 9',
    nickname: '화해자',
    coreDesire: '내면의 평화와 주변의 조화',
    coreFear: '갈등과 분리',
    description: '수용적이고 평화로운 중재자. 갈등을 피하고 조화를 추구합니다. 타인의 관점을 자연스럽게 이해하며 모든 사람을 포용합니다.',
    strengths: ['공감 능력', '중재 능력', '인내심', '개방성'],
    growthPoint: '타인의 필요뿐 아니라 자신의 필요와 바람에도 주의를 기울이고, 능동적으로 참여하세요.',
    color: '#6b7280',
  },
};
