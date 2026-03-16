'use client';

import { useEffect, useState } from 'react';
import {
  BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer,
  PieChart, Pie, Cell, Legend,
} from 'recharts';
import { useLang } from '@/lib/LangContext';

interface StatsData {
  total: number;
  mbti: Record<string, number>;
  enneagram: Record<string, number>;
  attachment: Record<string, number>;
  country: Record<string, number>;
}

const COUNTRY_NAMES: Record<string, { ko: string; en: string }> = {
  KR: { ko: '한국', en: 'South Korea' }, US: { ko: '미국', en: 'USA' },
  JP: { ko: '일본', en: 'Japan' }, CN: { ko: '중국', en: 'China' },
  GB: { ko: '영국', en: 'UK' }, DE: { ko: '독일', en: 'Germany' },
  FR: { ko: '프랑스', en: 'France' }, CA: { ko: '캐나다', en: 'Canada' },
  AU: { ko: '호주', en: 'Australia' }, SG: { ko: '싱가포르', en: 'Singapore' },
  TW: { ko: '대만', en: 'Taiwan' }, TH: { ko: '태국', en: 'Thailand' },
  IN: { ko: '인도', en: 'India' }, BR: { ko: '브라질', en: 'Brazil' },
  MX: { ko: '멕시코', en: 'Mexico' }, ES: { ko: '스페인', en: 'Spain' },
  IT: { ko: '이탈리아', en: 'Italy' }, NL: { ko: '네덜란드', en: 'Netherlands' },
};

const FLAG: Record<string, string> = {
  KR:'🇰🇷', US:'🇺🇸', JP:'🇯🇵', CN:'🇨🇳', GB:'🇬🇧', DE:'🇩🇪', FR:'🇫🇷',
  CA:'🇨🇦', AU:'🇦🇺', SG:'🇸🇬', TW:'🇹🇼', TH:'🇹🇭', IN:'🇮🇳', BR:'🇧🇷',
};

const ATTACHMENT_COLORS = {
  secure: '#16a34a', anxious: '#f59e0b', avoidant: '#3b82f6', disorganized: '#8b5cf6',
};
const ATTACHMENT_LABELS = {
  ko: { secure: '안정형', anxious: '불안형', avoidant: '회피형', disorganized: '혼란형' },
  en: { secure: 'Secure', anxious: 'Anxious', avoidant: 'Avoidant', disorganized: 'Disorganized' },
};

const MBTI_COLORS = [
  '#6366f1','#8b5cf6','#a855f7','#ec4899','#f43f5e','#ef4444',
  '#f97316','#f59e0b','#eab308','#84cc16','#22c55e','#10b981',
  '#14b8a6','#06b6d4','#3b82f6','#0ea5e9',
];

export default function StatsSection() {
  const { lang } = useLang();
  const [stats, setStats] = useState<StatsData | null>(null);
  const [tab, setTab] = useState<'mbti' | 'country' | 'attachment'>('mbti');

  useEffect(() => {
    fetch('/api/stats')
      .then((r) => r.ok ? r.json() : null)
      .then(setStats)
      .catch(() => {});
  }, []);

  const t = {
    ko: {
      title: '📊 전체 참여 통계',
      total: (n: number) => `총 ${n.toLocaleString()}명 참여`,
      mbtiTab: 'MBTI 분포', countryTab: '나라별', attachmentTab: '애착 유형',
      noData: '아직 데이터가 충분하지 않아요',
      count: '명',
    },
    en: {
      title: '📊 Global Statistics',
      total: (n: number) => `${n.toLocaleString()} participants total`,
      mbtiTab: 'MBTI', countryTab: 'By Country', attachmentTab: 'Attachment',
      noData: 'Not enough data yet',
      count: '',
    },
  }[lang];

  if (!stats || stats.total === 0) {
    return (
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 text-center">
        <p className="text-3xl mb-2">📊</p>
        <p className="text-gray-400 text-sm">{lang === 'ko' ? '아직 데이터가 없어요. 테스트를 완료하면 통계가 쌓여요!' : 'No data yet. Stats will appear after people complete the test!'}</p>
      </div>
    );
  }

  // MBTI chart data (sorted by count)
  const mbtiData = Object.entries(stats.mbti)
    .sort((a, b) => b[1] - a[1])
    .map(([name, value]) => ({ name, value }));

  // Country chart data (top 10)
  const countryData = Object.entries(stats.country)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 10)
    .map(([code, value]) => ({
      name: `${FLAG[code] ?? '🌍'} ${COUNTRY_NAMES[code]?.[lang] ?? code}`,
      value,
    }));

  // Attachment pie data
  const attachmentData = Object.entries(stats.attachment).map(([key, value]) => ({
    name: ATTACHMENT_LABELS[lang][key as keyof typeof ATTACHMENT_LABELS['ko']] ?? key,
    value,
    color: ATTACHMENT_COLORS[key as keyof typeof ATTACHMENT_COLORS] ?? '#6b7280',
  }));

  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
      <div className="px-5 pt-5 pb-3">
        <div className="flex items-center justify-between mb-1">
          <h3 className="font-bold text-gray-800">{t.title}</h3>
          <span className="text-xs text-indigo-600 font-semibold bg-indigo-50 px-2 py-1 rounded-full">{t.total(stats.total)}</span>
        </div>

        {/* Tabs */}
        <div className="flex gap-1 mt-3 mb-4">
          {(['mbti', 'country', 'attachment'] as const).map((key) => (
            <button
              key={key}
              onClick={() => setTab(key)}
              className={`flex-1 py-1.5 text-xs font-semibold rounded-lg transition-colors ${
                tab === key ? 'bg-indigo-600 text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {key === 'mbti' ? t.mbtiTab : key === 'country' ? t.countryTab : t.attachmentTab}
            </button>
          ))}
        </div>

        {/* MBTI Bar Chart */}
        {tab === 'mbti' && (
          <div className="h-56">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={mbtiData} margin={{ top: 4, right: 4, left: -20, bottom: 0 }}>
                <XAxis dataKey="name" tick={{ fontSize: 10 }} interval={0} />
                <YAxis tick={{ fontSize: 10 }} />
                <Tooltip
                  formatter={(v: number) => [`${v}${t.count}`, lang === 'ko' ? '명수' : 'count']}
                  contentStyle={{ borderRadius: '8px', fontSize: 12 }}
                />
                <Bar dataKey="value" radius={[4, 4, 0, 0]}>
                  {mbtiData.map((_, i) => (
                    <Cell key={i} fill={MBTI_COLORS[i % MBTI_COLORS.length]} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        )}

        {/* Country Bar Chart */}
        {tab === 'country' && (
          <div className="h-56">
            {countryData.length === 0 ? (
              <p className="text-sm text-gray-400 text-center pt-8">{t.noData}</p>
            ) : (
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={countryData} layout="vertical" margin={{ top: 0, right: 20, left: 8, bottom: 0 }}>
                  <XAxis type="number" tick={{ fontSize: 10 }} />
                  <YAxis type="category" dataKey="name" tick={{ fontSize: 11 }} width={110} />
                  <Tooltip
                    formatter={(v: number) => [`${v}${t.count}`, lang === 'ko' ? '명수' : 'count']}
                    contentStyle={{ borderRadius: '8px', fontSize: 12 }}
                  />
                  <Bar dataKey="value" fill="#6366f1" radius={[0, 4, 4, 0]} />
                </BarChart>
              </ResponsiveContainer>
            )}
          </div>
        )}

        {/* Attachment Pie Chart */}
        {tab === 'attachment' && (
          <div className="h-56">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie data={attachmentData} cx="50%" cy="45%" outerRadius={80} dataKey="value" label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`} labelLine={false}>
                  {attachmentData.map((entry, i) => (
                    <Cell key={i} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip formatter={(v: number) => [`${v}${t.count}`, '']} contentStyle={{ borderRadius: '8px', fontSize: 12 }} />
              </PieChart>
            </ResponsiveContainer>
          </div>
        )}
      </div>
    </div>
  );
}
