import Link from 'next/link';
import Footer from '@/components/Footer';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Big Five(빅파이브) 성격 모델 완전 가이드 — OCEAN 5요인 이해하기 | 마음 탐구',
  description: '심리학에서 가장 신뢰받는 Big Five(OCEAN) 성격 모델을 완벽하게 이해합니다. 개방성·성실성·외향성·친화성·신경성의 의미와 삶에서의 영향을 상세히 설명합니다.',
};

export default function BigFiveGuidePage() {
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
            <div className="text-5xl mb-4">📊</div>
            <div className="flex items-center gap-2 mb-3">
              <span className="text-xs font-semibold text-purple-600 bg-purple-50 px-2 py-1 rounded-full">Big Five</span>
              <span className="text-xs text-gray-400">읽는 시간 약 10분</span>
            </div>
            <h1 className="text-3xl font-black text-gray-900 mb-4 leading-tight">Big Five(빅파이브) 성격 모델 — OCEAN 5요인 완전 가이드</h1>
            <p className="text-gray-600 leading-relaxed text-lg">
              Big Five는 현대 성격심리학에서 가장 광범위하게 연구되고 신뢰받는 모델입니다.
              50년 이상의 연구를 통해 문화적 차이를 넘어 인간의 성격을 설명하는
              5가지 보편적 차원을 발견한 이 이론은 오늘날 성격 연구의 표준이 되었습니다.
            </p>
          </header>

          <section className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 space-y-4">
            <h2 className="text-xl font-bold text-gray-800">Big Five의 역사적 배경</h2>
            <p className="text-gray-600 leading-relaxed text-sm">
              Big Five 이론의 기원은 1930년대로 거슬러 올라갑니다. 심리학자 Gordon Allport와 Henry Odbert가
              영어 사전에서 성격을 묘사하는 약 18,000개의 단어를 수집한 연구에서 시작되었습니다.
              이후 Raymond Cattell이 이를 16가지 요인으로 압축했고, 이를 바탕으로 여러 연구자들이
              공통적으로 5가지 핵심 차원을 발견하게 됩니다.
            </p>
            <p className="text-gray-600 leading-relaxed text-sm">
              1980년대에 Lewis Goldberg가 'Big Five'라는 명칭을 사용하면서 이 모델이 알려지기 시작했고,
              Paul Costa Jr.와 Robert McCrae가 1992년 NEO-PI-R(NEO Personality Inventory-Revised)을 개발하면서
              학문적으로 가장 표준화된 측정 도구로 확립되었습니다.
              이후 50개국 이상에서 진행된 교차문화 연구들이 이 5가지 차원의 보편성을 지지합니다.
            </p>
          </section>

          <section className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 space-y-6">
            <h2 className="text-xl font-bold text-gray-800">OCEAN: 5가지 성격 차원 상세 해설</h2>

            <div className="space-y-6">
              <div className="bg-orange-50 rounded-xl p-5 border border-orange-100">
                <h3 className="font-bold text-orange-800 mb-3 text-lg">O — 개방성 (Openness to Experience)</h3>
                <p className="text-sm text-gray-700 leading-relaxed mb-3">
                  새로운 경험, 아이디어, 예술, 감정에 대한 호기심과 수용성을 나타냅니다.
                </p>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <p className="text-xs font-bold text-orange-700 mb-1">높은 개방성</p>
                    <ul className="text-xs text-gray-600 space-y-1">
                      <li>• 상상력이 풍부하고 창의적</li>
                      <li>• 다양한 문화와 예술에 관심</li>
                      <li>• 추상적 개념을 즐김</li>
                      <li>• 변화와 새로운 경험을 환영</li>
                      <li>• 지적 호기심이 강함</li>
                    </ul>
                  </div>
                  <div>
                    <p className="text-xs font-bold text-orange-700 mb-1">낮은 개방성</p>
                    <ul className="text-xs text-gray-600 space-y-1">
                      <li>• 실용적이고 현실적</li>
                      <li>• 익숙함과 일상을 선호</li>
                      <li>• 구체적 사실 중심</li>
                      <li>• 전통과 관습을 중시</li>
                      <li>• 안정적이고 예측 가능성 선호</li>
                    </ul>
                  </div>
                </div>
                <p className="text-xs text-gray-500 mt-3 bg-white rounded-lg p-2">
                  💼 직업적 연관성: 높은 개방성은 예술, 연구, 창업, 철학 분야와 관련이 있습니다.
                </p>
              </div>

              <div className="bg-blue-50 rounded-xl p-5 border border-blue-100">
                <h3 className="font-bold text-blue-800 mb-3 text-lg">C — 성실성 (Conscientiousness)</h3>
                <p className="text-sm text-gray-700 leading-relaxed mb-3">
                  목표를 향한 자기 규율, 조직화 능력, 신뢰성, 충동 억제 능력을 나타냅니다.
                </p>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <p className="text-xs font-bold text-blue-700 mb-1">높은 성실성</p>
                    <ul className="text-xs text-gray-600 space-y-1">
                      <li>• 조직적이고 계획적</li>
                      <li>• 마감 기한을 철저히 지킴</li>
                      <li>• 목표 지향적</li>
                      <li>• 세부 사항에 주의</li>
                      <li>• 신뢰할 수 있고 책임감 강함</li>
                    </ul>
                  </div>
                  <div>
                    <p className="text-xs font-bold text-blue-700 mb-1">낮은 성실성</p>
                    <ul className="text-xs text-gray-600 space-y-1">
                      <li>• 자발적이고 유연함</li>
                      <li>• 즉흥적 결정 선호</li>
                      <li>• 체계보다 자유 선호</li>
                      <li>• 완벽주의에 덜 얽매임</li>
                      <li>• 때로 규칙을 도전적으로 바라봄</li>
                    </ul>
                  </div>
                </div>
                <p className="text-xs text-gray-500 mt-3 bg-white rounded-lg p-2">
                  📈 연구 결과: 성실성은 학업 성취, 직업적 성공, 건강 행동, 수명과 가장 강한 상관관계를 보입니다.
                </p>
              </div>

              <div className="bg-yellow-50 rounded-xl p-5 border border-yellow-100">
                <h3 className="font-bold text-yellow-800 mb-3 text-lg">E — 외향성 (Extraversion)</h3>
                <p className="text-sm text-gray-700 leading-relaxed mb-3">
                  사회적 상호작용과 외부 자극에서 에너지를 얻는 정도를 나타냅니다.
                </p>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <p className="text-xs font-bold text-yellow-700 mb-1">높은 외향성</p>
                    <ul className="text-xs text-gray-600 space-y-1">
                      <li>• 사교적이고 말이 많음</li>
                      <li>• 주목받는 것을 즐김</li>
                      <li>• 긍정적 감정 경험 빈도 높음</li>
                      <li>• 집단 작업 선호</li>
                      <li>• 자극과 흥분을 추구</li>
                    </ul>
                  </div>
                  <div>
                    <p className="text-xs font-bold text-yellow-700 mb-1">낮은 외향성(내향성)</p>
                    <ul className="text-xs text-gray-600 space-y-1">
                      <li>• 조용하고 사려 깊음</li>
                      <li>• 1:1 대화 선호</li>
                      <li>• 독립적 작업 선호</li>
                      <li>• 에너지 재충전을 위해 혼자만의 시간 필요</li>
                      <li>• 깊이 있는 관계 선호</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-green-50 rounded-xl p-5 border border-green-100">
                <h3 className="font-bold text-green-800 mb-3 text-lg">A — 친화성 (Agreeableness)</h3>
                <p className="text-sm text-gray-700 leading-relaxed mb-3">
                  타인과의 조화, 협력, 공감 능력을 나타냅니다.
                </p>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <p className="text-xs font-bold text-green-700 mb-1">높은 친화성</p>
                    <ul className="text-xs text-gray-600 space-y-1">
                      <li>• 공감 능력이 뛰어남</li>
                      <li>• 협력적이고 타협 선호</li>
                      <li>• 갈등을 피하려 함</li>
                      <li>• 신뢰하고 호의적</li>
                      <li>• 봉사 정신이 강함</li>
                    </ul>
                  </div>
                  <div>
                    <p className="text-xs font-bold text-green-700 mb-1">낮은 친화성</p>
                    <ul className="text-xs text-gray-600 space-y-1">
                      <li>• 직접적이고 단호함</li>
                      <li>• 경쟁적 사고방식</li>
                      <li>• 비판적 시각</li>
                      <li>• 자기 이익을 명확히 추구</li>
                      <li>• 독립적 판단 선호</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-red-50 rounded-xl p-5 border border-red-100">
                <h3 className="font-bold text-red-800 mb-3 text-lg">N — 신경성 (Neuroticism)</h3>
                <p className="text-sm text-gray-700 leading-relaxed mb-3">
                  정서적 불안정성과 부정적 감정(불안, 우울, 분노)에 대한 반응 경향을 나타냅니다.
                  '정서적 안정성(Emotional Stability)'의 반대 극으로 이해하기도 합니다.
                </p>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <p className="text-xs font-bold text-red-700 mb-1">높은 신경성</p>
                    <ul className="text-xs text-gray-600 space-y-1">
                      <li>• 감정 기복이 심함</li>
                      <li>• 스트레스에 민감</li>
                      <li>• 불안감을 자주 경험</li>
                      <li>• 감정이 풍부하고 예민</li>
                      <li>• 자기 비판적 경향</li>
                    </ul>
                  </div>
                  <div>
                    <p className="text-xs font-bold text-red-700 mb-1">낮은 신경성(안정적)</p>
                    <ul className="text-xs text-gray-600 space-y-1">
                      <li>• 침착하고 안정적</li>
                      <li>• 스트레스 회복력 높음</li>
                      <li>• 걱정을 덜 함</li>
                      <li>• 낙관적 시각</li>
                      <li>• 압박 상황에서도 이성적</li>
                    </ul>
                  </div>
                </div>
                <p className="text-xs text-gray-500 mt-3 bg-white rounded-lg p-2">
                  ⚠️ 주의: 신경성이 높다고 반드시 문제가 있는 것이 아닙니다. 감수성과 공감 능력, 예술적 표현과 연관되기도 합니다.
                </p>
              </div>
            </div>
          </section>

          <section className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 space-y-4">
            <h2 className="text-xl font-bold text-gray-800">Big Five가 삶에 미치는 영향</h2>
            <div className="space-y-3">
              {[
                { area: '학업·직업 성취', content: '성실성(C)이 가장 강력한 예측 변수입니다. 높은 성실성은 학업 성적, 직업 수행, 경력 발전과 일관된 상관관계를 보입니다.' },
                { area: '건강과 수명', content: '높은 성실성과 낮은 신경성이 건강한 생활 습관, 의료 지시 준수, 더 긴 수명과 연결됩니다. (Friedman et al., 1993)' },
                { area: '대인관계', content: '높은 친화성과 낮은 신경성은 관계 만족도와 안정성을 높입니다. 외향성은 사회적 네트워크 크기와 관련됩니다.' },
                { area: '정치·경제 성향', content: '개방성은 진보적 가치관과 관련이 있고, 성실성은 보수적 가치관과 약한 상관관계를 보입니다.' },
                { area: '정신 건강', content: '신경성은 불안장애, 우울증 등의 위험 요인 중 하나입니다. 단, 신경성 자체가 진단 기준이 되지는 않습니다.' },
              ].map((item) => (
                <div key={item.area} className="bg-gray-50 rounded-xl p-4">
                  <p className="font-semibold text-gray-800 text-sm mb-1">📌 {item.area}</p>
                  <p className="text-xs text-gray-600 leading-relaxed">{item.content}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 space-y-4">
            <h2 className="text-xl font-bold text-gray-800">Big Five vs MBTI: 무엇이 다른가?</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-xs text-gray-600 border-collapse">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="text-left p-3 font-bold text-gray-700 rounded-tl-lg">항목</th>
                    <th className="text-left p-3 font-bold text-indigo-700">Big Five</th>
                    <th className="text-left p-3 font-bold text-purple-700 rounded-tr-lg">MBTI</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['측정 방식', '연속 점수 (0~100%)', '이분법적 유형 (E 또는 I)'],
                    ['학문적 지위', '학술 연구에서 표준', '대중적, 학계에서는 비판도 있음'],
                    ['신뢰도', '검사-재검사 신뢰도 높음', '4주 후 재검사시 약 50%가 유형 변경'],
                    ['유형 수', '스펙트럼 (무한한 조합)', '16가지 고정 유형'],
                    ['활용', '연구, 임상, 조직심리', '자기 이해, 팀 빌딩, 진로'],
                    ['부정적 차원', '신경성 포함', '모든 유형이 동등한 가치'],
                  ].map(([item, bf, mbti]) => (
                    <tr key={item} className="border-t border-gray-100">
                      <td className="p-3 font-semibold text-gray-700 bg-gray-50">{item}</td>
                      <td className="p-3">{bf}</td>
                      <td className="p-3">{mbti}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <div className="bg-indigo-50 rounded-2xl p-6 text-center border border-indigo-100">
            <p className="text-2xl mb-3">📊</p>
            <h3 className="font-bold text-indigo-800 mb-2">나의 Big Five 점수를 알고 싶다면?</h3>
            <p className="text-sm text-indigo-600 mb-4">레이더 차트로 5가지 성격 차원 점수를 시각화해 드립니다.</p>
            <Link href="/test" className="inline-block px-6 py-3 bg-indigo-600 text-white font-bold rounded-xl hover:bg-indigo-700 transition-colors">
              무료 검사 시작하기 →
            </Link>
          </div>

          <nav className="flex justify-between text-sm">
            <Link href="/guide/mbti" className="text-indigo-600 hover:underline">← MBTI 가이드</Link>
            <Link href="/guide/enneagram" className="text-indigo-600 hover:underline">에니어그램 가이드 →</Link>
          </nav>
        </article>
      </main>
      <Footer />
    </>
  );
}
