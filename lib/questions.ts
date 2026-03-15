import { Question } from './types';

export const questions: Question[] = [
  // ── MBTI 질문 (16문항) ──────────────────────────────────────────────────────
  {
    id: 1,
    framework: 'mbti',
    text: '새로운 사람들로 가득한 파티에 참석했을 때, 당신은?',
    options: [
      { text: '여러 사람들과 활발하게 대화하며 에너지를 얻는다', scores: { EI: 2, E: 1 } },
      { text: '몇몇 사람들과 깊은 대화를 나누는 걸 선호한다', scores: { EI: 0.5, E: 0.3 } },
      { text: '아는 사람 곁에서 조용히 시간을 보낸다', scores: { EI: -0.5, E: -0.3 } },
      { text: '빨리 나가고 싶다는 생각을 한다', scores: { EI: -2, E: -1 } },
    ],
  },
  {
    id: 2,
    framework: 'mbti',
    text: '주말 계획을 세울 때 당신은 주로?',
    options: [
      { text: '친구들과 즉흥적으로 만나는 걸 좋아한다', scores: { EI: 1, JP: -1.5 } },
      { text: '미리 세부 일정을 계획해 둔다', scores: { EI: 0, JP: 1.5 } },
      { text: '혼자 여유롭게 보낼 공간을 확보해 둔다', scores: { EI: -1, JP: 0.5 } },
      { text: '그때그때 기분에 따라 결정한다', scores: { EI: 0.5, JP: -2 } },
    ],
  },
  {
    id: 3,
    framework: 'mbti',
    text: '새 정보를 접할 때 당신이 가장 먼저 하는 것은?',
    options: [
      { text: '구체적인 사실과 데이터를 확인한다', scores: { SN: 2, C: 0.5 } },
      { text: '이 정보가 의미하는 패턴이나 가능성을 상상한다', scores: { SN: -2, O: 1 } },
      { text: '이 정보가 실생활에 어떻게 적용될지 생각한다', scores: { SN: 1, C: 0.3 } },
      { text: '다른 개념들과 연결 지어 큰 그림을 그린다', scores: { SN: -1.5, O: 0.7 } },
    ],
  },
  {
    id: 4,
    framework: 'mbti',
    text: '친구가 어려운 결정을 해야 할 때, 당신은?',
    options: [
      { text: '장단점을 논리적으로 분석해 최선의 선택을 알려준다', scores: { TF: 2, A: 0.3 } },
      { text: '친구의 감정을 먼저 공감하고 함께 고민한다', scores: { TF: -2, A: 1 } },
      { text: '내 경험을 바탕으로 솔직한 조언을 한다', scores: { TF: 0.5, A: 0.5 } },
      { text: '친구가 스스로 결론 내릴 수 있도록 질문을 던진다', scores: { TF: -0.5, A: 0.7 } },
    ],
  },
  {
    id: 5,
    framework: 'mbti',
    text: '프로젝트를 시작할 때 당신의 접근 방식은?',
    options: [
      { text: '단계별 계획을 세우고 체계적으로 진행한다', scores: { JP: 2, C: 1 } },
      { text: '큰 방향만 정하고 상황에 따라 유연하게 간다', scores: { JP: -2, O: 0.5 } },
      { text: '먼저 관련 자료를 최대한 수집한 뒤 시작한다', scores: { JP: 0.5, C: 0.5 } },
      { text: '일단 시작하고 문제가 생기면 해결한다', scores: { JP: -1.5, EI: 0.5 } },
    ],
  },
  {
    id: 6,
    framework: 'mbti',
    text: '갈등 상황에서 당신은 주로?',
    options: [
      { text: '감정보다 사실에 집중해 해결책을 찾는다', scores: { TF: 2, N: -0.5 } },
      { text: '상대방의 감정을 최우선으로 배려한다', scores: { TF: -2, A: 1 } },
      { text: '직접적으로 의견을 말하고 빠르게 해결하려 한다', scores: { TF: 1, EI: 0.5 } },
      { text: '잠시 물러나 각자 감정을 정리할 시간을 갖는다', scores: { TF: -0.5, EI: -0.5 } },
    ],
  },
  {
    id: 7,
    framework: 'mbti',
    text: '미래를 생각할 때 당신은?',
    options: [
      { text: '구체적인 목표와 달성 시한을 설정한다', scores: { SN: 0.5, JP: 1.5, C: 1 } },
      { text: '다양한 가능성을 열어두고 유연하게 생각한다', scores: { SN: -1.5, JP: -1.5, O: 1 } },
      { text: '이상적인 미래 모습을 자세히 상상한다', scores: { SN: -2, O: 1.5 } },
      { text: '현재에 집중하고 미래는 자연스럽게 흘러가도록 둔다', scores: { SN: 1, JP: -1, E: 0.3 } },
    ],
  },
  {
    id: 8,
    framework: 'mbti',
    text: '혼자 있는 시간에 주로 무엇을 하나요?',
    options: [
      { text: '새로운 아이디어나 개념을 탐구한다', scores: { SN: -1.5, O: 1, EI: -0.5 } },
      { text: '독서, 영화 등 취미 활동을 즐긴다', scores: { EI: -1, O: 0.5 } },
      { text: '할 일 목록을 정리하고 계획을 세운다', scores: { JP: 1.5, C: 1, EI: -0.5 } },
      { text: '음악을 들으며 감정을 정리한다', scores: { TF: -0.5, EI: -1, N: 0.3 } },
    ],
  },
  {
    id: 9,
    framework: 'mbti',
    text: '어떤 종류의 문제를 해결할 때 가장 뿌듯함을 느끼나요?',
    options: [
      { text: '복잡한 논리 퍼즐이나 수학적 문제', scores: { SN: -0.5, TF: 2, O: 0.5 } },
      { text: '사람들 사이의 갈등이나 감정적 문제', scores: { TF: -1.5, A: 1, EI: 0.5 } },
      { text: '실용적이고 손에 잡히는 현실 문제', scores: { SN: 1.5, TF: 0.5 } },
      { text: '창의적이고 혁신적인 아이디어가 필요한 문제', scores: { SN: -1.5, O: 1.5 } },
    ],
  },
  {
    id: 10,
    framework: 'mbti',
    text: '팀 프로젝트에서 당신이 자연스럽게 맡는 역할은?',
    options: [
      { text: '명확한 목표와 방향을 제시하는 리더', scores: { EI: 1, TF: 1, JP: 1 } },
      { text: '팀의 분위기를 이끌고 소통을 촉진하는 역할', scores: { EI: 1.5, TF: -0.5, A: 1 } },
      { text: '꼼꼼하게 세부 사항을 챙기는 실행자', scores: { SN: 1, JP: 1.5, C: 1 } },
      { text: '새로운 아이디어를 제안하는 창의적 역할', scores: { SN: -1.5, JP: -0.5, O: 1 } },
    ],
  },
  {
    id: 11,
    framework: 'mbti',
    text: '일을 마감할 때의 당신은?',
    options: [
      { text: '여유 있게 미리 완성하는 편이다', scores: { JP: 2, C: 1.5 } },
      { text: '마감 직전에 최고의 집중력을 발휘한다', scores: { JP: -2, N: 0.3 } },
      { text: '중간중간 체크하며 꾸준히 진행한다', scores: { JP: 1, C: 0.5 } },
      { text: '시작은 늦지만 퀄리티는 놓치지 않는다', scores: { JP: -1, O: 0.5 } },
    ],
  },
  {
    id: 12,
    framework: 'mbti',
    text: '결정을 내릴 때 당신은 주로 무엇에 의존하나요?',
    options: [
      { text: '객관적인 데이터와 논리적 분석', scores: { TF: 2, SN: 0.5 } },
      { text: '직관과 내면의 느낌', scores: { TF: -1, SN: -1.5, O: 0.5 } },
      { text: '주변 사람들의 의견과 감정에 미치는 영향', scores: { TF: -2, A: 1 } },
      { text: '과거 경험과 검증된 방법', scores: { TF: 0.5, SN: 1.5 } },
    ],
  },
  {
    id: 13,
    framework: 'mbti',
    text: '배움에서 가장 흥미를 느끼는 것은?',
    options: [
      { text: '세세한 사실과 구체적인 정보', scores: { SN: 2, C: 0.5 } },
      { text: '이론과 추상적인 개념', scores: { SN: -2, O: 1 } },
      { text: '실제 활용법과 적용 사례', scores: { SN: 1, C: 0.5 } },
      { text: '기존 지식의 새로운 연결과 통찰', scores: { SN: -1.5, O: 1.5 } },
    ],
  },
  {
    id: 14,
    framework: 'mbti',
    text: '스트레스를 받을 때 가장 도움이 되는 것은?',
    options: [
      { text: '문제를 분석하고 해결 계획을 세운다', scores: { TF: 1.5, JP: 1, C: 0.5 } },
      { text: '친한 사람과 마음껏 이야기한다', scores: { EI: 1, TF: -1, A: 0.5 } },
      { text: '혼자만의 시간을 갖고 충전한다', scores: { EI: -1.5, N: 0.3 } },
      { text: '좋아하는 활동으로 기분 전환을 한다', scores: { JP: -0.5, EI: 0.5 } },
    ],
  },
  {
    id: 15,
    framework: 'mbti',
    text: '예상치 못한 변화가 생겼을 때 당신의 반응은?',
    options: [
      { text: '새로운 가능성으로 받아들이고 빠르게 적응한다', scores: { JP: -2, O: 1, EI: 0.5 } },
      { text: '당황스럽지만 최대한 계획을 수정해 대응한다', scores: { JP: 0.5, C: 0.5, N: 0.5 } },
      { text: '변화의 원인을 먼저 파악하려 한다', scores: { SN: -0.5, TF: 0.5 } },
      { text: '불편함을 느끼고 원래 계획대로 돌아가길 원한다', scores: { JP: 1.5, N: 0.5 } },
    ],
  },
  {
    id: 16,
    framework: 'mbti',
    text: '이상적인 업무 환경은?',
    options: [
      { text: '팀원들과 활발하게 소통하며 협력하는 환경', scores: { EI: 1.5, A: 0.5 } },
      { text: '혼자 집중할 수 있는 조용한 공간', scores: { EI: -2, C: 0.5 } },
      { text: '체계적인 프로세스와 명확한 역할 분담', scores: { JP: 1.5, C: 1 } },
      { text: '자유롭고 창의적인 아이디어가 넘치는 환경', scores: { JP: -1.5, O: 1.5 } },
    ],
  },

  // ── Big Five 질문 (10문항) ─────────────────────────────────────────────────
  {
    id: 17,
    framework: 'bigfive',
    text: '새로운 예술 작품이나 음악을 접할 때 당신은?',
    options: [
      { text: '깊이 감상하고 새로운 영감을 받는다', scores: { O: 2 } },
      { text: '흥미롭지만 익숙한 것이 더 편하다', scores: { O: 0.5 } },
      { text: '별로 관심이 없다', scores: { O: -1 } },
      { text: '실용적 가치가 없으면 의미없다고 생각한다', scores: { O: -2, C: 0.5 } },
    ],
  },
  {
    id: 18,
    framework: 'bigfive',
    text: '할 일 목록과 일정 관리에 대해 어떻게 생각하나요?',
    options: [
      { text: '철저히 관리하고 빠짐없이 체크한다', scores: { C: 2 } },
      { text: '중요한 것만 메모해두는 편이다', scores: { C: 0.5 } },
      { text: '머릿속으로만 기억한다', scores: { C: -0.5 } },
      { text: '계획보다 흐름에 맡기는 편이다', scores: { C: -1.5, O: 0.3 } },
    ],
  },
  {
    id: 19,
    framework: 'bigfive',
    text: '처음 만난 사람들과 함께 있을 때 당신은?',
    options: [
      { text: '금방 친해지고 대화를 이끌어간다', scores: { E: 2, EI: 1 } },
      { text: '상황에 따라 적응한다', scores: { E: 0.5 } },
      { text: '필요한 대화만 하고 조용히 있는 편이다', scores: { E: -0.5, EI: -0.5 } },
      { text: '불편함을 느끼고 빨리 자리를 피하고 싶다', scores: { E: -2, EI: -1 } },
    ],
  },
  {
    id: 20,
    framework: 'bigfive',
    text: '타인의 부탁을 받았을 때 당신은?',
    options: [
      { text: '거절하기 어렵고 최대한 도와주려 한다', scores: { A: 2, TF: -0.5 } },
      { text: '상황을 보고 도울 수 있으면 돕는다', scores: { A: 1 } },
      { text: '내 일이 우선이고 여유가 있을 때만 돕는다', scores: { A: -0.5 } },
      { text: '내 역할 범위 밖이면 정중히 거절한다', scores: { A: -1, TF: 0.5 } },
    ],
  },
  {
    id: 21,
    framework: 'bigfive',
    text: '당신이 일상에서 감정 기복을 경험하는 빈도는?',
    options: [
      { text: '자주 감정 변화를 경험하고 영향을 많이 받는다', scores: { N: 2 } },
      { text: '가끔 감정적으로 힘들 때가 있다', scores: { N: 1 } },
      { text: '대체로 안정적이지만 큰 스트레스엔 흔들린다', scores: { N: -0.5 } },
      { text: '웬만한 상황에도 감정적으로 안정적이다', scores: { N: -2 } },
    ],
  },
  {
    id: 22,
    framework: 'bigfive',
    text: '당신이 가장 잘 하는 일은?',
    options: [
      { text: '새로운 아이디어를 발명하고 창조하는 것', scores: { O: 2, SN: -1 } },
      { text: '사람들과 협력하고 관계를 돈독히 하는 것', scores: { A: 1.5, E: 0.5 } },
      { text: '계획을 세우고 실행하는 것', scores: { C: 2, JP: 1 } },
      { text: '복잡한 문제를 분석하고 해결하는 것', scores: { O: 1, TF: 1 } },
    ],
  },
  {
    id: 23,
    framework: 'bigfive',
    text: '불확실한 상황에서 당신의 심리 상태는?',
    options: [
      { text: '불안하고 최악의 상황을 자꾸 상상한다', scores: { N: 2, anxious: 0.5 } },
      { text: '걱정되지만 어떻게든 되겠지 하고 넘긴다', scores: { N: 0.5 } },
      { text: '차분하게 대처 방안을 생각한다', scores: { N: -1, C: 0.5 } },
      { text: '흥미롭게 받아들이고 도전으로 여긴다', scores: { N: -2, O: 1 } },
    ],
  },
  {
    id: 24,
    framework: 'bigfive',
    text: '규칙이나 절차에 대한 당신의 태도는?',
    options: [
      { text: '규칙은 중요하고 반드시 따라야 한다고 생각한다', scores: { C: 2, SN: 0.5 } },
      { text: '대체로 따르지만 유연할 필요가 있다', scores: { C: 0.5 } },
      { text: '상황에 따라 규칙보다 목적이 우선이다', scores: { C: -1, O: 0.5 } },
      { text: '규칙보다 창의적 접근이 더 효과적이다', scores: { C: -2, O: 1.5 } },
    ],
  },
  {
    id: 25,
    framework: 'bigfive',
    text: '타인에 대한 기본적인 시각은?',
    options: [
      { text: '사람들은 기본적으로 선하고 믿을 수 있다', scores: { A: 2, secure: 0.5 } },
      { text: '처음엔 경계하지만 알면 알수록 신뢰한다', scores: { A: 0.5 } },
      { text: '사람마다 다르고 판단은 유보한다', scores: { A: 0 } },
      { text: '사람들은 자기 이익을 먼저 챙긴다', scores: { A: -1.5, avoidant: 0.3 } },
    ],
  },
  {
    id: 26,
    framework: 'bigfive',
    text: '상상력과 창의성에 대해 스스로 어떻게 생각하나요?',
    options: [
      { text: '매우 풍부하고 이것이 나의 강점이다', scores: { O: 2 } },
      { text: '보통 수준이지만 필요할 때 발휘한다', scores: { O: 0.5 } },
      { text: '창의성보다는 실용성이 중요하다', scores: { O: -0.5, C: 0.5 } },
      { text: '창의적이기보다 분석적인 편이다', scores: { O: -1, TF: 0.5 } },
    ],
  },

  // ── 에니어그램 질문 (8문항) ───────────────────────────────────────────────
  {
    id: 27,
    framework: 'enneagram',
    text: '당신이 가장 깊이 두려워하는 것은?',
    options: [
      { text: '잘못된 사람이 되는 것, 부도덕한 행동', scores: { E1: 3, E6: 0.5 } },
      { text: '사랑받지 못하거나 버려지는 것', scores: { E2: 3, E4: 0.5, anxious: 0.5 } },
      { text: '가치 없는 사람으로 실패하는 것', scores: { E3: 3 } },
      { text: '개성을 잃고 평범해지는 것', scores: { E4: 3, O: 0.5 } },
    ],
  },
  {
    id: 28,
    framework: 'enneagram',
    text: '당신의 핵심 동기는 무엇인가요?',
    options: [
      { text: '세상을 더 안전하고 예측 가능하게 만들기', scores: { E6: 3, E5: 0.5 } },
      { text: '성공하고 성취를 이루어 인정받기', scores: { E3: 2.5, E8: 0.5 } },
      { text: '타인을 돕고 사랑받기', scores: { E2: 2.5, E9: 0.5 } },
      { text: '자유롭고 행복한 경험 추구하기', scores: { E7: 3, E4: 0.5 } },
    ],
  },
  {
    id: 29,
    framework: 'enneagram',
    text: '관계에서 당신이 자연스럽게 하는 역할은?',
    options: [
      { text: '갈등을 중재하고 평화를 유지하는 사람', scores: { E9: 3, E2: 0.5 } },
      { text: '리더십을 발휘하고 방향을 제시하는 사람', scores: { E8: 3, E3: 0.5 } },
      { text: '지식과 분석으로 문제를 해결하는 사람', scores: { E5: 3, E1: 0.5 } },
      { text: '감성적 깊이로 연결을 이끄는 사람', scores: { E4: 2.5, E2: 0.5 } },
    ],
  },
  {
    id: 30,
    framework: 'enneagram',
    text: '스트레스를 받을 때 당신의 전형적인 반응은?',
    options: [
      { text: '더 통제하고 완벽해지려 한다', scores: { E1: 2, E3: 1 } },
      { text: '불안해지고 최악의 상황을 걱정한다', scores: { E6: 2.5, anxious: 0.5 } },
      { text: '혼자 틀어박히고 감정을 차단한다', scores: { E5: 2, E4: 0.5, avoidant: 0.5 } },
      { text: '더 활동적이 되고 즐거운 것을 찾는다', scores: { E7: 2.5 } },
    ],
  },
  {
    id: 31,
    framework: 'enneagram',
    text: '당신의 가장 큰 강점은?',
    options: [
      { text: '도덕적 원칙과 책임감', scores: { E1: 2.5, E6: 0.5 } },
      { text: '따뜻한 배려와 공감 능력', scores: { E2: 2.5, A: 0.5 } },
      { text: '강인함과 실행력', scores: { E8: 2.5, E3: 0.5 } },
      { text: '독창성과 깊은 감성', scores: { E4: 2.5, O: 0.5 } },
    ],
  },
  {
    id: 32,
    framework: 'enneagram',
    text: '완벽한 하루를 보낸다면 어떤 모습인가요?',
    options: [
      { text: '목표를 달성하고 생산적인 하루', scores: { E3: 2, E1: 1, C: 0.5 } },
      { text: '소중한 사람과 깊이 연결된 하루', scores: { E2: 2, E9: 1, A: 0.5 } },
      { text: '새로운 것을 배우고 탐구한 하루', scores: { E5: 2, E7: 1, O: 0.5 } },
      { text: '평화롭고 아무 걱정 없는 하루', scores: { E9: 2.5, N: -0.5 } },
    ],
  },
  {
    id: 33,
    framework: 'enneagram',
    text: '타인에게 가장 많이 받는 피드백은?',
    options: [
      { text: '너무 비판적이고 완벽주의적이다', scores: { E1: 3 } },
      { text: '너무 욕심이 많고 경쟁적이다', scores: { E3: 2.5, E8: 0.5 } },
      { text: '너무 의존적이거나 감정적이다', scores: { E2: 1.5, E4: 1.5 } },
      { text: '너무 소극적이거나 결단력이 없다', scores: { E9: 2, E6: 1 } },
    ],
  },
  {
    id: 34,
    framework: 'enneagram',
    text: '자신의 가장 솔직한 내면을 표현한다면?',
    options: [
      { text: '세상이 안전하지 않고 실수가 두렵다', scores: { E6: 2.5, E1: 0.5 } },
      { text: '충분히 사랑받지 못할까봐 걱정된다', scores: { E2: 2, E4: 1, anxious: 0.5 } },
      { text: '나는 특별하고 이해받지 못한다는 느낌', scores: { E4: 3 } },
      { text: '누구에게도 의존하고 싶지 않다', scores: { E5: 2, E8: 1, avoidant: 0.5 } },
    ],
  },

  // ── 애착 유형 질문 (6문항) ────────────────────────────────────────────────
  {
    id: 35,
    framework: 'attachment',
    text: '친밀한 관계에서 당신이 가장 불편함을 느끼는 상황은?',
    options: [
      { text: '상대방이 나에게 너무 의존하려 할 때', scores: { avoidant: 2 } },
      { text: '상대방의 연락이 뜸해질 때', scores: { anxious: 2.5 } },
      { text: '관계에서 예상치 못한 충돌이 생길 때', scores: { disorganized: 2 } },
      { text: '크게 불편한 상황은 없는 편이다', scores: { secure: 2 } },
    ],
  },
  {
    id: 36,
    framework: 'attachment',
    text: '연인이나 친한 친구가 기분이 안 좋아 보일 때, 당신은?',
    options: [
      { text: '먼저 다가가 괜찮냐고 물어보고 도움을 제안한다', scores: { secure: 2, A: 0.5 } },
      { text: '혹시 내가 뭘 잘못했는지 걱정이 된다', scores: { anxious: 2.5 } },
      { text: '상대가 먼저 말하길 기다린다', scores: { avoidant: 1.5 } },
      { text: '어떻게 반응해야 할지 몰라 어색하다', scores: { disorganized: 2 } },
    ],
  },
  {
    id: 37,
    framework: 'attachment',
    text: '관계에서 갈등이 생겼을 때 당신의 전형적인 패턴은?',
    options: [
      { text: '차분하게 대화로 해결하려 한다', scores: { secure: 2.5 } },
      { text: '화해할까봐 불안하고 집착하는 경향이 있다', scores: { anxious: 2.5 } },
      { text: '거리를 두고 스스로 정리하는 시간이 필요하다', scores: { avoidant: 2.5 } },
      { text: '감정이 격해지거나 예측 불가능하게 반응한다', scores: { disorganized: 2.5 } },
    ],
  },
  {
    id: 38,
    framework: 'attachment',
    text: '타인과의 친밀감에 대해 당신의 솔직한 생각은?',
    options: [
      { text: '친밀감은 행복의 원천이고 자연스럽게 형성된다', scores: { secure: 2.5 } },
      { text: '친밀해지고 싶지만 상대가 떠날까봐 두렵다', scores: { anxious: 3 } },
      { text: '일정 거리 유지가 편하고 너무 가까우면 불편하다', scores: { avoidant: 3 } },
      { text: '가까워지고 싶은데 동시에 두려움도 느낀다', scores: { disorganized: 3 } },
    ],
  },
  {
    id: 39,
    framework: 'attachment',
    text: '어린 시절 부모나 주 양육자와의 관계를 떠올리면?',
    options: [
      { text: '대체로 따뜻하고 안정적이었다', scores: { secure: 2 } },
      { text: '사랑은 받았지만 불안하거나 예측하기 어려웠다', scores: { anxious: 2, disorganized: 0.5 } },
      { text: '정서적으로 거리감이 있거나 무관심했다', scores: { avoidant: 2 } },
      { text: '따뜻할 때도 있었지만 무섭거나 혼란스러울 때도 있었다', scores: { disorganized: 2.5 } },
    ],
  },
  {
    id: 40,
    framework: 'attachment',
    text: '현재 관계에서 당신의 가장 큰 바람은?',
    options: [
      { text: '서로를 이해하고 지지하는 깊은 연결', scores: { secure: 2, A: 0.5 } },
      { text: '항상 곁에 있어주고 나를 안심시켜 주는 사람', scores: { anxious: 2.5 } },
      { text: '나의 자율성을 존중해주는 관계', scores: { avoidant: 2.5 } },
      { text: '예측 가능하고 일관된 반응을 해주는 사람', scores: { disorganized: 2.5 } },
    ],
  },
];
