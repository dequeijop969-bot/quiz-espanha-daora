import { Button } from '@/components/ui/button'
import { RotateCcw, Sparkles } from 'lucide-react'

type ResultScreenProps = {
  score: number
  total: number
  onRestart: () => void
}

function getFeedback(ratio: number) {
  if (ratio === 1) return { title: 'Perfeito!', text: 'Você é praticamente um espanhol de coração. Olé!' }
  if (ratio >= 0.75) return { title: 'Excelente!', text: 'Você conhece a Espanha melhor do que muitos viajantes.' }
  if (ratio >= 0.5) return { title: 'Muito bom!', text: 'Bom conhecimento. Uma viagem a Madri completaria o repertório.' }
  if (ratio >= 0.25) return { title: 'Continue assim!', text: 'Você já sabe o básico. Que tal tentar novamente?' }
  return { title: 'Um começo', text: 'A Espanha ainda guarda muitos segredos para você descobrir.' }
}

export function ResultScreen({ score, total, onRestart }: ResultScreenProps) {
  const ratio = score / total
  const percent = Math.round(ratio * 100)
  const feedback = getFeedback(ratio)

  const radius = 74
  const circumference = 2 * Math.PI * radius
  const dashOffset = circumference * (1 - ratio)

  return (
    <section className="animate-quiz-enter w-full max-w-2xl rounded-3xl border border-border/70 bg-card p-8 text-center shadow-xl shadow-primary/5 sm:p-12">
      <span className="inline-flex items-center gap-2 rounded-full bg-accent/40 px-4 py-1.5 text-xs font-semibold tracking-[0.2em] uppercase text-accent-foreground">
        <Sparkles className="size-3.5" aria-hidden="true" />
        Quiz concluído
      </span>

      <div className="relative mx-auto mt-8 flex size-48 items-center justify-center">
        <svg
          className="absolute inset-0 -rotate-90"
          viewBox="0 0 168 168"
          aria-hidden="true"
        >
          <circle
            cx="84"
            cy="84"
            r={radius}
            fill="none"
            strokeWidth="12"
            className="stroke-muted"
          />
          <circle
            cx="84"
            cy="84"
            r={radius}
            fill="none"
            strokeWidth="12"
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={dashOffset}
            className="stroke-primary transition-[stroke-dashoffset] duration-1000 ease-out"
          />
        </svg>
        <div>
          <p className="font-serif text-5xl font-bold text-foreground">{percent}%</p>
          <p className="mt-1 text-sm font-medium text-muted-foreground">
            {score} de {total} acertos
          </p>
        </div>
      </div>

      <h2 className="mt-8 font-serif text-4xl font-bold text-balance text-foreground sm:text-5xl">
        {feedback.title}
      </h2>
      <p className="mx-auto mt-3 max-w-md text-lg leading-relaxed text-pretty text-muted-foreground">
        {feedback.text}
      </p>

      <Button
        onClick={onRestart}
        size="lg"
        className="mt-10 h-14 rounded-full px-8 text-base font-semibold shadow-lg shadow-primary/25"
      >
        <RotateCcw className="size-5" aria-hidden="true" />
        Jogar novamente
      </Button>
    </section>
  )
}
