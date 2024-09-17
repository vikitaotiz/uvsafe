import ComingSoon from "@/components/ComingSoon";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Blog = () => {
  return (
    <>
      <Navbar />
      <main className="max-w-8xl m-auto">
        <div>
          <ComingSoon />
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Blog;