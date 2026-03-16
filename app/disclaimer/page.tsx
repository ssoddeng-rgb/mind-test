import Link from 'next/link';
import Footer from '@/components/Footer';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '면책 조항 | 마음 탐구 — Disclaimer | Mind Explorer',
  description: '마음 탐구 서비스의 면책 조항 및 이용 안내. Disclaimer and usage guidelines for Mind Explorer.',
};

export default function DisclaimerPage() {
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
            <h1 className="text-3xl font-black text-gray-900 mb-2">면책 조항</h1>
            <p className="text-sm text-gray-500">Disclaimer · 최종 업데이트: 2026년 3월 16일</p>
          </div>

          <section className="bg-amber-50 rounded-2xl p-5 border border-amber-200">
            <p className="text-sm font-bold text-amber-900 mb-2">⚠️ 중요 고지 / Important Notice</p>
            <p className="text-sm text-amber-800 leading-relaxed">
              마음 탐구는 오락 및 자기 탐구 목적의 서비스로, 전문적인 심리 진단, 의학적 조언, 또는 심리 치료를
              대체하지 않습니다. 본 결과를 임상적 판단의 근거로 사용하지 마십시오.
            </p>
          </section>

          <section className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 space-y-4">
            <h2 className="text-lg font-bold text-gray-800">1. 정보의 성격</h2>
            <p className="text-gray-600 leading-relaxed text-sm">
              본 서비스에서 제공하는 성격 유형 분석 결과는 공개된 심리학 이론을 기반으로 한 참고 자료입니다.
              테스트 결과는 개인의 성격을 단정 짓거나 의학적·임상적 판단의 근거로 사용될 수 없습니다.
            </p>
            <p className="text-gray-600 leading-relaxed text-sm">
              MBTI, Big Five, 에니어그램, 애착 유형 등의 심리학적 프레임워크는 자기 이해를 위한 도구로서
              연구 목적으로 개발된 것이며, 본 테스트는 해당 이론의 공식 도구가 아닌 교육적 참고 도구입니다.
            </p>
          </section>

          <section className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 space-y-4">
            <h2 className="text-lg font-bold text-gray-800">2. 전문 상담 권고</h2>
            <p className="text-gray-600 leading-relaxed text-sm">
              우울감, 불안, 대인관계 어려움 등 심리적 어려움을 경험하고 계신 경우에는 반드시
              공인된 심리 상담사, 임상 심리사, 또는 정신건강의학과 전문의와 상담하시기를 권장합니다.
            </p>
            <div className="bg-gray-50 rounded-xl p-4 text-sm text-gray-600 space-y-1">
              <p className="font-semibold text-gray-700">심리 상담 연계 기관 (대한민국)</p>
              <p>• 정신건강 위기상담 전화: <strong>1577-0199</strong> (24시간)</p>
              <p>• 자살예방상담전화: <strong>1393</strong> (24시간)</p>
              <p>• 청소년상담전화: <strong>1388</strong> (24시간)</p>
            </div>
          </section>

          <section className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 space-y-4">
            <h2 className="text-lg font-bold text-gray-800">3. 결과의 한계</h2>
            <ul className="space-y-2 text-sm text-gray-600 list-disc list-inside ml-2">
              <li>40문항의 설문으로 측정된 결과는 전체 성격을 완전히 반영하지 않을 수 있습니다.</li>
              <li>테스트 응시 시점의 기분, 상황, 컨디션에 따라 결과가 달라질 수 있습니다.</li>
              <li>인간의 성격은 복잡하고 유동적이므로 특정 유형으로 고정되지 않습니다.</li>
              <li>결과는 자기 이해의 출발점으로 활용하되, 타인을 판단하는 기준으로 사용하지 마십시오.</li>
            </ul>
          </section>

          <section className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 space-y-4">
            <h2 className="text-lg font-bold text-gray-800">4. 책임 한계</h2>
            <p className="text-gray-600 leading-relaxed text-sm">
              마음 탐구 서비스는 테스트 결과의 정확성, 완전성, 유용성에 대해 어떠한 보증도 하지 않으며,
              테스트 결과를 근거로 한 의사 결정에서 발생하는 손해에 대해 책임을 지지 않습니다.
            </p>
          </section>

          <section className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 space-y-4">
            <h2 className="text-lg font-bold text-gray-800">Disclaimer (English)</h2>
            <p className="text-gray-600 leading-relaxed text-sm">
              Mind Explorer is an entertainment and self-exploration tool. Results are for informational
              and educational purposes only and do not constitute professional psychological advice,
              diagnosis, or treatment.
            </p>
            <p className="text-gray-600 leading-relaxed text-sm">
              The personality frameworks used (MBTI, Big Five, Enneagram, Attachment Style) are
              based on published psychological research. This test is not an officially certified
              assessment tool. Results should not be used as the basis for clinical decisions.
            </p>
            <p className="text-gray-600 leading-relaxed text-sm">
              If you are experiencing psychological difficulties, please consult a licensed mental
              health professional.
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
