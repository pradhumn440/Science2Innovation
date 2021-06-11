import Logo from "../Images/logo.png";
import React from 'react';
import "tailwindcss/tailwind.css";


const Navbar = () => {
    return (
        <nav className="pl-3 flex bg-white mx-32 pt-1 xl:flex-nowrap flex-nowrap md:flex-nowrap" style={{height:"5rem", width:"90rem"}} >
          <div className="flex gap-1 justify-self-auto items-center flex-nowrap"> 
                <a href="" className="text-base mr-4 inline flex-nowrap md:flex-nowrap"><img src={Logo} alt="Internfeed" className="mr-6 my-5 pb-1" style={{height:"2.5rem", width:"9.1rem"}} /></a>
                <a href="" className="text-base w-40 flex-nowrap md:flex-nowrap"><b>Find internship</b></a>
                <a href="" className="text-base w-40 flex-nowrap md:flex-nowrap">For employers</a>
                <a href="" className="text-base w-40 flex-nowrap md:flex-nowrap">Blog</a>
          </div>
          <div className="flex gap-1 justify-self-auto items-center" style={{marginLeft:"7.5rem"}}>
            <a href="" className="text-base w-24 flex-nowrap md:flex-nowrap">Sign up</a>
            <a href="" className="text-base w-24 flex-nowrap md:flex-nowrap">Sign in</a>
            <button className="bg-black w-40 items-center text-sm text-white font-bold px-5 py-2">
            <a href="">Post internship</a>
            </button>
          </div>
        </nav>
    );
};

export default Navbar;
