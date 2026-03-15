'use client';

import { useState, useEffect } from 'react';
import { useLang } from '@/lib/LangContext';

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);
  const { lang } = useLang();

  useEffect(() => {
    if (!localStorage.getItem('cookie_consent')) setVisible(true);
  }, []);

  const accept = () => {
    localStorage.setItem('cookie_consent', 'true');
    setVisible(false);
  };

  if (!visible) return null;

  const t = {
    ko: { msg: '🍪 이 사이트는 서비스 향상과 광고 제공을 위해 쿠키를 사용합니다. 계속 이용하시면', policy: '개인정보처리방침', agree: '에 동의하는 것으로 간주됩니다.', btn: '확인' },
    en: { msg: '🍪 This site uses cookies to improve our service and deliver ads. By continuing, you agree to our', policy: 'Privacy Policy', agree: '.', btn: 'Got it' },
  }[lang];

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4">
      <div className="max-w-xl mx-auto bg-gray-900 text-white rounded-2xl p-4 shadow-xl flex flex-col sm:flex-row items-start sm:items-center gap-3">
        <p className="text-sm flex-1 leading-relaxed">
          {t.msg}{' '}
          <a href="/privacy" className="underline text-indigo-300 hover:text-indigo-200">{t.policy}</a>
          {t.agree}
        </p>
        <button
          onClick={accept}
          className="flex-shrink-0 px-4 py-2 bg-indigo-500 hover:bg-indigo-400 rounded-xl text-sm font-semibold transition-colors"
        >
          {t.btn}
        </button>
      </div>
    </div>
  );
}
