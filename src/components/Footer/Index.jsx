function BoostSection() {
  return (
    <div className="bg-secondary-500 w-full grid gap-4 place-content-center text-center py-[90px] bg-boost-mobile md:bg-boost-desktop bg-no-repeat bg-cover lg:h-[250px]">
      <h2 className="text-white font-bold text-[28px] lg:text-[40px]">Boost your links today</h2>
      <button className="bg-primary-500 m-auto hover:bg-primary-200 w-[200px] text-white font-bold h-14 rounded-full text-xl">Get Started</button>
    </div>
  );
}

function Footer() {
  return (
    <footer>
      <BoostSection />
    </footer>
  );
}

export default Footer;
