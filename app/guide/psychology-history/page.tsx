import Link from 'next/link';
import Footer from '@/components/Footer';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '성격심리학의 역사와 발전 — Jung에서 Big Five까지 | 마음 탐구',
  description: 'Carl Jung의 분석심리학에서 현대 Big Five까지, 성격 이론이 100년간 어떻게 발전했는지 알아봅니다. 주요 심리학자들의 이론과 연구를 정리한 심층 가이드.',
};

export default function PsychologyHistoryPage() {
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
            <div className="text-5xl mb-4">📚</div>
            <div className="flex items-center gap-2 mb-3">
              <span className="text-xs font-semibold text-amber-600 bg-amber-50 px-2 py-1 rounded-full">Psychology</span>
              <span className="text-xs text-gray-400">읽는 시간 약 12분</span>
            </div>
            <h1 className="text-3xl font-black text-gray-900 mb-4 leading-tight">성격심리학의 역사와 발전 — Jung에서 Big Five까지 100년의 여정</h1>
            <p className="text-gray-600 leading-relaxed text-lg">
              "인간은 어떤 유형으로 나눌 수 있는가?" 이 질문에 답하려는 인류의 시도는
              고대 그리스의 기질론부터 현대의 신경과학적 성격 연구까지 끝없이 이어져 왔습니다.
            </p>
          </header>

          <section className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 space-y-4">
            <h2 className="text-xl font-bold text-gray-800">고대의 성격 이론: 4체액설</h2>
            <p className="text-gray-600 text-sm leading-relaxed">
              성격을 분류하려는 인류 최초의 체계적 시도는 고대 그리스로 거슬러 올라갑니다.
              히포크라테스(기원전 460~370년)는 인체 내의 4가지 체액(혈액, 점액, 황담즙, 흑담즙)의 균형이
              성격을 결정한다는 4체액설을 제안했습니다.
            </p>
            <div className="grid grid-cols-2 gap-3">
              {[
                { type: '다혈질 (혈액)', desc: '낙관적, 활동적, 사교적' },
                { type: '점액질 (점액)', desc: '침착, 신중, 느림' },
                { type: '담즙질 (황담즙)', desc: '야망, 충동적, 지배적' },
                { type: '우울질 (흑담즙)', desc: '분석적, 신중, 조용함' },
              ].map((t) => (
                <div key={t.type} className="bg-gray-50 rounded-lg p-3 text-xs">
                  <p className="font-bold text-gray-700">{t.type}</p>
                  <p className="text-gray-600">{t.desc}</p>
                </div>
              ))}
            </div>
            <p className="text-gray-600 text-sm leading-relaxed">
              놀랍게도, 현대 심리학의 신경성(N)과 외향성(E)이라는 두 축으로 이 4가지 기질을 설명할 수 있습니다.
              Hans Eysenck는 이 고대 기질론이 현대 성격 이론과 놀라운 연속성을 보임을 발견했습니다.
            </p>
          </section>

          <section className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 space-y-6">
            <h2 className="text-xl font-bold text-gray-800">20세기 성격심리학의 발전</h2>

            <div className="space-y-5">
              <div className="border-l-4 border-indigo-400 pl-4">
                <p className="text-xs text-gray-400 font-semibold mb-1">1921년</p>
                <h3 className="font-bold text-gray-800 mb-2">Carl Gustav Jung — 심리 유형론</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  스위스의 정신과 의사 Carl Jung은 《심리 유형론(Psychological Types)》을 발표하며
                  내향/외향의 구분과 4가지 심리 기능(감각, 직관, 사고, 감정)을 체계화했습니다.
                  이는 이후 MBTI의 이론적 토대가 됩니다. Jung은 의식적으로 선호하는 기능과
                  무의식적으로 사용하는 "그림자(Shadow)" 기능의 통합이 심리적 성숙의 핵심이라고 보았습니다.
                </p>
              </div>

              <div className="border-l-4 border-purple-400 pl-4">
                <p className="text-xs text-gray-400 font-semibold mb-1">1930~1940년대</p>
                <h3 className="font-bold text-gray-800 mb-2">Gordon Allport & Henry Odbert — 어휘적 접근</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Allport와 Odbert는 영어 사전에서 성격을 묘사하는 약 18,000개의 단어를 수집했습니다.
                  이 방대한 어휘 목록은 이후 Big Five 이론의 씨앗이 되었습니다.
                  Allport는 개인의 고유성(개별적 특성)을 강조한 반면, 이후 연구자들은 보편적 특성(공통적 특성)
                  을 발견하는 방향으로 나아갔습니다.
                </p>
              </div>

              <div className="border-l-4 border-blue-400 pl-4">
                <p className="text-xs text-gray-400 font-semibold mb-1">1943년</p>
                <h3 className="font-bold text-gray-800 mb-2">Isabel Briggs Myers & Katherine Briggs — MBTI 개발</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  어머니와 딸 팀인 Katherine Cook Briggs와 Isabel Briggs Myers는 Jung의 이론을 실용적인
                  검사 도구로 발전시켰습니다. 이들은 정식 심리학 교육을 받지 않은 아마추어였지만,
                  수십 년의 연구와 개발 끝에 1962년 최초의 MBTI가 출판되었습니다.
                  현재 MBTI는 심리측정 분야에서 가장 많이 사용되는 도구 중 하나입니다.
                </p>
              </div>

              <div className="border-l-4 border-green-400 pl-4">
                <p className="text-xs text-gray-400 font-semibold mb-1">1940~1960년대</p>
                <h3 className="font-bold text-gray-800 mb-2">Raymond Cattell — 16가지 성격 요인</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Cattell은 Allport와 Odbert의 어휘 목록을 통계적 기법(요인 분석)으로 압축하여
                  16개의 근원적 성격 특성(16PF)을 도출했습니다. 이 연구는 이후 Five-Factor Model의
                  발전에 중요한 기반이 되었습니다.
                </p>
              </div>

              <div className="border-l-4 border-orange-400 pl-4">
                <p className="text-xs text-gray-400 font-semibold mb-1">1975~1980년대</p>
                <h3 className="font-bold text-gray-800 mb-2">Big Five의 확립 — Goldberg, Costa & McCrae</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Lewis Goldberg(1981)가 'Big Five'라는 용어를 사용하기 시작했고,
                  Paul Costa Jr.와 Robert McCrae가 NEO 성격 검사(1985)와 개정판 NEO-PI-R(1992)을 개발하면서
                  OCEAN(개방성·성실성·외향성·친화성·신경성) 모델이 학문적 표준으로 자리잡았습니다.
                  1990년대 이후 50개국 이상에서 진행된 교차문화 연구들이 이 5가지 차원의 보편성을 검증했습니다.
                </p>
              </div>

              <div className="border-l-4 border-red-400 pl-4">
                <p className="text-xs text-gray-400 font-semibold mb-1">1987년</p>
                <h3 className="font-bold text-gray-800 mb-2">Hazan & Shaver — 성인 애착 이론</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Cindy Hazan과 Philip Shaver가 Bowlby의 영아 애착 이론을 성인 낭만적 관계에 적용하여
                  세 가지 성인 애착 유형(안정, 불안, 회피)을 제안했습니다. 이후 Kim Bartholomew와
                  Leonard Horowitz(1991)가 두 차원(자기 모델 × 타인 모델)의 사분면으로 4가지 유형 모델을 확립했습니다.
                </p>
              </div>

              <div className="border-l-4 border-pink-400 pl-4">
                <p className="text-xs text-gray-400 font-semibold mb-1">1970~1990년대</p>
                <h3 className="font-bold text-gray-800 mb-2">Riso & Hudson — 현대 에니어그램</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Don Richard Riso와 Russ Hudson은 에니어그램을 심리학적으로 체계화하여
                  Enneagram Institute를 설립하고 RHETI를 개발했습니다.
                  그들의 저서 《Personality Types》(1987)는 에니어그램의 표준 참고서가 되었습니다.
                </p>
              </div>
            </div>
          </section>

          <section className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 space-y-4">
            <h2 className="text-xl font-bold text-gray-800">21세기 성격 연구의 동향</h2>
            <div className="space-y-3 text-sm text-gray-600">
              <div className="bg-gray-50 rounded-xl p-4">
                <p className="font-semibold text-gray-700 mb-1">🧬 유전과 환경의 상호작용</p>
                <p className="leading-relaxed">쌍둥이 연구들은 성격 특성의 약 40~60%가 유전적 영향을 받는다고 보여줍니다. 그러나 동일한 유전자라도 환경에 따라 다르게 발현됩니다 (유전자-환경 상호작용).</p>
              </div>
              <div className="bg-gray-50 rounded-xl p-4">
                <p className="font-semibold text-gray-700 mb-1">🧠 신경과학적 성격 연구</p>
                <p className="leading-relaxed">뇌 영상 연구들은 외향성, 신경성 등의 특성이 특정 뇌 구조와 신경전달물질 시스템과 관련이 있음을 밝혀가고 있습니다. 도파민 시스템은 외향성 및 추구 행동과, 세로토닌 시스템은 친화성과 연관이 있습니다.</p>
              </div>
              <div className="bg-gray-50 rounded-xl p-4">
                <p className="font-semibold text-gray-700 mb-1">🌍 문화적 성격 차이</p>
                <p className="leading-relaxed">Big Five 연구들은 국가별로 평균적인 성격 프로파일이 다름을 발견했습니다. 예를 들어, 한국을 포함한 동아시아 국가들은 서구 국가들에 비해 평균 신경성이 높고 외향성이 낮은 경향이 있습니다.</p>
              </div>
              <div className="bg-gray-50 rounded-xl p-4">
                <p className="font-semibold text-gray-700 mb-1">📊 디지털 발자국으로 성격 예측</p>
                <p className="leading-relaxed">최근 연구들은 소셜 미디어 활동, 스마트폰 사용 패턴, 음악 취향 등 디지털 데이터로 Big Five 성격을 예측할 수 있음을 보여줍니다. 이는 성격 측정의 새로운 패러다임을 예고합니다.</p>
              </div>
            </div>
          </section>

          <div className="bg-indigo-50 rounded-2xl p-6 text-center border border-indigo-100">
            <p className="text-2xl mb-3">🔮</p>
            <h3 className="font-bold text-indigo-800 mb-2">100년의 성격심리학이 집약된 검사를 체험하세요</h3>
            <p className="text-sm text-indigo-600 mb-4">Jung, Big Five, 에니어그램, 애착 이론을 한 번에 분석하는 무료 종합 검사.</p>
            <Link href="/test" className="inline-block px-6 py-3 bg-indigo-600 text-white font-bold rounded-xl hover:bg-indigo-700 transition-colors">
              무료 검사 시작하기 →
            </Link>
          </div>

          <nav className="flex justify-between text-sm">
            <Link href="/guide/mbti-relationships" className="text-indigo-600 hover:underline">← MBTI 인간관계 가이드</Link>
            <Link href="/guide/self-awareness" className="text-indigo-600 hover:underline">자기 인식과 성장 →</Link>
          </nav>
        </article>
      </main>
      <Footer />
    </>
  );
}
