import Link from 'next/link';
import Footer from '@/components/Footer';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '심리테스트 결과 활용법 — MBTI·Big Five·에니어그램·애착 유형 결과 해석 | 마음 탐구',
  description: '심리테스트 결과를 진로, 인간관계, 자기 성장에 실질적으로 활용하는 방법을 안내합니다. 4가지 심리 유형 결과를 통합적으로 해석하는 가이드.',
};

export default function HowToUseResultsPage() {
  return (
    <>
      <main className="min-h-screen bg-gray-50">
        <header className="bg-white border-b border-gray-100 px-4 py-4">
          <div className="max-w-2xl mx-auto flex items-center justify-between">
            <Link href="/guide" className="text-indigo-600 font-semibold hover:text-indigo-700">← 심리학 가이드</Link>
            <Link href="/test" className="text-sm bg-indigo-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-indigo-700 transition-colors">검사 시작하기</Link>
          </div>
        </header>

        <article className="max-w-2xl mx-auto px-4 py-10 space-y-10">
          <header>
            <div className="text-5xl mb-4">🔮</div>
            <div className="flex items-center gap-2 mb-3">
              <span className="text-xs font-semibold text-indigo-600 bg-indigo-50 px-2 py-1 rounded-full">Guide</span>
              <span className="text-xs text-gray-400">읽는 시간 약 8분</span>
            </div>
            <h1 className="text-3xl font-black text-gray-900 mb-4 leading-tight">심리테스트 결과 활용법 — 4가지 유형을 삶에 적용하기</h1>
            <p className="text-gray-600 leading-relaxed text-lg">
              MBTI 유형을 알게 되었을 때 "맞아, 나 이런 사람이야!"라고 공감하는 것에서 끝나는 경우가 많습니다.
              하지만 심리 유형 검사의 진정한 가치는 그것을 자기 이해와 성장의 도구로 활용할 때 발휘됩니다.
            </p>
          </header>

          <section className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 space-y-4">
            <h2 className="text-xl font-bold text-gray-800">결과를 읽기 전에: 올바른 마음가짐</h2>
            <div className="space-y-3">
              {[
                { icon: '✅', title: '결과는 현재의 경향성입니다', desc: '심리 유형은 고정된 운명이 아니라 현재 시점의 성향입니다. 시간이 지남에 따라, 그리고 의식적인 노력으로 변할 수 있습니다.' },
                { icon: '✅', title: '모든 유형은 동등하게 가치 있습니다', desc: '"좋은" 유형과 "나쁜" 유형은 존재하지 않습니다. 각 유형은 고유한 강점과 성장 과제를 가집니다.' },
                { icon: '✅', title: '유형으로 사람을 판단하지 마세요', desc: '자기 이해의 도구를 타인을 평가하거나 단정 짓는 데 사용하는 것은 올바른 활용법이 아닙니다.' },
                { icon: '⚠️', title: '전문 진단을 대체하지 않습니다', desc: '심리테스트 결과는 참고 자료입니다. 정신건강 문제는 반드시 전문가와 상담하세요.' },
              ].map((item) => (
                <div key={item.title} className="bg-gray-50 rounded-xl p-4 flex items-start gap-3">
                  <span className="text-lg flex-shrink-0">{item.icon}</span>
                  <div>
                    <p className="font-semibold text-gray-800 text-sm mb-1">{item.title}</p>
                    <p className="text-xs text-gray-600 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 space-y-5">
            <h2 className="text-xl font-bold text-gray-800">분야별 결과 활용 가이드</h2>

            <div className="border-l-4 border-blue-400 pl-4 space-y-2">
              <h3 className="font-bold text-gray-800">🎯 진로와 직업 탐색</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                MBTI와 Big Five 결과는 어떤 업무 환경과 역할에서 강점을 발휘하는지 탐색하는 데 도움을 줍니다.
              </p>
              <div className="text-xs text-gray-600 space-y-2 bg-gray-50 rounded-lg p-3">
                <p><strong>외향성(E/높은 Extraversion):</strong> 팀워크, 발표, 영업, 고객 응대 역할에 강함</p>
                <p><strong>내향성(I/낮은 Extraversion):</strong> 심층 연구, 분석, 독립 작업, 전문성 개발에 강함</p>
                <p><strong>높은 개방성(O):</strong> 창의적 역할, 연구, 예술, 전략 기획에 적합</p>
                <p><strong>높은 성실성(C):</strong> 프로젝트 관리, 재무, 법률, 의료 등 정확성이 필요한 분야</p>
                <p><strong>높은 친화성(A):</strong> 상담, 교육, 의료, 사회적 서비스 분야</p>
              </div>
              <p className="text-xs text-gray-500 italic">⚠️ 성격 유형이 직업 성공을 결정하지는 않습니다. 모든 유형이 다양한 분야에서 성공할 수 있습니다.</p>
            </div>

            <div className="border-l-4 border-green-400 pl-4 space-y-2">
              <h3 className="font-bold text-gray-800">🤝 인간관계 개선</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                자신의 유형을 이해하면 관계에서의 패턴을 더 잘 이해하고, 갈등의 원인을 파악하는 데 도움이 됩니다.
              </p>
              <div className="text-xs text-gray-600 space-y-2 bg-gray-50 rounded-lg p-3">
                <p><strong>MBTI J vs P 충돌:</strong> J형(계획 선호)과 P형(자발성 선호)이 함께 일할 때 일정 관리 방식에서 충돌이 생기기 쉽습니다. 서로의 방식을 인정하고 중간 지점을 찾는 것이 핵심입니다.</p>
                <p><strong>애착 유형 이해:</strong> 불안 애착 파트너의 확인 추구 행동이나 회피 애착 파트너의 거리 두기가 적대적 의도가 아닌 두려움에서 비롯된 것임을 이해하면 관계가 달라집니다.</p>
                <p><strong>에니어그램 궁합:</strong> 9번(평화주의자)과 3번(성취자)은 서로 다른 속도와 우선순위를 가져 마찰이 생길 수 있으나, 상호 보완도 가능합니다.</p>
              </div>
            </div>

            <div className="border-l-4 border-purple-400 pl-4 space-y-2">
              <h3 className="font-bold text-gray-800">🌱 자기 성장과 내면 발전</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                에니어그램은 특히 자기 성장에 강력한 도구입니다. 각 유형의 성장 방향을 알면
                어떤 부분을 의식적으로 개발해야 하는지 명확해집니다.
              </p>
              <div className="text-xs text-gray-600 space-y-1 bg-gray-50 rounded-lg p-3">
                <p><strong>자신의 핵심 두려움 인식:</strong> 에니어그램 유형별 핵심 두려움을 알면 자신의 방어 기제와 자동화된 반응 패턴을 이해할 수 있습니다.</p>
                <p><strong>Big Five 성장 영역:</strong> 낮은 점수 차원이 문제가 아니라 성장 가능성입니다. 낮은 성실성? 작은 습관부터 시작하세요. 높은 신경성? 마음챙김 연습이 도움됩니다.</p>
                <p><strong>MBTI 열등 기능 개발:</strong> 각 MBTI 유형이 가장 덜 발달한 "열등 기능"을 의식적으로 사용하면 통합적 성장이 이루어집니다.</p>
              </div>
            </div>

            <div className="border-l-4 border-orange-400 pl-4 space-y-2">
              <h3 className="font-bold text-gray-800">💼 팀과 조직에서의 활용</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                팀 구성에서 다양한 유형의 조합은 맹점을 줄이고 창의성을 높입니다.
              </p>
              <div className="text-xs text-gray-600 space-y-1 bg-gray-50 rounded-lg p-3">
                <p><strong>상호 보완 팀:</strong> 큰 그림을 보는 N형과 세부 사항을 꼼꼼히 챙기는 S형이 함께하면 전략과 실행이 균형을 이룹니다.</p>
                <p><strong>소통 방식 조정:</strong> T형 동료에게는 논리와 데이터로, F형 동료에게는 감정과 가치 중심으로 설명하는 것이 효과적입니다.</p>
                <p><strong>역할 배분:</strong> 높은 성실성(C)의 팀원에게는 프로세스 관리를, 높은 개방성(O)의 팀원에게는 창의적 문제 해결을 맡기는 것이 시너지를 냅니다.</p>
              </div>
            </div>
          </section>

          <section className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 space-y-4">
            <h2 className="text-xl font-bold text-gray-800">4가지 유형 결과를 통합적으로 읽는 법</h2>
            <p className="text-gray-600 text-sm leading-relaxed">
              마음 탐구의 종합 리포트는 4가지 심리 프레임을 동시에 제공합니다.
              이것들이 서로 어떻게 연결되는지 이해하면 더 깊은 자기 인식이 가능합니다.
            </p>
            <div className="space-y-3">
              <div className="bg-gray-50 rounded-xl p-4 text-sm">
                <p className="font-bold text-gray-700 mb-2">예시: INFP + 높은 개방성/낮은 성실성 + 4번 에니어그램 + 불안 애착</p>
                <p className="text-xs text-gray-600 leading-relaxed">
                  이 조합에서 보이는 공통 주제는 <strong>깊은 감수성, 정체성 탐구, 연결에 대한 갈망</strong>입니다.
                  INFP의 이상주의, 4번의 개인성 추구, 불안 애착의 친밀감 욕구가 모두 같은 방향을 가리킵니다.
                  성장 포인트는 외부 확인 없이도 자신의 가치를 느끼는 것과, 구체적인 행동으로 이상을 실현하는 것입니다.
                </p>
              </div>
            </div>
          </section>

          <div className="bg-indigo-50 rounded-2xl p-6 text-center border border-indigo-100">
            <p className="text-2xl mb-3">🔮</p>
            <h3 className="font-bold text-indigo-800 mb-2">아직 검사를 하지 않으셨나요?</h3>
            <p className="text-sm text-indigo-600 mb-4">40문항으로 나만의 종합 심리 리포트를 지금 바로 무료로 받아보세요.</p>
            <Link href="/test" className="inline-block px-6 py-3 bg-indigo-600 text-white font-bold rounded-xl hover:bg-indigo-700 transition-colors">
              무료 검사 시작하기 →
            </Link>
          </div>

          <nav className="flex justify-between text-sm">
            <Link href="/guide/attachment-style" className="text-indigo-600 hover:underline">← 애착 유형 가이드</Link>
            <Link href="/guide/mbti-relationships" className="text-indigo-600 hover:underline">MBTI 인간관계 가이드 →</Link>
          </nav>
        </article>
      </main>
      <Footer />
    </>
  );
}
