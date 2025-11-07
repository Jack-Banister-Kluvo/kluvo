import Header from "@/components/Header";
import AdsServices from "@/components/AdsServices";
import Footer from "@/components/Footer";

const AdsServicesPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-16">
        <AdsServices />
      </main>
      <Footer />
    </div>
  );
};

export default AdsServicesPage;
