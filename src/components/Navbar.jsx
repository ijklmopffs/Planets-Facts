import { Link } from "react-router-dom";
import hamburger from "../../assets/icon-hamburger.svg";
import chevron from "../../assets/icon-chevron.svg";
import mercury from "../../assets/planet-mercury.svg";
import venus from "../../assets/planet-venus.svg";
import earth from "../../assets/planet-earth.svg";
import mars from "../../assets/planet-mars.svg";
import jupiter from "../../assets/planet-jupiter.svg";
import saturn from "../../assets/planet-saturn.svg";
import uranus from "../../assets/planet-uranus.svg";
import neptune from "../../assets/planet-neptune.svg";
import { useState } from "react";

export default function Navbar() {
  const [nav, setNav] = useState(false);
  const handleClick = () => {
    setNav(!nav);
  };

  return (
    <>
      <nav
        className="flex md:flex-col lg:flex-row gap-10 lg:gap-0 items-center 
      justify-between text-white uppercase p-4"
      >
        <h1 className="font-medium text-3xl">the planets</h1>
        <div
          className="hidden md:flex  
         gap-20 font-bold text-xs "
        >
          <Link to="/mercury" className="after-underline">
            Mercury
          </Link>
          <Link to="/venus" className="after-underline">
            venus
          </Link>
          <Link className="after-underline" to="/">
            earth
          </Link>
          <Link className="after-underline" to="/mars">
            mars
          </Link>
          <Link className="after-underline" to="/jupiter">
            jupiter
          </Link>
          <Link className="after-underline" to="/saturn">
            saturn
          </Link>
          <Link className="after-underline" to="/uranus">
            uranus
          </Link>
          <Link className="after-underline" to="/neptune">
            neptune
          </Link>
        </div>
        <div
          className={
            nav
              ? "md:hidden text-sm font-spartan font-bold absolute bg-[#070724] w-screen p-8 h-screen z-10 top-[4.5rem] left-0 tracking-widest"
              : "md:hidden text-sm font-spartan font-bold absolute bg-[#070724] w-screen p-8 h-screen z-10 top-[4.5rem] left-[-100%] tracking-widest"
          }
        >
          <Link to="/mercury">
            <div className="flex items-center justify-between my-10">
              <div className="flex items-center gap-8">
                <img src={mercury} alt="" className="w-8 h-8" />
                <p>mercury</p>
              </div>
              <div>
                <img src={chevron} alt="" className="w-4 h-4" />
              </div>
            </div>
            <div className="w-full bg-[#979797] h-[1px] mt-6"></div>
          </Link>

          <Link to="/venus">
            <div className="flex items-center justify-between my-10">
              <div className="flex items-center gap-8">
                <img src={venus} alt="" className="w-8 h-8" />
                <p>venus</p>
              </div>
              <div>
                <img src={chevron} alt="" className="w-4 h-4" />
              </div>
            </div>
            <div className="w-full bg-[#979797] h-[1px] mt-6"></div>
          </Link>

          <Link to="/">
            <div className="flex items-center justify-between my-10">
              <div className="flex items-center gap-8">
                <img src={earth} alt="" className="w-8 h-8" />
                <p>earth</p>
              </div>
              <div>
                <img src={chevron} alt="" className="w-4 h-4" />
              </div>
            </div>
            <div className="w-full bg-[#979797] h-[1px] mt-6"></div>
          </Link>

          <Link to="/mars">
            <div className="flex items-center justify-between my-10">
              <div className="flex items-center gap-8">
                <img src={mars} alt="" className="w-8 h-8" />
                <p>mars</p>
              </div>
              <div>
                <img src={chevron} alt="" className="w-4 h-4" />
              </div>
            </div>
            <div className="w-full bg-[#979797] h-[1px] mt-6"></div>
          </Link>

          <Link to="/jupiter">
            <div className="flex items-center justify-between my-10">
              <div className="flex items-center gap-8">
                <img src={jupiter} alt="" className="w-8 h-8" />
                <p>jupiter</p>
              </div>
              <div>
                <img src={chevron} alt="" className="w-4 h-4" />
              </div>
            </div>
            <div className="w-full bg-[#979797] h-[1px] mt-6"></div>
          </Link>

          <Link to="/saturn">
            <div className="flex items-center justify-between my-10">
              <div className="flex items-center gap-8">
                <img src={saturn} alt="" className="w-8 h-8" />
                <p>saturn</p>
              </div>
              <div>
                <img src={chevron} alt="" className="w-4 h-4" />
              </div>
            </div>
            <div className="w-full bg-[#979797] h-[1px] mt-6"></div>
          </Link>

          <Link to="/uranus">
            <div className="flex items-center justify-between my-10">
              <div className="flex items-center gap-8">
                <img src={uranus} alt="" className="w-8 h-8" />
                <p>uranus</p>
              </div>
              <div>
                <img src={chevron} alt="" className="w-4 h-4" />
              </div>
            </div>
            <div className="w-full bg-[#979797] h-[1px] mt-6"></div>
          </Link>

          <Link to="/neptune">
            <div className="flex items-center justify-between my-10">
              <div className="flex items-center gap-8">
                <img src={neptune} alt="" className="w-8 h-8" />
                <p>neptune</p>
              </div>
              <div>
                <img src={chevron} alt="" className="w-4 h-4" />
              </div>
            </div>
            <div className="w-full bg-[#979797] h-[1px] mt-6"></div>
          </Link>
        </div>
        <div className="md:hidden" onClick={handleClick}>
          <img src={hamburger} alt="" />
        </div>
      </nav>

      <div className="w-full bg-[#979797] h-[1px]"></div>
    </>
  );
}
