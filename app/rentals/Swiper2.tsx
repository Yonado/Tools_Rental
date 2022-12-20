'use client'


import React, { useRef, useState, use } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";


// Import Swiper styles
import "swiper/css";
import './swiper.css'
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper";
import Link from "next/link";

async function getCategories() {
    return await (await fetch("https://dummyjson.com/products/categories", { cache: "no-store" })).json();
}

const dataPromise = getCategories();

export default function Swiper2() {
    const categories = use(dataPromise);
    return (
        <>
            <Swiper navigation={true} modules={[Navigation]} slidesPerView={4} spaceBetween={10} className="swiper mySwiper">
                {
                    categories?.map((category: string) => {
                        return (
                            <SwiperSlide key={category}>
                                <Link href={`/rentals/${category}`}>
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
                            </SwiperSlide>

                        )
                    })}
            </Swiper>

        </>
    );
}
