import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border/50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <img 
              src="/lovable-uploads/879c65d7-50b8-4472-8daf-a302dbc68f6f.png" 
              alt="Kluvo Logo" 
              className="h-10 w-10 object-contain brightness-0 invert-0"
              style={{
                filter: 'brightness(0) saturate(100%) invert(19%) sepia(74%) saturate(1349%) hue-rotate(137deg) brightness(95%) contrast(95%)'
              }}
            />
            <span className="ml-3 text-xl font-bold text-primary">KLUVO</span>
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