import React from 'react'
import profile from "../assets/profile.jpg"
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { IoLogoLinkedin } from "react-icons/io5";
import { FaYoutube } from "react-icons/fa6";
import { BsTelegram } from "react-icons/bs";
import { SiMongodb } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { RiReactjsLine } from "react-icons/ri";
import { FaNodeJs } from "react-icons/fa";
import { ReactTyped } from "react-typed";
function Home() {
    return (
        <>
            <div name="Home" className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-20">
                <div className="flex flex-col md:flex-row">
                    <div className="md:w-1/2 mt-12 md:mt-24 space-y-2 md:order-1 order-2"><span className='text-xl text-white'>Welcome To My Portfolio</span>
                        <div className="flex space-x-1 text-2xl md:text-4xl">
                            <h1 className="text-white">Hello I'm a</h1>
                            <ReactTyped
                                className='text-red-700 font-bold'
                                strings={["Developer", "Programmer", "Coder"]}
                                typeSpeed={40}
                                backSpeed={50}
                                loop={true}
                            />
                        </div>
                        <br />
                        <p className='text-sm md:text-md text-white text-justify'>Expert web developer delivering tailored, high-performance websites that enhance user experience and drive business growth. From design to deployment, I turn your ideas into engaging digital solutions that make an impact.</p>
                        <br />
                        {/* Social Media Icons */}
                        <div className="flex flex-col items-center md:flex-row justify-between space-y-6 md:space-y-0 text-white">
                            <div className="space-y-2">
                                <h1 className='font-bold'>Available On</h1>
                                <ul className='flex space-x-5'>
                                    <li><a target="_blank" href="https://www.facebook.com/"><FaFacebookSquare className='text-2xl cursor-pointer' /></a></li>
                                    <li><a target="_blank" href="https://www.instagram.com/" ><FaSquareInstagram className='text-2xl cursor-pointer' /></a></li>
                                    <li><a target="_blank" href="https://www.linkedin.com/"><IoLogoLinkedin className='text-2xl cursor-pointer' /></a></li>
                                    <li><a target="_blank" href="https://www.youtube.com/"><FaYoutube className='text-2xl cursor-pointer' /></a></li>
                                    <li><a target="_blank" href="https://www.telegram.com/"><BsTelegram className='text-2xl cursor-pointer' /></a></li>
                                </ul>
                            </div>
                            <div className="space-y-2">
                                <h1 className='font-bold'>Currently Working On</h1>
                                <ul className='flex space-x-5'>
                                    <li><SiMongodb className='text-xl md:text-3xl hover:scale-110 duration-200 rounded-full ' /></li>
                                    <li><SiExpress className='text-xl md:text-3xl hover:scale-110 duration-200 rounded-full ' /></li>
                                    <li><RiReactjsLine className='text-xl md:text-3xl hover:scale-110 duration-200 rounded-full ' /></li>
                                    <li><FaNodeJs className='text-xl md:text-3xl hover:scale-110 duration-200 rounded-full ' /></li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="md:w-1/2 md:ml-48 md:mt-20 mt-8 md:order-2 order-1"><img src={profile} className='rounded-full w-100' alt="" /></div>
                </div>
            <br />
            <hr className="mt-20"/>
            </div>
        </>
    )
}

export default Home
