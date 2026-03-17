import Link from 'next/link';
import Footer from '@/components/Footer';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '자기 인식과 성장 — 성격 유형을 넘어서 진정한 나를 이해하기 | 마음 탐구',
  description: '성격 유형 검사 결과를 자기 성장의 도구로 활용하는 방법을 설명합니다. 유형 레이블을 넘어 진정한 자기 인식에 도달하는 심리학적 접근법.',
};

export default function SelfAwarenessPage() {
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
            <div className="text-5xl mb-4">🌱</div>
            <div className="flex items-center gap-2 mb-3">
              <span className="text-xs font-semibold text-green-600 bg-green-50 px-2 py-1 rounded-full">Growth</span>
              <span className="text-xs text-gray-400">읽는 시간 약 10분</span>
            </div>
            <h1 className="text-3xl font-black text-gray-900 mb-4 leading-tight">자기 인식과 성장 — 성격 유형 레이블을 넘어 진정한 나를 이해하기</h1>
            <p className="text-gray-600 leading-relaxed text-lg">
              "나는 INTJ야"라고 말하는 순간, 우리는 자신을 하나의 레이블로 축소하는 위험에 빠집니다.
              성격 유형은 자기 이해의 출발점이지, 목적지가 아닙니다.
              진정한 자기 인식은 유형보다 훨씬 깊고 풍부한 여정입니다.
            </p>
          </header>

          <section className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 space-y-4">
            <h2 className="text-xl font-bold text-gray-800">자기 인식(Self-Awareness)이란 무엇인가?</h2>
            <p className="text-gray-600 text-sm leading-relaxed">
              자기 인식은 자신의 생각, 감정, 행동, 가치관, 동기를 정확하게 이해하는 능력입니다.
              심리학자 Tasha Eurich는 《Insight》(2017)에서 자기 인식에는 두 가지 유형이 있다고 말합니다.
            </p>
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-blue-50 rounded-xl p-4">
                <p className="font-bold text-blue-800 text-sm mb-2">내적 자기 인식</p>
                <p className="text-xs text-gray-600 leading-relaxed">자신의 가치관, 열정, 반응, 강점, 약점을 얼마나 명확하게 이해하는가</p>
              </div>
              <div className="bg-purple-50 rounded-xl p-4">
                <p className="font-bold text-purple-800 text-sm mb-2">외적 자기 인식</p>
                <p className="text-xs text-gray-600 leading-relaxed">타인이 자신을 어떻게 보는지를 얼마나 정확하게 파악하는가</p>
              </div>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed">
              흥미롭게도, 내적 자기 인식과 외적 자기 인식은 서로 독립적입니다.
              자신을 잘 안다고 생각하는 사람이 타인의 눈에는 완전히 다르게 보일 수 있습니다.
              Eurich의 연구에 따르면, 스스로 자기 인식이 높다고 생각하는 사람은 95%에 달하지만
              실제로 높은 자기 인식을 보이는 사람은 10~15%에 불과합니다.
            </p>
          </section>

          <section className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 space-y-4">
            <h2 className="text-xl font-bold text-gray-800">성격 유형이 자기 인식에 도움이 되는 방식</h2>
            <div className="space-y-3 text-sm text-gray-600">
              <div className="bg-green-50 rounded-xl p-4">
                <p className="font-semibold text-green-700 mb-1">✅ 언어를 제공합니다</p>
                <p>막연하게 느끼던 자신의 특성에 이름과 개념을 부여함으로써, 자기 이해와 소통을 더 쉽게 합니다. "나는 에너지 소진 없이 오래 혼자 있을 수 있어"라는 경험이 "내향성"이라는 틀로 이해됩니다.</p>
              </div>
              <div className="bg-green-50 rounded-xl p-4">
                <p className="font-semibold text-green-700 mb-1">✅ 타인과의 차이를 정상화합니다</p>
                <p>자신과 다른 방식으로 사고하고 행동하는 사람들을 "틀린" 것이 아닌 "다른" 유형으로 이해함으로써, 공감과 관용의 폭을 넓힙니다.</p>
              </div>
              <div className="bg-green-50 rounded-xl p-4">
                <p className="font-semibold text-green-700 mb-1">✅ 성장 방향을 제시합니다</p>
                <p>각 유형의 특징적인 방어 기제와 성장 과제를 알면, 자신이 어떤 부분을 의식적으로 개발해야 하는지 명확해집니다.</p>
              </div>
            </div>
          </section>

          <section className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 space-y-4">
            <h2 className="text-xl font-bold text-gray-800">성격 유형의 함정: 주의해야 할 것들</h2>
            <div className="space-y-3 text-sm text-gray-600">
              <div className="bg-amber-50 rounded-xl p-4 border border-amber-100">
                <p className="font-semibold text-amber-700 mb-1">⚠️ 바넘 효과(Barnum Effect)와 확증 편향</p>
                <p>많은 성격 묘사는 "나를 정확히 묘사한다"고 느낄 만큼 일반적입니다.
                자신에게 유리한 정보는 수용하고 불편한 정보는 무시하는 확증 편향도 작용합니다.
                결과를 비판적으로 검토하는 습관이 필요합니다.</p>
              </div>
              <div className="bg-amber-50 rounded-xl p-4 border border-amber-100">
                <p className="font-semibold text-amber-700 mb-1">⚠️ 성격 유형을 핑계로 삼기</p>
                <p>"나는 P유형이라 계획을 못 세워" "나는 I유형이라 사람들과 잘 못 어울려" 등
                유형을 행동 변화를 하지 않는 이유로 사용하는 것은 성장을 막습니다.
                유형은 이해의 출발점이지, 제약이 아닙니다.</p>
              </div>
              <div className="bg-amber-50 rounded-xl p-4 border border-amber-100">
                <p className="font-semibold text-amber-700 mb-1">⚠️ 레이블로 타인을 단정 짓기</p>
                <p>MBTI 유형이나 에니어그램 번호로 타인을 예단하거나 판단하는 것은
                인간의 복잡성을 무시하는 것입니다. 유형은 사람을 이해하는 하나의 렌즈일 뿐,
                그 사람 전체가 아닙니다.</p>
              </div>
              <div className="bg-amber-50 rounded-xl p-4 border border-amber-100">
                <p className="font-semibold text-amber-700 mb-1">⚠️ 유형 정체성의 과잉 동일시</p>
                <p>자신을 특정 유형과 과도하게 동일시하면 유형의 틀에 갇혀 성장이 제한됩니다.
                융은 "페르소나(사회적 가면)와 자신을 동일시하지 마라"고 경고했습니다.</p>
              </div>
            </div>
          </section>

          <section className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 space-y-4">
            <h2 className="text-xl font-bold text-gray-800">진정한 자기 인식을 높이는 실천 방법</h2>
            <div className="space-y-4">
              {[
                {
                  num: '01',
                  title: '저널링(Journaling)과 성찰',
                  content: '매일 혹은 주기적으로 자신의 감정, 반응, 결정에 대해 글로 기록하고 성찰합니다. "왜 그렇게 반응했을까?", "어떤 상황에서 에너지가 넘치고 소진되는가?"와 같은 질문들이 도움이 됩니다.',
                },
                {
                  num: '02',
                  title: '타인의 솔직한 피드백 구하기',
                  content: '신뢰하는 사람들에게 자신에 대한 솔직한 피드백을 구합니다. Tasha Eurich는 이를 "loving critics(사랑하는 비평가)"라고 부릅니다. 방어적이 되지 않고 그 피드백을 받아들이는 연습이 필요합니다.',
                },
                {
                  num: '03',
                  title: '마음챙김(Mindfulness) 실천',
                  content: '생각과 감정을 판단 없이 관찰하는 마음챙김 명상은 자동적인 반응 패턴을 인식하는 데 도움을 줍니다. 하루 10분의 마음챙김 실천도 자기 인식을 높이는 데 효과적입니다.',
                },
                {
                  num: '04',
                  title: '"왜?"보다 "무엇?" 질문하기',
                  content: 'Eurich의 연구에 따르면, "왜 나는 이런 사람인가?"라는 질문은 종종 자기 비판과 부정적 반추를 유발합니다. 대신 "무엇이 나를 이렇게 행동하게 만드는가?", "무엇이 내게 의미 있는가?"라는 질문이 더 생산적입니다.',
                },
                {
                  num: '05',
                  title: '불편한 경험을 통한 성장',
                  content: '편안한 영역 밖의 경험들, 예를 들어 내향형이 발표를 하거나, 감각형이 추상적 사고를 연습하거나, 9번 에니어그램이 갈등 상황에 용감하게 대처하는 것들이 가장 큰 자기 인식과 성장을 가져옵니다.',
                },
              ].map((item) => (
                <div key={item.num} className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-indigo-100 text-indigo-700 font-black rounded-full flex items-center justify-center text-sm">{item.num}</div>
                  <div>
                    <p className="font-bold text-gray-800 text-sm mb-1">{item.title}</p>
                    <p className="text-xs text-gray-600 leading-relaxed">{item.content}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 space-y-4">
            <h2 className="text-xl font-bold text-gray-800">전문적 도움의 가치</h2>
            <p className="text-gray-600 text-sm leading-relaxed">
              자기 인식의 깊이를 더하고 지속적인 성장을 원한다면 심리 상담(Counseling)이나
              심리치료(Psychotherapy)가 강력한 도구가 됩니다.
              좋은 치료사는 자신을 명확히 볼 수 있는 거울이 되어주고,
              오랜 패턴과 방어 기제를 안전하게 탐색하도록 도와줍니다.
            </p>
            <p className="text-gray-600 text-sm leading-relaxed">
              심리 상담은 문제가 있을 때만 가는 곳이 아닙니다.
              자기 이해와 성장을 위한 투자로 접근하는 것이 현대적이고 건강한 시각입니다.
            </p>
          </section>

          <div className="bg-indigo-50 rounded-2xl p-6 text-center border border-indigo-100">
            <p className="text-2xl mb-3">🌱</p>
            <h3 className="font-bold text-indigo-800 mb-2">자기 인식의 첫 걸음을 내딛어 보세요</h3>
            <p className="text-sm text-indigo-600 mb-4">40문항 종합 심리검사로 MBTI·Big Five·에니어그램·애착 유형을 한 번에 알아보세요.</p>
            <Link href="/test" className="inline-block px-6 py-3 bg-indigo-600 text-white font-bold rounded-xl hover:bg-indigo-700 transition-colors">
              무료 검사 시작하기 →
            </Link>
          </div>

          <nav className="flex justify-between text-sm">
            <Link href="/guide/psychology-history" className="text-indigo-600 hover:underline">← 성격심리학의 역사</Link>
            <Link href="/guide" className="text-indigo-600 hover:underline">가이드 목록 →</Link>
          </nav>
        </article>
      </main>
      <Footer />
    </>
  );
}
