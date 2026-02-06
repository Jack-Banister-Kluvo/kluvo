import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import AdsServicesPage from "./pages/AdsServices";
import OutboundParadox from "./pages/OutboundParadox";
import HiddenCostToHiring from "./pages/HiddenCostToHiring";
import WhyMoreLeadsWrongFix from "./pages/WhyMoreLeadsWrongFix";
import SpeedToConversation from "./pages/SpeedToConversation";
import BusinessDevelopmentManager from "./pages/BusinessDevelopmentManager";
import StrategicFusionAIEmpathy from "./pages/StrategicFusionAIEmpathy";
import WhatModernBuyersNotice from "./pages/WhatModernBuyersNotice";
import SalesTeamsFollowUpProblem from "./pages/SalesTeamsFollowUpProblem";
import InvisibleTaxSalesPipelines from "./pages/InvisibleTaxSalesPipelines";
import ExecutionImperative from "./pages/ExecutionImperative";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/ads-services" element={<AdsServicesPage />} />
          <Route path="/outbound-paradox" element={<OutboundParadox />} />
          <Route path="/hidden-cost-to-hiring" element={<HiddenCostToHiring />} />
          <Route path="/why-more-leads-wrong-fix" element={<WhyMoreLeadsWrongFix />} />
          <Route path="/speed-to-conversation" element={<SpeedToConversation />} />
          <Route path="/business-development-manager" element={<BusinessDevelopmentManager />} />
          <Route path="/strategic-fusion-ai-empathy" element={<StrategicFusionAIEmpathy />} />
          <Route path="/what-modern-buyers-notice" element={<WhatModernBuyersNotice />} />
          <Route path="/sales-teams-follow-up-problem" element={<SalesTeamsFollowUpProblem />} />
          <Route path="/invisible-tax-sales-pipelines" element={<InvisibleTaxSalesPipelines />} />
          <Route path="/execution-imperative" element={<ExecutionImperative />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
