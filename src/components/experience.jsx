import React from 'react'
import { FaHtml5 } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io5";
import { BsBootstrapFill } from "react-icons/bs";
import { SiMongodb } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { RiReactjsLine } from "react-icons/ri";
import { FaNodeJs } from "react-icons/fa";
import { SiPython } from "react-icons/si";
import { FaJava } from "react-icons/fa6";
import { FaPhp } from "react-icons/fa";
import { SiMysql } from "react-icons/si";
import { IoLogoGithub } from "react-icons/io";
const Experience = () => {
    const cardItem = [
        {
            id: 1,
            logo: <FaHtml5  className="w-[100px] h-[100px] text-orange-700"/>,
            name: "HTML5"
        },
        {
            id: 2,
            logo: <IoLogoCss3  className="w-[100px] h-[100px] text-yellow-500"/>,
            name: "CSS 3"
        },
        {
            id: 3,
            logo: <BsBootstrapFill  className="w-[100px] h-[100px] text-purple-800"/>,
            name: "Bootstrap"
        },
        {
            id: 4,
            logo: <SiMongodb className="w-[100px] h-[100px] text-green-700"/>,
            name: "MongoDB"
        },
        {
            id: 5,
            logo: <SiExpress className="w-[100px] h-[100px] text-green-700"/>,
            name: "Express"
        },
        {
            id: 6,
            logo: <RiReactjsLine className="w-[100px] h-[100px] text-red-700"/>,
            name: "React"
        },
        {
            id: 7,
            logo: <FaNodeJs className="w-[100px] h-[100px] text-green-700"/>,
            name: "Node JS"
        },
        {
            id: 8,
            logo: <SiPython className="w-[100px] h-[100px] text-yellow-700"/>,
            name: "Python"
        },
        {
            id: 10,
            logo: <FaPhp className="w-[100px] h-[100px] text-blue-400"/>,
            name: "Php"
        },
        {
            id: 11,
            logo: <SiMysql className="w-[100px] h-[100px] text-blue-700"/>,
            name: "MySQL"
        }, 
        {
            id: 12,
            logo: <IoLogoGithub className="w-[100px] h-[100px] text-white"/>,
            name: "GitHub"
        },

    ]
    return (
        <div name="Experience" className='max-w-screen-2xl container mx-auto px-4 md:px-20 my-15'>
            <h1 className='text-3xl font-bold mb-5 text-white'>Experience</h1>
            <p className="text-white">I Have More Than 3 Years Experience In The Below Technologies.</p>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-7 my-8">
                {
                    cardItem.map(({ id, logo, name }) => (
                        <div className="flex flex-col items-center justify-center border-[2px] rounded-full shadow-md md:w-[200px] md:h-[200px] p-1 cursor-pointer hover:scale-105 duration-300" key={id}>
                            <div className="w-[150px] p-1 rounded-full flex justify-center">
                                {logo}
                            </div>
                            <div>
                                <div className="text-xl font-bold text-center text-white">{name}</div>
                            </div>
                        </div>
                    ))
                }
            </div>
            <hr className="mt-20"/>
        </div>
    )
}

export default Experience
