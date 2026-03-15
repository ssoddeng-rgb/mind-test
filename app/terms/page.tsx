import Link from 'next/link';
import Footer from '@/components/Footer';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '이용약관 | 마음 탐구',
  description: '마음 탐구 심리테스트 이용약관',
};

export default function TermsPage() {
  return (
    <>
      <main className="min-h-screen bg-gray-50">
        <header className="bg-white border-b border-gray-100 px-4 py-4">
          <div className="max-w-xl mx-auto">
            <Link href="/" className="text-indigo-600 font-semibold hover:text-indigo-700">
              ← 마음 탐구
            </Link>
          </div>
        </header>

        <div className="max-w-xl mx-auto px-4 py-10 space-y-8">
          <div>
            <h1 className="text-3xl font-black text-gray-900 mb-2">이용약관</h1>
            <p className="text-sm text-gray-500">최종 업데이트: 2026년 3월 15일</p>
          </div>

          <section className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 space-y-4">
            <h2 className="text-lg font-bold text-gray-800">제1조 (목적)</h2>
            <p className="text-gray-600 leading-relaxed text-sm">
              본 약관은 마음 탐구(이하 "서비스")가 제공하는 온라인 심리테스트 서비스의 이용 조건 및
              절차에 관한 사항을 규정함을 목적으로 합니다.
            </p>
          </section>

          <section className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 space-y-4">
            <h2 className="text-lg font-bold text-gray-800">제2조 (서비스의 성격)</h2>
            <p className="text-gray-600 leading-relaxed text-sm">
              본 서비스는 MBTI, Big Five, 에니어그램, 애착 이론 등 공식 심리학 이론을 기반으로 한
              <strong> 참고용 자기 탐구 도구</strong>입니다. 본 테스트 결과는 전문적인 심리 진단,
              정신건강 상담, 또는 의학적 조언을 대체하지 않습니다.
            </p>
          </section>

          <section className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 space-y-4">
            <h2 className="text-lg font-bold text-gray-800">제3조 (이용자의 의무)</h2>
            <ul className="list-disc list-inside text-sm text-gray-600 space-y-2 ml-2">
              <li>이용자는 본 서비스를 개인적·비상업적 목적으로만 이용해야 합니다.</li>
              <li>서비스의 콘텐츠를 무단으로 복제, 배포, 상업적으로 이용할 수 없습니다.</li>
              <li>자동화된 방식(봇, 스크래핑 등)으로 서비스에 접근하는 행위를 금지합니다.</li>
              <li>타인에게 해가 되는 방식으로 서비스를 이용할 수 없습니다.</li>
            </ul>
          </section>

          <section className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 space-y-4">
            <h2 className="text-lg font-bold text-gray-800">제4조 (면책조항)</h2>
            <p className="text-gray-600 leading-relaxed text-sm">
              서비스는 테스트 결과의 정확성, 완전성에 대해 보증하지 않으며, 결과를 기반으로 한
              이용자의 판단 및 행동에 대한 책임을 지지 않습니다. 심리적 어려움이 있으신 경우
              전문 심리상담사 또는 정신건강 전문의와 상담하시기를 권장합니다.
            </p>
          </section>

          <section className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 space-y-4">
            <h2 className="text-lg font-bold text-gray-800">제5조 (광고)</h2>
            <p className="text-gray-600 leading-relaxed text-sm">
              본 서비스는 Google AdSense를 통한 광고를 포함할 수 있습니다. 광고는 Google의 정책에 따라
              표시되며, 광고 콘텐츠는 서비스의 의견을 대변하지 않습니다.
            </p>
          </section>

          <section className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 space-y-4">
            <h2 className="text-lg font-bold text-gray-800">제6조 (약관의 변경)</h2>
            <p className="text-gray-600 leading-relaxed text-sm">
              서비스는 필요에 따라 본 약관을 변경할 수 있으며, 변경된 약관은 서비스 내 공지를 통해
              안내합니다. 변경 후 서비스를 계속 이용하시는 경우 변경된 약관에 동의한 것으로 간주됩니다.
            </p>
          </section>

          <section className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 space-y-4">
            <h2 className="text-lg font-bold text-gray-800">제7조 (문의)</h2>
            <p className="text-gray-600 leading-relaxed text-sm">
              약관에 관한 문의사항은 아래로 연락해 주세요.
            </p>
            <p className="text-sm text-indigo-600 font-medium">이메일: little_ship@naver.com</p>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
