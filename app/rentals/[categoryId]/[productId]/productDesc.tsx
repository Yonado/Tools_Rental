'use client'

import React, { useState } from 'react'

const ProductDesc = ({ title, description, rating, stock }: any) => {

    const [toggleTab, setToggleTab] = useState(1)

    return (
        <div className="text-black">
            <ul className="nav nav-tabs flex flex-col md:flex-row flex-wrap list-none border-b-0 pl-0 mb-4" id="tabs-tabFill"
                role="tablist">
                <li className="nav-item flex-auto text-center" role="presentation">
                    <a onClick={() => setToggleTab(1)} href="#tabs-homeFill" className={`${toggleTab === 1 ? "font-extrabold bg-gray-200" : ""}
nav-link
w-full
block
font-medium
text-xs
leading-tight
uppercase
border-x-0 border-t-0 border-b-2 border-transparent
px-6
py-3

hover:border-transparent hover:bg-gray-100
focus:border-transparent
active
`} id="tabs-home-tabFill" data-bs-toggle="pill" data-bs-target="#tabs-homeFill" role="tab"
                        aria-controls="tabs-homeFill" aria-selected="true" >General Information</a>
                </li>
                <li className="nav-item flex-auto text-center" role="presentation">
                    <a onClick={() => setToggleTab(2)} href="#tabs-profileFill" className={`${toggleTab === 2 ? "font-extrabold bg-gray-200" : ""}
nav-link
w-full
block
font-medium
text-xs
leading-tight
uppercase
border-x-0 border-t-0 border-b-2 border-transparent
px-6
py-3

hover:border-transparent hover:bg-gray-100
focus:border-transparent
`} id="tabs-profile-tabFill" data-bs-toggle="pill" data-bs-target="#tabs-profileFill" role="tab"
                        aria-controls="tabs-profileFill" aria-selected="false">Technical Information</a>
                </li>
                <li className="nav-item flex-auto text-center" role="presentation">
                    <a onClick={() => setToggleTab(3)} href="#tabs-messagesFill" className={`${toggleTab === 3 ? "font-extrabold bg-gray-200" : ""}
nav-link
w-full
block
text-xs
leading-tight
uppercase
border-x-0 border-t-0 border-b-2 border-transparent
px-6
py-3

hover:border-transparent hover:bg-gray-100
focus:border-transparent
`} id="tabs-messages-tabFill" data-bs-toggle="pill" data-bs-target="#tabs-messagesFill" role="tab"
                        aria-controls="tabs-messagesFill" aria-selected="false">In stock?</a>
                </li>
            </ul>
            <div className="tab-content" id="tabs-tabContentFill">
                <div className={`${toggleTab === 1 ? 'text-center' : 'hidden'}`} id="tabs-homeFill" role="tabpanel" aria-labelledby="tabs-home-tabFill">
                    {description}
                </div>
                <div className={`${toggleTab === 2 ? 'text-center' : 'hidden'}`} id="tabs-profileFill" role="tabpanel" aria-labelledby="tabs-profile-tabFill">
                    {rating}
                </div>
                <div className={`${toggleTab === 3 ? 'text-center' : 'hidden'}`} id="tabs-messagesFill" role="tabpanel" aria-labelledby="tabs-profile-tabFill">
                    Units in stock: {stock}
                </div>
            </div>
        </div>
    )
}

export default ProductDesc