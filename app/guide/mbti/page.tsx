import Link from 'next/link';
import Footer from '@/components/Footer';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'MBTI 완전 정복 가이드 — 16가지 성격 유형 총정리 | 마음 탐구',
  description: 'MBTI 16가지 성격 유형의 특징, 강점, 약점, 직업 적합성을 상세히 설명합니다. Myers-Briggs 이론의 4가지 차원(E/I, S/N, T/F, J/P)을 쉽게 이해하세요.',
};

export default function MbtiGuidePage() {
  return (
    <>
      <main className="min-h-screen bg-gray-50">
        <header className="bg-white border-b border-gray-100 px-4 py-4">
          <div className="max-w-2xl mx-auto flex items-center justify-between">
            <Link href="/guide" className="text-indigo-600 font-semibold hover:text-indigo-700">
              ← 심리학 가이드
            </Link>
            <Link href="/test" className="text-sm bg-indigo-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-indigo-700 transition-colors">
              내 유형 알아보기
            </Link>
          </div>
        </header>

        <article className="max-w-2xl mx-auto px-4 py-10 space-y-10">
          <header>
            <div className="text-5xl mb-4">🧠</div>
            <div className="flex items-center gap-2 mb-3">
              <span className="text-xs font-semibold text-indigo-600 bg-indigo-50 px-2 py-1 rounded-full">MBTI</span>
              <span className="text-xs text-gray-400">읽는 시간 약 10분</span>
            </div>
            <h1 className="text-3xl font-black text-gray-900 mb-4 leading-tight">MBTI 완전 정복 가이드 — 16가지 성격 유형 총정리</h1>
            <p className="text-gray-600 leading-relaxed text-lg">
              MBTI는 전 세계에서 가장 널리 사용되는 성격 유형 검사입니다.
              Isabel Briggs Myers와 Katherine Cook Briggs가 Carl Jung의 심리 유형론을 토대로 개발한 이 모델은
              사람의 성격을 4가지 차원으로 분류하여 16가지 유형을 도출합니다.
            </p>
          </header>

          <section className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 space-y-4">
            <h2 className="text-xl font-bold text-gray-800">MBTI의 역사와 배경</h2>
            <p className="text-gray-600 leading-relaxed text-sm">
              MBTI의 기원은 스위스의 정신과 의사 Carl Gustav Jung(1875~1961)의 심리 유형론(Psychological Types, 1921)으로 거슬러 올라갑니다.
              Jung은 인간의 심리 기능을 감각(Sensing), 직관(Intuition), 사고(Thinking), 감정(Feeling)으로 나누고,
              여기에 에너지 방향(외향/내향)을 결합하여 성격을 설명했습니다.
            </p>
            <p className="text-gray-600 leading-relaxed text-sm">
              Isabel Briggs Myers(1897~1980)와 그의 어머니 Katherine Cook Briggs(1875~1968)는 Jung의 이론을 일상에서
              쉽게 적용할 수 있도록 설문 형식으로 발전시켰습니다. 이들은 제2차 세계대전 당시 여성들이 군수 공장에서
              적합한 역할을 찾을 수 있도록 돕기 위해 이 검사를 개발하기 시작했습니다.
              1962년 최초로 출판된 이후, MBTI는 현재 전 세계 100개국 이상에서 연간 약 2,500만 명이 응시하는
              가장 대중적인 성격 검사가 되었습니다.
            </p>
          </section>

          <section className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 space-y-6">
            <h2 className="text-xl font-bold text-gray-800">MBTI의 4가지 차원</h2>
            <p className="text-gray-600 text-sm">MBTI는 4가지 이분법적 차원으로 성격을 측정합니다. 각 차원은 스펙트럼으로 존재하며, 어느 쪽에 더 가까운지를 나타냅니다.</p>

            <div className="space-y-5">
              <div className="border-l-4 border-blue-400 pl-4">
                <h3 className="font-bold text-gray-800 mb-2">1. 에너지 방향: 외향(E) vs 내향(I)</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  이 차원은 에너지를 어디서 얻는지를 나타냅니다.
                  <strong>외향형(Extraversion)</strong>은 사람들과의 상호작용과 외부 활동에서 에너지를 얻습니다.
                  사교적이고 표현이 풍부하며, 혼자 있을 때보다 다른 사람들과 함께할 때 활력을 느낍니다.
                  반면 <strong>내향형(Introversion)</strong>은 혼자만의 시간과 내면의 사색에서 에너지를 얻습니다.
                  깊은 관계를 선호하고, 많은 사람과의 교류 후에는 혼자만의 회복 시간이 필요합니다.
                  흔한 오해와 달리, 내향형이 반드시 수줍음이 많거나 반사회적인 것은 아닙니다.
                </p>
              </div>

              <div className="border-l-4 border-green-400 pl-4">
                <h3 className="font-bold text-gray-800 mb-2">2. 정보 수집 방식: 감각(S) vs 직관(N)</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  이 차원은 정보를 수집하고 처리하는 선호 방식을 나타냅니다.
                  <strong>감각형(Sensing)</strong>은 오감을 통해 직접 관찰할 수 있는 구체적인 사실과 현재에 집중합니다.
                  실용적이고 현실적이며, 세부 사항과 절차를 중시합니다.
                  <strong>직관형(iNtuition)</strong>은 패턴, 가능성, 미래의 잠재력에 주목합니다.
                  상상력이 풍부하고 추상적 개념을 즐기며, 큰 그림을 보는 것을 선호합니다.
                  MBTI 인구 통계상 감각형이 약 70%, 직관형이 약 30%를 차지합니다.
                </p>
              </div>

              <div className="border-l-4 border-yellow-400 pl-4">
                <h3 className="font-bold text-gray-800 mb-2">3. 의사 결정 방식: 사고(T) vs 감정(F)</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  이 차원은 결정을 내릴 때 무엇을 우선시하는지를 나타냅니다.
                  <strong>사고형(Thinking)</strong>은 논리, 일관성, 객관적 분석을 기반으로 결정합니다.
                  원칙을 중시하고 비판적 사고를 즐기며, 때로는 냉정하게 보일 수 있습니다.
                  <strong>감정형(Feeling)</strong>은 가치관, 사람에 대한 영향, 공감을 중심으로 결정합니다.
                  조화를 추구하고 타인의 감정을 깊이 배려하며, 갈등 상황을 불편해합니다.
                  이 차원은 MBTI에서 유일하게 성별에 따른 경향성이 관찰됩니다.
                  (여성의 약 60%가 F, 남성의 약 60%가 T를 선호)
                </p>
              </div>

              <div className="border-l-4 border-purple-400 pl-4">
                <h3 className="font-bold text-gray-800 mb-2">4. 생활 방식: 판단(J) vs 인식(P)</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  이 차원은 외부 세계와 어떻게 상호작용하는지를 나타냅니다.
                  <strong>판단형(Judging)</strong>은 계획, 질서, 결정을 선호합니다.
                  일정을 미리 짜고 마감 기한을 지키며, 결론을 내리는 것을 편안하게 여깁니다.
                  <strong>인식형(Perceiving)</strong>은 유연성, 적응성, 개방성을 선호합니다.
                  자발적이고 상황에 맞게 대응하며, 가능성을 열어두는 것을 선호합니다.
                  계획보다는 즉흥성을 즐기고, 마감 직전에 집중력이 높아지는 경향이 있습니다.
                </p>
              </div>
            </div>
          </section>

          <section className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 space-y-4">
            <h2 className="text-xl font-bold text-gray-800">16가지 MBTI 유형 한눈에 보기</h2>
            <div className="grid grid-cols-2 gap-3">
              {[
                { type: 'INTJ', name: '전략가', desc: '독립적이고 결단력 있는 계획가' },
                { type: 'INTP', name: '논리술사', desc: '혁신적인 발명가 유형' },
                { type: 'ENTJ', name: '통솔자', desc: '대담하고 상상력이 풍부한 리더' },
                { type: 'ENTP', name: '변론가', desc: '영리하고 호기심 많은 사색가' },
                { type: 'INFJ', name: '옹호자', desc: '조용하지만 신념 있는 이상주의자' },
                { type: 'INFP', name: '중재자', desc: '시적이고 친절한 이타주의자' },
                { type: 'ENFJ', name: '선도자', desc: '카리스마 있는 영감을 주는 리더' },
                { type: 'ENFP', name: '활동가', desc: '열정적이고 창의적인 자유영혼' },
                { type: 'ISTJ', name: '현실주의자', desc: '신뢰할 수 있는 실용적 관리자' },
                { type: 'ISFJ', name: '수호자', desc: '헌신적이고 따뜻한 보호자' },
                { type: 'ESTJ', name: '경영자', desc: '탁월한 관리 능력의 대표자' },
                { type: 'ESFJ', name: '집정관', desc: '배려심 많고 사교적인 협력자' },
                { type: 'ISTP', name: '장인', desc: '대담하고 실용적인 실험가' },
                { type: 'ISFP', name: '모험가', desc: '유연하고 매력적인 예술가' },
                { type: 'ESTP', name: '사업가', desc: '영리하고 에너지 넘치는 감각인' },
                { type: 'ESFP', name: '연예인', desc: '즉흥적이고 활발한 엔터테이너' },
              ].map((t) => (
                <div key={t.type} className="bg-gray-50 rounded-xl p-3 border border-gray-100">
                  <p className="font-black text-indigo-700 text-sm">{t.type}</p>
                  <p className="font-semibold text-gray-800 text-xs">{t.name}</p>
                  <p className="text-xs text-gray-500 mt-0.5">{t.desc}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 space-y-4">
            <h2 className="text-xl font-bold text-gray-800">MBTI의 활용과 한계</h2>
            <h3 className="font-semibold text-gray-700">활용 분야</h3>
            <ul className="text-sm text-gray-600 space-y-2 list-disc list-inside ml-2">
              <li><strong>자기 이해:</strong> 자신의 강점과 약점, 에너지 패턴을 파악하는 데 도움</li>
              <li><strong>진로 탐색:</strong> 각 유형이 어떤 직업 환경에서 강점을 발휘하는지 참고</li>
              <li><strong>팀워크 향상:</strong> 팀 구성원의 유형을 이해하여 소통 방식 개선</li>
              <li><strong>관계 이해:</strong> 파트너나 가족의 다른 성향을 이해하고 수용</li>
            </ul>
            <h3 className="font-semibold text-gray-700 mt-4">주의사항 및 한계</h3>
            <ul className="text-sm text-gray-600 space-y-2 list-disc list-inside ml-2">
              <li>MBTI는 이분법적 분류를 사용하지만, 실제 성격은 연속적 스펙트럼입니다</li>
              <li>검사 시점의 기분이나 상황에 따라 결과가 달라질 수 있습니다</li>
              <li>임상적 진단 도구가 아니며, 정신건강 문제 평가에 사용할 수 없습니다</li>
              <li>유형으로 사람을 '고정'하거나 편견을 형성하는 것에 주의해야 합니다</li>
              <li>일부 심리학자들은 검사-재검사 신뢰도에 의문을 제기합니다</li>
            </ul>
          </section>

          <section className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 space-y-4">
            <h2 className="text-xl font-bold text-gray-800">MBTI와 다른 성격 이론의 비교</h2>
            <p className="text-gray-600 text-sm leading-relaxed">
              MBTI는 대중적으로 가장 널리 알려진 성격 이론이지만, 학문적 맥락에서는 Big Five(5요인 모델)가
              더 높은 신뢰도와 타당도를 인정받고 있습니다. Big Five는 MBTI의 이분법적 분류 대신
              각 차원을 0~100%의 연속적 점수로 측정하여 더 세밀한 성격 프로파일을 제공합니다.
            </p>
            <p className="text-gray-600 text-sm leading-relaxed">
              흥미롭게도, MBTI의 4가지 차원은 Big Five의 차원과 상당한 상관관계를 보입니다.
              E/I ↔ 외향성(Extraversion), S/N ↔ 개방성(Openness), T/F ↔ 친화성(Agreeableness),
              J/P ↔ 성실성(Conscientiousness)이 대략적으로 대응됩니다.
            </p>
            <p className="text-gray-600 text-sm leading-relaxed">
              마음 탐구의 종합 심리테스트는 MBTI와 Big Five를 동시에 측정하여 이 두 관점을
              통합적으로 제공함으로써 더 풍부한 자기 이해를 지원합니다.
            </p>
          </section>

          <div className="bg-indigo-50 rounded-2xl p-6 text-center border border-indigo-100">
            <p className="text-2xl mb-3">🔮</p>
            <h3 className="font-bold text-indigo-800 mb-2">나의 MBTI 유형을 알고 싶다면?</h3>
            <p className="text-sm text-indigo-600 mb-4">40문항으로 MBTI · Big Five · 에니어그램 · 애착 유형을 한 번에 무료로 확인하세요.</p>
            <Link href="/test" className="inline-block px-6 py-3 bg-indigo-600 text-white font-bold rounded-xl hover:bg-indigo-700 transition-colors">
              무료 검사 시작하기 →
            </Link>
          </div>

          <nav className="flex justify-between text-sm">
            <Link href="/guide" className="text-indigo-600 hover:underline">← 가이드 목록</Link>
            <Link href="/guide/big-five" className="text-indigo-600 hover:underline">Big Five 가이드 →</Link>
          </nav>
        </article>
      </main>
      <Footer />
    </>
  );
}
