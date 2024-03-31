import { useState } from "react";

export default function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const navData = ["Dashboard", "Invest", "Portfolio", "Refer & Earn"];
  const [active, setActive] = useState("Dashboard");
  return (
    <div className="flex border border-red-600  py-4 gap-20  justify-between border-b items-center border-gray-400   w-[90%]  mx-auto    max-w-[1008px] border max-h-20">
      <img src="/images/homeAltcaseLogo.svg" alt="altcase logo" />
      <nav className="flex-1">
        <section className="MOBILE-MENU flex lg:hidden">
          <div
            className="HAMBURGER-ICON space-y-2"
            onClick={() => setIsNavOpen((prev) => !prev)}
          >
            <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
            <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
            <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
          </div>

          <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}>
            <div
              className="absolute top-0 right-0 px-8 py-8"
              onClick={() => setIsNavOpen(false)}
            >
              <svg
                className="h-8 w-8 text-gray-600"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </div>
            <ul className="flex flex-col items-center justify-between min-h-[250px]">
              <li className="border-b border-gray-400 my-8 uppercase">
                <a href="/about">About</a>
              </li>
              <li className="border-b border-gray-400 my-8 uppercase">
                <a href="/portfolio">Portfolio</a>
              </li>
              <li className="border-b border-gray-400 my-8 uppercase">
                <a href="/contact">Contact</a>
              </li>
            </ul>
          </div>
        </section>

        <ul className="hidden lg:flex font-semibold text-[16px] leading-7 tracking-[-0.3] gap-10 items-center">
          {navData.map((data, index) => {
            return (
              <li
                className={`cursor-pointer ${
                  active === data && "text-[#21B546]"
                }`}
                key={index}
                onClick={() => setActive(data)}
              >
                {data}
              </li>
            );
          })}{" "}
        </ul>
      </nav>
      <button className="hidden lg:block">32435</button>
      <style>{`
      .hideMenuNav {
        display: none;
      }
      .showMenuNav {
        display: block;
        position: absolute;
        width: 100%;
        height: 100vh;
        top: 0;
        left: 0;
        background: white;
        z-index: 10;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
      }
    `}</style>
    </div>
  );
}
