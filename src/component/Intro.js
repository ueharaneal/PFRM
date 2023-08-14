import React from "react";
import Typed from "react-typed";
import {Link} from "react-router-dom"
import EmailSubscribe from './EmailSubscribe'

const Intro = () => {
  return (
    <div className="text-white ">
      <div className="max-w-[800px] mt-[-84px] w-full h-screen mx-auto text-center flex flex-col justify-center">
        <p className="uppercase text-[#7B68EE] font-bold p-2">
          Being famous has never been easier
        </p>
        <h1 className=" font-bold  md:text-7xl sm:text-6xl sm:mx-3 text-5xl mx-5">
          The box that revolutionizes music
        </h1>
        <div className="flex justify-center items-center">
          <p className="md:text-5xl text-4xl font-bold">I am a </p>
          <Typed
            className="md:text-5xl md:pl-4 text-4xl tfont-bold text-[#7B68EE] pl-2 "
            strings={["Rockstar", "Artist", "Messenger"]}
            typeSpeed={80 }
            backSpeed={100}
            loop
          />
        </div>
        <p className="md:text-2xl md:pl-2 texl-xl font-bold text-gray-500 px-6">Perform on the go, no equiment, no setup and no managers required.</p>
        <Link to ="/location" className="bg-[#7B68EE] rounded-lg w-[200px] mx-auto font-medium py-3 my-3">Get Started</Link>
      </div>
      <EmailSubscribe/>
    </div>
  );
};

export default Intro;
