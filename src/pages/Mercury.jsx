import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import jsonData from "../../data.json";
import icon from "../../assets/icon-source.svg";
import { useState } from "react";

const PlanetInfo = () => {
  const [activeContent, setActiveContent] = useState("overview");

  const handleContentChange = (content) => {
    setActiveContent(content);
  };

  return (
    <>
      <Navbar />
      <div
        className="md:hidden text-white uppercase font-spartan font-bold 
      text-xs flex items-center justify-center p-8 gap-40"
      >
        <p
          className={` ${activeContent === "overview" ? "text-select" : ""}`}
          onClick={() => handleContentChange("overview")}
        >
          Overview
        </p>
        <p
          onClick={() => handleContentChange("structure")}
          className={` ${activeContent === "structure" ? "text-select" : ""}`}
        >
          structure
        </p>
        <p
          onClick={() => handleContentChange("geology")}
          className={` ${activeContent === "geology" ? "text-select" : ""}`}
        >
          surface
        </p>
      </div>
      <div className="md:hidden w-full bg-[#979797] h-[1px]"></div>

      <div className="flex flex-col gap-4 items-center justify-center h-screen">
        <section className="text-white flex flex-col items-center lg:flex-row justify-center text-start md:gap-20">
          <div className="relative">
            <img
              src={
                activeContent === "overview"
                  ? jsonData[0].images.planet
                  : activeContent === "structure"
                  ? jsonData[0].images.internal
                  : jsonData[0].images.planet
              }
              alt=""
              className="md:w-96 md:h-96 w-44 h-44"
            />
            <img
              src={
                activeContent === "geology" ? jsonData[0].images.geology : ""
              }
              className={
                activeContent === "overview"
                  ? "w-40 h-48 relative left-28 bottom-28 hidden"
                  : activeContent === "structure"
                  ? "md:w-40 md:h-48 absolute left-28 bottom-16 hidden"
                  : "w-28 h-36 md:w-40 md:h-48 absolute left-8 top-20 bottom-0 md:left-28 md:bottom-28 md:top-52"
              }
              alt=""
            />
          </div>
          <div className="flex items-center flex-col md:flex-row justify-between w-[80vw] lg:w-auto lg:block">
            <div>
              <h1 className="font-medium text-7xl my-10 text-center md:text-start">
                {jsonData[0].name}
              </h1>
              <p className="w-96 lg:w-64 font-spartan text-sm font-normal my-5 text-center md:text-start">
                {jsonData[0][activeContent].content}
              </p>
              <p className="text-sm font-spartan flex items-center gap-2">
                Source:
                <Link
                  to={jsonData[0][activeContent].source}
                  target="blank"
                  className="underline"
                >
                  Wikipedia
                </Link>
                <img src={icon} alt="" className="w-3" />
              </p>
            </div>
            <div className="hidden md:flex flex-col text-start items-start my-5 font-spartan text-xs font-bold">
              <button
                className={`w-64 border-[1px] px-10 py-2 my-2 flex gap-4 uppercase ${
                  activeContent === "overview" ? "bg-[#419ebb] border-none" : ""
                }`}
                onClick={() => handleContentChange("overview")}
              >
                <span>01</span>
                Overview
              </button>
              <button
                className={`w-64 border-[1px] px-10 py-2 my-2 flex gap-4 uppercase ${
                  activeContent === "structure"
                    ? "bg-[#419ebb] border-none"
                    : ""
                }`}
                onClick={() => handleContentChange("structure")}
              >
                <span>02</span>
                Internal Structure
              </button>
              <button
                className={`w-64 border-[1px] px-10 py-2 my-2 flex gap-4 uppercase ${
                  activeContent === "geology" ? "bg-[#419ebb] border-none" : ""
                }`}
                onClick={() => handleContentChange("geology")}
              >
                <span>03</span>
                Surface Geology
              </button>
            </div>
          </div>
        </section>
        <div className="text-white text-start flex flex-col md:flex-row gap-10 lg:gap-20">
          <div
            className="border-[1px] w-[80vw] md:w-auto flex items-center justify-between 
          md:block border-[#979797] px-4 md:py-8 md:pl-4 md:pr-20"
          >
            <p className="uppercase font-spartan font-bold text-[#979797] text-xs tracking-widest">
              rotation time
            </p>
            <h2 className="font-semibold text-2xl lg:text-4xl my-2">
              {jsonData[0].rotation}
            </h2>
          </div>
          <div
            className="border-[1px] w-[80vw] md:w-auto flex items-center justify-between 
          md:block border-[#979797] px-4 md:py-8 md:pl-4 md:pr-20"
          >
            <p className="uppercase font-spartan font-bold text-[#979797] text-xs tracking-widest">
              revolution time
            </p>
            <h2 className="font-semibold text-2xl lg:text-4xl my-2">
              {jsonData[0].revolution}
            </h2>
          </div>
          <div
            className="border-[1px] w-[80vw] md:w-auto flex items-center justify-between 
          md:block border-[#979797] px-4 md:py-8 md:pl-4 md:pr-20"
          >
            <p className="uppercase font-spartan font-bold text-[#979797] text-xs tracking-widest">
              radius
            </p>
            <h2 className="font-semibold text-2xl lg:text-4xl my-2">
              {jsonData[0].radius}
            </h2>
          </div>
          <div
            className="border-[1px] w-[80vw] md:w-auto flex items-center justify-between 
          md:block border-[#979797] px-4 md:py-8 md:pl-4 md:pr-20"
          >
            <p className="uppercase font-spartan font-bold text-[#979797] text-xs tracking-widest">
              average temp.
            </p>
            <h2 className="font-semibold text-2xl lg:text-4xl my-2">
              {jsonData[0].temperature}
            </h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default PlanetInfo;
