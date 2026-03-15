'use client';

import { useState } from 'react';
import { TestResult } from '@/lib/types';

interface ShareButtonProps {
  result: TestResult;
}

function encodeResult(result: TestResult): string {
  const { mbti, enneagram, enneagramWing, attachment, bigFive } = result;
  return [
    mbti,
    enneagram,
    enneagramWing,
    attachment,
    bigFive.O,
    bigFive.C,
    bigFive.E,
    bigFive.A,
    bigFive.N,
  ].join('-');
}

export default function ShareButton({ result }: ShareButtonProps) {
  const [copied, setCopied] = useState(false);

  const getShareUrl = () => {
    const encoded = encodeResult(result);
    return `${window.location.origin}/result?d=${encoded}`;
  };

  const shareText = `나의 심리 유형: ${result.mbti} × 에니어그램 ${result.enneagram}번 × ${result.attachment === 'secure' ? '안정형' : result.attachment === 'anxious' ? '불안형' : result.attachment === 'avoidant' ? '회피형' : '혼란형'} 애착\n🔮 마음 탐구에서 당신의 유형도 알아보세요!`;

  const handleShare = async () => {
    const url = getShareUrl();

    if (navigator.share) {
      try {
        await navigator.share({ title: '마음 탐구 결과', text: shareText, url });
      } catch {
        // user cancelled
      }
    } else {
      handleCopy();
    }
  };

  const handleCopy = async () => {
    const url = getShareUrl();
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // fallback
      const el = document.createElement('textarea');
      el.value = url;
      document.body.appendChild(el);
      el.select();
      document.execCommand('copy');
      document.body.removeChild(el);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="flex gap-3">
      {/* 공유하기 (Web Share API / 링크 복사 fallback) */}
      <button
        onClick={handleShare}
        className="flex-1 flex items-center justify-center gap-2 py-3 px-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-bold rounded-xl shadow-md hover:shadow-lg active:scale-95 transition-all"
      >
        <span>🔗</span>
        <span>결과 공유하기</span>
      </button>

      {/* 링크 복사 */}
      <button
        onClick={handleCopy}
        className={`flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-semibold border-2 transition-all active:scale-95 ${
          copied
            ? 'border-emerald-400 bg-emerald-50 text-emerald-600'
            : 'border-gray-200 bg-white text-gray-600 hover:border-indigo-300 hover:bg-indigo-50'
        }`}
      >
        {copied ? '✓ 복사됨' : '📋 링크 복사'}
      </button>
    </div>
  );
}

// 공유된 URL의 d 파라미터를 TestResult로 디코딩
export function decodeResult(d: string): TestResult | null {
  try {
    const parts = d.split('-');
    if (parts.length < 9) return null;

    // attachment는 하이픈 없는 값들 중 특정 위치
    // 형식: mbti(4자)-enneagram-wing-attachment-O-C-E-A-N
    // mbti는 4글자라 split('-')하면 첫 번째 요소
    const [mbti, enneagram, wing, attachment, O, C, E, A, N] = parts;

    const validAttachment = ['secure', 'anxious', 'avoidant', 'disorganized'];
    if (!validAttachment.includes(attachment)) return null;

    return {
      mbti: mbti as TestResult['mbti'],
      enneagram: parseInt(enneagram) as TestResult['enneagram'],
      enneagramWing: parseInt(wing) as TestResult['enneagramWing'],
      attachment: attachment as TestResult['attachment'],
      bigFive: {
        O: parseInt(O),
        C: parseInt(C),
        E: parseInt(E),
        A: parseInt(A),
        N: parseInt(N),
      },
      rawScores: {
        EI: 0, SN: 0, TF: 0, JP: 0,
        O: 0, C: 0, E: 0, A: 0, N: 0,
        E1: 0, E2: 0, E3: 0, E4: 0, E5: 0, E6: 0, E7: 0, E8: 0, E9: 0,
        secure: 0, anxious: 0, avoidant: 0, disorganized: 0,
      },
    };
  } catch {
    return null;
  }
}
