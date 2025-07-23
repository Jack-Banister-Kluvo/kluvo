import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Process from "@/components/Process";
import Technology from "@/components/Technology";
import Pricing from "@/components/Pricing";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <section id="features">
        <Features />
      </section>
      <section id="process">
        <Process />
      </section>
      <section id="technology">
        <Technology />
      </section>
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
