'use client';

import { TestResult } from '@/lib/types';
import { mbtiTypes } from '@/data/mbti-types';
import { enneagramTypes } from '@/data/enneagram-types';
import { attachmentTypes } from '@/data/attachment-types';
import { bigFiveDimensions, getBigFiveLabel } from '@/data/bigfive-types';
import {
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  Radar,
  ResponsiveContainer,
  Tooltip,
} from 'recharts';
import { motion } from 'framer-motion';

interface ResultReportProps {
  result: TestResult;
}

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.5, ease: 'easeOut' },
  }),
};

export default function ResultReport({ result }: ResultReportProps) {
  const mbti = mbtiTypes[result.mbti];
  const enneagram = enneagramTypes[result.enneagram];
  const enneagramWing = enneagramTypes[result.enneagramWing];
  const attachment = attachmentTypes[result.attachment];

  // Build radar data
  const radarData = (Object.keys(bigFiveDimensions) as Array<keyof typeof bigFiveDimensions>).map(
    (key) => ({
      subject: bigFiveDimensions[key].name,
      score: result.bigFive[key],
      fullMark: 100,
    })
  );

  // Headline keywords
  const keywords = [
    ...mbti.keywords,
    enneagram.nickname,
    attachment.nickname,
  ].slice(0, 5);

  return (
    <div className="space-y-8 pb-16">
      {/* Headline */}
      <motion.section
        custom={0}
        initial="hidden"
        animate="visible"
        variants={fadeUp}
        className="text-center py-8 px-6 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-2xl text-white shadow-xl"
      >
        <p className="text-indigo-200 text-sm font-medium mb-2">나의 성격 유형</p>
        <h1 className="text-4xl md:text-5xl font-black mb-4">{result.mbti}</h1>
        <p className="text-xl font-semibold mb-4">{mbti.nickname}</p>
        <div className="flex flex-wrap justify-center gap-2">
          {keywords.map((kw) => (
            <span
              key={kw}
              className="px-3 py-1 bg-white/20 rounded-full text-sm font-medium"
            >
              #{kw}
            </span>
          ))}
        </div>
      </motion.section>

      {/* MBTI */}
      <motion.section
        custom={1}
        initial="hidden"
        animate="visible"
        variants={fadeUp}
        className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100"
      >
        <div className="flex items-center gap-3 mb-4">
          <span className="w-10 h-10 rounded-xl bg-indigo-100 flex items-center justify-center text-xl">🧠</span>
          <div>
            <p className="text-xs font-semibold text-indigo-500 uppercase tracking-wide">MBTI</p>
            <h2 className="text-xl font-bold text-gray-800">{result.mbti} — {mbti.nickname}</h2>
          </div>
        </div>
        <p className="text-gray-600 leading-relaxed mb-4">{mbti.description}</p>
        <div className="grid grid-cols-2 gap-3">
          <div className="bg-emerald-50 rounded-xl p-3">
            <p className="text-xs font-semibold text-emerald-600 mb-2">강점</p>
            <ul className="space-y-1">
              {mbti.strengths.map((s) => (
                <li key={s} className="text-sm text-gray-700 flex items-center gap-1">
                  <span className="text-emerald-500">✓</span> {s}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-red-50 rounded-xl p-3">
            <p className="text-xs font-semibold text-red-500 mb-2">성장 포인트</p>
            <ul className="space-y-1">
              {mbti.weaknesses.map((w) => (
                <li key={w} className="text-sm text-gray-700 flex items-center gap-1">
                  <span className="text-red-400">△</span> {w}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </motion.section>

      {/* Big Five Radar */}
      <motion.section
        custom={2}
        initial="hidden"
        animate="visible"
        variants={fadeUp}
        className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100"
      >
        <div className="flex items-center gap-3 mb-4">
          <span className="w-10 h-10 rounded-xl bg-purple-100 flex items-center justify-center text-xl">📊</span>
          <div>
            <p className="text-xs font-semibold text-purple-500 uppercase tracking-wide">Big Five</p>
            <h2 className="text-xl font-bold text-gray-800">5가지 성격 차원</h2>
          </div>
        </div>
        <div className="h-64 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <RadarChart data={radarData}>
              <PolarGrid stroke="#e5e7eb" />
              <PolarAngleAxis
                dataKey="subject"
                tick={{ fontSize: 13, fontWeight: 600, fill: '#374151' }}
              />
              <Radar
                name="점수"
                dataKey="score"
                stroke="#6366f1"
                fill="#6366f1"
                fillOpacity={0.25}
                strokeWidth={2}
              />
              <Tooltip
                formatter={(value: number) => [`${value}점`, '점수']}
                contentStyle={{ borderRadius: '8px', border: '1px solid #e5e7eb' }}
              />
            </RadarChart>
          </ResponsiveContainer>
        </div>
        <div className="mt-4 space-y-2">
          {(Object.keys(bigFiveDimensions) as Array<keyof typeof bigFiveDimensions>).map((key) => {
            const dim = bigFiveDimensions[key];
            const score = result.bigFive[key];
            return (
              <div key={key} className="flex items-center gap-3">
                <span className="w-20 text-sm font-semibold text-gray-600 flex-shrink-0">{dim.name}</span>
                <div className="flex-1 bg-gray-100 rounded-full h-2">
                  <div
                    className="h-full rounded-full transition-all duration-700"
                    style={{ width: `${score}%`, backgroundColor: dim.color }}
                  />
                </div>
                <span className="w-16 text-xs text-gray-500 flex-shrink-0">{getBigFiveLabel(score)}</span>
              </div>
            );
          })}
        </div>
      </motion.section>

      {/* Enneagram */}
      <motion.section
        custom={3}
        initial="hidden"
        animate="visible"
        variants={fadeUp}
        className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100"
      >
        <div className="flex items-center gap-3 mb-4">
          <span className="w-10 h-10 rounded-xl bg-amber-100 flex items-center justify-center text-xl">⭕</span>
          <div>
            <p className="text-xs font-semibold text-amber-600 uppercase tracking-wide">에니어그램</p>
            <h2 className="text-xl font-bold text-gray-800">
              {enneagram.name} {enneagram.nickname}
              <span className="text-base font-normal text-gray-400 ml-2">
                날개 {enneagramWing.name}
              </span>
            </h2>
          </div>
        </div>
        <div className="mb-3 flex gap-3">
          <div className="flex-1 bg-amber-50 rounded-xl p-3">
            <p className="text-xs font-semibold text-amber-600 mb-1">핵심 욕구</p>
            <p className="text-sm text-gray-700">{enneagram.coreDesire}</p>
          </div>
          <div className="flex-1 bg-red-50 rounded-xl p-3">
            <p className="text-xs font-semibold text-red-500 mb-1">핵심 두려움</p>
            <p className="text-sm text-gray-700">{enneagram.coreFear}</p>
          </div>
        </div>
        <p className="text-gray-600 leading-relaxed mb-3">{enneagram.description}</p>
        <div className="bg-blue-50 rounded-xl p-3">
          <p className="text-xs font-semibold text-blue-600 mb-1">성장 포인트</p>
          <p className="text-sm text-gray-700">{enneagram.growthPoint}</p>
        </div>
      </motion.section>

      {/* Attachment */}
      <motion.section
        custom={4}
        initial="hidden"
        animate="visible"
        variants={fadeUp}
        style={{ backgroundColor: attachment.bgColor }}
        className="rounded-2xl p-6 shadow-sm border border-gray-100"
      >
        <div className="flex items-center gap-3 mb-4">
          <span className="w-10 h-10 rounded-xl bg-white flex items-center justify-center text-xl">💞</span>
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide" style={{ color: attachment.color }}>
              애착 유형
            </p>
            <h2 className="text-xl font-bold text-gray-800">
              {attachment.name} — {attachment.nickname}
            </h2>
          </div>
        </div>
        <p className="text-gray-600 leading-relaxed mb-4">{attachment.description}</p>
        <div className="bg-white/70 rounded-xl p-4 mb-4">
          <p className="text-xs font-semibold text-gray-500 mb-2">관계 패턴</p>
          <p className="text-sm text-gray-700 leading-relaxed">{attachment.relationshipPattern}</p>
        </div>
        <div className="bg-white/70 rounded-xl p-4">
          <p className="text-xs font-semibold mb-1" style={{ color: attachment.color }}>성장 팁</p>
          <p className="text-sm text-gray-700 leading-relaxed">{attachment.growthTip}</p>
        </div>
      </motion.section>

      {/* Combined Insight */}
      <motion.section
        custom={5}
        initial="hidden"
        animate="visible"
        variants={fadeUp}
        className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-6 text-white shadow-xl"
      >
        <div className="flex items-center gap-3 mb-4">
          <span className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-xl">✨</span>
          <div>
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide">종합 인사이트</p>
            <h2 className="text-xl font-bold">당신만의 조합</h2>
          </div>
        </div>
        <p className="text-gray-300 leading-relaxed mb-4">
          <strong className="text-white">{result.mbti}</strong>이면서{' '}
          <strong className="text-amber-400">{enneagram.nickname}</strong>이고{' '}
          <strong className="text-rose-400">{attachment.name}</strong> 애착을 가진 당신은,
          독특하고 복합적인 성격 조합을 가지고 있습니다.
        </p>
        <div className="space-y-3">
          <div className="bg-white/10 rounded-xl p-4">
            <p className="text-sm font-semibold text-emerald-400 mb-1">💪 핵심 강점</p>
            <p className="text-sm text-gray-300 leading-relaxed">
              {mbti.strengths[0]}과 {enneagram.strengths[0]}의 조합으로, 당신은 {mbti.keywords[0]}하면서도 {enneagram.strengths[1]}한 능력을 동시에 발휘할 수 있습니다.
            </p>
          </div>
          <div className="bg-white/10 rounded-xl p-4">
            <p className="text-sm font-semibold text-blue-400 mb-1">🌱 성장 방향</p>
            <p className="text-sm text-gray-300 leading-relaxed">
              {attachment.growthTip.split('.')[0]}. 동시에 {enneagram.growthPoint.split('.')[0]}하는 것도 중요한 성장 과제입니다.
            </p>
          </div>
        </div>
      </motion.section>
    </div>
  );
}
