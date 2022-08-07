import React from "react";
import logo1 from "../assets/creator.jpeg";

const About = () => (
  <div className="flex w-full justify-center items-center ">
    <div className="flex mf:flex-row flex-col items-center justify-between md:p-20 py-12 px-4">
      <div className="flex-1 flex flex-col justify-start items-start">

        <h1 className="text-white text-3xl sm:text-5xl py-2 ">
          NFTezz
          <br />
        </h1>

        <p className="text-left my-2 text-white font-light md:w-9/12 w-11/12 text-2xl text-justify">
          A platform for creators to tokenize, monetize, and profit from physical artwork
        </p>
        <br />  <br />
        <h1 className="text-white text-3xl sm:text-5xl py-2 ">
          Our Vision

        </h1>
        <br />
        <p className="text-left my-2 text-white font-light md:w-9/12 w-11/12 text-2xl">
          Tokenize assets on-chain
        </p>
        <p className="text-left my-2 text-white font-light md:w-9/12 w-11/12 text-2xl">
          Monetize your brand
        </p>
        <p className="text-left my-2 text-white font-light md:w-9/12 w-11/12 text-2xl">
          Build an identity
        </p>
      </div>

      <div className="md:flex-[0.95] flex-initial justify-center items-center mt-">
        <img src={logo1} alt="welcome" className="w-350 cursor-pointer " />
      </div>
    </div>
  </div>
);

export default About;
