import { AttachmentType } from '@/lib/types';

interface Bilingual { ko: string; en: string }
interface BilingualArr { ko: string[]; en: string[] }

interface AttachmentInfo {
  name: Bilingual;
  nickname: Bilingual;
  description: Bilingual;
  relationshipPattern: Bilingual;
  strengths: BilingualArr;
  challenges: BilingualArr;
  growthTip: Bilingual;
  color: string;
  bgColor: string;
}

export const attachmentTypes: Record<AttachmentType, AttachmentInfo> = {
  secure: {
    name: { ko: '안정형', en: 'Secure' },
    nickname: { ko: '안전한 항구', en: 'The Safe Harbor' },
    description: {
      ko: '자신과 타인을 신뢰하며 건강한 관계를 형성합니다. 친밀감과 독립성 사이에서 균형을 잘 잡으며, 갈등 상황에서도 침착하게 대처합니다.',
      en: 'Trusts themselves and others, forming healthy relationships. Balances intimacy and independence well, and handles conflict calmly.',
    },
    relationshipPattern: {
      ko: '상대방과의 연결을 편안하게 느끼며, 자신의 필요를 명확히 표현하고 상대방의 필요도 존중합니다.',
      en: 'Feels comfortable with closeness, clearly expresses their own needs, and respects the needs of their partner.',
    },
    strengths: { ko: ['건강한 경계 설정', '효과적인 소통', '감정 조절', '상호 신뢰'], en: ['Healthy boundaries', 'Effective communication', 'Emotional regulation', 'Mutual trust'] },
    challenges: { ko: ['타인의 불안정한 애착 이해하기', '경계를 넘는 요구 다루기'], en: ['Understanding others\' insecure attachment', 'Handling boundary-crossing demands'] },
    growthTip: {
      ko: '이미 건강한 애착 패턴을 가지고 있습니다. 더 불안정한 애착을 가진 파트너를 이해하고 지지하는 방법을 배우면 관계가 더욱 풍요로워질 것입니다.',
      en: 'You already have a healthy attachment pattern. Learning to understand and support partners with more insecure styles will make your relationships even richer.',
    },
    color: '#16a34a',
    bgColor: '#f0fdf4',
  },
  anxious: {
    name: { ko: '불안형', en: 'Anxious-Preoccupied' },
    nickname: { ko: '연결을 갈망하는', en: 'The Connection Seeker' },
    description: {
      ko: '관계에서 깊은 연결을 원하지만 버려질까봐 불안해합니다. 상대방의 반응에 민감하게 반응하며 확신과 안심을 필요로 합니다.',
      en: 'Deeply desires connection but fears abandonment. Highly sensitive to the partner\'s responses and needs reassurance.',
    },
    relationshipPattern: {
      ko: '상대방의 연락이 뜸해지거나 감정이 식을까봐 걱정합니다. 관계를 유지하기 위해 과도하게 노력하거나 집착하는 경향이 있습니다.',
      en: 'Worries when the partner becomes less responsive. Tends to over-effort or become clingy to maintain the relationship.',
    },
    strengths: { ko: ['깊은 공감 능력', '관계에 대한 헌신', '감정적 연결 추구', '파트너 세심히 살핌'], en: ['Deep empathy', 'Dedication to relationships', 'Seeking emotional connection', 'Attentiveness to partner'] },
    challenges: { ko: ['자립적 자아 유지', '과도한 걱정 관리', '관계 의존 줄이기'], en: ['Maintaining an independent self', 'Managing excessive worry', 'Reducing relationship dependency'] },
    growthTip: {
      ko: '자기 자신과의 관계를 먼저 안정적으로 만드세요. 내면의 안전감을 타인에게서 찾기보다 스스로 개발하는 것이 핵심입니다.',
      en: 'Build a stable relationship with yourself first. The key is to develop inner security from within, rather than seeking it from others.',
    },
    color: '#f59e0b',
    bgColor: '#fffbeb',
  },
  avoidant: {
    name: { ko: '회피형', en: 'Dismissive-Avoidant' },
    nickname: { ko: '독립을 추구하는', en: 'The Independent' },
    description: {
      ko: '자율성과 독립성을 강하게 추구하며 친밀한 관계에서 불편함을 느낄 수 있습니다.',
      en: 'Strongly values autonomy and independence, and may feel uncomfortable with closeness in intimate relationships.',
    },
    relationshipPattern: {
      ko: '상대방이 너무 가까이 오려 할 때 물러나는 경향이 있습니다. 자신의 공간과 독립성을 매우 중시하며, 감정적 요구나 의존에 부담을 느낍니다.',
      en: 'Tends to pull back when someone gets too close. Highly values personal space and independence, feeling burdened by emotional demands.',
    },
    strengths: { ko: ['자립심', '감정적 침착함', '독립적 문제 해결', '자기 충족'], en: ['Self-reliance', 'Emotional composure', 'Independent problem-solving', 'Self-sufficiency'] },
    challenges: { ko: ['감정적 개방성', '상대방 의존 허용', '친밀감 두려움 직면'], en: ['Emotional openness', 'Allowing reliance from others', 'Facing fear of intimacy'] },
    growthTip: {
      ko: '독립성은 강점이지만, 취약함을 나누는 것이 약함이 아님을 기억하세요.',
      en: 'Independence is a strength, but remember that sharing vulnerability is not weakness.',
    },
    color: '#3b82f6',
    bgColor: '#eff6ff',
  },
  disorganized: {
    name: { ko: '혼란형', en: 'Fearful-Avoidant' },
    nickname: { ko: '갈등 속에서', en: 'The Conflicted' },
    description: {
      ko: '친밀감을 원하지만 동시에 두려워하는 복잡한 패턴을 가집니다.',
      en: 'Has a complex pattern of both desiring and fearing intimacy at the same time.',
    },
    relationshipPattern: {
      ko: '가까워지고 싶은 욕구와 두려움이 동시에 존재합니다. 관계에서 감정이 격해지거나 예측하기 어렵게 반응할 수 있습니다.',
      en: 'Both the desire to get close and the fear of it coexist. May react intensely or unpredictably in relationships.',
    },
    strengths: { ko: ['깊은 자기인식', '복잡한 감정 이해', '성장 잠재력', '공감 능력'], en: ['Deep self-awareness', 'Understanding complex emotions', 'High growth potential', 'Empathy'] },
    challenges: { ko: ['일관된 반응 유지', '신뢰 형성', '감정 조절', '안정적 패턴 개발'], en: ['Maintaining consistent responses', 'Building trust', 'Emotional regulation', 'Developing stable patterns'] },
    growthTip: {
      ko: '혼란형은 주로 초기 경험에서 비롯됩니다. 전문 상담이나 치료가 큰 도움이 될 수 있습니다.',
      en: 'Fearful-avoidant patterns often stem from early experiences. Professional counseling or therapy can be tremendously helpful.',
    },
    color: '#8b5cf6',
    bgColor: '#f5f3ff',
  },
};
