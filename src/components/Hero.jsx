import Illustration from "../assets/illustration-working.svg";

function HeroSection() {
  return (
    <div className="px-6 lg:px-40 pb-[88px] lg:pb-0 overflow-hidden">
      <div className="grid items-end lg:grid-flow-col lg:items-center text-center lg:text-start h-80vh lg:h-60vh relative">
        <img
          src={Illustration}
          className="absolute lg:static z-20 lg:order-1 scale-150 top-20 translate-x-22 lg:translate-x-36"
        />
        <div className="flex flex-col justify-center items-center lg:items-start">
          <h1 className="text-[2.625rem] lg:text-[5rem] font-bold tracking-[-20.5%] text-neutralCustom-900 m-0 mb-7 lg:mb-3">
            More than just shorter links
          </h1>
          <p className="text-neutralCustom-300 text-[19px] lg:text-[22px] mb-7 leading-relaxed lg:pr-40">
            Build your brand’s recognition and get detailed insights on how your
            links are performing.
          </p>
          <button className="w-1/2 lg:w-[12.25rem]  bg-primary-500 hover:bg-primary-200 py-3 px-5 rounded-full font-bold text-white">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
