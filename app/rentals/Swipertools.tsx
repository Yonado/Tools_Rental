'use client'

import Swiper2 from "./Swiper2"
import ToolsList from "./ToolsList"

import React, { useState } from "react"

const Swipertools = () => {
    const [fullList, setFullList] = useState(false)
    return (
        <div>
            <div className={`hidden md:${fullList ? "hidden transition ease-in-out" : "block"}`}>
                <Swiper2 />
            </div>
            <div>
                <div onClick={() => setFullList(!fullList)} className={`m-5 cursor-pointer flex items-center w-1/4 mx-auto justify-center border-2 text-white bg-[#706FC2] border-[#706FC2] hover:text-[#706FC2] hover:bg-white transition ease-in-out rounded`}>
                    <button className="hidden md:block md:text-xl md:font-semibold md:m-2" >{fullList ? `Back to horizontal layout` : `Show all tools`}</button>
                </div>
                <div className={`md:${fullList ? "block mb-4 " : "hidden"}`}>
                    <ToolsList />
                </div>

            </div>

        </div>
    )
}

export default Swipertools