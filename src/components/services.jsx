import React from 'react'
import { FaGlobeAmericas } from "react-icons/fa";
import { MdComputer } from "react-icons/md";
import { FaPaintBrush } from "react-icons/fa";import { GiArrowWings } from "react-icons/gi";
const Services = () => {
    const cardItem = [
        {
            id: 1,
            logo: <MdComputer  className="w-[100px] h-[100px] text-blue-500"/>,
            name: "Frontend"
        },{
            id: 2,
            logo: <FaGlobeAmericas   className="w-[100px] h-[100px] text-blue-500"/>,
            name: "Website Development"
        },
        {
            id: 3,
            logo: <FaPaintBrush  className="w-[100px] h-[100px] text-blue-500"/>,
            name: "Web Design"
        },{
            id: 4,
            logo: <GiArrowWings  className="w-[100px] h-[100px] text-blue-500"/>,
            name: "Search Engine Optimization"
        },

    ]
    return (
        <div name="Services" className='max-w-screen-2xl container mx-auto px-4 md:px-20 mt-20'>
            <h1 className='text-3xl text-white font-bold mb-5'>My Services</h1>
            <span className="text-white">Bringing Your Vision to Life with Stunning Front-End Solutions</span>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-3 my-8">
            {
                    cardItem.map(({ id, logo, name }) => (
                        <div className="flex flex-col items-center justify-center border-[2px] rounded-xl shadow-md md:w-[200px] md:h-[200px] p-1 cursor-pointer hover:scale-105 duration-300" key={id}>
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
            <hr className="my-20"/>
        </div>
    )
}

export default Services
