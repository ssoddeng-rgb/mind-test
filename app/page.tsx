'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

const features = [
  { icon: '🧠', label: 'MBTI', desc: '16가지 성격 유형' },
  { icon: '📊', label: 'Big Five', desc: '5대 성격 차원 분석' },
  { icon: '⭕', label: '에니어그램', desc: '9가지 핵심 동기 유형' },
  { icon: '💞', label: '애착 유형', desc: '관계 패턴 분석' },
];

export default function HomePage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-4 py-16">
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
            40가지 질문으로 당신의 성격을 <strong className="text-indigo-600">4가지 심리학 프레임</strong>으로
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
        >
          <Link
            href="/test"
            className="inline-flex items-center justify-center w-full py-4 px-8 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-bold text-lg rounded-2xl shadow-lg hover:shadow-xl hover:from-indigo-700 hover:to-purple-700 transition-all duration-200 active:scale-95"
          >
            검사 시작하기 →
          </Link>
        </motion.div>
      </motion.div>
    </main>
  );
}
