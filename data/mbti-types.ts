import { MBTIType } from '@/lib/types';

interface MBTIInfo {
  name: string;
  nickname: { ko: string; en: string };
  description: { ko: string; en: string };
  strengths: { ko: string[]; en: string[] };
  weaknesses: { ko: string[]; en: string[] };
  keywords: { ko: string[]; en: string[] };
  famousPeople: string[];
}

export const mbtiTypes: Record<MBTIType, MBTIInfo> = {
  INTJ: {
    name: 'INTJ',
    nickname: { ko: '전략가', en: 'The Architect' },
    description: {
      ko: '독립적이고 결단력 있는 전략가. 복잡한 시스템을 이해하고 장기적 계획을 수립하는 데 탁월합니다. 높은 기준을 갖고 있으며 자신과 타인에게 모두 완벽함을 기대합니다.',
      en: 'An independent and decisive architect of ideas. Excels at understanding complex systems and forming long-term strategies. Holds high standards and expects perfection from themselves and others.',
    },
    strengths: { ko: ['전략적 사고', '독립성', '결단력', '혁신적 아이디어'], en: ['Strategic thinking', 'Independence', 'Decisiveness', 'Innovative ideas'] },
    weaknesses: { ko: ['지나친 완벽주의', '감정 표현 어려움', '타인 의견 무시 경향'], en: ['Excessive perfectionism', 'Difficulty expressing emotions', 'Tendency to dismiss others\' opinions'] },
    keywords: { ko: ['전략가', '독립적', '혁신적'], en: ['Strategist', 'Independent', 'Innovative'] },
    famousPeople: ['Isaac Newton', 'Elon Musk', 'Mark Zuckerberg'],
  },
  INTP: {
    name: 'INTP',
    nickname: { ko: '논리술사', en: 'The Logician' },
    description: {
      ko: '분석적이고 객관적인 사상가. 복잡한 이론과 개념을 탐구하며 논리적 일관성을 중시합니다.',
      en: 'An analytical and objective thinker. Loves exploring complex theories and concepts, valuing logical consistency above all.',
    },
    strengths: { ko: ['분석적 사고', '창의성', '객관성', '지적 호기심'], en: ['Analytical thinking', 'Creativity', 'Objectivity', 'Intellectual curiosity'] },
    weaknesses: { ko: ['실행력 부족', '사회적 상황 어색함', '우유부단함'], en: ['Lack of follow-through', 'Awkwardness in social situations', 'Indecisiveness'] },
    keywords: { ko: ['분석가', '논리적', '호기심'], en: ['Analyst', 'Logical', 'Curious'] },
    famousPeople: ['Albert Einstein', 'Charles Darwin', 'Bill Gates'],
  },
  ENTJ: {
    name: 'ENTJ',
    nickname: { ko: '지휘관', en: 'The Commander' },
    description: {
      ko: '카리스마 넘치고 목표 지향적인 리더. 자신감 있게 계획을 세우고 실행하며 주변을 이끕니다.',
      en: 'A charismatic and goal-oriented leader. Confidently plans, executes, and inspires those around them.',
    },
    strengths: { ko: ['리더십', '전략적 계획', '결단력', '효율성'], en: ['Leadership', 'Strategic planning', 'Decisiveness', 'Efficiency'] },
    weaknesses: { ko: ['감정 무시', '오만함', '지나친 통제욕'], en: ['Dismissing emotions', 'Arrogance', 'Excessive need for control'] },
    keywords: { ko: ['리더', '결단력', '야심가'], en: ['Leader', 'Decisive', 'Ambitious'] },
    famousPeople: ['Steve Jobs', 'Napoleon', 'Margaret Thatcher'],
  },
  ENTP: {
    name: 'ENTP',
    nickname: { ko: '발명가', en: 'The Debater' },
    description: {
      ko: '창의적이고 지적 호기심이 넘치는 혁신가. 새로운 아이디어를 탐구하고 기존 개념에 도전하는 것을 즐깁니다.',
      en: 'A creative and intellectually curious innovator. Loves exploring new ideas and challenging established concepts.',
    },
    strengths: { ko: ['창의성', '토론 능력', '적응력', '지적 유연성'], en: ['Creativity', 'Debating skills', 'Adaptability', 'Intellectual flexibility'] },
    weaknesses: { ko: ['집중력 부족', '규칙 무시', '프로젝트 완수 어려움'], en: ['Lack of focus', 'Disregard for rules', 'Difficulty finishing projects'] },
    keywords: { ko: ['혁신가', '창의적', '토론가'], en: ['Innovator', 'Creative', 'Debater'] },
    famousPeople: ['Leonardo da Vinci', 'Benjamin Franklin', 'Socrates'],
  },
  INFJ: {
    name: 'INFJ',
    nickname: { ko: '옹호자', en: 'The Advocate' },
    description: {
      ko: '이상주의적이고 원칙적인 사람. 타인의 감정을 깊이 이해하고 세상을 더 나은 곳으로 만들려는 강한 의지를 가집니다.',
      en: 'An idealistic and principled visionary. Deeply understands others\' emotions and has a strong drive to make the world a better place.',
    },
    strengths: { ko: ['공감 능력', '통찰력', '창의성', '강한 신념'], en: ['Empathy', 'Insight', 'Creativity', 'Strong convictions'] },
    weaknesses: { ko: ['완벽주의', '감수성 과다', '남에게 맞추는 경향'], en: ['Perfectionism', 'Over-sensitivity', 'Tendency to please others'] },
    keywords: { ko: ['이상주의자', '공감자', '통찰력'], en: ['Idealist', 'Empath', 'Visionary'] },
    famousPeople: ['Nelson Mandela', 'Martin Luther King Jr.', 'Gandhi'],
  },
  INFP: {
    name: 'INFP',
    nickname: { ko: '중재자', en: 'The Mediator' },
    description: {
      ko: '창의적이고 감수성 풍부한 이상주의자. 진정성과 자기표현을 중시하며 내면의 가치와 신념에 따라 삽니다.',
      en: 'A creative and sensitive idealist. Values authenticity and self-expression, living by their inner values and beliefs.',
    },
    strengths: { ko: ['공감 능력', '창의성', '진정성', '헌신'], en: ['Empathy', 'Creativity', 'Authenticity', 'Dedication'] },
    weaknesses: { ko: ['비현실적 기대', '자기비판', '우유부단함'], en: ['Unrealistic expectations', 'Self-criticism', 'Indecisiveness'] },
    keywords: { ko: ['이상주의자', '예술가', '공감자'], en: ['Idealist', 'Artist', 'Empath'] },
    famousPeople: ['William Shakespeare', 'J.R.R. Tolkien', 'Vincent van Gogh'],
  },
  ENFJ: {
    name: 'ENFJ',
    nickname: { ko: '주인공', en: 'The Protagonist' },
    description: {
      ko: '카리스마 있고 공감 능력이 뛰어난 리더. 타인의 성장을 돕는 데서 보람을 찾으며 주변 사람들을 자연스럽게 이끕니다.',
      en: 'A charismatic and empathetic leader. Finds fulfillment in helping others grow and naturally guides those around them.',
    },
    strengths: { ko: ['리더십', '공감 능력', '소통 능력', '영감'], en: ['Leadership', 'Empathy', 'Communication', 'Inspiring others'] },
    weaknesses: { ko: ['지나친 이타심', '비판 민감성', '우유부단함'], en: ['Excessive selflessness', 'Sensitivity to criticism', 'Indecisiveness'] },
    keywords: { ko: ['리더', '공감자', '영감'], en: ['Leader', 'Empath', 'Inspiring'] },
    famousPeople: ['Barack Obama', 'Oprah Winfrey', 'Martin Luther King Jr.'],
  },
  ENFP: {
    name: 'ENFP',
    nickname: { ko: '활동가', en: 'The Campaigner' },
    description: {
      ko: '열정적이고 창의적인 자유로운 영혼. 새로운 아이디어와 사람들과의 연결에서 에너지를 얻습니다.',
      en: 'An enthusiastic and creative free spirit. Gains energy from new ideas and deep connections with people.',
    },
    strengths: { ko: ['열정', '창의성', '소통 능력', '공감'], en: ['Enthusiasm', 'Creativity', 'Communication', 'Empathy'] },
    weaknesses: { ko: ['집중력 부족', '지나친 낙관주의', '독립성 과도'], en: ['Lack of focus', 'Over-optimism', 'Excessive independence'] },
    keywords: { ko: ['열정가', '창의적', '낙관주의자'], en: ['Enthusiast', 'Creative', 'Optimist'] },
    famousPeople: ['Robin Williams', 'Robert Downey Jr.', 'Mark Twain'],
  },
  ISTJ: {
    name: 'ISTJ',
    nickname: { ko: '현실주의자', en: 'The Logistician' },
    description: {
      ko: '책임감 강하고 신뢰할 수 있는 실용주의자. 체계적이고 사실에 기반하여 생각하며 전통과 안정을 중시합니다.',
      en: 'A responsible and reliable pragmatist. Thinks systematically and factually, valuing tradition and stability.',
    },
    strengths: { ko: ['책임감', '성실함', '체계성', '신뢰성'], en: ['Responsibility', 'Diligence', 'Organization', 'Reliability'] },
    weaknesses: { ko: ['변화 저항', '완고함', '감정 표현 어려움'], en: ['Resistance to change', 'Stubbornness', 'Difficulty expressing emotions'] },
    keywords: { ko: ['실용주의자', '신뢰', '성실함'], en: ['Pragmatist', 'Reliable', 'Diligent'] },
    famousPeople: ['Angela Merkel', 'Warren Buffett', 'Denzel Washington'],
  },
  ISFJ: {
    name: 'ISFJ',
    nickname: { ko: '수호자', en: 'The Defender' },
    description: {
      ko: '헌신적이고 따뜻한 보호자. 주변 사람들을 돌보는 것에서 의미를 찾으며 전통과 조화를 소중히 여깁니다.',
      en: 'A devoted and warm protector. Finds meaning in caring for others and cherishes tradition and harmony.',
    },
    strengths: { ko: ['헌신', '따뜻함', '실용성', '신뢰성'], en: ['Devotion', 'Warmth', 'Practicality', 'Reliability'] },
    weaknesses: { ko: ['변화 거부', '자기 억압', '과도한 겸손'], en: ['Resistance to change', 'Self-suppression', 'Excessive humility'] },
    keywords: { ko: ['수호자', '따뜻함', '헌신'], en: ['Protector', 'Warm', 'Devoted'] },
    famousPeople: ['Mother Teresa', 'Kate Middleton', 'Beyoncé'],
  },
  ESTJ: {
    name: 'ESTJ',
    nickname: { ko: '경영자', en: 'The Executive' },
    description: {
      ko: '실용적이고 결단력 있는 관리자. 질서와 체계를 중시하며 규칙과 책임을 중요하게 생각합니다.',
      en: 'A practical and decisive manager. Values order and structure, and takes rules and responsibility seriously.',
    },
    strengths: { ko: ['조직 능력', '결단력', '책임감', '실용성'], en: ['Organizational skills', 'Decisiveness', 'Responsibility', 'Practicality'] },
    weaknesses: { ko: ['경직성', '감정 소홀', '독단적 경향'], en: ['Rigidity', 'Neglecting emotions', 'Tendency toward dogmatism'] },
    keywords: { ko: ['관리자', '체계적', '결단력'], en: ['Manager', 'Systematic', 'Decisive'] },
    famousPeople: ['Hillary Clinton', 'John D. Rockefeller', 'Henry Ford'],
  },
  ESFJ: {
    name: 'ESFJ',
    nickname: { ko: '집정관', en: 'The Consul' },
    description: {
      ko: '사교적이고 배려심 깊은 사람. 타인의 감정을 세심하게 살피며 조화로운 환경을 만드는 데 탁월합니다.',
      en: 'A sociable and caring person. Attentive to others\' feelings and excels at creating harmonious environments.',
    },
    strengths: { ko: ['공감 능력', '사교성', '충성심', '협력'], en: ['Empathy', 'Sociability', 'Loyalty', 'Cooperation'] },
    weaknesses: { ko: ['비판 민감성', '변화 거부', '타인 의존'], en: ['Sensitivity to criticism', 'Resistance to change', 'Dependence on others\' approval'] },
    keywords: { ko: ['배려자', '사교적', '조화'], en: ['Caregiver', 'Sociable', 'Harmonious'] },
    famousPeople: ['Taylor Swift', 'Hugh Jackman', 'Elton John'],
  },
  ISTP: {
    name: 'ISTP',
    nickname: { ko: '장인', en: 'The Virtuoso' },
    description: {
      ko: '논리적이고 실용적인 해결사. 어떻게 작동하는지 이해하고 직접 해결하는 것을 즐깁니다.',
      en: 'A logical and practical problem-solver. Loves understanding how things work and fixing them hands-on.',
    },
    strengths: { ko: ['문제 해결', '침착함', '실용성', '독립성'], en: ['Problem solving', 'Calmness', 'Practicality', 'Independence'] },
    weaknesses: { ko: ['감정 표현 어려움', '장기 계획 부족', '헌신 어려움'], en: ['Difficulty expressing emotions', 'Lack of long-term planning', 'Difficulty committing'] },
    keywords: { ko: ['장인', '실용주의자', '해결사'], en: ['Craftsman', 'Pragmatist', 'Problem-solver'] },
    famousPeople: ['Clint Eastwood', 'Michael Jordan', 'Bear Grylls'],
  },
  ISFP: {
    name: 'ISFP',
    nickname: { ko: '모험가', en: 'The Adventurer' },
    description: {
      ko: '유연하고 매력적인 예술가. 현재 순간에 충실하며 자신만의 방식으로 아름다움을 표현합니다.',
      en: 'A flexible and charming artist. Lives in the present and expresses beauty in their own unique way.',
    },
    strengths: { ko: ['예술성', '공감 능력', '개방성', '유연성'], en: ['Artistic talent', 'Empathy', 'Openness', 'Flexibility'] },
    weaknesses: { ko: ['비판 민감성', '지나친 자기비판', '계획 어려움'], en: ['Sensitivity to criticism', 'Excessive self-criticism', 'Difficulty planning'] },
    keywords: { ko: ['예술가', '자유로운 영혼', '감성적'], en: ['Artist', 'Free spirit', 'Sensitive'] },
    famousPeople: ['Michael Jackson', 'Prince', 'Bob Dylan'],
  },
  ESTP: {
    name: 'ESTP',
    nickname: { ko: '사업가', en: 'The Entrepreneur' },
    description: {
      ko: '에너지 넘치고 행동 지향적인 사업가. 이론보다 실천을 중시하며 즉흥적인 상황을 즐깁니다.',
      en: 'An energetic and action-oriented entrepreneur. Values practice over theory and thrives in spontaneous situations.',
    },
    strengths: { ko: ['행동력', '적응력', '관찰력', '설득력'], en: ['Action-oriented', 'Adaptability', 'Observational skills', 'Persuasiveness'] },
    weaknesses: { ko: ['인내심 부족', '충동적', '장기 계획 어려움'], en: ['Lack of patience', 'Impulsiveness', 'Difficulty with long-term planning'] },
    keywords: { ko: ['행동가', '사업가', '즉흥적'], en: ['Doer', 'Entrepreneur', 'Spontaneous'] },
    famousPeople: ['Ernest Hemingway', 'Jamie Oliver', 'Bruce Willis'],
  },
  ESFP: {
    name: 'ESFP',
    nickname: { ko: '연예인', en: 'The Entertainer' },
    description: {
      ko: '자발적이고 활기차며 재미를 추구하는 엔터테이너. 현재를 즐기고 주변 사람들을 행복하게 만드는 것을 좋아합니다.',
      en: 'A spontaneous, energetic entertainer. Loves enjoying the present and making the people around them happy.',
    },
    strengths: { ko: ['사교성', '즉흥성', '열정', '공감 능력'], en: ['Sociability', 'Spontaneity', 'Enthusiasm', 'Empathy'] },
    weaknesses: { ko: ['계획 부족', '미래 무시', '쉽게 지루함'], en: ['Lack of planning', 'Ignoring the future', 'Getting bored easily'] },
    keywords: { ko: ['엔터테이너', '활기차고', '즉흥적'], en: ['Entertainer', 'Energetic', 'Spontaneous'] },
    famousPeople: ['Elton John', 'Marilyn Monroe', 'Will Smith'],
  },
};
