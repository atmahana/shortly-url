import HeroSection from "../Hero";
import LinkShort from "./Links";
import StatNFeatures from "./StatNFeatures";

function MainContent() {
  return (
    <div className="px-6 lg:px-40 pb-[75px] lg:pb-0 bg-secondary-200">
      <LinkShort />
      <StatNFeatures />
    </div>
  );
}

export default MainContent;
