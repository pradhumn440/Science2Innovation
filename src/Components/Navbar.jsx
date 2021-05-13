import { ReactComponent as Logo } from "../Images/logo.svg";
import React from 'react';
import "tailwindcss/tailwind.css";


const Navbar = () => {
    return (
        <div className="md:flex md:flex-shrink flex flex-auto justify-self-center">
          <div className="flex mx-36 my-1 justify-self-center" style={{width:"72.25rem"}}> 
            <div className="text-base justify-self-center">
            <a href=""><Logo className="h-11 mr-6 my-6"/></a>
            </div>
            <div className="text-base my-9 mx-6 justify-self-center">
                <a href=""><b>Find internship</b></a>
            </div>
            <div className="text-base my-9 mx-6 justify-self-center">
            <a href="">For employers</a>
            </div>
            <div className="text-base my-9 mx-6 justify-self-center">
            <a href="">Blog</a>
            </div>
            <div className="text-base my-9 mr-6 justify-self-center" style={{marginLeft:"16rem"}}>
            <a href="">Sign up</a>
            </div>
            <div className="text-base my-9 mx-6 justify-self-center">
            <a href="">Sign in</a>
            </div>
            <button className="px-5 py-2 h-10 my-7 ml-2 bg-black text-white border-black font-bold text-sm justify-self-center">
            <a href="">Post internship</a>
            </button>
          </div>
        </div>
    );
};

export default Navbar;
