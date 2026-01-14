import { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "react-pdf/dist/esm/Page/TextLayer.css";

// Set up the worker
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

interface MobilePdfViewerProps {
  pdfPath: string;
  title: string;
}

const MobilePdfViewer = ({ pdfPath, title }: MobilePdfViewerProps) => {
  const [numPages, setNumPages] = useState<number>(0);
  const [pageNumber, setPageNumber] = useState<number>(1);
  const [pageWidth, setPageWidth] = useState<number>(window.innerWidth - 32);

  const onDocumentLoadSuccess = ({ numPages }: { numPages: number }) => {
    setNumPages(numPages);
  };

  const goToPrevPage = () => {
    setPageNumber((prev) => Math.max(prev - 1, 1));
  };

  const goToNextPage = () => {
    setPageNumber((prev) => Math.min(prev + 1, numPages));
  };

  return (
    <div className="flex flex-col h-full bg-muted/30">
      {/* Navigation */}
      <div className="sticky top-0 z-10 flex items-center justify-between px-4 py-3 bg-background border-b border-border">
        <Button
          variant="outline"
          size="sm"
          onClick={goToPrevPage}
          disabled={pageNumber <= 1}
          className="gap-1"
        >
          <ChevronLeft className="h-4 w-4" />
          Prev
        </Button>
        <span className="text-sm text-muted-foreground">
          Page {pageNumber} of {numPages}
        </span>
        <Button
          variant="outline"
          size="sm"
          onClick={goToNextPage}
          disabled={pageNumber >= numPages}
          className="gap-1"
        >
          Next
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>

      {/* PDF Content */}
      <div className="flex-1 overflow-auto flex justify-center p-4">
        <Document
          file={pdfPath}
          onLoadSuccess={onDocumentLoadSuccess}
          loading={
            <div className="flex items-center justify-center h-64">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
            </div>
          }
          error={
            <div className="text-center p-8 text-muted-foreground">
              <p>Failed to load PDF.</p>
              <a 
                href={pdfPath} 
                download 
                className="text-primary underline mt-2 inline-block"
              >
                Download instead
              </a>
            </div>
          }
        >
          <Page
            pageNumber={pageNumber}
            width={pageWidth}
            renderTextLayer={true}
            renderAnnotationLayer={true}
          />
        </Document>
      </div>
    </div>
  );
};

export default MobilePdfViewer;
