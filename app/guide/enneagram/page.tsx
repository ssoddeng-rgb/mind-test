import Link from 'next/link';
import Footer from '@/components/Footer';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '에니어그램 9가지 유형 완전 해설 — 핵심 두려움과 욕구 | 마음 탐구',
  description: '에니어그램 1번부터 9번까지 모든 유형의 핵심 두려움, 핵심 욕구, 날개 유형, 성장 방향을 상세히 설명합니다. Riso-Hudson 이론 기반의 심층 가이드.',
};

const types = [
  { num: 1, name: '개혁가', emoji: '⚖️', fear: '부도덕하거나 나쁜 사람이 되는 것', desire: '선하고 완전하며 올바른 사람이 되고 싶음', desc: '1번 유형은 원칙적이고 목적의식이 강한 이상주의자입니다. 옳고 그름에 대한 명확한 기준을 가지고 있으며, 세상을 더 나은 곳으로 만들고 싶어 합니다. 높은 도덕 기준과 자기 비판적 내면의 목소리("비판자")가 특징입니다. 완벽하지 않은 자신과 세상에 좌절감을 느끼기도 하지만, 이 에너지를 개선과 개혁의 동력으로 전환합니다.', wings: '9w1 또는 2w1', growth: '자신과 타인에 대한 판단을 내려놓고, 있는 그대로를 수용하는 평정심 연습' },
  { num: 2, name: '조력자', emoji: '🤗', fear: '사랑받지 못하거나 원해지지 않는 것', desire: '사랑받고 소속감을 느끼고 싶음', desc: '2번 유형은 따뜻하고 공감 능력이 뛰어난 사람들로, 타인의 필요에 민감하게 반응합니다. 도움을 주는 것에서 의미를 찾고, 관계를 통해 자신의 가치를 확인합니다. 깊은 내면에는 자신이 조건 없이 사랑받을 자격이 있는지에 대한 의문이 있으며, 이것이 지나친 타인 중심의 행동 패턴으로 나타날 수 있습니다.', wings: '1w2 또는 3w2', growth: '자신의 필요와 감정을 인정하고, 조건 없이 자기 자신을 사랑하는 연습' },
  { num: 3, name: '성취자', emoji: '🏆', fear: '무가치하거나 본질적으로 아무 가치 없는 것', desire: '가치 있는 사람이 되고 성공을 통해 인정받고 싶음', desc: '3번 유형은 목표 지향적이고 야심차며 적응력이 뛰어납니다. 성공과 성취를 통해 자신의 가치를 증명하려 하며, 이미지 관리에 능숙합니다. 놀라운 업무 능력과 매력을 가지고 있지만, 진정한 자아와 연결되는 것보다 역할을 수행하는 것에 익숙해질 수 있습니다.', wings: '2w3 또는 4w3', growth: '외부 성취와 상관없는 자신의 본질적 가치를 발견하고, 진정성 있는 자아 탐색' },
  { num: 4, name: '개인주의자', emoji: '🎨', fear: '개인적인 중요성이 없거나 정체성이 없는 것', desire: '자신이 누구인지 발견하고 의미 있는 존재이고 싶음', desc: '4번 유형은 자기 표현적이고 극적이며 기질적으로 감성적입니다. 깊은 감정과 독특한 정체성을 중시하며, 자신이 근본적으로 다르다는 느낌을 받습니다. 아름다움과 의미를 추구하고 진정성을 소중히 여기지만, 이상화와 평가절하의 사이클, 멜랑콜리한 감정에 빠질 수 있습니다.', wings: '3w4 또는 5w4', growth: '현재 순간과 평범한 일상에서 아름다움을 발견하고, 자신만의 고통에 지나치게 집중하지 않기' },
  { num: 5, name: '탐구자', emoji: '🔭', fear: '무능하고 무지하거나 다른 사람들에게 짐이 되는 것', desire: '유능하고 세상을 이해하고 싶음', desc: '5번 유형은 통찰력 있고 혁신적이며 고립적인 경향이 있습니다. 지식을 축적하고 세상을 이해함으로써 안정감을 찾습니다. 외부의 요구로부터 자신의 에너지와 시간을 보호하려 하며, 관찰자 역할을 선호합니다. 깊은 전문성을 개발하지만 실제 삶과 연결이 부족할 수 있습니다.', wings: '4w5 또는 6w5', growth: '지식을 실제 삶과 관계 속에서 나누고, 풍요로운 세상과 연결되는 용기 갖기' },
  { num: 6, name: '충성가', emoji: '🛡️', fear: '지지나 인도 없이 혼자 남겨지는 것', desire: '안전하고 확실한 것, 지지받고 싶음', desc: '6번 유형은 참여적이고 신뢰할 수 있으며 안전을 추구합니다. 충성스럽고 책임감이 있으며 팀 지향적입니다. 권위에 대해 양가적인 태도를 가질 수 있으며(도전하거나 복종하거나), 위협을 예상하고 대비하는 경향이 있습니다. 불안을 잘 인식하며, 이를 통해 공동체와 안전을 구축하는 힘이 됩니다.', wings: '5w6 또는 7w6', growth: '자신의 내면 권위와 직관을 신뢰하고, 불확실성 속에서도 안전하다는 확신 갖기' },
  { num: 7, name: '열정가', emoji: '🎉', fear: '고통 속에 갇히거나 박탈되는 것', desire: '행복하고 만족스럽고 욕구가 충족되기를 원함', desc: '7번 유형은 자발적이고 다재다능하며 산만한 경향이 있습니다. 긍정적 경험과 새로운 가능성에 이끌리며, 고통스러운 감정이나 제한으로부터 도망치려 합니다. 에너지가 넘치고 재미있지만, 깊이 있는 헌신이나 어려운 감정과 마주하는 것을 어려워할 수 있습니다.', wings: '6w7 또는 8w7', growth: '불편한 감정과 제한을 회피하지 않고 완전히 경험함으로써 진정한 만족 발견하기' },
  { num: 8, name: '도전자', emoji: '⚡', fear: '통제당하거나 상처받거나 남에게 지배되는 것', desire: '자신을 보호하고 자신의 인생을 지배하고 싶음', desc: '8번 유형은 자기 주장이 강하고 결단력이 있으며 대면적입니다. 강도와 직접성을 지향하며, 약자를 보호하려는 강한 의지를 가집니다. 갈등을 두려워하지 않고 오히려 이를 통해 진실을 찾으려 합니다. 취약함을 드러내는 것에 불편함을 느끼지만, 진정한 친밀감은 이를 통해 형성됩니다.', wings: '7w8 또는 9w8', growth: '취약함을 받아들이고, 부드러운 힘을 통해 진정한 영향력 발휘하기' },
  { num: 9, name: '평화주의자', emoji: '☮️', fear: '잃어버리거나 분리되거나 분열을 만드는 것', desire: '내면의 안정과 평화, 주변과의 조화를 원함', desc: '9번 유형은 수용적이고 믿음직스럽고 안정적입니다. 갈등을 피하고 조화를 유지하려 하며, 다른 유형의 관점을 쉽게 이해하고 수용합니다. 자신의 욕구나 의견을 표현하는 것보다 평화를 우선시하는 경향이 있어 "잠든 거인"이라 불리기도 합니다. 자신의 존재와 가치를 자각하는 것이 성장의 핵심입니다.', wings: '8w9 또는 1w9', growth: '자신의 목소리를 내고, 갈등을 두려워하지 않으며, 자신의 욕구와 의견을 소중히 여기기' },
];

export default function EnneagramGuidePage() {
  return (
    <>
      <main className="min-h-screen bg-gray-50">
        <header className="bg-white border-b border-gray-100 px-4 py-4">
          <div className="max-w-2xl mx-auto flex items-center justify-between">
            <Link href="/guide" className="text-indigo-600 font-semibold hover:text-indigo-700">← 심리학 가이드</Link>
            <Link href="/test" className="text-sm bg-indigo-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-indigo-700 transition-colors">내 유형 알아보기</Link>
          </div>
        </header>

        <article className="max-w-2xl mx-auto px-4 py-10 space-y-10">
          <header>
            <div className="text-5xl mb-4">⭕</div>
            <div className="flex items-center gap-2 mb-3">
              <span className="text-xs font-semibold text-pink-600 bg-pink-50 px-2 py-1 rounded-full">Enneagram</span>
              <span className="text-xs text-gray-400">읽는 시간 약 15분</span>
            </div>
            <h1 className="text-3xl font-black text-gray-900 mb-4 leading-tight">에니어그램 9가지 유형 완전 해설 — 핵심 두려움과 욕구의 심리학</h1>
            <p className="text-gray-600 leading-relaxed text-lg">
              에니어그램(Enneagram)은 그리스어로 '아홉(ennea)'과 '도형(gramma)'의 합성어로,
              9가지 성격 유형을 9각형 도형으로 표현합니다. 핵심 두려움과 욕구를 기반으로 성격을 이해하는
              이 시스템은 자기 인식과 내면 성장의 도구로 널리 활용됩니다.
            </p>
          </header>

          <section className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 space-y-4">
            <h2 className="text-xl font-bold text-gray-800">에니어그램의 기원과 이론적 배경</h2>
            <p className="text-gray-600 leading-relaxed text-sm">
              에니어그램의 기원에 대해서는 여러 설이 있습니다. 일부는 고대 수피즘(이슬람 신비주의)이나
              크리스천 사막 교부들의 전통에서 비롯되었다고 주장하고, 일부는 20세기 초 철학자
              G.I. Gurdjieff가 현대화한 것으로 봅니다.
            </p>
            <p className="text-gray-600 leading-relaxed text-sm">
              현대적 심리학 도구로서의 에니어그램은 Oscar Ichazo와 Claudio Naranjo가 1970년대에
              체계화했습니다. 이후 Don Richard Riso와 Russ Hudson이 설립한 Enneagram Institute에서
              RHETI(Riso-Hudson Enneagram Type Indicator)를 개발하며 가장 체계적인 측정 도구를 만들었습니다.
            </p>
            <p className="text-gray-600 leading-relaxed text-sm">
              주목할 점은 에니어그램이 외부로 드러나는 행동보다 그 행동의 <strong>근본적인 동기</strong>에 집중한다는 것입니다.
              같은 행동도 유형에 따라 완전히 다른 두려움이나 욕구에서 비롯될 수 있습니다.
            </p>
          </section>

          <section className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 space-y-6">
            <h2 className="text-xl font-bold text-gray-800">에니어그램의 핵심 구조</h2>
            <div className="space-y-3 text-sm text-gray-600">
              <div className="bg-gray-50 rounded-xl p-4">
                <p className="font-bold text-gray-700 mb-1">3가지 중심 (Centers of Intelligence)</p>
                <p>• <strong>머리 중심 (567):</strong> 두려움이 핵심 감정. 분석, 전략, 안전을 통해 세상을 탐색</p>
                <p>• <strong>가슴 중심 (234):</strong> 수치심이 핵심 감정. 이미지, 관계, 감정을 통해 정체성을 형성</p>
                <p>• <strong>몸 중심 (891):</strong> 분노가 핵심 감정. 본능, 행동, 의지를 통해 존재를 확인</p>
              </div>
              <div className="bg-gray-50 rounded-xl p-4">
                <p className="font-bold text-gray-700 mb-1">날개 (Wings)</p>
                <p>각 유형의 양옆에 있는 번호(날개)가 주 유형의 특성을 보완하고 색채를 더합니다.
                예: 4번 유형이라면 3번의 날개(4w3) 또는 5번의 날개(4w5) 중 하나가 강하게 나타납니다.</p>
              </div>
              <div className="bg-gray-50 rounded-xl p-4">
                <p className="font-bold text-gray-700 mb-1">통합과 스트레스 방향</p>
                <p>각 유형은 성장할 때(통합 방향)와 스트레스받을 때(분열 방향) 다른 유형의 특성을 보입니다.
                이를 이해하면 자신의 패턴을 더 명확히 인식할 수 있습니다.</p>
              </div>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-bold text-gray-800 px-1">9가지 유형 상세 해설</h2>
            {types.map((t) => (
              <div key={t.num} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-3xl">{t.emoji}</span>
                  <div>
                    <h3 className="font-black text-gray-800">{t.num}번 유형 — {t.name}</h3>
                    <p className="text-xs text-gray-500">날개: {t.wings}</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-3 mb-3">
                  <div className="bg-red-50 rounded-lg p-3">
                    <p className="text-xs font-bold text-red-700 mb-1">핵심 두려움</p>
                    <p className="text-xs text-gray-700">{t.fear}</p>
                  </div>
                  <div className="bg-green-50 rounded-lg p-3">
                    <p className="text-xs font-bold text-green-700 mb-1">핵심 욕구</p>
                    <p className="text-xs text-gray-700">{t.desire}</p>
                  </div>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed mb-3">{t.desc}</p>
                <div className="bg-indigo-50 rounded-lg p-3">
                  <p className="text-xs font-bold text-indigo-700 mb-1">🌱 성장 방향</p>
                  <p className="text-xs text-gray-700">{t.growth}</p>
                </div>
              </div>
            ))}
          </section>

          <div className="bg-indigo-50 rounded-2xl p-6 text-center border border-indigo-100">
            <p className="text-2xl mb-3">⭕</p>
            <h3 className="font-bold text-indigo-800 mb-2">나의 에니어그램 유형이 궁금하다면?</h3>
            <p className="text-sm text-indigo-600 mb-4">날개 유형까지 포함한 에니어그램 분석 결과를 무료로 확인하세요.</p>
            <Link href="/test" className="inline-block px-6 py-3 bg-indigo-600 text-white font-bold rounded-xl hover:bg-indigo-700 transition-colors">
              무료 검사 시작하기 →
            </Link>
          </div>

          <nav className="flex justify-between text-sm">
            <Link href="/guide/big-five" className="text-indigo-600 hover:underline">← Big Five 가이드</Link>
            <Link href="/guide/attachment-style" className="text-indigo-600 hover:underline">애착 유형 가이드 →</Link>
          </nav>
        </article>
      </main>
      <Footer />
    </>
  );
}
