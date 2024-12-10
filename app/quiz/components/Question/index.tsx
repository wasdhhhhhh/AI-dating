'use client';

import { motion } from 'framer-motion';
import type { Question as QuestionType } from '../../data/questions';

interface QuestionProps {
  question: QuestionType;
  onAnswer: (answer: any) => void;
  current: number;
  total: number;
}

const transitions = {
  initial: { opacity: 0, x: 20 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -20 },
};

export default function Question({ question, onAnswer, current, total }: QuestionProps) {
  return (
    <motion.div
      className="question-container"
      variants={transitions}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <h2 className="text-2xl font-bold mb-8">
        {current}. {question.title}
      </h2>
      
      {question.description && (
        <p className="text-[var(--foreground-muted)] mb-6">{question.description}</p>
      )}
      
      <div className="space-y-4 w-full">
        {question.options.map((option) => (
          <button
            key={option.id}
            onClick={() => onAnswer(option.value)}
            className="option-button"
          >
            {option.text}
          </button>
        ))}
      </div>
    </motion.div>
  );
} 