import { FileDown, ArrowLeft, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const HiddenCostToHiring = () => {
  const calendarLink = "https://calendar.app.google/vaWE3nyxS6UwYqtc6";
  const pdfPath = "/downloads/Hidden_Cost_To_Hiring.pdf";

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
                Download PDF
              </Button>
            </a>
            <Button
              size="sm"
              onClick={() => window.open(calendarLink, '_blank')}
              className="gap-2"
            >
              <Calendar className="h-4 w-4" />
              Book a Call
            </Button>
          </div>
        </div>
      </header>

      {/* PDF Embed */}
      <main className="flex-1">
        <iframe
          src={pdfPath}
          className="w-full h-[calc(100vh-65px)]"
          title="The Hidden Cost to Hiring - Kluvo Research"
        />
      </main>
    </div>
  );
};

export default HiddenCostToHiring;
