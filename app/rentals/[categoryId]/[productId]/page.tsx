
import Link from 'next/link';
import React, { use } from 'react'
import ProductDesc from './productDesc'

async function getProducts() {
    return await (await fetch("https://dummyjson.com/products", { cache: "no-store" })).json();
}


function ProductPage({
    params,
}: {
    params: { categoryId: string, productId: string };
},
) {

    const dataUsing = getProducts();

    const tools = use(dataUsing);
    const catProduct = tools?.products?.filter((product) => product.title === params.productId.replaceAll("%20", ' '))
    const [{ id, title, description, price, discountPercentage, rating, stock, brand, category, thumbnail, images }] = catProduct
    console.log(`The title is ${title}`)



    return (
        <div className='max-w-[90%] mx-auto mb-10'>
            <div className="breadcrumbs mt-4 ml-4 md:ml-0 font-light self-start">
                <span className=''><Link href="/rentals/">Rentals/</Link><Link href={`/rentals/${category}`}>{params.categoryId}</Link>/</span>
                <span>{`${params.productId[0].toUpperCase() + params.productId.substring(1).replaceAll("%20", ' ')}`}</span>
            </div>

            <div className="container flex flex-col max-w-[80%] mx-auto mt-8">
                <div className="flex flex-col-reverse md:flex-row justify-center">
                    <div className="productDetails">
                        <div className="productDescription text-center md:text-left">
                            <div className="h3 text-3xl font-bold mb-4">{title}</div>
                            <div className="desc text-xl h6 max-w-[80%] mb-6 mx-auto md:mx-0">{description}</div>
                            <div className="price text-2xl font-regular tarcking-wide h4 mb-8">Renting price: ${price}/day</div>
                            <div className="h6 underline text-sm"><Link href="/">Full pricing</Link></div>
                        </div>
                        <div className="contacts flex gap-10 mt-10 justify-center md:justify-start ">
                            <div className="
                            hover:font-bold
                            cursor-pointer whatsapp flex flex-col text-center items-center max-w-[50px]">
                                <img className="text-center w-[48px] h-[48px]" src="/messageBlueBg.svg" alt="" />
                                <div className="whatsapp">Message us</div>
                            </div>
                            <div className="
                            hover:font-bold
                            cursor-pointer whatsapp flex flex-col text-center items-center max-w-[50px]">
                                <img className="text-center w-[48px] h-[48px]" src="/whatsapp.svg" alt="" />
                                <div className="whatsapp">Whatsapp us</div>
                            </div>
                            <div className="
                            hover:font-bold
                            cursor-pointer whatsapp flex flex-col text-center items-center max-w-[50px]">
                                <img className="text-center w-[48px] h-[48px]" src="/phoneBlueBg.svg" alt="" />
                                <div className="whatsapp">Call us</div>
                            </div>

                        </div>
                    </div>
                    <div className="productImages">
                        <div className="smallImages"></div>
                        <div className="mainImage">
                            <img src={images[0]} alt="main product images" />
                        </div>

                    </div>
                </div>
                {/* <div className="details flex flex-row"> */}
                <div className='product-description w-full min-h-[180px] mx-auto mt-8 border-2 border-gray-200 rounded'>
                    <ProductDesc title={title} description={description} rating={rating} stock={stock} />
                </div>
            </div>
        </div>
        // </div>
    )
}

export default ProductPage