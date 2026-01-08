import { FileDown, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const OutboundParadox = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 text-foreground/70 hover:text-foreground transition-colors">
            <ArrowLeft className="h-4 w-4" />
            <span className="text-sm">Back to Kluvo</span>
          </Link>
          <a href="/downloads/Outbound_Paradox_Kluvo_Research.pdf" download>
            <Button variant="outline" size="sm" className="gap-2">
              <FileDown className="h-4 w-4" />
              Download PDF
            </Button>
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="pt-32 pb-16 px-6">
        <div className="container mx-auto max-w-3xl text-center">
          <p className="text-primary font-medium mb-4">Kluvo Research</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
            The Outbound Paradox
          </h1>
          <p className="text-xl md:text-2xl text-foreground/70 mb-8">
            Why More Activity Is Yielding Less Pipeline — and How to Fix It
          </p>
          <p className="text-lg text-foreground/60">
            A Revenue Leader's Guide to Intelligent Growth
          </p>
        </div>
      </section>

      {/* Content */}
      <article className="pb-24 px-6">
        <div className="container mx-auto max-w-3xl prose prose-lg dark:prose-invert prose-headings:text-foreground prose-p:text-foreground/80 prose-li:text-foreground/80 prose-strong:text-foreground">
          
          <section className="mb-16">
            <h2>The Age of Inefficient Outreach</h2>
            <p>
              A crisis is quietly unfolding inside B2B sales organisations. Revenue leaders are investing more than ever in sophisticated tools and expanding sales teams, yet returns are diminishing at an alarming rate. The data paints a stark picture:
            </p>
            <ul>
              <li>Sales Development Representatives now spend just <strong>28% of their time actually selling</strong>, with the remainder consumed by manual administration and fragmented systems.</li>
              <li>Cold email reply rates have fallen to <strong>1–5%</strong>.</li>
              <li>Cold calling success rates have dropped to <strong>2.3%</strong>.</li>
            </ul>
            <p>
              Despite unprecedented activity and technology, pipeline growth is stalling. This is the outbound paradox. The old playbook of brute-force volume is failing — leading to frustrated leadership, rising acquisition costs, and widespread sales burnout. If effort is not the problem, the system is.
            </p>
          </section>

          <section className="mb-16">
            <h2>The Anatomy of Failure</h2>
            <p>
              When outbound fails, teams often blame copy, tools, or individual performance. These explanations are convenient — and wrong. Outbound fails not because of bad components, but because the underlying system is fundamentally broken. Failure lives in disconnected systems and broken handoffs, not individual campaigns.
            </p>
            <p>
              The most damaging flaw is a misunderstanding of buyer awareness:
            </p>
            <ul>
              <li><strong>Inbound prospects</strong> are typically problem-aware, already seeking solutions.</li>
              <li><strong>Outbound prospects</strong> are often problem-unaware, with no recognised need.</li>
            </ul>
            <p>
              Most outbound messaging assumes awareness that does not exist. As a result, outreach dies on arrival — failing to educate, reframe, or spark curiosity.
            </p>
          </section>

          <section className="mb-16">
            <h2>The Root of the Rot</h2>
            <p>
              Modern outbound failures are the result of a decade-long misinterpretation of the Predictable Revenue model. What began as a framework for structured, relationship-driven conversations was reduced to a single metric: booked meetings.
            </p>
            <p>This shift reshaped behaviour across the industry:</p>
            <ul>
              <li>Reps optimised for calendar fills, not conversations.</li>
              <li>Tools prioritised automation over relevance.</li>
              <li>Leadership measured volume instead of insight.</li>
            </ul>
            <p>
              The result has been a widespread erosion of buyer trust — a landscape stripped of credibility by relentless, low-value outreach.
            </p>
          </section>

          <section className="mb-16">
            <h2>The Five Fatal Flaws of Modern Outbound</h2>
            
            <h3>1. The Relevance Deficit</h3>
            <p>
              Most outbound is forgettable. Only 5% of sales emails are meaningfully personalised. Generic outreach not only fails — it actively damages your addressable market.
            </p>

            <h3>2. The Handoff Black Hole</h3>
            <p>
              Leads are routinely lost between marketing and sales due to misalignment, fragmented data, and the absence of shared qualification criteria.
            </p>

            <h3>3. The Velocity Killer</h3>
            <p>
              An obsession with a 90-day buying window causes teams to discard valuable future opportunities, forfeiting long-term revenue.
            </p>

            <h3>4. The Consistency Collapse</h3>
            <p>
              Message-market fit takes time. It can require 18–20 rounds of testing — yet most teams quit long before optimisation occurs.
            </p>

            <h3>5. The Leadership Void</h3>
            <p>
              Weak coaching leads to weak execution. When reps lack confidence, clarity, and objection-handling skills, performance suffers regardless of effort.
            </p>
          </section>

          <section className="mb-16">
            <h2>The Kluvo Philosophy: Relevance Over Redundancy</h2>
            <p>
              Fixing outbound requires a fundamental shift in mindset — from a numbers game to a relevance game.
            </p>
            <ul>
              <li><strong>Outbound as Infrastructure:</strong> Build durable systems, not one-off campaigns.</li>
              <li><strong>Buyer-Centric Design:</strong> Define the experience you want buyers to remember.</li>
              <li><strong>Insight Before Pitch:</strong> Lead conversations with education, not transactions.</li>
              <li><strong>Market Validation Metrics:</strong> Measure learning, not just meetings.</li>
            </ul>
          </section>

          <section className="mb-16">
            <h2>The Modern Outbound Engine</h2>
            <p>
              High-performing teams build predictable pipeline by executing across four pillars:
            </p>
            <ul>
              <li><strong>Intelligence:</strong> Trigger-based targeting using funding events, hiring signals, and technology changes — amplified by AI-driven research and enrichment.</li>
              <li><strong>Speed and Alignment:</strong> Real-time lead routing and immediate engagement. Speed-to-lead is treated as a revenue KPI.</li>
              <li><strong>Long-Term Nurture:</strong> Structured systems to nurture future buyers without clogging the active pipeline.</li>
              <li><strong>Multi-Channel Precision:</strong> Coordinated outreach across email, phone, and LinkedIn — executed with persistence and discipline. Modern engagement requires 6–8 touchpoints.</li>
            </ul>
          </section>

          <section className="mb-16">
            <h2>Conclusion: The Choice Is Yours</h2>
            <p>
              Outbound sales is not dead — but bad outbound is. The choice for revenue leaders is clear: continue layering activity onto broken systems, or build an intelligent outbound engine that earns attention through relevance, insight, and respect.
            </p>
            <p className="text-xl font-semibold text-primary mt-8">
              Kluvo builds the foundation beneath your revenue.
            </p>
          </section>

        </div>
      </article>

      {/* CTA */}
      <section className="py-16 px-6 bg-muted/50 border-t border-border">
        <div className="container mx-auto max-w-3xl text-center">
          <h3 className="text-2xl font-bold text-foreground mb-4">
            Ready to fix your outbound?
          </h3>
          <p className="text-foreground/70 mb-8">
            Let's build an intelligent outbound engine for your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/downloads/Outbound_Paradox_Kluvo_Research.pdf" download>
              <Button variant="outline" size="lg" className="gap-2">
                <FileDown className="h-4 w-4" />
                Download Full PDF
              </Button>
            </a>
            <Button 
              size="lg" 
              onClick={() => window.open('https://calendar.app.google/vaWE3nyxS6UwYqtc6', '_blank')}
            >
              Book a Strategy Call
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-border">
        <div className="container mx-auto max-w-3xl text-center text-sm text-foreground/50">
          © {new Date().getFullYear()} Kluvo. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default OutboundParadox;
