import { EnneagramType } from '@/lib/types';

interface Bilingual { ko: string; en: string }
interface BilingualArr { ko: string[]; en: string[] }

interface EnneagramInfo {
  name: Bilingual;
  nickname: Bilingual;
  coreDesire: Bilingual;
  coreFear: Bilingual;
  description: Bilingual;
  strengths: BilingualArr;
  growthPoint: Bilingual;
  color: string;
}

export const enneagramTypes: Record<EnneagramType, EnneagramInfo> = {
  1: {
    name: { ko: '유형 1', en: 'Type 1' },
    nickname: { ko: '완벽주의자', en: 'The Reformer' },
    coreDesire: { ko: '올바르고 도덕적인 사람이 되는 것', en: 'To be good, moral, and right' },
    coreFear: { ko: '잘못된 사람이 되는 것', en: 'Being wrong or corrupt' },
    description: {
      ko: '이상을 추구하는 원칙주의자. 높은 기준을 갖고 개선을 위해 끊임없이 노력합니다.',
      en: 'A principled idealist who strives for perfection. Holds high standards and constantly works to improve.',
    },
    strengths: { ko: ['도덕성', '책임감', '세심함', '개선 의지'], en: ['Integrity', 'Responsibility', 'Attention to detail', 'Drive to improve'] },
    growthPoint: {
      ko: '완벽함보다 충분함을 받아들이고, 자신과 타인에게 더 관대해지세요.',
      en: 'Accept "good enough" over perfection, and practice being more lenient with yourself and others.',
    },
    color: '#ef4444',
  },
  2: {
    name: { ko: '유형 2', en: 'Type 2' },
    nickname: { ko: '조력자', en: 'The Helper' },
    coreDesire: { ko: '사랑받고 필요한 사람이 되는 것', en: 'To be loved and needed' },
    coreFear: { ko: '사랑받지 못하는 것', en: 'Being unloved or unwanted' },
    description: {
      ko: '따뜻하고 헌신적인 조력자. 타인의 필요를 직관적으로 파악하고 돕는 것에서 기쁨을 찾습니다.',
      en: 'A warm and devoted helper. Intuitively senses others\' needs and finds joy in assisting them.',
    },
    strengths: { ko: ['공감 능력', '따뜻함', '헌신', '대인 관계'], en: ['Empathy', 'Warmth', 'Dedication', 'Interpersonal skills'] },
    growthPoint: {
      ko: '자신의 필요도 중요하다는 것을 인식하고, 돕는 것에 대한 보상을 바라지 않도록 하세요.',
      en: 'Recognize that your own needs matter too, and help without expecting something in return.',
    },
    color: '#f97316',
  },
  3: {
    name: { ko: '유형 3', en: 'Type 3' },
    nickname: { ko: '성취자', en: 'The Achiever' },
    coreDesire: { ko: '성공하고 가치 있는 사람으로 인정받는 것', en: 'To succeed and be seen as valuable' },
    coreFear: { ko: '실패하고 가치 없는 사람이 되는 것', en: 'Failing and being worthless' },
    description: {
      ko: '목표 지향적이고 매력적인 성취자. 효율적으로 목표를 달성하며 성공을 통해 자신의 가치를 증명합니다.',
      en: 'A goal-oriented and charming achiever. Efficiently reaches goals and proves their worth through success.',
    },
    strengths: { ko: ['추진력', '효율성', '목표 달성', '자기 관리'], en: ['Drive', 'Efficiency', 'Goal achievement', 'Self-management'] },
    growthPoint: {
      ko: '성취 뒤에 있는 진짜 자신을 발견하고, 존재 자체로도 가치 있다는 것을 인식하세요.',
      en: 'Discover your true self beneath your achievements and recognize that you are valuable just as you are.',
    },
    color: '#eab308',
  },
  4: {
    name: { ko: '유형 4', en: 'Type 4' },
    nickname: { ko: '개인주의자', en: 'The Individualist' },
    coreDesire: { ko: '자신의 정체성과 중요성을 찾는 것', en: 'To find identity and significance' },
    coreFear: { ko: '평범하고 의미없는 사람이 되는 것', en: 'Being ordinary or insignificant' },
    description: {
      ko: '감수성이 풍부하고 독창적인 개인주의자. 깊은 감정과 독특한 개성으로 세상을 표현합니다.',
      en: 'A sensitive and original individualist. Expresses deep emotions and unique individuality.',
    },
    strengths: { ko: ['창의성', '깊은 감성', '자기인식', '진정성'], en: ['Creativity', 'Emotional depth', 'Self-awareness', 'Authenticity'] },
    growthPoint: {
      ko: '결핍감에서 벗어나 현재의 충만함에 집중하고, 보통의 것에서도 아름다움을 찾으세요.',
      en: 'Shift from a sense of lack to appreciating the fullness of the present, finding beauty in the ordinary.',
    },
    color: '#8b5cf6',
  },
  5: {
    name: { ko: '유형 5', en: 'Type 5' },
    nickname: { ko: '조사자', en: 'The Investigator' },
    coreDesire: { ko: '유능하고 지식이 풍부한 사람이 되는 것', en: 'To be capable and knowledgeable' },
    coreFear: { ko: '무능하고 쓸모없는 사람이 되는 것', en: 'Being helpless or incompetent' },
    description: {
      ko: '분석적이고 통찰력 있는 탐구자. 지식을 수집하고 이해하는 것에서 안정을 찾습니다.',
      en: 'An analytical and insightful investigator. Finds security in collecting and mastering knowledge.',
    },
    strengths: { ko: ['분석력', '통찰력', '독립성', '집중력'], en: ['Analytical thinking', 'Insight', 'Independence', 'Focus'] },
    growthPoint: {
      ko: '지식 축적보다 세상에 참여하는 것을 두려워하지 말고, 자신을 나눌 때 풍요로워짐을 경험하세요.',
      en: 'Don\'t fear engaging with the world beyond accumulating knowledge — you become richer by sharing yourself.',
    },
    color: '#0891b2',
  },
  6: {
    name: { ko: '유형 6', en: 'Type 6' },
    nickname: { ko: '충성가', en: 'The Loyalist' },
    coreDesire: { ko: '안전하고 지지받는 것', en: 'To have security and support' },
    coreFear: { ko: '도움 없이 홀로 세상을 헤쳐나가는 것', en: 'Being without support or guidance' },
    description: {
      ko: '신뢰할 수 있고 헌신적인 충성가. 안전과 안정을 추구하며 문제를 미리 예측하고 대비합니다.',
      en: 'A reliable and committed loyalist. Seeks security and stability, anticipating problems before they arise.',
    },
    strengths: { ko: ['충성심', '책임감', '협력', '문제 예측'], en: ['Loyalty', 'Responsibility', 'Cooperation', 'Anticipating problems'] },
    growthPoint: {
      ko: '두려움에 기반한 결정 대신 자신의 내면 지혜를 신뢰하는 연습을 하세요.',
      en: 'Practice trusting your inner wisdom instead of making decisions based on fear.',
    },
    color: '#16a34a',
  },
  7: {
    name: { ko: '유형 7', en: 'Type 7' },
    nickname: { ko: '열정가', en: 'The Enthusiast' },
    coreDesire: { ko: '행복하고 충족되며 만족스러운 것', en: 'To be happy, satisfied, and content' },
    coreFear: { ko: '고통과 결핍을 경험하는 것', en: 'Being deprived or in pain' },
    description: {
      ko: '열정적이고 자발적인 모험가. 새로운 경험과 가능성을 추구하며 삶을 즐겁게 살아갑니다.',
      en: 'An enthusiastic and spontaneous adventurer. Pursues new experiences and possibilities with a joyful spirit.',
    },
    strengths: { ko: ['열정', '낙관성', '창의성', '적응력'], en: ['Enthusiasm', 'Optimism', 'Creativity', 'Adaptability'] },
    growthPoint: {
      ko: '불편한 감정을 피하지 말고, 깊은 만족은 다양성보다 깊이에서 온다는 것을 배우세요.',
      en: 'Don\'t avoid uncomfortable emotions — learn that deep satisfaction comes from depth, not variety.',
    },
    color: '#f59e0b',
  },
  8: {
    name: { ko: '유형 8', en: 'Type 8' },
    nickname: { ko: '도전자', en: 'The Challenger' },
    coreDesire: { ko: '스스로를 보호하고 운명을 통제하는 것', en: 'To protect themselves and control their own destiny' },
    coreFear: { ko: '타인에게 통제되거나 상처받는 것', en: 'Being controlled or harmed by others' },
    description: {
      ko: '강렬하고 결단력 있는 도전자. 강인함과 독립성을 추구하며 불의에 맞섭니다.',
      en: 'An intense and decisive challenger. Pursues strength and independence, standing up against injustice.',
    },
    strengths: { ko: ['리더십', '결단력', '강인함', '정의감'], en: ['Leadership', 'Decisiveness', 'Strength', 'Sense of justice'] },
    growthPoint: {
      ko: '취약함을 드러내는 것이 약함이 아님을 인식하고, 신뢰하는 사람들에게 마음을 여세요.',
      en: 'Recognize that showing vulnerability is not weakness, and open your heart to those you trust.',
    },
    color: '#dc2626',
  },
  9: {
    name: { ko: '유형 9', en: 'Type 9' },
    nickname: { ko: '화해자', en: 'The Peacemaker' },
    coreDesire: { ko: '내면의 평화와 주변의 조화', en: 'Inner peace and harmony with others' },
    coreFear: { ko: '갈등과 분리', en: 'Conflict and separation' },
    description: {
      ko: '수용적이고 평화로운 중재자. 갈등을 피하고 조화를 추구하며 모든 사람을 포용합니다.',
      en: 'A receptive and peaceful mediator. Avoids conflict, seeks harmony, and embraces everyone.',
    },
    strengths: { ko: ['공감 능력', '중재 능력', '인내심', '개방성'], en: ['Empathy', 'Mediation skills', 'Patience', 'Open-mindedness'] },
    growthPoint: {
      ko: '타인의 필요뿐 아니라 자신의 필요와 바람에도 주의를 기울이고, 능동적으로 참여하세요.',
      en: 'Pay attention to your own needs and desires, not just others\', and engage more actively.',
    },
    color: '#6b7280',
  },
};
