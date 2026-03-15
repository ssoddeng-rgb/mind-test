'use client';

import { useLang } from '@/lib/LangContext';

interface ProgressBarProps {
  current: number;
  total: number;
}

export default function ProgressBar({ current, total }: ProgressBarProps) {
  const { lang } = useLang();
  const percent = Math.round((current / total) * 100);
  const label = lang === 'en' ? `${current} / ${total} questions` : `${current} / ${total} 문항`;

  return (
    <div className="w-full">
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm font-medium text-gray-600">{label}</span>
        <span className="text-sm font-semibold text-indigo-600">{percent}%</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2.5 overflow-hidden">
        <div
          className="h-full rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 transition-all duration-500 ease-out"
          style={{ width: `${percent}%` }}
        />
      </div>
    </div>
  );
}
