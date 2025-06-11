import BlogSection from "../components/BlogSection";
import Footer from "../components/Footer";
import Navbar from "../components/nav";
import TeamSection from "../components/TeamSection";

function Landing() {
  return (
    <div>
      <Navbar />
      <TeamSection />
      <BlogSection />
      <Footer />
    </div>
  );
}

export default Landing;
