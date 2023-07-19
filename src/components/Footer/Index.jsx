import Logo from "../../assets/logo-white.svg";
import Facebook from "../../assets/icon/icon-facebook.svg";
import Twitter from "../../assets/icon/icon-twitter.svg";
import Pinterest from "../../assets/icon/icon-pinterest.svg";
import Instagram from "../../assets/icon/icon-instagram.svg";

const FOOTER_CONTENTS = [
  {
    title: "Features",
    links: ["Link Shortening", "Branded Links", "Analytics"],
  },
  {
    title: "Resources",
    links: ["Blog", "Developers", "Suppport"],
  },
  {
    title: "Company",
    links: ["About", "Our Team", "Careers", "Contact"],
  },
];

const FOOTER_SOCIALS = [
  {
    name: "Facebook",
    icon: Facebook,
  },
  {
    name: "Twitter",
    icon: Twitter,
  },
  {
    name: "Pinterest",
    icon: Pinterest,
  },
  {
    name: "Instagram",
    icon: Instagram,
  },
];

function BoostSection() {
  return (
    <div className="bg-secondary-500 w-full grid gap-4 place-content-center text-center py-[90px] bg-boost-mobile md:bg-boost-desktop bg-no-repeat bg-cover lg:h-[250px]">
      <h2 className="text-white font-bold text-[28px] lg:text-[40px]">
        Boost your links today
      </h2>
      <button className="bg-primary-500 m-auto hover:bg-primary-200 w-[200px] text-white font-bold h-14 rounded-full text-xl">
        Get Started
      </button>
    </div>
  );
}

function Footer() {
  return (
    <div>
      <BoostSection />
      <footer className="w-full h-full bg-neutralCustom-700 py-14 grid md:grid-flow-col place-content-center md:place-content-start md:justify-between md:px-[165px] text-center lg:text-start gap-14">
        <img src={Logo} alt="Shortly Logo" />
        <div className="grid gap-[54px] lg:grid-flow-col lg:gap-24">
          <ul className="grid gap-8 lg:gap-20 lg:grid-flow-col lg:place-self-end">
            {FOOTER_CONTENTS.map((content) => (
              <li key={content.title} className="grid gap-8">
                <h4 className="text-white font-bold">{content.title}</h4>
                <div className="grid gap-5">
                  {content.links.map((link) => (
                    <a href="/" className="text-neutralCustom-200">
                      {link}
                    </a>
                  ))}
                </div>
              </li>
            ))}
          </ul>
          <ul className="flex justify-center gap-[18px] lg:gap-6">
            {FOOTER_SOCIALS.map((social) => {
              return (
                <li>
                  <a href="/" name={social.name}>
                    <span className="sr-only">{social.name} links</span>
                    <img aria-label={social.name} src={social.icon} />
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
