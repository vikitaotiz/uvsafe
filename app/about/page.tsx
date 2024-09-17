import Team from "@/components/Team";
import Advert from "@/components/Advert";
import Contact from "@/components/Contact";
import History from "@/components/History";
import AboutUs from "@/components/AboutUs";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const About = () => {
  return (
    <>
    <Navbar />
    <main className="mx-auto">
      <AboutUs />
      {/* <History /> */}
      {/* <Advert /> */}
      <Team />
      <Contact />
    </main>
    <Footer />
    </>
  );
};

export default About;
