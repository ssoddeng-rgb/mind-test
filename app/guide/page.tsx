import Link from 'next/link';
import Footer from '@/components/Footer';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '심리학 가이드 | 마음 탐구 — Psychology Guide | Mind Explorer',
  description: 'MBTI, Big Five, 에니어그램, 애착 유형에 관한 심층 심리학 가이드. In-depth guides on MBTI, Big Five, Enneagram, and Attachment Theory.',
};

const articles = [
  {
    href: '/guide/mbti',
    icon: '🧠',
    title: 'MBTI 완전 정복 가이드',
    titleEn: 'Complete Guide to MBTI',
    desc: '16가지 MBTI 성격 유형의 특징, 강점, 약점, 관계 패턴을 상세히 알아봅니다.',
    tag: 'MBTI',
  },
  {
    href: '/guide/big-five',
    icon: '📊',
    title: 'Big Five 성격 모델 이해하기',
    titleEn: 'Understanding the Big Five Model',
    desc: '심리학에서 가장 신뢰받는 Big Five(OCEAN) 모델의 5가지 차원과 그 의미를 설명합니다.',
    tag: 'Big Five',
  },
  {
    href: '/guide/enneagram',
    icon: '⭕',
    title: '에니어그램 9가지 유형 완전 해설',
    titleEn: 'Complete Guide to Enneagram Types',
    desc: '9가지 에니어그램 유형의 핵심 두려움, 욕구, 날개 유형, 성장 방향을 심층 분석합니다.',
    tag: 'Enneagram',
  },
  {
    href: '/guide/attachment-style',
    icon: '💞',
    title: '애착 유형과 관계 패턴 이해하기',
    titleEn: 'Attachment Styles & Relationship Patterns',
    desc: '안정형, 불안형, 회피형, 혼란형 애착 유형이 관계에 미치는 영향과 개선 방법을 알아봅니다.',
    tag: 'Attachment',
  },
  {
    href: '/guide/how-to-use-results',
    icon: '🔮',
    title: '심리테스트 결과 활용법',
    titleEn: 'How to Use Your Personality Test Results',
    desc: '4가지 심리 유형 결과를 실생활, 진로, 인간관계에 어떻게 활용할 수 있는지 안내합니다.',
    tag: 'Guide',
  },
  {
    href: '/guide/mbti-relationships',
    icon: '🤝',
    title: 'MBTI 유형별 인간관계 가이드',
    titleEn: 'MBTI Compatibility & Relationships',
    desc: '16가지 MBTI 유형이 서로 어떻게 상호작용하는지, 궁합과 소통 방식을 분석합니다.',
    tag: 'MBTI',
  },
  {
    href: '/guide/psychology-history',
    icon: '📚',
    title: '성격심리학의 역사와 발전',
    titleEn: 'History of Personality Psychology',
    desc: 'Jung의 분석심리학부터 현대 Big Five까지, 성격 이론이 어떻게 발전해 왔는지 알아봅니다.',
    tag: 'Psychology',
  },
  {
    href: '/guide/self-awareness',
    icon: '🌱',
    title: '자기 인식과 성장: 성격 유형을 넘어서',
    titleEn: 'Self-Awareness & Growth Beyond Type Labels',
    desc: '성격 유형 검사 결과를 자기 성장의 도구로 활용하는 방법과 주의사항을 설명합니다.',
    tag: 'Growth',
  },
];

export default function GuidePage() {
  return (
    <>
      <main className="min-h-screen bg-gray-50">
        <header className="bg-white border-b border-gray-100 px-4 py-4">
          <div className="max-w-2xl mx-auto flex items-center justify-between">
            <Link href="/" className="text-indigo-600 font-semibold hover:text-indigo-700">
              ← 마음 탐구
            </Link>
            <Link href="/test" className="text-sm bg-indigo-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-indigo-700 transition-colors">
              테스트 시작
            </Link>
          </div>
        </header>

        <div className="max-w-2xl mx-auto px-4 py-10">
          <div className="mb-10">
            <h1 className="text-3xl font-black text-gray-900 mb-3">📚 심리학 가이드</h1>
            <p className="text-gray-600 leading-relaxed">
              MBTI, Big Five, 에니어그램, 애착 이론 등 주요 성격심리학 이론을 쉽고 깊이 있게 설명합니다.
              테스트 결과와 함께 읽으면 자신을 더 잘 이해하는 데 도움이 됩니다.
            </p>
          </div>

          <div className="grid gap-4">
            {articles.map((a) => (
              <Link key={a.href} href={a.href}
                className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 hover:shadow-md hover:border-indigo-200 transition-all group">
                <div className="flex items-start gap-4">
                  <span className="text-3xl flex-shrink-0">{a.icon}</span>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xs font-semibold text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded-full">{a.tag}</span>
                    </div>
                    <h2 className="font-bold text-gray-800 group-hover:text-indigo-700 transition-colors mb-1">{a.title}</h2>
                    <p className="text-xs text-gray-400 mb-2">{a.titleEn}</p>
                    <p className="text-sm text-gray-600 leading-relaxed">{a.desc}</p>
                  </div>
                  <span className="text-gray-300 group-hover:text-indigo-400 transition-colors flex-shrink-0 text-lg">→</span>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-10 bg-indigo-50 rounded-2xl p-6 text-center border border-indigo-100">
            <p className="text-2xl mb-3">🔮</p>
            <h3 className="font-bold text-indigo-800 mb-2">나의 심리 유형이 궁금하다면?</h3>
            <p className="text-sm text-indigo-600 mb-4">40문항으로 MBTI · Big Five · 에니어그램 · 애착 유형을 한 번에 확인하세요.</p>
            <Link href="/test"
              className="inline-block px-6 py-3 bg-indigo-600 text-white font-bold rounded-xl hover:bg-indigo-700 transition-colors">
              무료 검사 시작하기 →
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
