'use client';

import { useState } from 'react';
import { TestResult } from '@/lib/types';
import { useLang } from '@/lib/LangContext';

interface ShareButtonProps {
  result: TestResult;
}

function encodeResult(result: TestResult): string {
  const { mbti, enneagram, enneagramWing, attachment, bigFive } = result;
  return [mbti, enneagram, enneagramWing, attachment, bigFive.O, bigFive.C, bigFive.E, bigFive.A, bigFive.N].join('-');
}

export default function ShareButton({ result }: ShareButtonProps) {
  const [copied, setCopied] = useState(false);
  const { lang } = useLang();

  const t = {
    ko: { share: '결과 공유하기', copy: '링크 복사', copied: '✓ 복사됨' },
    en: { share: 'Share Results', copy: 'Copy Link', copied: '✓ Copied!' },
  }[lang];

  const attachmentLabel = {
    ko: { secure: '안정형', anxious: '불안형', avoidant: '회피형', disorganized: '혼란형' },
    en: { secure: 'Secure', anxious: 'Anxious', avoidant: 'Avoidant', disorganized: 'Disorganized' },
  }[lang];

  const getShareUrl = () => {
    const encoded = encodeResult(result);
    return `${window.location.origin}/result?d=${encoded}`;
  };

  const shareText = lang === 'ko'
    ? `나의 심리 유형: ${result.mbti} × 에니어그램 ${result.enneagram}번 × ${attachmentLabel[result.attachment]} 애착\n🔮 마음 탐구에서 당신의 유형도 알아보세요!`
    : `My personality type: ${result.mbti} × Enneagram ${result.enneagram} × ${attachmentLabel[result.attachment]} Attachment\n🔮 Discover your type on Mind Explorer!`;

  const handleShare = async () => {
    const url = getShareUrl();
    if (navigator.share) {
      try { await navigator.share({ title: lang === 'ko' ? '마음 탐구 결과' : 'Mind Explorer Result', text: shareText, url }); }
      catch { handleCopy(); }
    } else {
      handleCopy();
    }
  };

  const handleCopy = async () => {
    const url = getShareUrl();
    try {
      await navigator.clipboard.writeText(url);
    } catch {
      const el = document.createElement('textarea');
      el.value = url;
      document.body.appendChild(el);
      el.select();
      document.execCommand('copy');
      document.body.removeChild(el);
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="flex gap-3">
      <button
        onClick={handleShare}
        className="flex-1 flex items-center justify-center gap-2 py-3 px-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-bold rounded-xl shadow-md hover:shadow-lg active:scale-95 transition-all"
      >
        <span>🔗</span>
        <span>{t.share}</span>
      </button>
      <button
        onClick={handleCopy}
        className={`flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-semibold border-2 transition-all active:scale-95 ${
          copied ? 'border-emerald-400 bg-emerald-50 text-emerald-600' : 'border-gray-200 bg-white text-gray-600 hover:border-indigo-300 hover:bg-indigo-50'
        }`}
      >
        {copied ? t.copied : `📋 ${t.copy}`}
      </button>
    </div>
  );
}

export function decodeResult(d: string): TestResult | null {
  try {
    const parts = d.split('-');
    if (parts.length < 9) return null;
    const [mbti, enneagram, wing, attachment, O, C, E, A, N] = parts;
    if (!['secure', 'anxious', 'avoidant', 'disorganized'].includes(attachment)) return null;
    return {
      mbti: mbti as TestResult['mbti'],
      enneagram: parseInt(enneagram) as TestResult['enneagram'],
      enneagramWing: parseInt(wing) as TestResult['enneagramWing'],
      attachment: attachment as TestResult['attachment'],
      bigFive: { O: parseInt(O), C: parseInt(C), E: parseInt(E), A: parseInt(A), N: parseInt(N) },
      rawScores: { EI:0,SN:0,TF:0,JP:0,O:0,C:0,E:0,A:0,N:0,E1:0,E2:0,E3:0,E4:0,E5:0,E6:0,E7:0,E8:0,E9:0,secure:0,anxious:0,avoidant:0,disorganized:0 },
    };
  } catch { return null; }
}
