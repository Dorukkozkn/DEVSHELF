import { Button } from "@/components/ui/button"

export function Header() {
  return (
    <header className="w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="flex items-center space-x-1">
            <span className="text-xl font-mono text-muted-foreground">{"<>"}</span>
            <span className="text-xl font-semibold text-foreground">DevShelf</span>
          </div>
        </div>

        <nav className="hidden md:flex items-center space-x-8">
          <a href="#" className="text-foreground hover:text-accent transition-colors">
            Projeler
          </a>
          <a href="#" className="text-foreground hover:text-accent transition-colors">
            Topluluk
          </a>
          <a href="#" className="text-foreground hover:text-accent transition-colors">
            Forum
          </a>
        </nav>

        <div className="flex items-center space-x-3">
          <Button variant="ghost" className="text-foreground hover:text-accent">
            Giriş Yap
          </Button>
          <Button className="bg-primary text-primary-foreground hover:bg-primary/90">Kayıt Ol</Button>
        </div>
      </div>
    </header>
  )
}
