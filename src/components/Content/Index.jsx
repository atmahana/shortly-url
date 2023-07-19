import HeroSection from "./Hero";
import LinkShort from "./Links";

function MainContent() {
  return (
    <div className="px-6 lg:px-40 overflow-hidden">
      <HeroSection />
      <LinkShort />
    </div>
  );
}

export default MainContent;
