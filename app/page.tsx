'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import Footer from '@/components/Footer';
import LangToggle from '@/components/LangToggle';
import StatsSection from '@/components/StatsSection';
import { useLang } from '@/lib/LangContext';

export default function HomePage() {
  const { lang } = useLang();

  const t = {
    ko: {
      title: '마음 탐구',
      subtitle: (bold: string) => <>40가지 질문으로 당신의 성격을 <strong className="text-indigo-600">{bold}</strong>으로 동시에 분석하는 종합 심리 유형 검사입니다.</>,
      boldText: '4가지 심리학 프레임',
      features: [
        { icon: '🧠', label: 'MBTI', desc: '16가지 성격 유형', detail: 'Myers-Briggs Type Indicator 기반의 가장 널리 알려진 성격 유형 검사' },
        { icon: '📊', label: 'Big Five', desc: '5대 성격 차원 분석', detail: '현대 심리학에서 가장 신뢰받는 Costa & McCrae의 5요인 성격 모델' },
        { icon: '⭕', label: '에니어그램', desc: '9가지 핵심 동기 유형', detail: '핵심 두려움과 욕구를 기반으로 한 9가지 성격 유형 분석' },
        { icon: '💞', label: '애착 유형', desc: '관계 패턴 분석', detail: 'Hazan & Shaver의 애착 이론을 기반으로 한 관계 패턴 분석' },
      ],
      infoTitle: '검사 안내',
      infoItems: ['총 40문항 · 약 10~15분 소요', '솔직하게 답할수록 정확한 결과를 얻을 수 있어요', '결과는 참고용이며 개인의 특성을 단정 짓지 않습니다'],
      cta: '검사 시작하기 →',
      aboutTitle: '마음 탐구란?',
      aboutDesc: '심리학 분야에서 검증된 4가지 이론을 하나의 테스트로 통합하여 더 입체적인 자기 이해를 돕는 무료 심리 탐구 도구입니다.',
      aboutMore: '더 자세한 소개 →',
      howTitle: '검사 방법',
      howSteps: [
        { icon: '1', title: '시작하기', desc: '아래 버튼을 눌러 테스트를 시작하세요. 회원가입 불필요.' },
        { icon: '2', title: '40문항 응답', desc: '각 문항에서 자신과 가장 가까운 보기를 선택하세요. 약 10~15분 소요.' },
        { icon: '3', title: '종합 리포트 확인', desc: 'MBTI · Big Five · 에니어그램 · 애착 유형을 한 번에 분석한 결과를 확인하세요.' },
        { icon: '4', title: '결과 공유', desc: '링크를 공유해 친구들과 결과를 비교해보세요.' },
      ],
      faqTitle: '자주 묻는 질문',
      faqs: [
        { q: '이 테스트는 얼마나 정확한가요?', a: 'MBTI, Big Five, 에니어그램, 애착 유형 등 공인된 심리학 이론을 기반으로 설계되었습니다. 단, 40문항의 설문 결과이므로 전문 임상 검사를 대체할 수 없습니다. 자기 이해의 참고 도구로 활용하세요.' },
        { q: '내 데이터는 어디에 저장되나요?', a: '테스트 결과는 사용자의 브라우저 로컬스토리지에만 저장되며 서버로 전송되지 않습니다. 브라우저 데이터를 삭제하면 결과도 함께 삭제됩니다.' },
        { q: '테스트를 다시 할 수 있나요?', a: '네, 언제든지 홈 화면의 "검사 시작하기" 버튼을 눌러 새 테스트를 시작할 수 있습니다. 이전 결과는 새 결과로 덮어씌워집니다.' },
        { q: '결과를 친구와 공유하려면?', a: '결과 페이지 하단의 "결과 공유하기" 버튼을 눌러 링크를 복사하거나 직접 공유하세요. 공유 링크는 결과 데이터를 인코딩하여 전달합니다.' },
        { q: 'Big Five(빅파이브)란 무엇인가요?', a: 'Costa & McCrae(1992)가 개발한 5요인 성격 모델로, 개방성(O)·성실성(C)·외향성(E)·친화성(A)·신경성(N)의 5가지 차원으로 성격을 측정합니다. 현대 심리학에서 가장 광범위하게 검증된 모델입니다.' },
        { q: '에니어그램이란 무엇인가요?', a: '핵심 두려움과 욕구를 기반으로 9가지 성격 유형을 분류하는 심리학적 도구입니다. Riso-Hudson(RHETI) 모델을 기반으로 하며, 각 유형마다 날개 유형이 존재합니다.' },
        { q: '애착 유형이란 무엇인가요?', a: 'Hazan & Shaver(1987)의 연구를 기반으로 한 관계 패턴 분류입니다. 안정형, 불안형, 회피형, 혼란형의 4가지 유형으로 대인관계 패턴을 이해하는 데 도움을 줍니다.' },
      ],
    },
    en: {
      title: 'Mind Explorer',
      subtitle: (bold: string) => <>Analyze your personality through <strong className="text-indigo-600">{bold}</strong> simultaneously with 40 questions.</>,
      boldText: '4 psychological frameworks',
      features: [
        { icon: '🧠', label: 'MBTI', desc: '16 Personality Types', detail: 'The most widely known personality type indicator based on Myers-Briggs theory' },
        { icon: '📊', label: 'Big Five', desc: '5 Personality Dimensions', detail: 'The most trusted personality model in modern psychology by Costa & McCrae' },
        { icon: '⭕', label: 'Enneagram', desc: '9 Core Motivation Types', detail: 'Analysis of 9 personality types based on core fears and desires' },
        { icon: '💞', label: 'Attachment Style', desc: 'Relationship Pattern Analysis', detail: 'Relationship pattern analysis based on Hazan & Shaver\'s attachment theory' },
      ],
      infoTitle: 'Test Guide',
      infoItems: ['40 questions · approx. 10–15 minutes', 'The more honest you are, the more accurate your results', 'Results are for reference only and do not define you'],
      cta: 'Start the Test →',
      aboutTitle: 'What is Mind Explorer?',
      aboutDesc: 'A free self-exploration tool that integrates 4 evidence-based psychological theories into a single test for a more complete picture of who you are.',
      aboutMore: 'Learn more →',
      howTitle: 'How It Works',
      howSteps: [
        { icon: '1', title: 'Start for Free', desc: 'No sign-up required. Just click the button to begin.' },
        { icon: '2', title: 'Answer 40 Questions', desc: 'Choose the option that best describes you. Takes about 10–15 minutes.' },
        { icon: '3', title: 'Get Your Full Report', desc: 'Receive your MBTI, Big Five, Enneagram, and Attachment Style results all at once.' },
        { icon: '4', title: 'Share Your Results', desc: 'Share your unique results link with friends and compare types.' },
      ],
      faqTitle: 'Frequently Asked Questions',
      faqs: [
        { q: 'How accurate is this test?', a: 'The test is designed based on established psychological theories (MBTI, Big Five, Enneagram, Attachment Theory). While it provides meaningful insights, it cannot replace a professional clinical assessment. Use it as a self-exploration reference.' },
        { q: 'Where is my data stored?', a: "Your results are stored only in your browser's local storage and are never sent to our servers. Clearing your browser data will remove your results." },
        { q: 'Can I retake the test?', a: 'Yes! Click the "Start the Test" button on the home page at any time to begin a new test. Your previous result will be replaced.' },
        { q: 'How do I share my results?', a: 'On the result page, tap the "Share Results" button to copy a link or share directly. The link encodes your result data for others to view.' },
        { q: 'What is the Big Five model?', a: 'Developed by Costa & McCrae (1992), the Big Five is the most widely validated personality model in modern psychology. It measures five dimensions: Openness, Conscientiousness, Extraversion, Agreeableness, and Neuroticism (OCEAN).' },
        { q: 'What is the Enneagram?', a: 'The Enneagram classifies personalities into 9 types based on core fears and desires. This test uses the Riso-Hudson (RHETI) model. Each type has wing subtypes for nuanced insights.' },
        { q: 'What is Attachment Style?', a: "Based on Hazan & Shaver's (1987) research, attachment style describes your relationship patterns: Secure, Anxious, Avoidant, or Disorganized. Understanding your style can improve your self-awareness in relationships." },
      ],
    },
  }[lang];

  return (
    <>
      <main className="min-h-screen flex flex-col items-center px-4 py-16">
        {/* Lang toggle top-right */}
        <div className="w-full max-w-lg flex justify-end mb-4">
          <LangToggle />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="w-full max-w-lg text-center"
        >
          {/* Hero */}
          <div className="mb-8">
            <motion.div initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ delay: 0.1, duration: 0.5 }} className="text-7xl mb-6">🔮</motion.div>
            <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-4 leading-tight">{t.title}</h1>
            <p className="text-lg text-gray-600 leading-relaxed">{t.subtitle(t.boldText)}</p>
          </div>

          {/* Features */}
          <div className="grid grid-cols-2 gap-3 mb-8">
            {t.features.map((f, i) => (
              <motion.div key={f.label} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 + i * 0.1, duration: 0.4 }}
                className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 text-left">
                <div className="text-2xl mb-2">{f.icon}</div>
                <p className="font-bold text-gray-800">{f.label}</p>
                <p className="text-sm text-gray-500">{f.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* Info */}
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }}
            className="bg-indigo-50 rounded-2xl p-4 mb-8 text-left">
            <div className="flex items-start gap-3">
              <span className="text-xl mt-0.5">ℹ️</span>
              <div>
                <p className="font-semibold text-indigo-800 mb-1">{t.infoTitle}</p>
                <ul className="text-sm text-indigo-700 space-y-1">{t.infoItems.map((item) => <li key={item}>• {item}</li>)}</ul>
              </div>
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7 }} className="mb-16">
            <Link href="/test"
              className="inline-flex items-center justify-center w-full py-4 px-8 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-bold text-lg rounded-2xl shadow-lg hover:shadow-xl hover:from-indigo-700 hover:to-purple-700 transition-all duration-200 active:scale-95">
              {t.cta}
            </Link>
          </motion.div>

          {/* About */}
          <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.9 }} className="text-left mb-12">
            <h2 className="text-2xl font-black text-gray-900 mb-4">{t.aboutTitle}</h2>
            <p className="text-gray-600 leading-relaxed mb-4">{t.aboutDesc}</p>
            <div className="space-y-3 mb-4">
              {t.features.map((f) => (
                <div key={f.label} className="bg-white rounded-xl p-4 border border-gray-100 shadow-sm">
                  <p className="font-bold text-gray-800 mb-1">{f.icon} {f.label}</p>
                  <p className="text-sm text-gray-600">{f.detail}</p>
                </div>
              ))}
            </div>
            <Link href="/about" className="text-sm text-indigo-600 font-semibold hover:text-indigo-700 underline">
              {t.aboutMore}
            </Link>
          </motion.section>

          {/* How It Works */}
          <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.95 }} className="text-left mb-12">
            <h2 className="text-2xl font-black text-gray-900 mb-4">{t.howTitle}</h2>
            <div className="space-y-3">
              {t.howSteps.map((s) => (
                <div key={s.icon} className="bg-white rounded-xl p-4 border border-gray-100 shadow-sm flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-indigo-100 text-indigo-700 font-black rounded-full flex items-center justify-center text-sm">{s.icon}</div>
                  <div>
                    <p className="font-bold text-gray-800 text-sm mb-0.5">{s.title}</p>
                    <p className="text-xs text-gray-500 leading-relaxed">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.section>

          {/* FAQ */}
          <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.0 }} className="text-left mb-8">
            <h2 className="text-2xl font-black text-gray-900 mb-4">{t.faqTitle}</h2>
            <div className="space-y-3">
              {t.faqs.map((faq) => (
                <div key={faq.q} className="bg-white rounded-xl p-4 border border-gray-100 shadow-sm">
                  <p className="font-semibold text-gray-800 mb-2">Q. {faq.q}</p>
                  <p className="text-sm text-gray-600 leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </motion.section>

          {/* Stats */}
          <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.1 }} className="mb-8">
            <StatsSection />
          </motion.section>
        </motion.div>
      </main>
      <Footer />
    </>
  );
}
