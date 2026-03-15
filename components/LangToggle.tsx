'use client';

import { useLang } from '@/lib/LangContext';

export default function LangToggle() {
  const { lang, setLang } = useLang();

  return (
    <button
      onClick={() => setLang(lang === 'ko' ? 'en' : 'ko')}
      className="flex items-center gap-1 px-3 py-1.5 rounded-lg border border-gray-200 bg-white hover:bg-gray-50 transition-colors text-sm font-semibold text-gray-600"
      aria-label="언어 전환 / Switch Language"
    >
      <span className="text-base">{lang === 'ko' ? '🇺🇸' : '🇰🇷'}</span>
      <span>{lang === 'ko' ? 'EN' : '한국어'}</span>
    </button>
  );
}
