import Link from "next/link"

export function Footer() {
  return (
    <footer className="w-full border-t-[3px] border-border bg-card text-card-foreground py-8 mt-10">
      <div className="container mx-auto max-w-screen-2xl px-4 sm:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center space-x-2">
          <span className="font-black text-xl tracking-tight uppercase text-white">C-Comic UI</span>
        </div>
        
        <p className="text-sm font-bold uppercase text-white/80 text-center md:text-left">
          Built with comic flair. Open source and ready to use.
        </p>

        <nav className="flex items-center gap-6">
          <Link
            href="#"
            className="text-sm font-bold uppercase text-white/80 transition-colors hover:text-white"
          >
            Home
          </Link>
          <Link
            href="/docs"
            className="text-sm font-bold uppercase text-white/80 transition-colors hover:text-white"
          >
            Docs
          </Link>
          <Link
            href="https://github.com/keneandita/c-comic-ui"
            target="_blank"
            rel="noreferrer"
            className="text-sm font-bold uppercase text-white/80 transition-colors hover:text-white"
          >
            GitHub
          </Link>
        </nav>
      </div>
    </footer>
  )
}
