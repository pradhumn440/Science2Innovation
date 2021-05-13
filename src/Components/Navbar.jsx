import Logo from "../Images/logo.png";
import React from 'react';
import "tailwindcss/tailwind.css";


const Navbar = () => {
    return (
        <div className="md:flex md:flex-shrink flex flex-auto justify-self-center">
          <div className="flex mx-36 my-1 justify-center" style={{width:"72.25rem"}}> 
            <div className="justify-center">
            <a href=""><img src={Logo} alt="Internfeed" className="h-9 mr-6 my-5"/></a>
            </div>
            <div className="text-base my-5 mt-7 mx-6 justify-center">
                <a href=""><b>Find internship</b></a>
            </div>
            <div className="text-base my-5 mt-7 mx-6 justify-center">
            <a href="">For employers</a>
            </div>
            <div className="text-base my-5 mt-7 mx-6 justify-self-center">
            <a href="">Blog</a>
            </div>
            <div className="text-base my-5 mt-7 mr-6 justify-center" style={{marginLeft:"16rem"}}>
            <a href="">Sign up</a>
            </div>
            <div className="text-base my-5 mt-7 mx-6 justify-center">
            <a href="">Sign in</a>
            </div>
            <button className="px-5 py-2 h-9 my-5 ml-2 bg-black text-white border-black font-bold text-sm justify-self-center">
            <a href="">Post internship</a>
            </button>
          </div>
        </div>
    );
};

export default Navbar;
