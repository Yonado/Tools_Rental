
import Link from 'next/link';
import React, { use } from 'react'

async function getProducts() {
    return await (await fetch("https://dummyjson.com/products", { cache: "no-store" })).json();
}


function CategoryPage({
    params,
}: {
    params: { categoryId: string };
}) {

    const dataUsing = getProducts()

    const tools = use(dataUsing);
    const catProducts = tools?.products?.filter((product: { category: string; }) => product.category === params.categoryId)

    return (


        <div className="flex flex-col max-w-[1200px] mx-auto items-center">
            <div className="breadcrumbs mt-4 ml-4 md:ml-0 font-light self-start">
                <span className=''><Link href="/rentals">Rentals</Link> / </span>
                <span>{`${params.categoryId[0].toUpperCase() + params.categoryId.substring(1)}`}</span>
            </div>
            <div className="self-center">
                <img className="mt-4 w-[94px] h-[150px]" src="https://power-tools.co.il/_next/image?url=%2Fimages%2FiconsAndLogos%2Flogos%2F%D7%94%D7%A9%D7%9B%D7%A8%D7%AA-%D7%9B%D7%9C%D7%99-%D7%A2%D7%91%D7%95%D7%93%D7%94-%D7%A6%D7%99%D7%95%D7%93-%D7%9B%D7%9C%D7%99%D7%9D-%D7%9B%D7%9C%D7%99-%D7%91%D7%A0%D7%99%D7%99%D7%9F-%D7%9C%D7%94%D7%A9%D7%9B%D7%A8%D7%94.svg&w=128&q=75" alt="" />

            </div>
            <div className="font-semibold text-5xl mt-4">{`Rent ${params.categoryId}`}</div>
            <div className="flex flex-row gap-4 m-16 flex-wrap justify-center items-center">

                {catProducts.map((product: any) => {
                    return (
                        <Link key={product.id} href={`/rentals/${params.categoryId}/${product.title}`}>
                            <div className="border-4 border-white box-border relative hover:border-4 hover:border-[#706FC2] rounded flex items-center justify-center pb-4 md:w-[240px] h-[450px] w-[180px] bg-[url('https://media.istockphoto.com/id/961710268/photo/white-cement-marble-texture-with-natural-pattern-for-background.jpg?s=612x612&w=0&k=20&c=nO7N308EMYmyF96fnd34jhaI96WiH_Aem3Q1N5OUMTk=')]">
                                <div className=" flex flex-col justify-center items-center mt-4">
                                    <div className="w-[160px] h-[160px] border-4 bg-white">
                                        <img className="object-contain w-full h-full" src={product.images[0]} alt="" />
                                    </div>
                                    <div className="text-center text-gray-500 tracking-widest p-4">
                                        {product.brand}
                                    </div>
                                    <div className="text-center text-gray-800 tracking-wider font-semibold p-4">
                                        {product.title.toUpperCase()}
                                    </div>
                                    <div className="absolute bottom-1">
                                        <button className='bg-[#706FC2] border-2 text-white text-sm p-2 m-2 rounded font-semibold tracking-wider'>{`Show details`.toUpperCase()}</button>
                                    </div>

                                </div>
                            </div>
                        </Link>
                    )
                })}
            </div>
        </div>
    )
}

export default CategoryPage
