'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { Question } from '@/lib/types';
import { useLang } from '@/lib/LangContext';
import { questionsEn } from '@/lib/questions.en';

interface QuestionCardProps {
  question: Question;
  questionNumber: number;
  selectedOption: number | undefined;
  onSelect: (index: number) => void;
}

const frameworkLabel: Record<Question['framework'], { ko: string; en: string }> = {
  mbti: { ko: 'MBTI', en: 'MBTI' },
  bigfive: { ko: 'Big Five', en: 'Big Five' },
  enneagram: { ko: '에니어그램', en: 'Enneagram' },
  attachment: { ko: '애착 유형', en: 'Attachment Style' },
};

const frameworkColor: Record<Question['framework'], string> = {
  mbti: 'bg-indigo-100 text-indigo-700',
  bigfive: 'bg-emerald-100 text-emerald-700',
  enneagram: 'bg-amber-100 text-amber-700',
  attachment: 'bg-rose-100 text-rose-700',
};

const optionLabels = ['A', 'B', 'C', 'D'];

export default function QuestionCard({ question, questionNumber, selectedOption, onSelect }: QuestionCardProps) {
  const { lang } = useLang();

  const enQ = questionsEn.find((q) => q.id === question.id);
  const questionText = lang === 'en' && enQ ? enQ.text : question.text;
  const options = lang === 'en' && enQ
    ? question.options.map((opt, i) => ({ ...opt, text: enQ.options[i] }))
    : question.options;

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={question.id}
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -40 }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        className="w-full"
      >
        <div className="mb-4">
          <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold ${frameworkColor[question.framework]}`}>
            {frameworkLabel[question.framework][lang]}
          </span>
        </div>

        <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-8 leading-relaxed">
          <span className="text-indigo-500 mr-2">Q{questionNumber}.</span>
          {questionText}
        </h2>

        <div className="space-y-3">
          {options.map((option, index) => {
            const isSelected = selectedOption === index;
            return (
              <motion.button
                key={index}
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                onClick={() => onSelect(index)}
                className={`w-full text-left px-5 py-4 rounded-xl border-2 transition-all duration-200 flex items-start gap-4 ${
                  isSelected
                    ? 'border-indigo-500 bg-indigo-50 shadow-md'
                    : 'border-gray-200 bg-white hover:border-indigo-300 hover:bg-indigo-50/30'
                }`}
              >
                <span className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-colors ${isSelected ? 'bg-indigo-500 text-white' : 'bg-gray-100 text-gray-500'}`}>
                  {optionLabels[index]}
                </span>
                <span className={`text-base leading-relaxed pt-0.5 ${isSelected ? 'text-indigo-800 font-medium' : 'text-gray-700'}`}>
                  {option.text}
                </span>
              </motion.button>
            );
          })}
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
