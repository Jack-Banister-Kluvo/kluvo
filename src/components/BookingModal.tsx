import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar } from "lucide-react";
import LeadQualificationForm from "./LeadQualificationForm";

interface BookingModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

interface LeadData {
  companyName: string;
  companySize: string;
  industry: string;
  currentChallenges: string;
  monthlyVolume: string;
  budget: string;
  timeline: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  specificGoals: string;
}

const BookingModal = ({ open, onOpenChange }: BookingModalProps) => {
  const [step, setStep] = useState<'form' | 'calendar'>('form');
  const [leadData, setLeadData] = useState<LeadData | null>(null);

  const handleFormSubmit = (data: LeadData) => {
    setLeadData(data);
    setStep('calendar');
  };

  const handleBack = () => {
    setStep('form');
  };

  const handleClose = () => {
    setStep('form');
    setLeadData(null);
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <div className="flex items-center gap-2">
            {step === 'calendar' && (
              <Button variant="ghost" size="sm" onClick={handleBack}>
                <ArrowLeft className="h-4 w-4" />
              </Button>
            )}
            <div>
              <DialogTitle className="flex items-center gap-2">
                <Calendar className="h-5 w-5" />
                {step === 'form' ? 'Book Your Strategy Call' : 'Select Your Time'}
              </DialogTitle>
              <DialogDescription>
                {step === 'form' 
                  ? 'Tell us about your outbound sales needs so we can prepare for our call'
                  : 'Choose a convenient time for your personalized consultation'
                }
              </DialogDescription>
            </div>
          </div>
        </DialogHeader>

        {step === 'form' ? (
          <LeadQualificationForm onSubmit={handleFormSubmit} />
        ) : (
          <div className="space-y-4">
            <div className="bg-muted/30 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">What we'll discuss:</h3>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Your current outbound sales challenges</li>
                <li>• How our managed service can help {leadData?.companyName}</li>
                <li>• Custom strategy for your {leadData?.industry} industry</li>
                <li>• Timeline and implementation plan</li>
              </ul>
            </div>
            
            <div className="w-full h-[600px] border rounded-lg overflow-hidden">
              <iframe
                src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ0P4kKFLRe7ZCK_qF7LZvBOG5XAZL2v0dYs6fY5rQt5CZMmm-c8GKVUYjEy9XB4nJ2B_qQB6gWs?gv=true"
                width="100%"
                height="100%"
                frameBorder="0"
                className="pointer-events-auto"
                title="Book a consultation call"
              />
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default BookingModal;