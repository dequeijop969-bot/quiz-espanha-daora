import { Quiz } from '@/components/quiz/quiz'

export default function Page() {
  return (
    <div className="bg-spain-texture flex min-h-svh flex-col">
      <header className="mx-auto flex w-full max-w-5xl items-center justify-between px-6 py-6">
        <a href="/" className="flex items-center gap-3">
          <span
            aria-hidden="true"
            className="flex h-8 w-11 overflow-hidden rounded-md shadow-sm ring-1 ring-border"
          >
            <span className="flex-1 bg-primary" />
            <span className="flex-[2] bg-accent" />
            <span className="flex-1 bg-primary" />
          </span>
          <span className="font-serif text-lg font-bold tracking-tight text-foreground">
            Quiz España
          </span>
        </a>
        <span className="hidden text-sm font-medium text-muted-foreground sm:block">
          20 perguntas · Cultura, história e mais
        </span>
      </header>

      <main className="flex flex-1 items-center justify-center px-6 py-10 sm:py-16">
        <Quiz />
      </main>

      <footer className="mx-auto w-full max-w-5xl px-6 py-6 text-center text-xs text-muted-foreground">
        Feito com carinho para os amantes da Espanha.
      </footer>
    </div>
  )
}
