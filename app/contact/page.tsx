import Link from 'next/link';
import Footer from '@/components/Footer';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '문의하기 | 마음 탐구 — Contact Us | Mind Explorer',
  description: '마음 탐구 서비스 관련 문의사항을 보내주세요. Contact us regarding Mind Explorer.',
};

export default function ContactPage() {
  return (
    <>
      <main className="min-h-screen bg-gray-50">
        <header className="bg-white border-b border-gray-100 px-4 py-4">
          <div className="max-w-xl mx-auto flex items-center justify-between">
            <Link href="/" className="text-indigo-600 font-semibold hover:text-indigo-700">
              ← 마음 탐구 / Mind Explorer
            </Link>
          </div>
        </header>

        <div className="max-w-xl mx-auto px-4 py-10 space-y-8">
          <div>
            <h1 className="text-3xl font-black text-gray-900 mb-2">문의하기 / Contact Us</h1>
            <p className="text-sm text-gray-500">궁금한 점이나 제안 사항을 보내주세요.</p>
          </div>

          <section className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 space-y-4">
            <h2 className="text-lg font-bold text-gray-800">이메일 문의 / Email</h2>
            <p className="text-gray-600 leading-relaxed text-sm">
              서비스 이용, 개인정보, 저작권, 광고 등 모든 문의는 아래 이메일로 연락해 주세요.
              보통 <strong>1~3 영업일 이내</strong>에 답변드립니다.
            </p>
            <p className="text-gray-600 leading-relaxed text-sm mt-2">
              For all inquiries regarding the service, privacy, copyright, or advertising, please contact us via email below.
              We typically respond within <strong>1–3 business days</strong>.
            </p>
            <a
              href="mailto:little_ship@naver.com"
              className="inline-flex items-center gap-2 px-5 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-colors text-sm"
            >
              ✉️ little_ship@naver.com
            </a>
          </section>

          <section className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 space-y-4">
            <h2 className="text-lg font-bold text-gray-800">문의 유형 / Inquiry Types</h2>
            <ul className="space-y-2 text-sm text-gray-600">
              <li className="flex items-start gap-2"><span className="text-indigo-500 font-bold mt-0.5">•</span><span><strong>테스트 오류 신고</strong> — 질문, 결과, 번역 오류 등 / Bug reports</span></li>
              <li className="flex items-start gap-2"><span className="text-indigo-500 font-bold mt-0.5">•</span><span><strong>개인정보 문의</strong> — 데이터 삭제, 쿠키 관련 / Privacy & data requests</span></li>
              <li className="flex items-start gap-2"><span className="text-indigo-500 font-bold mt-0.5">•</span><span><strong>저작권 문의</strong> — 콘텐츠 저작권 관련 / Copyright inquiries</span></li>
              <li className="flex items-start gap-2"><span className="text-indigo-500 font-bold mt-0.5">•</span><span><strong>제휴 및 광고 문의</strong> — 파트너십, 광고 / Partnership & advertising</span></li>
              <li className="flex items-start gap-2"><span className="text-indigo-500 font-bold mt-0.5">•</span><span><strong>기타 건의사항</strong> — 기능 제안, 개선 의견 / Suggestions & feedback</span></li>
            </ul>
          </section>

          <section className="bg-indigo-50 rounded-2xl p-5 border border-indigo-100">
            <p className="text-sm text-indigo-700 leading-relaxed">
              본 서비스는 심리학 이론을 기반으로 한 참고용 테스트이며, 전문 심리 상담이나 진단을 대체하지 않습니다.
              심리적 어려움이 있으신 경우 전문 상담사와 상담하시기를 권장합니다.
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
