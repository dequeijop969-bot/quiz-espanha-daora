import { Button } from '@/components/ui/button'
import { ArrowRight, Clock, HelpCircle, Trophy } from 'lucide-react'

type StartScreenProps = {
  totalQuestions: number
  onStart: () => void
}

const highlights = [
  { icon: HelpCircle, label: 'Perguntas', value: '20' },
  { icon: Clock, label: 'Duração', value: '~5 min' },
  { icon: Trophy, label: 'Pontuação', value: 'Ao vivo' },
]

export function StartScreen({ totalQuestions, onStart }: StartScreenProps) {
  return (
    <section className="animate-quiz-enter flex w-full max-w-3xl flex-col items-center text-center">
      <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-accent/60 bg-accent/30 px-4 py-1.5 text-xs font-semibold tracking-[0.2em] uppercase text-accent-foreground">
        <span aria-hidden="true" className="size-1.5 rounded-full bg-primary" />
        Quiz interativo
      </span>

      <h1 className="font-serif text-5xl leading-[1.05] font-bold text-balance text-foreground sm:text-6xl md:text-7xl">
        O quanto você conhece a{' '}
        <span className="relative inline-block text-primary">
          Espanha
          <span
            aria-hidden="true"
            className="absolute inset-x-0 -bottom-1 h-3 rounded-full bg-accent/70 -z-10"
          />
        </span>
        ?
      </h1>

      <p className="mt-6 max-w-xl text-lg leading-relaxed text-pretty text-muted-foreground">
        Responda {totalQuestions} perguntas sobre geografia, história, cultura e
        gastronomia. Descubra a sua pontuação ao final e desafie os seus amigos.
      </p>

      <Button
        size="lg"
        onClick={onStart}
        className="group mt-10 h-14 rounded-full px-8 text-base font-semibold shadow-lg shadow-primary/25 transition-all hover:shadow-xl hover:shadow-primary/30"
      >
        Começar o quiz
        <ArrowRight className="size-5 transition-transform group-hover:translate-x-1" />
      </Button>

      <dl className="mt-14 grid w-full grid-cols-1 gap-4 sm:grid-cols-3">
        {highlights.map(({ icon: Icon, label, value }) => (
          <div
            key={label}
            className="flex items-center gap-4 rounded-2xl border border-border/70 bg-card/80 p-4 text-left shadow-sm backdrop-blur"
          >
            <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
              <Icon className="size-5" aria-hidden="true" />
            </span>
            <div>
              <dt className="text-xs font-medium tracking-wide uppercase text-muted-foreground">
                {label}
              </dt>
              <dd className="font-serif text-xl font-semibold text-foreground">{value}</dd>
            </div>
          </div>
        ))}
      </dl>
    </section>
  )
}
