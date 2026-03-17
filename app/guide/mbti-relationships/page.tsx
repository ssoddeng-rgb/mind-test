import Link from 'next/link';
import Footer from '@/components/Footer';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'MBTI 유형별 인간관계 가이드 — 궁합과 소통 방식 | 마음 탐구',
  description: 'MBTI 16가지 유형의 인간관계 패턴, 궁합, 소통 방식을 분석합니다. 연인·친구·직장 동료와의 관계에서 MBTI 유형 차이를 이해하고 활용하는 방법.',
};

export default function MbtiRelationshipsPage() {
  return (
    <>
      <main className="min-h-screen bg-gray-50">
        <header className="bg-white border-b border-gray-100 px-4 py-4">
          <div className="max-w-2xl mx-auto flex items-center justify-between">
            <Link href="/guide" className="text-indigo-600 font-semibold hover:text-indigo-700">← 심리학 가이드</Link>
            <Link href="/test" className="text-sm bg-indigo-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-indigo-700 transition-colors">내 유형 알아보기</Link>
          </div>
        </header>

        <article className="max-w-2xl mx-auto px-4 py-10 space-y-10">
          <header>
            <div className="text-5xl mb-4">🤝</div>
            <div className="flex items-center gap-2 mb-3">
              <span className="text-xs font-semibold text-indigo-600 bg-indigo-50 px-2 py-1 rounded-full">MBTI</span>
              <span className="text-xs text-gray-400">읽는 시간 약 10분</span>
            </div>
            <h1 className="text-3xl font-black text-gray-900 mb-4 leading-tight">MBTI 유형별 인간관계 가이드 — 궁합과 소통 방식 완전 분석</h1>
            <p className="text-gray-600 leading-relaxed text-lg">
              "우리는 왜 이렇게 말이 안 통할까?" MBTI 유형 차이를 이해하면
              관계에서의 갈등이 악의가 아닌 단순한 차이에서 비롯된 것임을 알게 됩니다.
              서로의 유형을 이해하는 것이 더 깊은 연결의 시작입니다.
            </p>
          </header>

          <section className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 space-y-4">
            <h2 className="text-xl font-bold text-gray-800">MBTI 차원별 관계 갈등과 이해</h2>

            <div className="space-y-5">
              <div className="bg-blue-50 rounded-xl p-5 border border-blue-100">
                <h3 className="font-bold text-blue-800 mb-3">E(외향) ↔ I(내향) 갈등</h3>
                <div className="space-y-2 text-sm text-gray-700">
                  <p><strong>전형적 갈등:</strong> 외향형은 "왜 집에만 있으려 해?"라고 느끼고, 내향형은 "왜 항상 밖에 나가야 해?"라고 느낍니다.</p>
                  <p><strong>이해의 핵심:</strong> 외향형은 사람과의 교류로 에너지를 얻고, 내향형은 혼자만의 시간으로 에너지를 회복합니다. 이것은 의지의 문제가 아니라 에너지 충전 방식의 차이입니다.</p>
                  <p><strong>관계 팁:</strong> 각자의 에너지 충전 방식을 존중하고, 함께하는 시간과 개인 시간의 균형을 협의하세요.</p>
                </div>
              </div>

              <div className="bg-green-50 rounded-xl p-5 border border-green-100">
                <h3 className="font-bold text-green-800 mb-3">S(감각) ↔ N(직관) 갈등</h3>
                <div className="space-y-2 text-sm text-gray-700">
                  <p><strong>전형적 갈등:</strong> S형은 "구체적으로 말해줘, 두루뭉술하게 얘기하면 모르겠어"라고 하고, N형은 "왜 그렇게 세세하게 따지는 거야?"라고 느낍니다.</p>
                  <p><strong>이해의 핵심:</strong> S형은 현재의 구체적 사실과 경험에서 의미를 찾고, N형은 패턴과 미래 가능성에서 의미를 찾습니다.</p>
                  <p><strong>관계 팁:</strong> S형과 소통할 때는 구체적 예시를 들고, N형과 소통할 때는 큰 그림을 먼저 보여준 후 세부 사항으로 들어가세요.</p>
                </div>
              </div>

              <div className="bg-yellow-50 rounded-xl p-5 border border-yellow-100">
                <h3 className="font-bold text-yellow-800 mb-3">T(사고) ↔ F(감정) 갈등</h3>
                <div className="space-y-2 text-sm text-gray-700">
                  <p><strong>전형적 갈등:</strong> T형은 "감정적으로 반응하지 말고 이성적으로 생각해"라고 하고, F형은 "당신은 너무 차갑고 공감이 없어"라고 느낍니다.</p>
                  <p><strong>이해의 핵심:</strong> T형은 논리와 원칙으로 결정하고, F형은 가치와 사람에 대한 영향으로 결정합니다. 둘 다 타당한 의사결정 방식입니다.</p>
                  <p><strong>관계 팁:</strong> T형은 F형과의 갈등에서 먼저 감정을 인정해준 후 해결책을 논의하세요. F형은 T형이 비판이 아닌 개선을 원한다는 것을 이해하세요.</p>
                </div>
              </div>

              <div className="bg-purple-50 rounded-xl p-5 border border-purple-100">
                <h3 className="font-bold text-purple-800 mb-3">J(판단) ↔ P(인식) 갈등</h3>
                <div className="space-y-2 text-sm text-gray-700">
                  <p><strong>전형적 갈등:</strong> J형은 "왜 항상 막판에 일하는 거야, 계획을 세워줘"라고 하고, P형은 "왜 항상 계획대로만 하려 해, 즉흥적으로 살자"라고 느낍니다.</p>
                  <p><strong>이해의 핵심:</strong> J형은 결론과 마무리에서 만족감을 얻고, P형은 과정과 가능성에서 에너지를 얻습니다.</p>
                  <p><strong>관계 팁:</strong> 중요한 일에는 구조를 갖추고(J 만족), 일상적인 일에는 유연성을 허용하는(P 만족) 타협점을 찾으세요.</p>
                </div>
              </div>
            </div>
          </section>

          <section className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 space-y-4">
            <h2 className="text-xl font-bold text-gray-800">4개 기질 그룹의 관계 스타일</h2>
            <p className="text-gray-600 text-sm">David Keirsey는 16가지 MBTI 유형을 4개 기질로 묶었습니다. 같은 기질 안에서 소통이 비교적 쉽고, 다른 기질과는 풍요로운 보완이 가능합니다.</p>
            <div className="space-y-3">
              {[
                { name: '수호자 (SJ)', types: 'ISTJ, ISFJ, ESTJ, ESFJ', style: '안정과 전통을 중시. 책임감이 강하고 헌신적. 관계에서 신뢰와 지속성을 최우선시하며, 실질적인 방식으로 사랑을 표현합니다.', color: 'bg-blue-50 border-blue-200' },
                { name: '탐험가 (SP)', types: 'ISTP, ISFP, ESTP, ESFP', style: '자유와 현재 경험을 중시. 자발적이고 적응력이 강함. 관계에서 함께하는 즐거운 경험을 통해 연결감을 느끼며, 구속받는 것을 불편해합니다.', color: 'bg-green-50 border-green-200' },
                { name: '이상주의자 (NF)', types: 'INFJ, INFP, ENFJ, ENFP', style: '의미와 진정성을 중시. 공감 능력이 뛰어남. 관계에서 깊은 정서적 연결과 서로의 성장을 추구하며, 피상적인 관계를 불만족스러워합니다.', color: 'bg-rose-50 border-rose-200' },
                { name: '합리주의자 (NT)', types: 'INTJ, INTP, ENTJ, ENTP', style: '지식과 역량을 중시. 독립적이고 전략적. 관계에서 지적 자극과 상호 존중을 중시하며, 비합리적인 감정적 요구를 어려워합니다.', color: 'bg-purple-50 border-purple-200' },
              ].map((g) => (
                <div key={g.name} className={`rounded-xl p-4 border ${g.color}`}>
                  <p className="font-bold text-gray-800 text-sm">{g.name} <span className="text-xs text-gray-500 font-normal ml-1">({g.types})</span></p>
                  <p className="text-xs text-gray-600 leading-relaxed mt-1">{g.style}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 space-y-4">
            <h2 className="text-xl font-bold text-gray-800">MBTI 궁합: 편견 없이 이해하기</h2>
            <p className="text-gray-600 text-sm leading-relaxed">
              인터넷에 떠도는 "MBTI 궁합표"는 지나치게 단순화된 경우가 많습니다.
              실제 연구에서는 특정 유형 조합이 자동으로 더 좋은 관계를 만든다는 증거가 없습니다.
            </p>
            <div className="space-y-3 text-sm text-gray-600">
              <div className="bg-gray-50 rounded-xl p-4">
                <p className="font-semibold text-gray-700 mb-2">✅ 유사형 관계의 장단점</p>
                <p><strong>장점:</strong> 소통 방식과 가치관이 비슷해 갈등이 적고 이해가 빠릅니다.</p>
                <p><strong>단점:</strong> 맹점이 겹쳐 서로의 약점을 보완하기 어렵고, 새로운 관점을 갖기 어렵습니다.</p>
              </div>
              <div className="bg-gray-50 rounded-xl p-4">
                <p className="font-semibold text-gray-700 mb-2">✅ 보완형 관계의 장단점</p>
                <p><strong>장점:</strong> 서로의 강점으로 약점을 채워주고, 더 넓은 세계관을 경험할 수 있습니다.</p>
                <p><strong>단점:</strong> 소통 방식의 차이로 오해와 갈등이 생기기 쉬우며, 적극적인 이해 노력이 필요합니다.</p>
              </div>
            </div>
            <p className="text-gray-600 text-sm bg-indigo-50 rounded-xl p-4">
              💡 <strong>핵심 결론:</strong> 관계의 질을 결정하는 것은 유형의 조합이 아니라,
              서로의 차이를 이해하고 존중하려는 의지와 소통 노력입니다.
            </p>
          </section>

          <div className="bg-indigo-50 rounded-2xl p-6 text-center border border-indigo-100">
            <p className="text-2xl mb-3">🤝</p>
            <h3 className="font-bold text-indigo-800 mb-2">나와 파트너의 MBTI를 알고 싶다면?</h3>
            <p className="text-sm text-indigo-600 mb-4">무료 종합 심리검사로 MBTI를 포함한 4가지 심리 유형을 확인하세요.</p>
            <Link href="/test" className="inline-block px-6 py-3 bg-indigo-600 text-white font-bold rounded-xl hover:bg-indigo-700 transition-colors">
              무료 검사 시작하기 →
            </Link>
          </div>

          <nav className="flex justify-between text-sm">
            <Link href="/guide/how-to-use-results" className="text-indigo-600 hover:underline">← 결과 활용법</Link>
            <Link href="/guide/psychology-history" className="text-indigo-600 hover:underline">성격심리학의 역사 →</Link>
          </nav>
        </article>
      </main>
      <Footer />
    </>
  );
}
