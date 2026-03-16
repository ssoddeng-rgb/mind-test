import Link from 'next/link';
import Footer from '@/components/Footer';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '소개 | 마음 탐구 — About | Mind Explorer',
  description: '마음 탐구는 MBTI, Big Five, 에니어그램, 애착 유형을 한 번에 분석하는 종합 심리 탐구 도구입니다. Mind Explorer is a free personality test combining 4 psychological frameworks.',
};

export default function AboutPage() {
  return (
    <>
      <main className="min-h-screen bg-gray-50">
        <header className="bg-white border-b border-gray-100 px-4 py-4">
          <div className="max-w-xl mx-auto">
            <Link href="/" className="text-indigo-600 font-semibold hover:text-indigo-700">
              ← 마음 탐구 / Mind Explorer
            </Link>
          </div>
        </header>

        <div className="max-w-xl mx-auto px-4 py-10 space-y-8">
          <div>
            <div className="text-5xl mb-4">🔮</div>
            <h1 className="text-3xl font-black text-gray-900 mb-2">마음 탐구 소개</h1>
            <p className="text-sm text-gray-500">About Mind Explorer</p>
          </div>

          <section className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 space-y-4">
            <h2 className="text-lg font-bold text-gray-800">서비스 소개</h2>
            <p className="text-gray-600 leading-relaxed text-sm">
              <strong>마음 탐구(Mind Explorer)</strong>는 심리학 분야에서 검증된 4가지 이론을 하나의 테스트로
              통합하여 더 입체적인 자기 이해를 돕는 <strong>무료 종합 심리 탐구 도구</strong>입니다.
            </p>
            <p className="text-gray-600 leading-relaxed text-sm">
              단순히 MBTI 하나를 측정하는 것을 넘어, 성격의 여러 측면을 동시에 조명함으로써
              "나는 어떤 사람인가?"라는 질문에 보다 풍부한 답을 드리고자 합니다.
            </p>
          </section>

          <section className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 space-y-4">
            <h2 className="text-lg font-bold text-gray-800">사용된 심리학 이론</h2>
            <div className="space-y-4">
              <div className="border-l-4 border-indigo-400 pl-4">
                <p className="font-bold text-gray-800 text-sm">🧠 MBTI (Myers-Briggs Type Indicator)</p>
                <p className="text-xs text-gray-600 mt-1 leading-relaxed">
                  Isabel Briggs Myers와 Katherine Cook Briggs가 Carl Jung의 심리 유형론을 기반으로 개발.
                  외향/내향, 감각/직관, 사고/감정, 판단/인식의 4가지 차원으로 16가지 성격 유형을 도출합니다.
                </p>
              </div>
              <div className="border-l-4 border-purple-400 pl-4">
                <p className="font-bold text-gray-800 text-sm">📊 Big Five (5요인 성격 모델)</p>
                <p className="text-xs text-gray-600 mt-1 leading-relaxed">
                  Costa & McCrae (1992)의 NEO-PI-R에 기반. 개방성(O), 성실성(C), 외향성(E),
                  친화성(A), 신경성(N)의 5가지 차원으로 현대 심리학에서 가장 광범위하게 사용되는 모델입니다.
                </p>
              </div>
              <div className="border-l-4 border-pink-400 pl-4">
                <p className="font-bold text-gray-800 text-sm">⭕ 에니어그램 (Enneagram)</p>
                <p className="text-xs text-gray-600 mt-1 leading-relaxed">
                  Don Riso와 Russ Hudson의 RHETI(Riso-Hudson Enneagram Type Indicator) 기반.
                  핵심 두려움과 욕구를 중심으로 9가지 성격 유형과 날개 유형을 분석합니다.
                </p>
              </div>
              <div className="border-l-4 border-rose-400 pl-4">
                <p className="font-bold text-gray-800 text-sm">💞 애착 유형 (Attachment Style)</p>
                <p className="text-xs text-gray-600 mt-1 leading-relaxed">
                  Hazan & Shaver (1987)와 Bartholomew (1990)의 애착 이론 기반.
                  안정형, 불안형, 회피형, 혼란형의 4가지 유형으로 관계 패턴을 이해합니다.
                </p>
              </div>
            </div>
          </section>

          <section className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 space-y-4">
            <h2 className="text-lg font-bold text-gray-800">이 테스트의 특징</h2>
            <ul className="space-y-3 text-sm text-gray-600">
              <li className="flex items-start gap-3">
                <span className="text-indigo-500 font-bold text-base">✓</span>
                <span><strong>4in1 종합 분석</strong> — 40문항으로 4가지 심리 유형을 동시에 측정</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-indigo-500 font-bold text-base">✓</span>
                <span><strong>완전 무료</strong> — 회원가입 없이 누구나 무료로 이용 가능</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-indigo-500 font-bold text-base">✓</span>
                <span><strong>한국어 · 영어 지원</strong> — 전체 인터페이스 및 결과 리포트 이중언어 제공</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-indigo-500 font-bold text-base">✓</span>
                <span><strong>개인정보 보호</strong> — 테스트 결과는 로컬 브라우저에만 저장, 서버로 전송되지 않음</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-indigo-500 font-bold text-base">✓</span>
                <span><strong>결과 공유</strong> — 링크 한 번으로 친구들과 결과 공유 가능</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-indigo-500 font-bold text-base">✓</span>
                <span><strong>시각화 리포트</strong> — Big Five 레이더 차트로 성격 차원을 한눈에 확인</span>
              </li>
            </ul>
          </section>

          <section className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 space-y-4">
            <h2 className="text-lg font-bold text-gray-800">About Mind Explorer (English)</h2>
            <p className="text-gray-600 leading-relaxed text-sm">
              <strong>Mind Explorer</strong> is a free, comprehensive personality assessment tool that integrates
              four evidence-based psychological frameworks into a single 40-question test.
            </p>
            <p className="text-gray-600 leading-relaxed text-sm">
              Rather than providing a single-dimensional personality label, Mind Explorer offers a multifaceted
              picture of who you are — covering your personality type (MBTI), trait dimensions (Big Five),
              core motivations (Enneagram), and relationship patterns (Attachment Style).
            </p>
            <p className="text-gray-600 leading-relaxed text-sm">
              The test is designed for self-discovery and personal growth. Results are stored locally in your
              browser only and are never transmitted to our servers, ensuring your privacy.
            </p>
          </section>

          <section className="bg-indigo-50 rounded-2xl p-5 border border-indigo-100">
            <h2 className="text-base font-bold text-indigo-800 mb-2">운영 주체 / Operator</h2>
            <p className="text-sm text-indigo-700">서비스명: 마음 탐구 / Mind Explorer</p>
            <p className="text-sm text-indigo-700">문의: little_ship@naver.com</p>
            <p className="text-sm text-indigo-700 mt-2">
              <Link href="/contact" className="underline hover:text-indigo-900">문의하기 →</Link>
            </p>
          </section>

          <section className="bg-amber-50 rounded-2xl p-5 border border-amber-100">
            <p className="text-sm text-amber-800 leading-relaxed font-medium">
              ⚠️ 주의사항: 본 테스트는 심리학 이론을 기반으로 한 참고용 검사로, 전문적인 심리 진단이나 상담을 대체하지 않습니다.
              정서적 어려움이 있으시다면 전문 상담사나 심리치료사와 상담하시기를 권장합니다.
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
