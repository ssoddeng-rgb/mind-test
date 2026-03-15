'use client';

import { TestResult } from '@/lib/types';
import { mbtiTypes } from '@/data/mbti-types';
import { enneagramTypes } from '@/data/enneagram-types';
import { attachmentTypes } from '@/data/attachment-types';
import { bigFiveDimensions, getBigFiveLabel } from '@/data/bigfive-types';
import { RadarChart, PolarGrid, PolarAngleAxis, Radar, ResponsiveContainer, Tooltip } from 'recharts';
import { motion } from 'framer-motion';
import { useLang } from '@/lib/LangContext';

interface ResultReportProps { result: TestResult }

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.15, duration: 0.5, ease: 'easeOut' } }),
};

export default function ResultReport({ result }: ResultReportProps) {
  const { lang } = useLang();
  const mbti = mbtiTypes[result.mbti];
  const enneagram = enneagramTypes[result.enneagram];
  const enneagramWing = enneagramTypes[result.enneagramWing];
  const attachment = attachmentTypes[result.attachment];

  const radarData = (Object.keys(bigFiveDimensions) as Array<keyof typeof bigFiveDimensions>).map((key) => ({
    subject: bigFiveDimensions[key].name[lang],
    score: result.bigFive[key],
    fullMark: 100,
  }));

  const keywords = [...mbti.keywords[lang], enneagram.nickname[lang], attachment.nickname[lang]].slice(0, 5);

  const t = {
    ko: {
      typeLabel: '나의 성격 유형',
      mbtiSection: 'MBTI',
      strengths: '강점', growth: '성장 포인트',
      bigfiveSection: 'Big Five', bigfiveTitle: '5가지 성격 차원',
      enneagramSection: '에니어그램', wing: '날개',
      coreDesire: '핵심 욕구', coreFear: '핵심 두려움', growthTip: '성장 포인트',
      attachmentSection: '애착 유형', relationPattern: '관계 패턴',
      insightSection: '종합 인사이트', insightTitle: '당신만의 조합',
      insightBody: (mbtiStr: string, e: string, a: string) => `${mbtiStr}이면서 ${e}이고 ${a} 애착을 가진 당신은, 독특하고 복합적인 성격 조합을 가지고 있습니다.`,
      coreStrength: '💪 핵심 강점', growthDir: '🌱 성장 방향',
    },
    en: {
      typeLabel: 'My Personality Type',
      mbtiSection: 'MBTI',
      strengths: 'Strengths', growth: 'Growth Points',
      bigfiveSection: 'Big Five', bigfiveTitle: '5 Personality Dimensions',
      enneagramSection: 'Enneagram', wing: 'Wing',
      coreDesire: 'Core Desire', coreFear: 'Core Fear', growthTip: 'Growth Tip',
      attachmentSection: 'Attachment Style', relationPattern: 'Relationship Pattern',
      insightSection: 'Combined Insight', insightTitle: 'Your Unique Combination',
      insightBody: (mbtiStr: string, e: string, a: string) => `As an ${mbtiStr} with ${e} tendencies and a ${a} attachment style, you have a uniquely complex personality combination.`,
      coreStrength: '💪 Core Strengths', growthDir: '🌱 Growth Direction',
    },
  }[lang];

  return (
    <div className="space-y-8 pb-16">
      {/* Headline */}
      <motion.section custom={0} initial="hidden" animate="visible" variants={fadeUp}
        className="text-center py-8 px-6 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-2xl text-white shadow-xl">
        <p className="text-indigo-200 text-sm font-medium mb-2">{t.typeLabel}</p>
        <h1 className="text-4xl md:text-5xl font-black mb-4">{result.mbti}</h1>
        <p className="text-xl font-semibold mb-4">{mbti.nickname[lang]}</p>
        <div className="flex flex-wrap justify-center gap-2">
          {keywords.map((kw) => (
            <span key={kw} className="px-3 py-1 bg-white/20 rounded-full text-sm font-medium">#{kw}</span>
          ))}
        </div>
      </motion.section>

      {/* MBTI */}
      <motion.section custom={1} initial="hidden" animate="visible" variants={fadeUp}
        className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
        <div className="flex items-center gap-3 mb-4">
          <span className="w-10 h-10 rounded-xl bg-indigo-100 flex items-center justify-center text-xl">🧠</span>
          <div>
            <p className="text-xs font-semibold text-indigo-500 uppercase tracking-wide">{t.mbtiSection}</p>
            <h2 className="text-xl font-bold text-gray-800">{result.mbti} — {mbti.nickname[lang]}</h2>
          </div>
        </div>
        <p className="text-gray-600 leading-relaxed mb-4">{mbti.description[lang]}</p>
        <div className="grid grid-cols-2 gap-3">
          <div className="bg-emerald-50 rounded-xl p-3">
            <p className="text-xs font-semibold text-emerald-600 mb-2">{t.strengths}</p>
            <ul className="space-y-1">
              {mbti.strengths[lang].map((s) => (
                <li key={s} className="text-sm text-gray-700 flex items-center gap-1"><span className="text-emerald-500">✓</span> {s}</li>
              ))}
            </ul>
          </div>
          <div className="bg-red-50 rounded-xl p-3">
            <p className="text-xs font-semibold text-red-500 mb-2">{t.growth}</p>
            <ul className="space-y-1">
              {mbti.weaknesses[lang].map((w) => (
                <li key={w} className="text-sm text-gray-700 flex items-center gap-1"><span className="text-red-400">△</span> {w}</li>
              ))}
            </ul>
          </div>
        </div>
      </motion.section>

      {/* Big Five Radar */}
      <motion.section custom={2} initial="hidden" animate="visible" variants={fadeUp}
        className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
        <div className="flex items-center gap-3 mb-4">
          <span className="w-10 h-10 rounded-xl bg-purple-100 flex items-center justify-center text-xl">📊</span>
          <div>
            <p className="text-xs font-semibold text-purple-500 uppercase tracking-wide">{t.bigfiveSection}</p>
            <h2 className="text-xl font-bold text-gray-800">{t.bigfiveTitle}</h2>
          </div>
        </div>
        <div className="h-64 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <RadarChart data={radarData}>
              <PolarGrid stroke="#e5e7eb" />
              <PolarAngleAxis dataKey="subject" tick={{ fontSize: 13, fontWeight: 600, fill: '#374151' }} />
              <Radar name={lang === 'ko' ? '점수' : 'Score'} dataKey="score" stroke="#6366f1" fill="#6366f1" fillOpacity={0.25} strokeWidth={2} />
              <Tooltip formatter={(v: number) => [`${v}`, lang === 'ko' ? '점수' : 'Score']}
                contentStyle={{ borderRadius: '8px', border: '1px solid #e5e7eb' }} />
            </RadarChart>
          </ResponsiveContainer>
        </div>
        <div className="mt-4 space-y-2">
          {(Object.keys(bigFiveDimensions) as Array<keyof typeof bigFiveDimensions>).map((key) => {
            const dim = bigFiveDimensions[key];
            const score = result.bigFive[key];
            return (
              <div key={key} className="flex items-center gap-3">
                <span className="w-28 text-sm font-semibold text-gray-600 flex-shrink-0">{dim.name[lang]}</span>
                <div className="flex-1 bg-gray-100 rounded-full h-2">
                  <div className="h-full rounded-full transition-all duration-700" style={{ width: `${score}%`, backgroundColor: dim.color }} />
                </div>
                <span className="w-20 text-xs text-gray-500 flex-shrink-0 text-right">{getBigFiveLabel(score, lang)}</span>
              </div>
            );
          })}
        </div>
      </motion.section>

      {/* Enneagram */}
      <motion.section custom={3} initial="hidden" animate="visible" variants={fadeUp}
        className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
        <div className="flex items-center gap-3 mb-4">
          <span className="w-10 h-10 rounded-xl bg-amber-100 flex items-center justify-center text-xl">⭕</span>
          <div>
            <p className="text-xs font-semibold text-amber-600 uppercase tracking-wide">{t.enneagramSection}</p>
            <h2 className="text-xl font-bold text-gray-800">
              {enneagram.name[lang]} {enneagram.nickname[lang]}
              <span className="text-base font-normal text-gray-400 ml-2">{t.wing} {enneagramWing.name[lang]}</span>
            </h2>
          </div>
        </div>
        <div className="mb-3 flex gap-3">
          <div className="flex-1 bg-amber-50 rounded-xl p-3">
            <p className="text-xs font-semibold text-amber-600 mb-1">{t.coreDesire}</p>
            <p className="text-sm text-gray-700">{enneagram.coreDesire[lang]}</p>
          </div>
          <div className="flex-1 bg-red-50 rounded-xl p-3">
            <p className="text-xs font-semibold text-red-500 mb-1">{t.coreFear}</p>
            <p className="text-sm text-gray-700">{enneagram.coreFear[lang]}</p>
          </div>
        </div>
        <p className="text-gray-600 leading-relaxed mb-3">{enneagram.description[lang]}</p>
        <div className="bg-blue-50 rounded-xl p-3">
          <p className="text-xs font-semibold text-blue-600 mb-1">{t.growthTip}</p>
          <p className="text-sm text-gray-700">{enneagram.growthPoint[lang]}</p>
        </div>
      </motion.section>

      {/* Attachment */}
      <motion.section custom={4} initial="hidden" animate="visible" variants={fadeUp}
        style={{ backgroundColor: attachment.bgColor }}
        className="rounded-2xl p-6 shadow-sm border border-gray-100">
        <div className="flex items-center gap-3 mb-4">
          <span className="w-10 h-10 rounded-xl bg-white flex items-center justify-center text-xl">💞</span>
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide" style={{ color: attachment.color }}>{t.attachmentSection}</p>
            <h2 className="text-xl font-bold text-gray-800">{attachment.name[lang]} — {attachment.nickname[lang]}</h2>
          </div>
        </div>
        <p className="text-gray-600 leading-relaxed mb-4">{attachment.description[lang]}</p>
        <div className="bg-white/70 rounded-xl p-4 mb-4">
          <p className="text-xs font-semibold text-gray-500 mb-2">{t.relationPattern}</p>
          <p className="text-sm text-gray-700 leading-relaxed">{attachment.relationshipPattern[lang]}</p>
        </div>
        <div className="bg-white/70 rounded-xl p-4">
          <p className="text-xs font-semibold mb-1" style={{ color: attachment.color }}>{t.growthTip}</p>
          <p className="text-sm text-gray-700 leading-relaxed">{attachment.growthTip[lang]}</p>
        </div>
      </motion.section>

      {/* Combined Insight */}
      <motion.section custom={5} initial="hidden" animate="visible" variants={fadeUp}
        className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-6 text-white shadow-xl">
        <div className="flex items-center gap-3 mb-4">
          <span className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-xl">✨</span>
          <div>
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide">{t.insightSection}</p>
            <h2 className="text-xl font-bold">{t.insightTitle}</h2>
          </div>
        </div>
        <p className="text-gray-300 leading-relaxed mb-4">
          <strong className="text-white">{result.mbti}</strong>
          {lang === 'ko' ? '이면서 ' : ' combined with '}
          <strong className="text-amber-400">{enneagram.nickname[lang]}</strong>
          {lang === 'ko' ? '이고 ' : ' tendencies and '}
          <strong className="text-rose-400">{attachment.name[lang]}</strong>
          {lang === 'ko'
            ? ' 애착을 가진 당신은, 독특하고 복합적인 성격 조합을 가지고 있습니다.'
            : ' attachment — you have a uniquely complex personality.'}
        </p>
        <div className="space-y-3">
          <div className="bg-white/10 rounded-xl p-4">
            <p className="text-sm font-semibold text-emerald-400 mb-1">{t.coreStrength}</p>
            <p className="text-sm text-gray-300 leading-relaxed">
              {lang === 'ko'
                ? `${mbti.strengths.ko[0]}과 ${enneagram.strengths.ko[0]}의 조합으로, 당신은 ${mbti.keywords.ko[0]}하면서도 ${enneagram.strengths.ko[1]}한 능력을 동시에 발휘할 수 있습니다.`
                : `Combining ${mbti.strengths.en[0]} and ${enneagram.strengths.en[0]}, you can be simultaneously ${mbti.keywords.en[0].toLowerCase()} and ${enneagram.strengths.en[1].toLowerCase()}.`}
            </p>
          </div>
          <div className="bg-white/10 rounded-xl p-4">
            <p className="text-sm font-semibold text-blue-400 mb-1">{t.growthDir}</p>
            <p className="text-sm text-gray-300 leading-relaxed">
              {attachment.growthTip[lang].split('.')[0]}. {enneagram.growthPoint[lang].split('.')[0]}.
            </p>
          </div>
        </div>
      </motion.section>
    </div>
  );
}
