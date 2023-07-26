import Logo from "../../assets/logo-white.svg";
import Facebook from "../Icons/Facebook";
import Instagram from "../Icons/Instagram";
import Twitter from "../Icons/Twitter";
import Pinterest from "../Icons/Pinterest";

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
    icon: <Facebook />,
  },
  {
    name: "Twitter",
    icon: <Twitter />,
  },
  {
    name: "Pinterest",
    icon: <Pinterest />,
  },
  {
    name: "Instagram",
    icon: <Instagram />,
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
        <div className="w-full grid place-content-center lg:place-content-start">
          <img src={Logo} alt="Shortly Logo" width="121" height="33"/>
        </div>
        <div className="grid gap-[54px] lg:grid-flow-col lg:gap-24">
          <ul className="grid gap-8 lg:gap-20 lg:grid-flow-col lg:place-self-end">
            {FOOTER_CONTENTS.map((content) => (
              <li
                key={content.title}
                className="grid gap-8 md:place-content-start"
              >
                <span className="text-white font-bold">{content.title}</span>
                <div className="grid gap-5">
                  {content.links.map((link) => (
                    <a key={link} href="/" className="text-neutralCustom-200 hover:text-primary-500">
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
                <li key={social.name}>
                  <a href="/" name={social.name}>
                    <span className="sr-only">{social.name} links</span>
                    {social.icon}
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
