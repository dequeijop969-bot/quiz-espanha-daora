import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import type { Question } from '@/lib/questions'
import { ArrowRight, Check, X } from 'lucide-react'

type QuestionCardProps = {
  question: Question
  selectedIndex: number | null
  isLast: boolean
  onSelect: (index: number) => void
  onNext: () => void
}

const letters = ['A', 'B', 'C', 'D']

export function QuestionCard({
  question,
  selectedIndex,
  isLast,
  onSelect,
  onNext,
}: QuestionCardProps) {
  const answered = selectedIndex !== null
  const isCorrect = answered && selectedIndex === question.correctIndex

  return (
    <article
      key={question.id}
      className="animate-quiz-enter w-full rounded-3xl border border-border/70 bg-card p-6 shadow-xl shadow-primary/5 sm:p-10"
    >
      <span className="inline-flex rounded-full bg-secondary px-3 py-1 text-xs font-semibold tracking-wide uppercase text-secondary-foreground">
        {question.category}
      </span>

      <h2 className="mt-5 font-serif text-2xl leading-snug font-bold text-balance text-foreground sm:text-3xl md:text-4xl">
        {question.question}
      </h2>

      <ul className="mt-8 grid gap-3 sm:grid-cols-2" aria-label="Opções de resposta">
        {question.options.map((option, index) => {
          const isSelected = selectedIndex === index
          const isAnswer = index === question.correctIndex
          const showCorrect = answered && isAnswer
          const showWrong = answered && isSelected && !isAnswer

          return (
            <li key={option + index}>
              <button
                type="button"
                disabled={answered}
                onClick={() => onSelect(index)}
                aria-pressed={isSelected}
                className={cn(
                  'group flex w-full items-center gap-4 rounded-2xl border-2 p-4 text-left transition-all duration-200',
                  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-card',
                  !answered &&
                    'border-border bg-background hover:-translate-y-0.5 hover:border-primary/60 hover:bg-primary/5 hover:shadow-md',
                  answered && !showCorrect && !showWrong && 'border-border/60 bg-muted/40 opacity-60',
                  showCorrect && 'border-success bg-success/10',
                  showWrong && 'border-destructive bg-destructive/10',
                )}
              >
                <span
                  className={cn(
                    'flex size-10 shrink-0 items-center justify-center rounded-xl font-serif text-lg font-bold transition-colors',
                    !answered && 'bg-secondary text-secondary-foreground group-hover:bg-primary group-hover:text-primary-foreground',
                    answered && !showCorrect && !showWrong && 'bg-muted text-muted-foreground',
                    showCorrect && 'bg-success text-success-foreground',
                    showWrong && 'bg-destructive text-primary-foreground',
                  )}
                >
                  {showCorrect ? (
                    <Check className="size-5" aria-hidden="true" />
                  ) : showWrong ? (
                    <X className="size-5" aria-hidden="true" />
                  ) : (
                    letters[index]
                  )}
                </span>
                <span className="text-base font-medium text-foreground">{option}</span>
              </button>
            </li>
          )
        })}
      </ul>

      <div
        className={cn(
          'mt-8 flex min-h-14 flex-col items-start justify-between gap-4 sm:flex-row sm:items-center',
          !answered && 'invisible',
        )}
        aria-live="polite"
      >
        <p
          className={cn(
            'text-base font-semibold',
            isCorrect ? 'text-success' : 'text-destructive',
          )}
        >
          {isCorrect ? 'Muito bem! Resposta correta.' : 'Quase! A resposta correta está destacada.'}
        </p>
        <Button
          onClick={onNext}
          size="lg"
          className="group h-12 rounded-full px-6 font-semibold shadow-md shadow-primary/20"
        >
          {isLast ? 'Ver resultado' : 'Próxima pergunta'}
          <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
        </Button>
      </div>
    </article>
  )
}
