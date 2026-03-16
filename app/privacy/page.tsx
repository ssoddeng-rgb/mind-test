import Link from 'next/link';
import Footer from '@/components/Footer';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '개인정보처리방침 | 마음 탐구 — Privacy Policy | Mind Explorer',
  description: '마음 탐구 서비스의 개인정보 수집·이용 방침 및 Google AdSense 쿠키 정책 안내.',
};

export default function PrivacyPage() {
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
            <h1 className="text-3xl font-black text-gray-900 mb-2">개인정보처리방침</h1>
            <p className="text-sm text-gray-500">Privacy Policy · 최종 업데이트: 2026년 3월 16일</p>
          </div>

          <section className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 space-y-4">
            <h2 className="text-lg font-bold text-gray-800">1. 개요</h2>
            <p className="text-gray-600 leading-relaxed text-sm">
              마음 탐구(Mind Explorer, 이하 "서비스")는 이용자의 개인정보를 소중히 여기며 관련 법령을 준수합니다.
              본 방침은 서비스가 어떤 정보를 수집하고, 어떻게 이용하며, 어떻게 보호하는지를 안내합니다.
            </p>
          </section>

          <section className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 space-y-4">
            <h2 className="text-lg font-bold text-gray-800">2. 수집하는 정보</h2>
            <p className="text-gray-600 leading-relaxed text-sm font-medium">가. 직접 수집 정보</p>
            <p className="text-gray-600 leading-relaxed text-sm">
              본 서비스는 별도의 회원가입 없이 이용 가능하며, 이름·이메일 등 개인 식별 정보를 수집하지 않습니다.
              테스트 결과는 오직 사용자의 <strong>브라우저 로컬스토리지</strong>에만 저장되며 서버로 전송되지 않습니다.
            </p>
            <p className="text-gray-600 leading-relaxed text-sm font-medium mt-2">나. 자동 수집 정보</p>
            <ul className="list-disc list-inside text-sm text-gray-600 space-y-1 ml-2">
              <li>IP 주소 (국가 식별 용도로만 사용, 익명화 처리)</li>
              <li>브라우저 유형, 운영체제, 화면 해상도</li>
              <li>방문 페이지, 유입 경로, 체류 시간</li>
              <li>쿠키 및 유사 추적 기술을 통한 이용 패턴</li>
            </ul>
            <p className="text-gray-600 leading-relaxed text-sm font-medium mt-2">다. 댓글 입력 정보</p>
            <p className="text-gray-600 leading-relaxed text-sm">
              사용자가 직접 댓글을 작성한 경우, 작성한 텍스트·MBTI 유형·국가 코드가 서버에 저장됩니다.
              이름·이메일 등 개인 식별 정보는 수집되지 않습니다.
            </p>
          </section>

          <section className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 space-y-4">
            <h2 className="text-lg font-bold text-gray-800">3. 쿠키(Cookie) 정책</h2>
            <p className="text-gray-600 leading-relaxed text-sm">
              쿠키는 웹사이트가 사용자의 브라우저에 저장하는 작은 텍스트 파일로, 서비스 이용 환경 개선과 광고 목적으로 사용됩니다.
            </p>
            <p className="text-gray-600 leading-relaxed text-sm font-medium">사용되는 쿠키 유형:</p>
            <ul className="list-disc list-inside text-sm text-gray-600 space-y-2 ml-2">
              <li>
                <strong>필수 쿠키:</strong> 언어 설정, 쿠키 동의 여부 저장 등 서비스 정상 작동에 필요
              </li>
              <li>
                <strong>분석 쿠키:</strong> 방문자 통계 수집 (Google Analytics 등)
              </li>
              <li>
                <strong>광고 쿠키 (Google AdSense):</strong> 사용자 관심사 기반 맞춤형 광고 제공을 위해
                Google LLC 및 그 파트너사가 쿠키를 사용합니다. DoubleClick 쿠키 포함.
              </li>
            </ul>
            <div className="bg-blue-50 rounded-xl p-4 text-sm text-blue-700 space-y-2">
              <p className="font-semibold">Google AdSense 광고 쿠키 안내</p>
              <p>
                Google은 본 사이트 방문 기록 및 다른 사이트 이용 정보를 활용하여 관련성 높은 광고를 제공합니다.
                Google의 쿠키 사용 방식에 대한 자세한 내용은{' '}
                <a href="https://policies.google.com/technologies/ads" target="_blank" rel="noopener noreferrer" className="underline font-semibold">
                  Google 광고 정책
                </a>을 확인하세요.
              </p>
              <p>
                개인화 광고를 원하지 않으신 경우{' '}
                <a href="https://www.google.com/settings/ads" target="_blank" rel="noopener noreferrer" className="underline font-semibold">
                  Google 광고 설정
                </a>
                에서 맞춤형 광고를 비활성화하거나,{' '}
                <a href="https://optout.aboutads.info/" target="_blank" rel="noopener noreferrer" className="underline font-semibold">
                  NAI 광고 옵트아웃
                </a>을 이용하실 수 있습니다.
              </p>
            </div>
            <p className="text-gray-600 text-sm">
              브라우저 설정에서 쿠키를 차단하거나 삭제할 수 있으나, 일부 서비스 기능이 제한될 수 있습니다.
            </p>
          </section>

          <section className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 space-y-4">
            <h2 className="text-lg font-bold text-gray-800">4. 정보의 이용 목적</h2>
            <ul className="list-disc list-inside text-sm text-gray-600 space-y-1 ml-2">
              <li>서비스 운영 및 품질 향상</li>
              <li>사용자 경험 개선 및 인터페이스 최적화</li>
              <li>통계 분석 (익명화된 집계 데이터)</li>
              <li>Google AdSense를 통한 맞춤형 광고 제공</li>
              <li>서비스 악용 방지 및 보안 유지</li>
            </ul>
          </section>

          <section className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 space-y-4">
            <h2 className="text-lg font-bold text-gray-800">5. 제3자 서비스 및 정보 공유</h2>
            <p className="text-gray-600 leading-relaxed text-sm">
              수집된 정보는 법령에 따른 경우를 제외하고 제3자에게 판매·임대·공유되지 않습니다.
              다만, 아래 제3자 서비스 이용 과정에서 정보가 전달될 수 있습니다:
            </p>
            <div className="space-y-3">
              <div className="bg-gray-50 rounded-xl p-4 text-sm">
                <p className="font-semibold text-gray-700">Google LLC (Google AdSense / Google Analytics)</p>
                <p className="text-gray-600 text-xs mt-1">광고 서비스 및 사용 통계 분석. 미국 소재 서버 활용.</p>
                <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-indigo-600 text-xs underline">Google 개인정보처리방침 →</a>
              </div>
              <div className="bg-gray-50 rounded-xl p-4 text-sm">
                <p className="font-semibold text-gray-700">Cloudflare Inc.</p>
                <p className="text-gray-600 text-xs mt-1">CDN 및 서버 호스팅 서비스. 트래픽 보안 및 성능 최적화.</p>
                <a href="https://www.cloudflare.com/privacypolicy/" target="_blank" rel="noopener noreferrer" className="text-indigo-600 text-xs underline">Cloudflare 개인정보처리방침 →</a>
              </div>
              <div className="bg-gray-50 rounded-xl p-4 text-sm">
                <p className="font-semibold text-gray-700">Supabase Inc.</p>
                <p className="text-gray-600 text-xs mt-1">댓글 및 통계 데이터 저장 (익명화된 데이터만 저장).</p>
                <a href="https://supabase.com/privacy" target="_blank" rel="noopener noreferrer" className="text-indigo-600 text-xs underline">Supabase 개인정보처리방침 →</a>
              </div>
            </div>
          </section>

          <section className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 space-y-4">
            <h2 className="text-lg font-bold text-gray-800">6. 데이터 보존 기간</h2>
            <ul className="list-disc list-inside text-sm text-gray-600 space-y-1 ml-2">
              <li>테스트 결과: 브라우저 로컬스토리지에만 저장 (브라우저 데이터 삭제 시 자동 소멸)</li>
              <li>댓글: 서비스 운영 기간 동안 보존, 삭제 요청 시 처리</li>
              <li>통계 데이터: 익명화된 집계 데이터로 영구 보존</li>
            </ul>
          </section>

          <section className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 space-y-4">
            <h2 className="text-lg font-bold text-gray-800">7. 사용자 권리 (GDPR / CCPA)</h2>
            <p className="text-gray-600 leading-relaxed text-sm">
              사용자는 다음의 권리를 갖습니다:
            </p>
            <ul className="list-disc list-inside text-sm text-gray-600 space-y-1 ml-2">
              <li><strong>열람권:</strong> 수집된 개인정보 확인 요청</li>
              <li><strong>삭제권:</strong> 저장된 개인정보 삭제 요청</li>
              <li><strong>처리 제한권:</strong> 특정 목적의 데이터 처리 중단 요청</li>
              <li><strong>이동권:</strong> 데이터 전송 요청</li>
              <li><strong>광고 거부권:</strong> 개인화 광고 비활성화 (<a href="https://www.google.com/settings/ads" target="_blank" rel="noopener noreferrer" className="text-indigo-600 underline">Google 광고 설정</a>)</li>
            </ul>
            <p className="text-gray-600 text-sm">
              권리 행사를 원하시면 <a href="mailto:little_ship@naver.com" className="text-indigo-600 underline">little_ship@naver.com</a>으로 문의해 주세요.
            </p>
          </section>

          <section className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 space-y-4">
            <h2 className="text-lg font-bold text-gray-800">8. 아동 개인정보</h2>
            <p className="text-gray-600 leading-relaxed text-sm">
              본 서비스는 만 14세 미만 아동을 대상으로 하지 않으며, 의도적으로 아동의 개인정보를 수집하지 않습니다.
              만 14세 미만 아동이 서비스를 이용하는 경우 보호자의 동의가 필요합니다.
            </p>
          </section>

          <section className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 space-y-4">
            <h2 className="text-lg font-bold text-gray-800">9. 방침의 변경</h2>
            <p className="text-gray-600 leading-relaxed text-sm">
              본 개인정보처리방침은 법령 변경 또는 서비스 정책 변경에 따라 업데이트될 수 있습니다.
              변경 시 본 페이지 상단의 업데이트 날짜를 수정하여 공지합니다.
            </p>
          </section>

          <section className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 space-y-4">
            <h2 className="text-lg font-bold text-gray-800">10. 연락처</h2>
            <p className="text-gray-600 leading-relaxed text-sm">
              개인정보 처리에 관한 문의 또는 권리 행사는 아래로 연락해 주세요.
            </p>
            <p className="text-sm text-indigo-600 font-medium">이메일: little_ship@naver.com</p>
            <p className="text-sm text-gray-500">
              <Link href="/contact" className="text-indigo-600 underline">문의 페이지 →</Link>
            </p>
          </section>

          <section className="bg-gray-50 rounded-2xl p-5 border border-gray-200">
            <h2 className="text-base font-bold text-gray-700 mb-3">Privacy Policy (English Summary)</h2>
            <p className="text-sm text-gray-600 leading-relaxed">
              Mind Explorer does not collect personally identifiable information. Test results are stored
              locally in your browser only. We use Google AdSense for advertising, which may use cookies
              to serve personalized ads based on your browsing history. You can opt out of personalized
              advertising via{' '}
              <a href="https://www.google.com/settings/ads" target="_blank" rel="noopener noreferrer" className="text-indigo-600 underline">
                Google Ad Settings
              </a>. For data requests or privacy inquiries, contact little_ship@naver.com.
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
