import BlogSection from "../components/BlogSection";
import Footer from "../components/Footer";
import HeroSection from "../components/hero";
import Navbar from "../components/nav";
import TeamSection from "../components/TeamSection";

function Landing() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <TeamSection />
      <BlogSection />
      <Footer />
    </div>
  );
}

export default Landing;
