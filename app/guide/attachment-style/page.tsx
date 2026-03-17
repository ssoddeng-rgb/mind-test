import Link from 'next/link';
import Footer from '@/components/Footer';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '애착 유형 완전 가이드 — 안정형·불안형·회피형·혼란형 이해하기 | 마음 탐구',
  description: '애착 이론(Attachment Theory)의 4가지 유형을 심층 분석합니다. 어린 시절 애착 경험이 성인 관계 패턴에 미치는 영향과 각 유형의 특성, 개선 방법을 설명합니다.',
};

export default function AttachmentStyleGuidePage() {
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
            <div className="text-5xl mb-4">💞</div>
            <div className="flex items-center gap-2 mb-3">
              <span className="text-xs font-semibold text-rose-600 bg-rose-50 px-2 py-1 rounded-full">Attachment</span>
              <span className="text-xs text-gray-400">읽는 시간 약 12분</span>
            </div>
            <h1 className="text-3xl font-black text-gray-900 mb-4 leading-tight">애착 유형 완전 가이드 — 관계 패턴의 심리학적 이해</h1>
            <p className="text-gray-600 leading-relaxed text-lg">
              왜 어떤 사람은 친밀한 관계에서 안정감을 느끼는 반면, 어떤 사람은 집착하거나 거리를 두는 걸까요?
              애착 이론(Attachment Theory)은 이 질문에 대한 가장 강력한 심리학적 답을 제공합니다.
            </p>
          </header>

          <section className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 space-y-4">
            <h2 className="text-xl font-bold text-gray-800">애착 이론의 역사와 배경</h2>
            <p className="text-gray-600 leading-relaxed text-sm">
              애착 이론은 영국의 정신과 의사 John Bowlby(1907~1990)가 창시했습니다.
              Bowlby는 유아가 주 양육자와 맺는 정서적 유대가 이후 전반적인 발달과 심리 건강에
              결정적인 영향을 미친다고 주장했습니다. 그의 이론은 Mary Ainsworth의 "낯선 상황 실험(Strange Situation)"
              (1969)을 통해 실험적으로 검증되었습니다.
            </p>
            <p className="text-gray-600 leading-relaxed text-sm">
              Ainsworth의 연구는 영아의 애착 유형을 안정 애착, 불안-저항 애착, 회피 애착의 세 가지로 분류했습니다.
              이후 Mary Main과 Judith Solomon(1986)이 혼란 애착 유형을 추가로 발견했습니다.
            </p>
            <p className="text-gray-600 leading-relaxed text-sm">
              이 영아 애착 연구는 Cindy Hazan과 Philip Shaver(1987)에 의해 성인 낭만적 관계에 적용되었고,
              Kim Bartholomew와 Leonard Horowitz(1991)가 4가지 성인 애착 유형 모델을 확립했습니다.
              현재 성인 애착 이론은 관계 심리학에서 가장 활발하게 연구되는 분야 중 하나입니다.
            </p>
          </section>

          <section className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 space-y-4">
            <h2 className="text-xl font-bold text-gray-800">애착의 내적 작동 모델</h2>
            <p className="text-gray-600 leading-relaxed text-sm">
              Bowlby는 유아기 경험을 통해 형성되는 "내적 작동 모델(Internal Working Model)"을 제안했습니다.
              이는 자기 자신과 타인에 대한 무의식적인 기대와 믿음의 체계입니다.
            </p>
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-gray-50 rounded-xl p-4">
                <p className="text-sm font-bold text-gray-700 mb-2">자기 모델</p>
                <p className="text-xs text-gray-600"><span className="text-green-600 font-bold">긍정적:</span> "나는 사랑받을 자격이 있다"</p>
                <p className="text-xs text-gray-600 mt-1"><span className="text-red-600 font-bold">부정적:</span> "나는 사랑받을 가치가 없다"</p>
              </div>
              <div className="bg-gray-50 rounded-xl p-4">
                <p className="text-sm font-bold text-gray-700 mb-2">타인 모델</p>
                <p className="text-xs text-gray-600"><span className="text-green-600 font-bold">긍정적:</span> "타인은 믿을 수 있고 반응적이다"</p>
                <p className="text-xs text-gray-600 mt-1"><span className="text-red-600 font-bold">부정적:</span> "타인은 믿을 수 없거나 거부할 것이다"</p>
              </div>
            </div>
            <p className="text-gray-600 leading-relaxed text-sm">
              이 두 가지 차원(자기 모델 ✕ 타인 모델)의 조합이 4가지 애착 유형을 만들어냅니다.
            </p>
          </section>

          <section className="space-y-5">
            <h2 className="text-xl font-bold text-gray-800 px-1">4가지 성인 애착 유형 심층 분석</h2>

            <div className="bg-green-50 border border-green-200 rounded-2xl p-6 space-y-4">
              <div className="flex items-center gap-3">
                <span className="text-3xl">🟢</span>
                <div>
                  <h3 className="font-black text-green-800 text-lg">안정 애착 (Secure Attachment)</h3>
                  <p className="text-xs text-green-600">자기 긍정 · 타인 긍정 / 전체 성인의 약 50~55%</p>
                </div>
              </div>
              <p className="text-sm text-gray-700 leading-relaxed">
                안정 애착 유형은 자신이 사랑받을 자격이 있고, 타인도 믿을 수 있다는 긍정적 기대를 가집니다.
                어린 시절 일관되고 반응적인 양육자의 돌봄을 경험한 경우 형성되는 경향이 있습니다.
              </p>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <p className="text-xs font-bold text-green-800 mb-2">관계 특성</p>
                  <ul className="text-xs text-gray-700 space-y-1">
                    <li>• 친밀감과 독립성 균형</li>
                    <li>• 효과적인 감정 소통</li>
                    <li>• 갈등 상황에서도 관계 유지 능력</li>
                    <li>• 파트너의 자율성 존중</li>
                    <li>• 도움 요청과 지원 수용이 자연스러움</li>
                  </ul>
                </div>
                <div>
                  <p className="text-xs font-bold text-green-800 mb-2">도전과 성장 포인트</p>
                  <ul className="text-xs text-gray-700 space-y-1">
                    <li>• 불안정 유형 파트너와의 관계에서 소진 주의</li>
                    <li>• 자신의 한계와 경계 명확히 하기</li>
                    <li>• 상대방의 다른 패턴 이해하고 수용하기</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-yellow-50 border border-yellow-200 rounded-2xl p-6 space-y-4">
              <div className="flex items-center gap-3">
                <span className="text-3xl">🟡</span>
                <div>
                  <h3 className="font-black text-yellow-800 text-lg">불안 애착 (Anxious Attachment)</h3>
                  <p className="text-xs text-yellow-600">자기 부정 · 타인 긍정 / 전체 성인의 약 19~20%</p>
                </div>
              </div>
              <p className="text-sm text-gray-700 leading-relaxed">
                불안 애착 유형은 자신은 사랑받기 어렵지만 타인은 이상화하는 경향이 있습니다.
                양육자의 돌봄이 일관되지 않고 예측 불가능했을 때 나타납니다.
                관계에 대한 강한 열망과 동시에 버림받을 것 같은 두려움을 경험합니다.
              </p>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <p className="text-xs font-bold text-yellow-800 mb-2">관계 특성</p>
                  <ul className="text-xs text-gray-700 space-y-1">
                    <li>• 파트너에게 강한 집착</li>
                    <li>• 버림받을 것 같은 지속적 불안</li>
                    <li>• 과도한 확인 추구</li>
                    <li>• 관계에 대한 반추</li>
                    <li>• 이별에 강하게 반응</li>
                  </ul>
                </div>
                <div>
                  <p className="text-xs font-bold text-yellow-800 mb-2">성장 방향</p>
                  <ul className="text-xs text-gray-700 space-y-1">
                    <li>• 자기 자신을 돌보고 사랑하는 연습</li>
                    <li>• 파트너 외 지지 체계 구축</li>
                    <li>• 불안 감정을 인식하고 조절하기</li>
                    <li>• 안정 애착 경험을 통한 재학습</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-2xl p-6 space-y-4">
              <div className="flex items-center gap-3">
                <span className="text-3xl">🔵</span>
                <div>
                  <h3 className="font-black text-blue-800 text-lg">회피 애착 (Avoidant Attachment)</h3>
                  <p className="text-xs text-blue-600">자기 긍정 · 타인 부정 / 전체 성인의 약 23~25%</p>
                </div>
              </div>
              <p className="text-sm text-gray-700 leading-relaxed">
                회피 애착 유형은 자신은 독립적이고 자족할 수 있지만, 타인에게 의존하는 것은 위험하다고 믿습니다.
                어린 시절 정서적 필요가 지속적으로 무시되거나 거부당한 경우 나타납니다.
                친밀감을 불편하게 여기고 심리적 거리를 유지하려 합니다.
              </p>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <p className="text-xs font-bold text-blue-800 mb-2">관계 특성</p>
                  <ul className="text-xs text-gray-700 space-y-1">
                    <li>• 친밀감 불편함, 독립 선호</li>
                    <li>• 감정 표현의 어려움</li>
                    <li>• 파트너의 요구에 답답함</li>
                    <li>• 관계보다 개인 공간 우선</li>
                    <li>• 도움 요청 어려움</li>
                  </ul>
                </div>
                <div>
                  <p className="text-xs font-bold text-blue-800 mb-2">성장 방향</p>
                  <ul className="text-xs text-gray-700 space-y-1">
                    <li>• 감정을 인식하고 표현하는 연습</li>
                    <li>• 취약함이 안전할 수 있다는 경험</li>
                    <li>• 친밀감의 점진적 수용</li>
                    <li>• 연결의 가치 재발견</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-purple-50 border border-purple-200 rounded-2xl p-6 space-y-4">
              <div className="flex items-center gap-3">
                <span className="text-3xl">🟣</span>
                <div>
                  <h3 className="font-black text-purple-800 text-lg">혼란 애착 (Disorganized Attachment)</h3>
                  <p className="text-xs text-purple-600">자기 부정 · 타인 부정 / 전체 성인의 약 3~5%</p>
                </div>
              </div>
              <p className="text-sm text-gray-700 leading-relaxed">
                혼란 애착 유형은 자신도, 타인도 긍정적으로 바라보지 못합니다.
                주로 어린 시절 양육자로부터 학대나 방임, 혹은 예측 불가능한 두려움과 위로를
                동시에 경험한 경우 형성됩니다. 친밀함을 원하면서도 두려워하는 내적 갈등이 특징입니다.
              </p>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <p className="text-xs font-bold text-purple-800 mb-2">관계 특성</p>
                  <ul className="text-xs text-gray-700 space-y-1">
                    <li>• 관계에서 혼란스럽고 일관성 없는 반응</li>
                    <li>• 친밀감에 대한 양가감정</li>
                    <li>• 감정 조절의 어려움</li>
                    <li>• 관계 패턴의 급격한 변화</li>
                  </ul>
                </div>
                <div>
                  <p className="text-xs font-bold text-purple-800 mb-2">성장 방향</p>
                  <ul className="text-xs text-gray-700 space-y-1">
                    <li>• 전문 심리 상담 강력 권장</li>
                    <li>• 트라우마 치료 (EMDR 등)</li>
                    <li>• 안전한 치료 관계에서 재학습</li>
                    <li>• 마음챙김 기반 감정 조절 훈련</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <section className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 space-y-4">
            <h2 className="text-xl font-bold text-gray-800">애착 유형은 바뀔 수 있을까?</h2>
            <p className="text-gray-600 leading-relaxed text-sm">
              다행히도, 애착 유형은 고정된 것이 아닙니다. 심리학자들은 '후천적 안정 애착(Earned Secure Attachment)'
              이라는 개념을 통해 불안정 애착에서 안정 애착으로 변화할 수 있음을 보여줍니다.
            </p>
            <p className="text-gray-600 leading-relaxed text-sm">
              변화를 가능하게 하는 요인들:
            </p>
            <ul className="list-disc list-inside text-sm text-gray-600 space-y-2 ml-2">
              <li><strong>교정적 관계 경험:</strong> 안정 애착 유형의 파트너나 치료사와의 지속적인 건강한 관계</li>
              <li><strong>심리 치료:</strong> 애착 중심 치료, 정신역동치료, 내면 아이 치료 등</li>
              <li><strong>자기 인식:</strong> 자신의 패턴을 인식하고 의식적으로 다르게 반응하는 연습</li>
              <li><strong>마음챙김(Mindfulness):</strong> 감정을 판단 없이 관찰하고 조절하는 능력 개발</li>
            </ul>
            <p className="text-gray-600 leading-relaxed text-sm">
              변화는 시간이 걸리지만, 자신의 애착 패턴을 인식하는 것 자체가 이미 성장의 시작입니다.
            </p>
          </section>

          <section className="bg-amber-50 rounded-2xl p-5 border border-amber-100">
            <p className="text-sm font-bold text-amber-800 mb-2">⚠️ 전문가 도움 안내</p>
            <p className="text-sm text-amber-700 leading-relaxed">
              애착 패턴이 일상적인 관계와 삶에 심각한 영향을 미치고 있다면 전문 심리 상담사와 상담을 권장합니다.
              특히 혼란 애착의 경우 트라우마가 연관된 경우가 많으므로 전문적인 도움이 매우 중요합니다.
              정신건강 위기상담: <strong>1577-0199</strong> (24시간)
            </p>
          </section>

          <div className="bg-indigo-50 rounded-2xl p-6 text-center border border-indigo-100">
            <p className="text-2xl mb-3">💞</p>
            <h3 className="font-bold text-indigo-800 mb-2">나의 애착 유형이 궁금하다면?</h3>
            <p className="text-sm text-indigo-600 mb-4">40문항 종합 심리검사로 애착 유형을 포함한 4가지 심리 프로파일을 확인하세요.</p>
            <Link href="/test" className="inline-block px-6 py-3 bg-indigo-600 text-white font-bold rounded-xl hover:bg-indigo-700 transition-colors">
              무료 검사 시작하기 →
            </Link>
          </div>

          <nav className="flex justify-between text-sm">
            <Link href="/guide/enneagram" className="text-indigo-600 hover:underline">← 에니어그램 가이드</Link>
            <Link href="/guide/how-to-use-results" className="text-indigo-600 hover:underline">결과 활용법 →</Link>
          </nav>
        </article>
      </main>
      <Footer />
    </>
  );
}
