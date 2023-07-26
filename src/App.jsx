import HeroSection from "./components/Hero";
import MainContent from "./components/Content/Index";
import Footer from "./components/Footer/Index";
import Header from "./components/Header/Header";
import Attribution from "./components/Attribution";

export default function App() {
  return (
    <>
      <Header />
      <HeroSection />
      <MainContent />
      <Footer />
      <Attribution/>
    </>
  );
}
