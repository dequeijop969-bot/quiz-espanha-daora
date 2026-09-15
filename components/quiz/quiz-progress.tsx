type QuizProgressProps = {
  current: number
  total: number
  score: number
}

export function QuizProgress({ current, total, score }: QuizProgressProps) {
  const percent = Math.round((current / total) * 100)

  return (
    <div className="w-full">
      <div className="mb-3 flex items-end justify-between gap-4">
        <div>
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-muted-foreground">
            Pergunta
          </p>
          <p className="font-serif text-2xl font-bold text-foreground">
            {String(current).padStart(2, '0')}
            <span className="text-muted-foreground/60"> / {String(total).padStart(2, '0')}</span>
          </p>
        </div>
        <div className="text-right">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-muted-foreground">
            Pontos
          </p>
          <p className="font-serif text-2xl font-bold text-primary">{score}</p>
        </div>
      </div>

      <div
        role="progressbar"
        aria-valuemin={0}
        aria-valuemax={total}
        aria-valuenow={current}
        aria-label={`Progresso do quiz: ${current} de ${total}`}
        className="h-2.5 w-full overflow-hidden rounded-full bg-muted"
      >
        <div
          className="h-full rounded-full bg-gradient-to-r from-primary via-primary to-accent transition-[width] duration-500 ease-out"
          style={{ width: `${percent}%` }}
        />
      </div>
    </div>
  )
}
