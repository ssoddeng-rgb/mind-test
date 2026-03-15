'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import Footer from '@/components/Footer';

const features = [
  {
    icon: '🧠',
    label: 'MBTI',
    desc: '16가지 성격 유형',
    detail: 'Myers-Briggs Type Indicator 기반의 가장 널리 알려진 성격 유형 검사',
  },
  {
    icon: '📊',
    label: 'Big Five',
    desc: '5대 성격 차원 분석',
    detail: '현대 심리학에서 가장 신뢰받는 Costa & McCrae의 5요인 성격 모델',
  },
  {
    icon: '⭕',
    label: '에니어그램',
    desc: '9가지 핵심 동기 유형',
    detail: '핵심 두려움과 욕구를 기반으로 한 9가지 성격 유형 분석',
  },
  {
    icon: '💞',
    label: '애착 유형',
    desc: '관계 패턴 분석',
    detail: 'Hazan & Shaver의 애착 이론을 기반으로 한 관계 패턴 분석',
  },
];

const faqs = [
  {
    q: '이 테스트는 얼마나 정확한가요?',
    a: '본 테스트는 공식 심리학 이론(MBTI, Big Five, 에니어그램, 애착이론)을 기반으로 설계되었습니다. 단, 자기 보고 방식의 특성상 전문 심리 검사의 대체가 될 수 없으며 참고용으로 활용하세요.',
  },
  {
    q: '내 데이터는 어디에 저장되나요?',
    a: '테스트 결과는 브라우저의 로컬스토리지에만 저장되며 서버로 전송되지 않습니다. 개인정보는 수집하지 않습니다.',
  },
  {
    q: '테스트를 다시 할 수 있나요?',
    a: '네, 언제든지 다시 테스트할 수 있습니다. 홈 화면의 "검사 시작하기" 버튼을 누르면 새 테스트가 시작됩니다.',
  },
];

export default function HomePage() {
  return (
    <>
      <main className="min-h-screen flex flex-col items-center px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="w-full max-w-lg text-center"
        >
          {/* Hero */}
          <div className="mb-8">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="text-7xl mb-6"
            >
              🔮
            </motion.div>
            <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-4 leading-tight">
              마음 탐구
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed">
              40가지 질문으로 당신의 성격을{' '}
              <strong className="text-indigo-600">4가지 심리학 프레임</strong>으로
              동시에 분석하는 종합 심리 유형 검사입니다.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-2 gap-3 mb-8">
            {features.map((f, i) => (
              <motion.div
                key={f.label}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + i * 0.1, duration: 0.4 }}
                className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 text-left"
              >
                <div className="text-2xl mb-2">{f.icon}</div>
                <p className="font-bold text-gray-800">{f.label}</p>
                <p className="text-sm text-gray-500">{f.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* Info */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="bg-indigo-50 rounded-2xl p-4 mb-8 text-left"
          >
            <div className="flex items-start gap-3">
              <span className="text-xl mt-0.5">ℹ️</span>
              <div>
                <p className="font-semibold text-indigo-800 mb-1">검사 안내</p>
                <ul className="text-sm text-indigo-700 space-y-1">
                  <li>• 총 40문항 · 약 10~15분 소요</li>
                  <li>• 솔직하게 답할수록 정확한 결과를 얻을 수 있어요</li>
                  <li>• 결과는 참고용이며 개인의 특성을 단정 짓지 않습니다</li>
                </ul>
              </div>
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="mb-16"
          >
            <Link
              href="/test"
              className="inline-flex items-center justify-center w-full py-4 px-8 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-bold text-lg rounded-2xl shadow-lg hover:shadow-xl hover:from-indigo-700 hover:to-purple-700 transition-all duration-200 active:scale-95"
            >
              검사 시작하기 →
            </Link>
          </motion.div>

          {/* About Section */}
          <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
            className="text-left mb-12"
          >
            <h2 className="text-2xl font-black text-gray-900 mb-4">마음 탐구란?</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              마음 탐구는 심리학 분야에서 검증된 4가지 이론을 하나의 테스트로 통합하여
              더 입체적인 자기 이해를 돕는 무료 심리 탐구 도구입니다.
            </p>
            <div className="space-y-3">
              {features.map((f) => (
                <div key={f.label} className="bg-white rounded-xl p-4 border border-gray-100 shadow-sm">
                  <p className="font-bold text-gray-800 mb-1">{f.icon} {f.label}</p>
                  <p className="text-sm text-gray-600">{f.detail}</p>
                </div>
              ))}
            </div>
          </motion.section>

          {/* FAQ Section */}
          <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.0 }}
            className="text-left mb-8"
          >
            <h2 className="text-2xl font-black text-gray-900 mb-4">자주 묻는 질문</h2>
            <div className="space-y-3">
              {faqs.map((faq) => (
                <div key={faq.q} className="bg-white rounded-xl p-4 border border-gray-100 shadow-sm">
                  <p className="font-semibold text-gray-800 mb-2">Q. {faq.q}</p>
                  <p className="text-sm text-gray-600 leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </motion.section>
        </motion.div>
      </main>
      <Footer />
    </>
  );
}
