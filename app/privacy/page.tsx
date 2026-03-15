import Link from 'next/link';
import Footer from '@/components/Footer';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '개인정보처리방침 | 마음 탐구',
  description: '마음 탐구 심리테스트 개인정보처리방침',
};

export default function PrivacyPage() {
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
            <h1 className="text-3xl font-black text-gray-900 mb-2">개인정보처리방침</h1>
            <p className="text-sm text-gray-500">최종 업데이트: 2026년 3월 15일</p>
          </div>

          <section className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 space-y-4">
            <h2 className="text-lg font-bold text-gray-800">1. 수집하는 정보</h2>
            <p className="text-gray-600 leading-relaxed text-sm">
              마음 탐구(이하 "서비스")는 별도의 회원가입 없이 이용 가능하며, 개인 식별 정보를 수집하지 않습니다.
              테스트 결과는 사용자의 브라우저 로컬스토리지에만 저장되며 서버로 전송되지 않습니다.
            </p>
            <p className="text-gray-600 leading-relaxed text-sm">
              다만, 서비스 운영 및 광고 제공을 위해 아래 정보가 자동으로 수집될 수 있습니다:
            </p>
            <ul className="list-disc list-inside text-sm text-gray-600 space-y-1 ml-2">
              <li>IP 주소 (익명화 처리)</li>
              <li>브라우저 유형 및 버전</li>
              <li>방문 페이지 및 체류 시간</li>
              <li>쿠키 및 유사 추적 기술</li>
            </ul>
          </section>

          <section className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 space-y-4">
            <h2 className="text-lg font-bold text-gray-800">2. 쿠키 및 광고</h2>
            <p className="text-gray-600 leading-relaxed text-sm">
              본 서비스는 Google AdSense를 통해 광고를 제공합니다. Google은 사용자의 이전 방문 기록을 바탕으로
              관련성 높은 광고를 표시하기 위해 쿠키를 사용할 수 있습니다.
            </p>
            <p className="text-gray-600 leading-relaxed text-sm">
              Google의 광고 쿠키 사용 방식에 대한 자세한 내용은{' '}
              <a
                href="https://policies.google.com/technologies/ads"
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-600 underline"
              >
                Google 광고 및 개인정보 보호 정책
              </a>
              을 참조하세요. 광고 개인화를 원하지 않으실 경우{' '}
              <a
                href="https://www.google.com/settings/ads"
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-600 underline"
              >
                Google 광고 설정
              </a>
              에서 설정을 변경하실 수 있습니다.
            </p>
          </section>

          <section className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 space-y-4">
            <h2 className="text-lg font-bold text-gray-800">3. 정보의 이용 목적</h2>
            <ul className="list-disc list-inside text-sm text-gray-600 space-y-1 ml-2">
              <li>서비스 운영 및 품질 향상</li>
              <li>사용자 경험 개선</li>
              <li>관련 광고 제공</li>
              <li>서비스 이용 통계 분석</li>
            </ul>
          </section>

          <section className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 space-y-4">
            <h2 className="text-lg font-bold text-gray-800">4. 제3자 공유</h2>
            <p className="text-gray-600 leading-relaxed text-sm">
              수집된 정보는 법령에 의한 경우를 제외하고 제3자에게 제공되지 않습니다.
              단, Google AdSense 서비스 제공을 위해 Google LLC와 정보가 공유될 수 있습니다.
            </p>
          </section>

          <section className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 space-y-4">
            <h2 className="text-lg font-bold text-gray-800">5. 사용자 권리</h2>
            <p className="text-gray-600 leading-relaxed text-sm">
              사용자는 언제든지 브라우저 설정을 통해 쿠키를 삭제하거나 거부할 수 있습니다.
              테스트 결과 데이터는 브라우저 로컬스토리지에 저장되며, 브라우저 캐시 삭제 시 함께 삭제됩니다.
            </p>
          </section>

          <section className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 space-y-4">
            <h2 className="text-lg font-bold text-gray-800">6. 연락처</h2>
            <p className="text-gray-600 leading-relaxed text-sm">
              개인정보 처리에 관한 문의사항은 아래로 연락해 주세요.
            </p>
            <p className="text-sm text-indigo-600 font-medium">
              이메일: little_ship@naver.com
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
