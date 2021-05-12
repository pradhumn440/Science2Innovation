import React from 'react';
import "tailwindcss/tailwind.css";
import "../css/toggle.css";

const FormComponent = () => {
   return (
       <>
           <div>
           <form className="h-96 mt-10 mb-5 md:flex md:items-center w-full" style={{background:"#F2F2F5", width:"22.5rem" }} >
              <div className="md:w-1/3 md:items-center m-5 mb-6">
                 <label class="font-bold text-base" for="grid-first-name">
                  <b>Keywords</b>
                 </label>
                  <div class="md:w-2/3">
                      <input class="bg-white appearance-none border-2 border-gray-200 py-2 px-4 mb-6 text-gray-700 leading-tight focus:border-black focus:bg-white  h-12 w-80" id="inline-full-name" type="text" placeholder="Enter Keywords"/>
                   </div>
                   <label class="font-bold text-base" for="grid-first-name">
                   <b>Category</b>
                   </label>
                   <div class="relative">
                   <select class="block appearance-none bg-white border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white  h-12 w-80 mb-6 focus:border-gray-500" id="grid-state">
                        <option>Engineering</option>
                        <option>Design</option>
                        <option>Marketing</option>
                        <option>Sales</option>
                        <option>Customer Support</option>
                        <option>Product</option>
                        <option>Analytics</option>
                        <option>Finance</option>
                        <option>Data</option>
                        <option>Other</option>
                   </select>
                   <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700 md:items-center justify-items-end">
                         <svg class="fill-current h-8 " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                   </div>
                   </div>
                   <label class="font-bold text-base" for="grid-first-name">
                   <b>Location</b>
                   </label>
                   <div class="md:w-2/3">
                      <input class="bg-white appearance-none border-2 border-gray-200 py-2 px-4 text-gray-700 leading-tight focus:border-black focus:bg-white mb-6 h-12 w-80" id="inline-full-name" type="text" placeholder="Select City"/>
                   </div>
                   <div class="relative inline-block w-12 mr-2 align-middle select-none transition duration-200 ease-in">
                      <input type="checkbox" name="toggle" id="toggle" class="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-2 appearance-none cursor-pointer border-gray-400"/>
                    <label for="toggle" class="toggle-label block overflow-hidden h-6 rounded-full cursor-pointer" style={{background:"#A4A4B3"}}></label>
                  </div>
                  <label class="text-base inline-block" for="grid-first-name">
                      Remote Jobs
                   </label>
              </div>
           </form>
           <div className="h-60 md:flex md:items-center w-full" style={{background:"#F2F2F5", width:"22.5rem"}} >
               <div className="m-5 md:items-center">
                <div className="mb-5">
                 <label className="font-bold text-xl">
                 Get notified of internships matching your search
                 </label>
                 <div class="mb-5 mt-5 flex items-center">
                      <input class="bg-white appearance-none border-2 border-gray-200 py-2 px-4 text-gray-700 leading-tight focus:border-black h-12 w-80" id="inline-full-name" type="text" placeholder="Enter email"/>
                   </div>
                   <div className="flex items-center mt-5">
                  <a href=""><span className="bg-black text-white pl-28 pr-28 pt-2 pb-2 border-black font-bold h-12 w-80">Create Alert</span></a>
                  </div>
                </div>
            </div>
           </div>
        </div>
       </>
   );
};

export default FormComponent;