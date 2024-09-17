import Weather from "@/components/Weather";
import HeroSection from "@/components/HeroSection";
import Testimonials from "@/components/Testimonials";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Offers from "@/components/Offers";

const Home = () => {
  return (
    <>
      <Navbar />
      <main className="m-auto">
        <HeroSection />
        <Weather />
        <Offers />
        <Testimonials />
      </main>
      <Footer />
    </>
  );
};

export default Home;
