import React from "react";
import { ReactComponent as Alert } from "../Images/alert.svg";
import Oracle from "../Images/Oracle.png";
import Alteryx from "../Images/Alteryx.png";
import Splunk from "../Images/Splunk.png";
import C3ai from "../Images/C3ai.png";
import GotoComponent from "../Components/gotoComponent";
import RemoteTag from "./RemoteTag";
import Indiegogo from "../Images/Indiegogo.png";
import Mitsubishi from "../Images/Mitsubishi.png";
import Facebook from "../Images/Facebook.png";
import CustomInk from "../Images/CustomInk.png";
import Microsoft from "../Images/Microsoft.png";
import Apple from "../Images/Apple.png";

const AIComponent = () => {
 return (
    <>
        <div className="md:w-auto md:flex mr-4" style={{width:"48.75rem"}}>
            <div>
                <div className="flex mb-6">
                    <div className="text-xl font-bold">
                        Available Internships
                    </div>
                    <div style={{marginLeft:"26.5rem"}}>
                        <Alert/>
                    </div>
                    <a href="" className="text-base ml-3 font-normal underline hover:no-underline" style={{color:"#EB5757",marginTop:"1px"}}>
                        Create alert
                    </a>
                </div>
                <hr/>
                <div>
                <div className="align-top float-right mt-8">
                            <GotoComponent/>
                        </div> 
                    <a className="flex hover:bg-gray-100 duration-200" href="">
                        <div className="mb-8 mt-6 h-16">
                            <img src={Oracle} alt="Oracle" className="h-16 w-16" />
                        </div>
                        <div className="ml-4 mt-6 text-base">
                            <b>Oracle</b>
                            <div className="text-base">
                                Software Engineer Intern (Sophomore) - Oracle Cloud Infrastructure (OCI)
                            </div>
                        </div>                      
                    </a> 
                     <div className="align-top float-right mt-8">
                            <GotoComponent/>
                        </div>  
                    <hr/>
                    <a className="flex hover:bg-gray-100 duration-200" href="">
                        <div className="mb-8 mt-6 h-16">
                            <img src={Oracle} alt="Oracle" className="h-16 w-16" />
                        </div>
                        <div className="ml-4 mt-6 text-base">
                            <b>Oracle</b>
                            <div className="text-base">
                                Software Engineer Intern (Junior) - Oracle Cloud Infrastructure (OCI)
                            </div>
                        </div>
                    </a>
                    <div className="align-top float-right mt-8">
                            <GotoComponent/>
                        </div>
                    <hr/>
                    <a className="flex hover:bg-gray-100 duration-200" href="">
                        <div className="mb-8 mt-6 h-16">
                            <img src={Alteryx} alt="Alteryx" className="h-16 w-16" />
                        </div>
                        <div className="ml-4 mt-6 text-base">
                            <b>Alteryx</b>
                            <div className="text-base">
                                Software Engineer
                            </div>
                            <div className="text-gray-400 text-sm mt-1 flex">
                                Boston, MA
                                <RemoteTag/>
                            </div>
                        </div>
                    </a>

                    <div className="align-top float-right mt-8">
                            <GotoComponent/>
                        </div>
                    <hr/>
                    <a className="flex hover:bg-gray-100 duration-200" href="">
                        <div className="mb-8 mt-6 h-16">
                            <img src={Splunk} alt="Splunk" className="h-16 w-16" />
                        </div>
                        <div className="ml-4 mt-6 text-base">
                            <b>Splunk</b>
                            <div className="text-base">
                                Software Engineer
                            </div>
                            <div className="text-gray-400 text-sm mt-1">
                                Seattle, WA, USA
                            </div>
                        </div>
                        </a>
                        <div className="align-top float-right mt-8">
                            <GotoComponent/>
                        </div>
                    <hr/>
                    <a className="flex hover:bg-gray-100 duration-200" href="">
                        <div className="mb-8 mt-6 h-16">
                            <img src={C3ai} alt="C3ai" className="h-16 w-16" />
                        </div>
                        <div className="ml-4 mt-6 text-base">
                            <b>C3.ai</b>
                            <div className="text-base">
                                Software Engineer Intern (Summer 2021)
                            </div>
                            <div className="text-gray-400 text-sm mt-1">
                                Redwood City, CA, USA
                            </div>
                        </div>
                    </a>

                        <div className="align-top float-right mt-8">
                            <GotoComponent/>
                        </div>
                    <hr/>
                    <a className="flex hover:bg-gray-100 duration-200" href="">
                        <div className="mb-8 mt-6 h-16">
                            <img src={Indiegogo} alt="Indiegogo" className="h-16 w-16" />
                        </div>
                        <div className="ml-4 mt-6 text-base">
                            <b>Indiegogo</b>
                            <div className="text-base">
                                Sales Development Representative
                            </div>
                            <div className="text-gray-400 text-sm mt-1 flex">
                                San Francisco, CA, USA
                                <RemoteTag/>
                            </div>
                        </div>
                    </a>

                        <div className="align-top float-right mt-8">
                            <GotoComponent/>
                        </div>
                    <hr/>
                    <a className="flex hover:bg-gray-100 duration-200" href="">
                        <div className="mb-8 mt-6 h-16">
                            <img src={Mitsubishi} alt="Mitsubishi" className="h-16 w-16" />
                        </div>
                        <div className="ml-4 mt-6 text-base">
                            <b>Mitsubishi</b>
                            <div className="text-base">
                                Intern: Machine Learning for GNSS applications
                            </div>
                            <div className="text-gray-400 text-sm mt-1 flex">
                                Cambridge, MA, USA
                                <RemoteTag/>
                            </div>
                        </div>
                    </a>

                        <div className="align-top float-right mt-8">
                            <GotoComponent/>
                        </div>
                    <hr/>
                    <a className="flex hover:bg-gray-100 duration-200" href="">
                        <div className="mb-8 mt-6 h-16">
                            <img src={Facebook} alt="Facebook" className="h-16 w-16" />
                        </div>
                        <div className="ml-4 mt-6 text-base">
                            <b>Facebook</b>
                            <div className="text-base">
                                Product Design Intern
                            </div>
                            <div className="text-gray-400 text-sm mt-1">
                                Menlo Park, CA, USA
                            </div>
                        </div>
                    </a>

                        <div className="align-top float-right mt-8">
                            <GotoComponent/>
                        </div>
                    <hr/>
                    <a className="flex hover:bg-gray-100 duration-200" href="">
                        <div className="mb-8 mt-6 h-16">
                            <img src={CustomInk} alt="CustomInk" className="h-16 w-16" />
                        </div>
                        <div className="ml-4 mt-6 text-base">
                            <b>CustomInk</b>
                            <div className="text-base">
                                Design Intern
                            </div>
                            <div className="text-gray-400 text-sm mt-1 flex">
                                Los Angelos, CA, USA
                                <RemoteTag/>
                            </div>
                        </div>
                    </a>

                        <div className="align-top float-right mt-8">
                            <GotoComponent/>
                        </div>
                    <hr/>
                    <a className="flex hover:bg-gray-100 duration-200" href="">
                        <div className="mb-8 mt-6 h-16">
                            <img src={Microsoft} alt="Microsoft" className="h-16 w-16" />
                        </div>
                        <div className="ml-4 mt-6 text-base">
                            <b>Microsoft</b>
                            <div className="text-base">
                                Intern: Finance Manager
                            </div>
                            <div className="text-gray-400 text-sm mt-1">
                                Redmond, CA, USA
                            </div>
                        </div>
                    </a>

                        <div className="align-top float-right mt-8">
                            <GotoComponent/>
                        </div>
                    <hr/>
                    <a className="flex hover:bg-gray-100 duration-200" href="">
                        <div className="mb-8 mt-6 h-16">
                            <img src={Apple} alt="Apple" className="h-16 w-16" />
                        </div>
                        <div className="ml-4 mt-6 text-base">
                            <b>Apple</b>
                            <div className="text-base">
                                Machine Learning / AI: Engineering & Reasearch Internship
                            </div>
                            <div className="text-gray-400 text-sm mt-1">
                                California, USA
                            </div>
                        </div>
                    </a>
                    <hr/>
                </div>
            </div>
        </div>
    </>
 );
};

export default AIComponent;