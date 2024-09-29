import React from 'react'
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedinIn, } from "react-icons/fa6";
const Footer = () => {
    return (
        <>
            <footer name="Footer" className="py-12">
                <div className='max-w-screen-2xl container mx-auto px-4 md:px-20'>
                    <div className="flex flex-col items-center justify-center">
                        <div className="flex space-x-4 text-white">
                            <FaFacebook size={24} className="hover:scale-110 duration-300"/>
                            <FaInstagram size={24} className="hover:scale-110 duration-300"/>
                            <FaTwitter size={24} className="hover:scale-110 duration-300"/>
                            <FaLinkedinIn size={24} className="hover:scale-110 duration-300"/>
                        </div>
                        <div className="mt-8 border-t border-gray-700 pt-8 flex flex-col items-center text-white">
                            <p className="text-sm">&copy; 2024 Digrow World. All Rights Reserved.</p>
                            <p className="text-sm">Designed And Developed By Digrow World</p>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer
