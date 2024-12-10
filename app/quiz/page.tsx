'use client';

import { useState } from 'react';
import Question from '@/app/quiz/components/Question';
import Progress from '@/app/quiz/components/Progress';
import { questions } from '@/app/quiz/data/questions';
import type { Question as QuestionType } from '@/app/quiz/data/questions';

export default function QuizPage() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<string, any>>({});

  const handleAnswer = (answer: any) => {
    setAnswers(prev => ({
      ...prev,
      [questions[currentQuestion].id]: answer
    }));
    
    // 自动进入下一题
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(prev => prev + 1);
    }
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(prev => prev + 1);
    }
  };

  const handlePrev = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(prev => prev - 1);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Progress 
        current={currentQuestion + 1} 
        total={questions.length}
        phase={{
          name: '性格测评',
          color: 'var(--primary)'
        }}
      />
      
      <main className="flex-1 container mx-auto px-4 py-8">
        <Question
          key={currentQuestion}
          question={questions[currentQuestion]}
          onAnswer={handleAnswer}
          current={currentQuestion + 1}
          total={questions.length}
        />

        <div className="fixed bottom-0 left-0 right-0 p-4 flex justify-between bg-background/80 backdrop-blur-sm">
          <button
            onClick={handlePrev}
            disabled={currentQuestion === 0}
            className="nav-button"
          >
            上一题
          </button>
          <button
            onClick={handleNext}
            disabled={currentQuestion === questions.length - 1}
            className="nav-button"
          >
            下一题
          </button>
        </div>
      </main>
    </div>
  );
} 