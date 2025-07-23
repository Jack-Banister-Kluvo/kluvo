import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border/50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex flex-col">
              <h1 className="text-2xl font-bold text-primary tracking-wide">
                KLUVO
              </h1>
              <div className="h-0.5 w-full bg-gradient-primary"></div>
            </div>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-foreground hover:text-primary transition-colors">
              Features
            </a>
            <a href="#process" className="text-foreground hover:text-primary transition-colors">
              Process
            </a>
            <a href="#technology" className="text-foreground hover:text-primary transition-colors">
              Technology
            </a>
            <a href="#contact" className="text-foreground hover:text-primary transition-colors">
              Contact
            </a>
          </nav>
          
          <div className="flex items-center">
            <Button variant="default" size="sm" asChild>
              <a href="https://calendar.notion.so/meet/josephkennedy/3c2aq4oh1" target="_blank" rel="noopener noreferrer">
                Book a Call
              </a>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;