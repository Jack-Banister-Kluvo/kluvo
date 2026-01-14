import { FileDown, ArrowLeft, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useIsMobile } from "@/hooks/use-mobile";

const WhyMoreLeadsWrongFix = () => {
  const calendarLink = "https://calendar.app.google/vaWE3nyxS6UwYqtc6";
  const pdfPath = "/downloads/Why_More_Leads_Wrong_Fix.pdf";
  const isMobile = useIsMobile();
  
  // Full URL for Google Docs viewer
  const fullPdfUrl = `${window.location.origin}${pdfPath}`;
  const googleDocsUrl = `https://docs.google.com/viewer?url=${encodeURIComponent(fullPdfUrl)}&embedded=true`;

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link 
            to="/" 
            className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            <span className="text-sm">Back to Kluvo</span>
          </Link>
          <div className="flex items-center gap-3">
            <a href={pdfPath} download>
              <Button variant="outline" size="sm" className="gap-2">
                <FileDown className="h-4 w-4" />
                <span className="hidden sm:inline">Download PDF</span>
                <span className="sm:hidden">PDF</span>
              </Button>
            </a>
            <Button
              size="sm"
              onClick={() => window.open(calendarLink, '_blank')}
              className="gap-2"
            >
              <Calendar className="h-4 w-4" />
              <span className="hidden sm:inline">Book a Call</span>
              <span className="sm:hidden">Book</span>
            </Button>
          </div>
        </div>
      </header>

      {/* PDF Embed */}
      <main className="flex-1">
        <iframe
          src={isMobile ? googleDocsUrl : pdfPath}
          className="w-full h-[calc(100vh-65px)]"
          title="Why More Leads Is the Wrong Fix for a Broken Sales Process - Kluvo Research"
          allow="autoplay"
        />
      </main>
    </div>
  );
};

export default WhyMoreLeadsWrongFix;
