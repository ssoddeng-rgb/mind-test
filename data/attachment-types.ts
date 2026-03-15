import { AttachmentType } from '@/lib/types';

interface AttachmentInfo {
  name: string;
  nickname: string;
  description: string;
  relationshipPattern: string;
  strengths: string[];
  challenges: string[];
  growthTip: string;
  color: string;
  bgColor: string;
}

export const attachmentTypes: Record<AttachmentType, AttachmentInfo> = {
  secure: {
    name: '안정형',
    nickname: '안전한 항구',
    description: '자신과 타인을 신뢰하며 건강한 관계를 형성합니다. 친밀감과 독립성 사이에서 균형을 잘 잡으며, 갈등 상황에서도 침착하게 대처합니다.',
    relationshipPattern: '상대방과의 연결을 편안하게 느끼며, 자신의 필요를 명확히 표현하고 상대방의 필요도 존중합니다. 거리감이 생겨도 불안해하지 않으며 자연스럽게 다가갑니다.',
    strengths: ['건강한 경계 설정', '효과적인 소통', '감정 조절', '상호 신뢰'],
    challenges: ['타인의 불안정한 애착 이해하기', '경계를 넘는 요구 다루기'],
    growthTip: '이미 건강한 애착 패턴을 가지고 있습니다. 더 불안정한 애착을 가진 파트너를 이해하고 지지하는 방법을 배우면 관계가 더욱 풍요로워질 것입니다.',
    color: '#16a34a',
    bgColor: '#f0fdf4',
  },
  anxious: {
    name: '불안형',
    nickname: '연결을 갈망하는',
    description: '관계에서 깊은 연결을 원하지만 버려질까봐 불안해합니다. 상대방의 반응에 민감하게 반응하며 확신과 안심을 필요로 합니다.',
    relationshipPattern: '상대방의 연락이 뜸해지거나 감정이 식을까봐 걱정합니다. 관계를 유지하기 위해 과도하게 노력하거나 집착하는 경향이 있습니다. 버려짐의 두려움이 관계에 큰 영향을 미칩니다.',
    strengths: ['깊은 공감 능력', '관계에 대한 헌신', '감정적 연결 추구', '파트너 세심히 살핌'],
    challenges: ['자립적 자아 유지', '과도한 걱정 관리', '관계 의존 줄이기'],
    growthTip: '자기 자신과의 관계를 먼저 안정적으로 만드세요. 내면의 안전감을 타인에게서 찾기보다 스스로 개발하는 것이 핵심입니다. 마음챙김과 자기 돌봄을 실천해보세요.',
    color: '#f59e0b',
    bgColor: '#fffbeb',
  },
  avoidant: {
    name: '회피형',
    nickname: '독립을 추구하는',
    description: '자율성과 독립성을 강하게 추구하며 친밀한 관계에서 불편함을 느낄 수 있습니다. 감정적으로 거리를 두는 경향이 있지만 그것이 고독을 의미하지는 않습니다.',
    relationshipPattern: '상대방이 너무 가까이 오려 할 때 물러나는 경향이 있습니다. 자신의 공간과 독립성을 매우 중시하며, 감정적 요구나 의존에 부담을 느낍니다. 스스로 모든 것을 해결하려는 경향이 있습니다.',
    strengths: ['자립심', '감정적 침착함', '독립적 문제 해결', '자기 충족'],
    challenges: ['감정적 개방성', '상대방 의존 허용', '친밀감 두려움 직면'],
    growthTip: '독립성은 강점이지만, 취약함을 나누는 것이 약함이 아님을 기억하세요. 신뢰하는 한 사람에게 조금씩 마음을 여는 연습을 해보세요.',
    color: '#3b82f6',
    bgColor: '#eff6ff',
  },
  disorganized: {
    name: '혼란형',
    nickname: '갈등 속에서',
    description: '친밀감을 원하지만 동시에 두려워하는 복잡한 패턴을 가집니다. 관계에서 예측 불가능하게 반응하는 경향이 있으며, 이는 종종 과거 경험의 영향입니다.',
    relationshipPattern: '가까워지고 싶은 욕구와 두려움이 동시에 존재합니다. 관계에서 감정이 격해지거나 예측하기 어렵게 반응할 수 있습니다. 안정적인 관계를 원하지만 어떻게 만들어야 할지 어려워합니다.',
    strengths: ['깊은 자기인식', '복잡한 감정 이해', '성장 잠재력', '공감 능력'],
    challenges: ['일관된 반응 유지', '신뢰 형성', '감정 조절', '안정적 패턴 개발'],
    growthTip: '혼란형은 주로 초기 경험에서 비롯됩니다. 전문 상담이나 치료가 큰 도움이 될 수 있습니다. 안전한 관계에서 작은 신뢰를 쌓아가는 것부터 시작하세요.',
    color: '#8b5cf6',
    bgColor: '#f5f3ff',
  },
};
