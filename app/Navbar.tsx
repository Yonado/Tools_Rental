'use client'

import Link from 'next/link'
import React, { use, useState } from 'react'
import { isTemplateSpan } from 'typescript';

async function getCategories() {
    return await (await fetch("https://dummyjson.com/products/categories", { cache: "no-store" })).json();
}

const dataPromise = getCategories();



const Navbar = () => {
    const [value, setValue] = useState('')
    const onChange = (event) => {
        setValue(event.target.value);
    }

    const onSearch = (searchTerm) => {
        setValue(searchTerm);
    }

    const [toggleMenu, setToggleMenu] = useState(false)
    const [menuLinks, setMenuLinks] = useState('')


    const categories = use(dataPromise);
    return (
        <header>
            <div className='flex-wrap pl-7 pb-5 pt-5 bg-[#706FC2] flex justify-center md:justify-between'>
                <div className="flex justify-between">
                    <div className="text-white font-bold flex content-between gap-[80px]">
                        <Link href="/">
                            <div className="logo flex flex-col justify-center">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75a4.5 4.5 0 01-4.884 4.484c-1.076-.091-2.264.071-2.95.904l-7.152 8.684a2.548 2.548 0 11-3.586-3.586l8.684-7.152c.833-.686.995-1.874.904-2.95a4.5 4.5 0 016.336-4.486l-3.276 3.276a3.004 3.004 0 002.25 2.25l3.276-3.276c.256.565.398 1.192.398 1.852z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.867 19.125h.008v.008h-.008v-.008z" />
                                </svg>

                                HYPER TOOLS</div></Link>

                        <div className="links text-center flex items-end justify-end ">
                            <Link href="/rentals"
                                className="mx-5 font-semibold ">
                                Our Tools
                            </Link>
                            <Link href="/rentals"
                                className="mx-5 font-semibold ">
                                About
                            </Link>
                            <Link href="/rentals"
                                className="mx-5 font-semibold ">
                                Contact
                            </Link>

                        </div>
                    </div>

                </div>
                <div className="text-white font-semibold flex pr-10">
                    <div className="flex items-center gap-4">
                        <Link href="/">
                            <img src="/whatsapp.svg" className="w-8 h-8" alt=""></img>
                        </Link>
                        <span>|</span>
                        <Link href="tel:052-6340559">
                            052-6340559
                        </Link>
                    </div>

                </div>
            </div>
            <div className='flex-wrap pl-7 pb-5 pt-5 bg-[#706FC2] flex flex-row-reverse justify-center md:justify-between'>

                <div className='search-container flex flex-row mx-5'>
                    <div className='xl:w-96  md:block'>
                        <div className="inner-search text-black input-group relative flex  items-stretch px-2">
                            <input placeholder="Search a tool..." className="form-control px-2 relative min-w-0 block py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded-l transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" type="search" value={value} onChange={onChange} />
                            <button className="btn inline-block px-6 py-2 border-2 border-white text-white font-medium text-xs leading-tight uppercase rounded-r border-l-0 hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out" onClick={() => onSearch(value)}>Search</button>
                        </div>
                        <div className='empty:hidden absolute search-dropdown flex flex-col bg-white text-black  text-base ml-2 rounded border-2 border-solid border-gray-300 top-[65px]'>
                            {categories.filter(item => {
                                const searchTerm = value.toLowerCase()
                                const cat = item.toLowerCase()
                                return searchTerm && item.startsWith(searchTerm) && cat !== searchTerm
                            })
                                .map((category: string) => <Link href={`/rentals/${category}`} onClick={() => onSearch(category)} key={category} className='dropdown-row cursor-pointer text-start px-2 py-2 hover:bg-gray-200 transition ease-in-out '>
                                    {category}
                                </Link>)}
                        </div>
                    </div>
                </div>

                <div className="hovermenu hidden md:block">
                    <div className="flex items-center justify-center font-semibold">
                        <div className="relative group px-3 py-2">
                            <button className='hover:opacity-50 cursor-default text-white'>Products with "t"</button>
                            <div className="absolute top-0 left-0 transition group-hover:translate-y-6 translate-y-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible duration-300 ease-out group-hover:transform z-50 min-w-[820px] transform">
                                <div className="relative top-6 p-6 bg-white rounded-xl shadow-xl w-full">
                                    <div className=" flex flex-row gap-4 max-w-[80%] mx-auto w-full flex-wrap justify-center items-center">

                                        {
                                            categories?.filter(name => name.includes('t'))
                                                .map((category: string) => {
                                                    return (
                                                        <Link key={category} href={`/rentals/${category}`}>
                                                            <div className="w-[110px] h-[110px] md:w-[110px] md:h-[110px] bg-[#4C4C61]
                            hover:border-4 hover:border-[#706FC2] hover:m-[-4px]
                            bg-[url('https://media.istockphoto.com/id/961710268/photo/white-cement-marble-texture-with-natural-pattern-for-background.jpg?s=612x612&w=0&k=20&c=nO7N308EMYmyF96fnd34jhaI96WiH_Aem3Q1N5OUMTk=')]
                            rounded flex items-end justify-center box-content">
                                                                <div className="flex flex-col items-center justify-center w-full">

                                                                    <div className="text-center w-full text-xs md:text-xs text-gray-800 tracking-wider font-semibold">
                                                                        {category.replace(/-/g, " ").toUpperCase()}
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </Link>

                                                    )
                                                })}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="relative group px-3 py-2">
                            <button className='hover:opacity-50 cursor-default text-white'>Products with "s"</button>
                            <div className="absolute top-0 left-0 transition group-hover:translate-y-6 translate-y-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible duration-300 ease-out group-hover:transform z-50 min-w-[820px] transform">
                                <div className="relative top-6 p-6 bg-white rounded-xl shadow-xl w-full">
                                    <div className=" flex flex-row gap-4 max-w-[80%] mx-auto w-full flex-wrap justify-center items-center">

                                        {
                                            categories?.filter(name => name.includes('r'))
                                                .map((category: string) => {
                                                    return (
                                                        <Link key={category} href={`/rentals/${category}`}>
                                                            <div className="w-[110px] h-[110px] md:w-[110px] md:h-[110px] bg-[#4C4C61]
                            hover:border-4 hover:border-[#706FC2] hover:m-[-4px]
                            bg-[url('https://media.istockphoto.com/id/961710268/photo/white-cement-marble-texture-with-natural-pattern-for-background.jpg?s=612x612&w=0&k=20&c=nO7N308EMYmyF96fnd34jhaI96WiH_Aem3Q1N5OUMTk=')]
                            rounded flex items-end justify-center box-content">
                                                                <div className="flex flex-col items-center justify-center w-full">

                                                                    <div className="text-center w-full text-xs md:text-xs text-gray-800 tracking-wider font-semibold">
                                                                        {category.replace(/-/g, " ").toUpperCase()}
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </Link>

                                                    )
                                                })}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="relative group px-3 py-2">
                            <button className='hover:opacity-50 cursor-default text-white'>Products with "s"</button>
                            <div className="absolute top-0 left-0 transition group-hover:translate-y-6 translate-y-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible duration-300 ease-out group-hover:transform z-50 min-w-[820px] transform">
                                <div className="relative top-6 p-6 bg-white rounded-xl shadow-xl w-full">
                                    <div className="flex flex-row gap-4 max-w-[80%] mx-auto w-full flex-wrap justify-center items-center">

                                        {
                                            categories?.filter(name => name.includes('s'))
                                                .map((category: string) => {
                                                    return (
                                                        <Link key={category} href={`/rentals/${category}`}>
                                                            <div className="w-[110px] h-[110px] md:w-[110px] md:h-[110px] bg-[#4C4C61]
                            hover:border-4 hover:border-[#706FC2] hover:m-[-4px]
                            bg-[url('https://media.istockphoto.com/id/961710268/photo/white-cement-marble-texture-with-natural-pattern-for-background.jpg?s=612x612&w=0&k=20&c=nO7N308EMYmyF96fnd34jhaI96WiH_Aem3Q1N5OUMTk=')]
                            rounded flex items-end justify-center box-content">
                                                                <div className="flex flex-col items-center justify-center w-full">

                                                                    <div className="text-center w-full text-xs md:text-xs text-gray-800 tracking-wider font-semibold">
                                                                        {category.replace(/-/g, " ").toUpperCase()}
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </Link>

                                                    )
                                                })}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mobile-menu relative group w-full overflow-hidden md:hidden">
                    <button onClick={() => setToggleMenu(true)} className="openmenu cursor-pointer"><img className="w-[37px] h-[37px]" src='/icons8-menu-67.png' /></button>
                    <div className={`${toggleMenu ? "block overflow-hidden overflow-y-hidden" : "hidden"}`}>
                        <div className="fixed overflow-y-hidden overflow-hidden h-full w-[90%] top-0 left-0 z-50 bg-[#706FC2] text-white shadow-2xl">
                            <button className="p-2" onClick={() => setToggleMenu(false)}><img src='/icons8-close-30.png' /></button>
                            <div className="m-[20px] mx-auto">
                                <div className="flex flex-col gap-6 text-white m-6">
                                    <Link href="/">Home page</Link>
                                    <Link></Link>
                                    <Link href="/">About</Link>
                                    <Link href="/">Tools for rent</Link>
                                    <Link href="/">Contact</Link>
                                    <Link href="/">Tips and Guides</Link>
                                    <hr className="border border-white bg-white"></hr>
                                </div>
                                <div className='mx-[20px] flex flex-col text-left text-white m-6 gap-6'>
                                    <div className={`relative flex justify-between items-end button cursor-pointer`} onClick={() => menuLinks === 'electric' ? setMenuLinks('') : setMenuLinks('electric')} >Electric tools<span className="text-2xl">+</span></div>
                                    <div className={`${menuLinks === 'electric' ? "mx-4 transition transform ease-in flex flex-col gap-4 translate-y-0" : "hidden translate-y-6"}`}>
                                        <Link href="/">Hammers</Link>
                                        <Link href="/">Saws</Link>
                                        <Link href="/">Water pumps</Link>
                                    </div>


                                    <div className="flex justify-between items-end button cursor-pointer" onClick={() => menuLinks === 'heavy' ? setMenuLinks('') : setMenuLinks('heavy')} >Heavy Equipment<span className="text-2xl">+</span></div>
                                    <div className={`${menuLinks === 'heavy' ? "mx-4 transition transform ease-in flex flex-col gap-4 translate-y-0" : "hidden translate-y-6"}`}>
                                        <Link href="/">Hammers</Link>
                                        <Link href="/">Saws</Link>
                                        <Link href="/">Water pumps</Link>
                                    </div>
                                    <div className="flex justify-between items-end button cursor-pointer" onClick={() => menuLinks === 'saw' ? setMenuLinks('') : setMenuLinks('saw')} >Saws<span className="text-2xl">+</span></div>
                                    <div className={`${menuLinks === 'saw' ? "mx-4 transition transform ease-in flex flex-col gap-4 translate-y-0" : "hidden translate-y-6"}`}>
                                        <Link href="/">Hammers</Link>
                                        <Link href="/">Saws</Link>
                                        <Link href="/">Water pumps</Link>
                                    </div>
                                    <div className="flex justify-between items-end button cursor-pointer" onClick={() => menuLinks === 'technical' ? setMenuLinks('') : setMenuLinks('technical')} >Technical Gear<span className="text-2xl">+</span></div>
                                    <div className={`${menuLinks === 'technical' ? "mx-4 transition transform ease-in flex flex-col gap-4 translate-y-0" : "hidden translate-y-6"}`}>
                                        <Link href="/">Hammers</Link>
                                        <Link href="/">Saws</Link>
                                        <Link href="/">Water pumps</Link>
                                    </div>
                                </div>


                            </div>

                        </div>
                    </div>

                </div>

            </div>
        </header >
    )
}

export default Navbar