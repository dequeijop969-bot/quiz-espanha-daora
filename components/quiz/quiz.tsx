'use client'

import { useState } from 'react'
import { questions } from '@/lib/questions'
import { StartScreen } from './start-screen'
import { QuizProgress } from './quiz-progress'
import { QuestionCard } from './question-card'
import { ResultScreen } from './result-screen'

type Stage = 'start' | 'playing' | 'result'

export function Quiz() {
  const [stage, setStage] = useState<Stage>('start')
  const [currentIndex, setCurrentIndex] = useState(0)
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null)
  const [score, setScore] = useState(0)

  const total = questions.length
  const question = questions[currentIndex]
  const isLast = currentIndex === total - 1

  function start() {
    setStage('playing')
    setCurrentIndex(0)
    setSelectedIndex(null)
    setScore(0)
  }

  function select(index: number) {
    if (selectedIndex !== null) return
    setSelectedIndex(index)
    if (index === question.correctIndex) {
      setScore((s) => s + 1)
    }
  }

  function next() {
    if (isLast) {
      setStage('result')
      return
    }
    setCurrentIndex((i) => i + 1)
    setSelectedIndex(null)
  }

  if (stage === 'start') {
    return <StartScreen totalQuestions={total} onStart={start} />
  }

  if (stage === 'result') {
    return <ResultScreen score={score} total={total} onRestart={start} />
  }

  return (
    <div className="flex w-full max-w-3xl flex-col gap-8">
      <QuizProgress current={currentIndex + 1} total={total} score={score} />
      <QuestionCard
        question={question}
        selectedIndex={selectedIndex}
        isLast={isLast}
        onSelect={select}
        onNext={next}
      />
    </div>
  )
}
