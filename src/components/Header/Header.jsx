import Logo from "../../assets/logo.svg";
import HamburgerIcon from "./HamburgerIcon";
import { useEffect, useState } from "react";

const LINKS = [
  { name: "Features", path: "/" },
  { name: "Pricing", path: "/" },
  { name: "Resources", path: "/" },
];

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [windowSize, setWindowSize] = useState([
    window.innerWidth,
    window.innerHeight,
  ]);

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowSize([window.innerWidth, window.innerHeight]);
    };

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  const clickHandler = () => {
    setIsOpen(() => !isOpen);
  };

  return (
    <header>
      <nav className="bg-transparent w-full text-lg lg:text-base">
        <div className="flex flex-col lg:flex-row lg:justify-start gap-6 lg:gap-9 lg:items-center mx-auto px-6 lg:px-40 pt-10 lg:py-0">
          <a href="#" className="flex items-center">
            <img src={Logo} className="mr-3 h-6" alt="Shortly Logo" />
          </a>
          <HamburgerIcon
            classes="lg:hidden absolute right-4 top-7 cursor-pointer"
            onClick={clickHandler}
            isOpen={isOpen}
          />
          <div
            className={`absolute lg:static flex flex-col lg:flex-row lg:bg-transparent rounded-3xl lg:rounded-none lg:justify-between w-[90%] lg:w-full py-6 lg:py-2 bg-secondary-500 transition-all duration-500 ease-in-out ${
              isOpen && windowSize[0] < 1024
                ? "top-20 left-1/2 -translate-x-1/2 z-50"
                : "left-1/2 scale-0 top-[-100px] opacity-0 z-50"
            } ${windowSize[0] >= 1024 && "scale-100 opacity-100"}`}
          >
            <ul className="flex flex-col lg:flex-row lg:gap-5 items-center px-2">
              {LINKS.map((link) => (
                <li
                  key={link.name}
                  className="my-6 lg:my-0 font-bold text-neutralCustom-300 hover:text-neutralCustom-900"
                >
                  <a href={link.path}>{link.name}</a>
                </li>
              ))}
            </ul>
            <div className="flex flex-col lg:flex-row border-t-[1px] lg:border-none w-10/12 self-center border-secondary-300 justify-between lg:justify-end lg:gap-10 items-center">
              <a
                href="/"
                className="text-neutralCustom-300 hover:text-neutralCustom-900 font-bold my-4"
              >
                Login
              </a>
              <button className="bg-primary-500 px-7 py-3 lg:px-0 rounded-full w-full lg:w-28 font-bold text-white hover:bg-primary-200 my-4">
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
