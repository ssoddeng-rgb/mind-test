'use client';

import { useState, useEffect } from 'react';
import { useLang } from '@/lib/LangContext';

interface Comment {
  id: string;
  text: string;
  mbti: string;
  country: string;
  created_at: string;
}

const MBTI_COLORS: Record<string, string> = {
  INTJ: 'bg-purple-100 text-purple-700', INTP: 'bg-indigo-100 text-indigo-700',
  ENTJ: 'bg-red-100 text-red-700',       ENTP: 'bg-orange-100 text-orange-700',
  INFJ: 'bg-pink-100 text-pink-700',     INFP: 'bg-rose-100 text-rose-700',
  ENFJ: 'bg-yellow-100 text-yellow-700', ENFP: 'bg-amber-100 text-amber-700',
  ISTJ: 'bg-slate-100 text-slate-700',   ISFJ: 'bg-teal-100 text-teal-700',
  ESTJ: 'bg-blue-100 text-blue-700',     ESFJ: 'bg-cyan-100 text-cyan-700',
  ISTP: 'bg-stone-100 text-stone-700',   ISFP: 'bg-lime-100 text-lime-700',
  ESTP: 'bg-green-100 text-green-700',   ESFP: 'bg-emerald-100 text-emerald-700',
};

const FLAG: Record<string, string> = {
  KR:'🇰🇷', US:'🇺🇸', JP:'🇯🇵', CN:'🇨🇳', GB:'🇬🇧', DE:'🇩🇪', FR:'🇫🇷',
  CA:'🇨🇦', AU:'🇦🇺', BR:'🇧🇷', IN:'🇮🇳', SG:'🇸🇬', TW:'🇹🇼', TH:'🇹🇭',
  MX:'🇲🇽', ES:'🇪🇸', IT:'🇮🇹', NL:'🇳🇱', SE:'🇸🇪', NO:'🇳🇴', PL:'🇵🇱',
};

export default function CommentBox({ mbti }: { mbti: string }) {
  const { lang } = useLang();
  const [comments, setComments] = useState<Comment[]>([]);
  const [text, setText] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const t = {
    ko: {
      title: '💬 다른 참여자들의 한마디',
      placeholder: '검사 후 한마디 남겨보세요 (최대 140자)',
      submit: '등록',
      submitting: '등록 중...',
      done: '등록되었습니다 ✓',
      empty: '아직 댓글이 없어요. 첫 번째 댓글을 남겨보세요!',
      chars: (n: number) => `${n}/140`,
    },
    en: {
      title: '💬 What others said',
      placeholder: 'Leave a short comment after your test (max 140 chars)',
      submit: 'Post',
      submitting: 'Posting...',
      done: 'Posted ✓',
      empty: 'No comments yet. Be the first!',
      chars: (n: number) => `${n}/140`,
    },
  }[lang];

  useEffect(() => {
    fetch('/api/comments')
      .then((r) => r.ok ? r.json() : [])
      .then(setComments)
      .catch(() => {});
  }, []);

  const handleSubmit = async () => {
    if (!text.trim() || loading || submitted) return;
    setLoading(true);
    try {
      await fetch('/api/comments', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ text: text.trim(), mbti }),
      });
      setSubmitted(true);
      // Optimistically add
      setComments((prev) => [
        { id: Date.now().toString(), text: text.trim(), mbti, country: '..', created_at: new Date().toISOString() },
        ...prev,
      ]);
    } catch {/* silent */} finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
      <div className="px-5 pt-5 pb-3">
        <h3 className="font-bold text-gray-800 mb-3">{t.title}</h3>

        {/* Input */}
        {!submitted ? (
          <div className="space-y-2">
            <textarea
              value={text}
              onChange={(e) => setText(e.target.value.slice(0, 140))}
              placeholder={t.placeholder}
              rows={2}
              className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm text-gray-700 resize-none focus:outline-none focus:border-indigo-400 focus:ring-1 focus:ring-indigo-400"
            />
            <div className="flex items-center justify-between">
              <span className="text-xs text-gray-400">{t.chars(text.length)}</span>
              <button
                onClick={handleSubmit}
                disabled={!text.trim() || loading}
                className="px-4 py-1.5 bg-indigo-600 text-white text-sm font-semibold rounded-lg disabled:opacity-40 hover:bg-indigo-700 transition-colors"
              >
                {loading ? t.submitting : t.submit}
              </button>
            </div>
          </div>
        ) : (
          <div className="text-sm text-emerald-600 font-medium bg-emerald-50 rounded-xl px-4 py-2">{t.done}</div>
        )}
      </div>

      {/* List */}
      <div className="divide-y divide-gray-50 max-h-72 overflow-y-auto">
        {comments.length === 0 ? (
          <p className="text-sm text-gray-400 text-center py-6">{t.empty}</p>
        ) : (
          comments.map((c) => (
            <div key={c.id} className="px-5 py-3 flex items-start gap-3">
              <span className={`flex-shrink-0 text-xs font-bold px-2 py-0.5 rounded-full mt-0.5 ${MBTI_COLORS[c.mbti] ?? 'bg-gray-100 text-gray-600'}`}>
                {c.mbti}
              </span>
              <div className="flex-1 min-w-0">
                <p className="text-sm text-gray-700 leading-relaxed break-words">{c.text}</p>
              </div>
              <span className="flex-shrink-0 text-base" title={c.country}>
                {FLAG[c.country] ?? '🌍'}
              </span>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
