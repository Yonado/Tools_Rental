

import Link from 'next/link'
import React, { use } from 'react'
import 'swiper/css';

async function getCategories() {
    return await (await fetch("https://dummyjson.com/products/categories", { cache: "no-store" })).json();
}

const dataPromise = getCategories();

export default function ToolsList() {
    const categories = use(dataPromise);

    return (
        <>
            <div className="sticky text-center top-[50px] inline-flex flex-row-reverse">
                <div className="md:hidden ml-2 w-[50px] text-xs text-center inline font-light border-2 rounded">
                    <a href="#topOfPage"><button className="text-black object-contain text-center">Back to top</button></a>
                </div>
            </div>
            <div className=" flex flex-row gap-4 max-w-[80%] mx-auto w-full flex-wrap justify-center items-center">

                {
                    categories?.map((category: string) => {
                        return (
                            <Link key={category} href={`/rentals/${category}`}>
                                <div className="w-[180px] h-[180px] md:w-[240px] md:h-[240px] bg-[#4C4C61]
                            hover:border-4 hover:border-[#706FC2] hover:m-[-4px]
                            bg-[url('https://media.istockphoto.com/id/961710268/photo/white-cement-marble-texture-with-natural-pattern-for-background.jpg?s=612x612&w=0&k=20&c=nO7N308EMYmyF96fnd34jhaI96WiH_Aem3Q1N5OUMTk=')]
                            rounded flex items-end justify-center box-content">
                                    <div className="flex flex-col items-center justify-center">

                                        <div className="text-center text-lg md:text-2xl text-gray-800 tracking-wider font-semibold">
                                            {category.replace(/-/g, " ").toUpperCase()}
                                        </div>
                                    </div>
                                </div>
                            </Link>

                        )
                    })}

            </div>
        </>
    )
}

