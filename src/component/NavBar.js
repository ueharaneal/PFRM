import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

function NavBar() {
    // Opening and closing nav bar on its small screen
    const [nav,setNav]= useState(false);
    const handleNav = () =>{
        setNav(!nav)
    }
    return (
    <div className="text-white flex justify-between max-w-[1240px] p-4 mx-auto h-24 items-center">
     {/* Large Screen menu */}
      <Link to="/home">
        <h1 className="text-[#7B68EE]  w-full font-bold text-4xl m-3">PFRM</h1>
      </Link>
    
      <ul className="hidden text-[#7B68EE] md:flex">
        <li className="p-4">
          <Link to="/home">Home</Link>
        </li>
        <li className="p-4">
          <Link to="/about">About</Link>
        </li>
        <li className="p-4">
          <Link to="/locations">Locations</Link>
        </li>
        <li className="p-4">
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
      {/* Small screen menu */}
      {/* Small screen menu */}
      {/* opening and closing function */}
      <div onClick={handleNav} className="block md:hidden select-none">
        {nav ? <AiOutlineClose size={25}/> : <AiOutlineMenu size={30} />}
        
      </div>
      {/* Small Screen Nav Bar menu */}
      <div className={nav ? "z-10 fixed left-0 top-0 w-[60%] bg-[#000300] h-full border-r border-r-gray-900 ease-in-out duration-500": 'fixed left-[-100%]'}>
        <Link to="/home"><h1 className="text-[#7B68EE]  w-[50%] font-bold text-4xl mt-8 m-4 select-none">PFRM</h1></Link>
        
        <ul className="uppercase p-4">
          <li className="p-4 border-b border-b-[#7B68EE]">
            <Link to="/home">Home</Link>
          </li>
          <li className="p-4 border-b border-b-[#7B68EE]">
            <Link to="/about">About</Link>
          </li>
          <li className="p-4 border-b border-b-[#7B68EE]">
            <Link to="/locations">Locations</Link>
          </li>
          <li className="p-4 border-b border-b-[#7B68EE]">
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default NavBar;
