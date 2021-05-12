import { ReactComponent as Logo } from "../Images/logo.svg";
import React from 'react';
import "tailwindcss/tailwind.css";


const Navbar = () => {
    return (
        <div className="flex justify-center h-20">
            <div className="m-5 ml-36">
            <a href=""><Logo className="h-11"/></a>
            </div>
            <div className="m-5 mt-8 ml-8">
                <a href=""><b>Find Internship</b></a>
            </div>
            <div className="m-5 mt-8 ml-6">
            <a href="">For employers</a>
            </div>
            <div className="m-5 mt-8 ml-6">
            <a href="">Blog</a>
            </div>
            <div className="m-5 mt-8 ml-60">
            <a href="">Sign up</a>
            </div>
            <div className="m-5 mt-8 ml-6">
            <a href="">Sign in</a>
            </div>
            <div className="m-5 mt-8 ml-6">
            <a href=""><span className="bg-black text-white p-6 pt-2 pb-2 border-black font-bold rounded">Post Internship</span></a>
            </div>
        </div>
    );
};

export default Navbar;
