

import React from 'react'
import ToolsList from './rentals/ToolsList'
// import Swiper from './rentals/Swiper'
import Swiper2 from './rentals/Swiper2'
import Swipertools from './rentals/Swipertools'
import { list } from 'postcss'

function Home() {
    const newLocal = "bg-[#706FC2] flex items-center p-3 justify-center gap-12 transition ease-in-out rounded text-white font-bold hover:bg-white hover:text-[#706FC2] hover:border-[#706FC2] hover:border-2 border-2 border-white tracking-widest h-24 w-3/4"


    return (

        <div>

            <div>
                <div className="bg-white container mt-[30px] flex flex-col">
                    <div className="flex items-center justify-center flex-col-reverse md:flex-row ">
                        <div className='right flex flex-col gap-2 w-3/4 md:w-1/2'>
                            <div className='font-extrabold text-4xl text-gray-700'>All the tools you need</div>
                            <div className='font-light text-gray-500 text-xl'>Hire your tools from us today!
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Porta nibh venenatis cras sed felis. Venenatis a condimentum vitae sapien. Malesuada proin libero nunc consequat interdum.</div>
                            <button className='bg-[#706FC2] transition ease-in-out rounded text-white font-medium p-5 mt-10 md:self-start text-xl hover:bg-white hover:text-[#706FC2] hover:border-[#706FC2] hover:border-2 border-2 border-white'>Show our tools</button>
                        </div>
                        <div className='left'>
                            <img className="w-[120px] md:w-[260px]" src='https://power-tools.co.il/_next/image?url=%2Fimages%2FiconsAndLogos%2Flogos%2F%D7%94%D7%A9%D7%9B%D7%A8%D7%AA-%D7%9B%D7%9C%D7%99-%D7%A2%D7%91%D7%95%D7%93%D7%94-%D7%A6%D7%99%D7%95%D7%93-%D7%9B%D7%9C%D7%99%D7%9D-%D7%9B%D7%9C%D7%99-%D7%91%D7%A0%D7%99%D7%99%D7%9F-%D7%9C%D7%94%D7%A9%D7%9B%D7%A8%D7%94.svg&w=384&q=75'></img>
                        </div>
                    </div>
                    <img className="mt-12 md:mt-0 h-[53px] animate-bounce" src='/arrow-down.svg'></img>
                </div>
                <div className="mt-4 w-full bg-[#706FC2] flex flex-col md:flex-row items-center">
                    <div className='flex flex-col w-1/2 m-16 justify-center items-center'>
                        <div className="text-2xl font-bold text-gray-200 text-center">Need a professional tool? You're at the right place.</div>
                        <div className="text-md mt-3 font-bold text-[#020067]">
                            We have all you need:
                            <ul className="mt-2">
                                <li>✔ Professional tools, taken care of and ready for your next job</li>
                                <li>✔ 30 years of experience</li>
                                <li>✔ Guidance for correct workflow</li>
                                <li>✔ Best prices in town</li>
                            </ul>
                        </div>
                    </div>
                    <div className='flex flex-col w-1/2 md:m-16 m-4 mx-auto'>
                        <div className="items-start flex-col gap-4 flex text-2xl font-bold text-[#020067]">
                            <button className="bg-[#706FC2] flex items-center p-3 justify-center gap-4 transition ease-in-out rounded text-white font-bold hover:bg-white hover:text-[#706FC2] hover:border-[#706FC2] hover:border-2 border-2 border-white tracking-widest h-24 w-3/4">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-10 h-10">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75a4.5 4.5 0 01-4.884 4.484c-1.076-.091-2.264.071-2.95.904l-7.152 8.684a2.548 2.548 0 11-3.586-3.586l8.684-7.152c.833-.686.995-1.874.904-2.95a4.5 4.5 0 016.336-4.486l-3.276 3.276a3.004 3.004 0 002.25 2.25l3.276-3.276c.256.565.398 1.192.398 1.852z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.867 19.125h.008v.008h-.008v-.008z" />
                                </svg>
                                OUR TOOLS</button>
                            <button className={newLocal}>
                                <span className="text-4xl font-medium">?</span>
                                WHY US</button>
                        </div>
                    </div>
                </div>



            </div>
            <div className="">
                <div id="topOfPage" className='text-center mt-12 text-2xl tracking-wide font-semibold'>Which tool do you need?</div>
                {/* <div className="swiper-list">
                    <Swiper2 />
                </div> */}
                <div>
                    {/* <ToolsList /> */}
                </div>
                <div>
                    <Swipertools />
                </div>
            </div>
        </div >
    )
}

export default Home


