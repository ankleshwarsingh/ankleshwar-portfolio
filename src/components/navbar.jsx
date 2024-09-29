import React, {useEffect, useState} from 'react'
import profile from "../assets/profile.jpg"
import { AiOutlineMenu } from "react-icons/ai";
import { IoMdClose } from "react-icons/io";
import {Link} from "react-scroll";
export default function Navbar() {
    const [menu, setMenu] = useState(false)
    const navItems = [
        {
            id: 1,
            text: "Home"
        }, {
            id: 2,
            text: "About"
        }, {
            id: 3,
            text: "Services"
        }, {
            id: 4,
            text: "Experience"
        }, {
            id: 5,
            text: "Contact"
        },
    ]
    return (
        <>
            <div className="max-w-screen-2xl container mx-auto px-4 md:px-20 h-16 shadow-md fixed top-0 left-0 right-0 z-50">
                <div className="flex justify-between items-center h-16">
                    <div className="flex space-x-2 ">
                        <img src={profile} className="h-12 w-12 rounded-full" alt="" />
                        <h1 className="font-semibold text-xl text-white cursor-pointer">Ankleshwar <span className='text-green-500 text-2xl'>Singh</span><p className="text-sm text-red-500">Web Developer</p></h1>
                    </div>
                    {/* Desktop Navbar */}
                    <div>
                        <ul className="hidden md:flex space-x-8">
                            {navItems.map(({ id, text }) => (
                                <li className="hover:scale-105 duration-200 cursor-pointer" key={id}>
                                    <Link className="text-white" to={text}
                                    smooth={true}
                                    duration={500}
                                    offset={-70}
                                    activeClass="active"
                                    >{text}</Link>
                                    </li>
                            ))}
                        </ul>
                        <div onClick={() => setMenu(!menu)} className="md:hidden text-white">
                            {menu ? <IoMdClose size={24} /> : <AiOutlineMenu size={24} />}
                        </div>
                    </div>
                </div>
                {/* Mobile Navbar */}
                {menu && (
                    <div className="bg-white">
                        <ul className="md:hidden flex flex-col items-center h-screen justify-center space-y-3 text-xl">
                            {navItems.map(({ id, text }) => (
                                <li className="hover:scale-105 duration-200 font-semibold cursor-pointer" key={id}><Link className="text-black" to={text}
                                onClick={() => setMenu(!menu)}
                                smooth={true}
                                duration={500}
                                offset={-70}
                                activeClass="active"
                                >{text}</Link></li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
        </>
    )
}
