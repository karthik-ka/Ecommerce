/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import  useFetch  from "../hooks/useFetch";
import { useState } from "react";
import {Shimmer_1} from "./Shimmer"
import {AiTwotoneStar} from "react-icons/ai"


const Collage = () => {

    const [category, setCategory] = useState("tshirt");
    const {data, loading} = useFetch(`http://localhost:1337/api/products?populate=*&sort=id:ASC&_q=women&filters[$and][1][isNew][$eq]=true&filters[$and][2][sub_categories][title][$eq]=${category}`)

  return (
    <>
        <div className="flex justify-center">
            <button type="button" onClick={()=>setCategory("tshirt")} 
            className={`mx-2 mb-6 px-3 py-1 rounded-md text-sm ${category ==="tshirt" && "bg-eco-off-black text-eco-white"} hover:bg-eco-off-black hover:text-eco-white transition ease-in`}>Tshirt</button>
            <button type="button" onClick={()=>setCategory("shirt")} 
            className={`mx-2 mb-6 px-3 py-1 rounded-md text-sm ${category ==="shirt" && "bg-eco-off-black text-eco-white"} hover:bg-eco-off-black hover:text-eco-white transition ease-in`}>Shirt</button>
            <button type="button" onClick={()=>setCategory("jeans")} 
            className={`mx-2 mb-6 px-3 py-1 rounded-md text-sm ${category ==="jeans" && "bg-eco-off-black text-eco-white"} hover:bg-eco-off-black hover:text-eco-white transition ease-in`}>Jeans</button>
            <button type="button" onClick={()=>setCategory("shoes")} 
            className={`mx-2 mb-6 px-3 py-1 rounded-md text-sm ${category ==="shoes" && "bg-eco-off-black text-eco-white"} hover:bg-eco-off-black hover:text-eco-white transition ease-in`}>Shoes</button>
        </div>
    {loading ? <Shimmer_1 /> :
    <div className="grid md:grid-cols-4 gap-2 max-w-[1000px] m-auto">
        <div className="row-span-2 col-span-2 md:col-span-1 md:row-span-1 bg-eco-light-grey text-eco-off-black relative">
            <Link to={`/product/${data[0].id}`}>
            <div className="relative">
                <img src={data[0]?.attributes?.thumbnail?.data?.attributes?.url} alt="no image" className="w-full h-[180px] object-cover " />
                <span className={`absolute bottom-2 right-3 flex items-center text-eco-white text-sm px-1 xl:py-1 rounded-md 
                    ${data[0]?.attributes?.rating >= 4 ? "bg-eco-green" : data[0]?.attributes?.rating >=3 ? "bg-eco-yellow" : "bg-eco-orange" }`}><AiTwotoneStar/> {data[0]?.attributes?.rating}
                </span>
            </div>
                <h3 className="pt-4 px-4 font-medium text-sm">{data[0]?.attributes?.title}</h3>
                <div className="flex justify-between py-2 px-4 text-base">
                    <p className="">
                    ₹{data[0]?.attributes?.price}
                    <span className="text-sm line-through text-eco-grey pl-2">
                        ₹{data[0]?.attributes?.oldPrice}
                    </span>
                    </p>
                    <span className="text-eco-green text-xs">{data[0]?.attributes?.offer+"% off"}</span>
                </div>
            </Link>
        </div>
        <div className="bg-eco-light-grey text-eco-off-black relative">
            <Link to={`/product/${data[1].id}`}>
            <div className="relative">
                <img src={data[1]?.attributes?.thumbnail?.data?.attributes?.url} alt="no image" className="w-full h-[180px] object-cover " />
                <span className={`absolute bottom-2 right-3 flex items-center text-eco-white text-sm px-1 xl:py-1 rounded-md 
                    ${data[1]?.attributes?.rating >= 4 ? "bg-eco-green" : data[1]?.attributes?.rating >=3 ? "bg-eco-yellow" : "bg-eco-orange" }`}><AiTwotoneStar/> {data[1]?.attributes?.rating}
                </span>
            </div>
                <h3 className="pt-4 px-4 font-medium text-sm">{data[1]?.attributes?.title}</h3>
                <div className="flex justify-between py-2 px-4 text-base">
                    <p className="">
                    ₹{data[1]?.attributes?.price}
                    <span className="text-sm line-through text-eco-grey pl-2">
                        ₹{data[1]?.attributes?.oldPrice}
                    </span>
                    </p>
                    <span className="text-eco-green text-xs">{data[1]?.attributes?.offer+"% off"}</span>
                </div>
            </Link>
        </div>
        <div className="md:row-span-2 md:col-span-2 bg-eco-light-grey text-eco-off-black relative">
            <Link to={`/product/${data[2].id}`}>
            <div className="relative">
                <img src={data[2]?.attributes?.thumbnail?.data?.attributes?.url} alt="no image" className="w-full h-[180px] md:h-[460px] object-cover " />
                <span className={`absolute bottom-2 right-3 flex items-center text-eco-white text-sm px-1 xl:py-1 rounded-md 
                    ${data[2]?.attributes?.rating >= 4 ? "bg-eco-green" : data[2]?.attributes?.rating >=3 ? "bg-eco-yellow" : "bg-eco-orange" }`}><AiTwotoneStar/> {data[2]?.attributes?.rating}
                </span>
            </div>
                <h3 className="pt-4 px-4 font-medium text-sm">{data[2]?.attributes?.title}</h3>
                <div className="flex justify-between py-2 px-4 text-base">
                    <p className="">
                    ₹{data[2]?.attributes?.price}
                    <span className="text-sm line-through text-eco-grey pl-2">
                        ₹{data[2]?.attributes?.oldPrice}
                    </span>
                    </p>
                    <span className="text-eco-green text-xs">{data[2]?.attributes?.offer+"% off"}</span>
                </div>
            </Link>
        </div>
        <div className="bg-eco-light-grey text-eco-off-black relative">
            <Link to={`/product/${data[3].id}`}>
            <div className="relative">
            <img src={data[3]?.attributes?.thumbnail?.data?.attributes?.url} alt="no image" className="w-full h-[180px] object-cover " />
                <span className={`absolute bottom-2 right-3 flex items-center text-eco-white text-sm px-1 xl:py-1 rounded-md 
                    ${data[3]?.attributes?.rating >= 4 ? "bg-eco-green" : data[3]?.attributes?.rating >=3 ? "bg-eco-yellow" : "bg-eco-orange" }`}><AiTwotoneStar/> {data[3]?.attributes?.rating}
                </span>
            </div>
                <h3 className="pt-4 px-4 font-medium text-sm">{data[3]?.attributes?.title}</h3>
                <div className="flex justify-between py-2 px-4 text-base">
                    <p className="">
                    ₹{data[3]?.attributes?.price}
                    <span className="text-sm line-through text-eco-grey pl-2">
                        ₹{data[3]?.attributes?.oldPrice}
                    </span>
                    </p>
                    <span className="text-eco-green text-xs">{data[3]?.attributes?.offer+"% off"}</span>
                </div>
            </Link>
        </div>
        <div className="bg-eco-light-grey text-eco-off-black relative">
            <Link to={`/product/${data[4].id}`}>
            <div className="relative">
            <img src={data[4]?.attributes?.thumbnail?.data?.attributes?.url} alt="no image" className="w-full h-[180px] object-cover " />
                <span className={`absolute bottom-2 right-3 flex items-center text-eco-white text-sm px-1 xl:py-1 rounded-md 
                    ${data[4]?.attributes?.rating >= 4 ? "bg-eco-green" : data[4]?.attributes?.rating >=3 ? "bg-eco-yellow" : "bg-eco-orange" }`}><AiTwotoneStar/> {data[4]?.attributes?.rating}
                </span>
            </div>
                <h3 className="pt-4 px-4 font-medium text-sm">{data[4]?.attributes?.title}</h3>
                <div className="flex justify-between py-2 px-4 text-base">
                    <p className="">
                    ₹{data[4]?.attributes?.price}
                    <span className="text-sm line-through text-eco-grey pl-2">
                        ₹{data[4]?.attributes?.oldPrice}
                    </span>
                    </p>
                    <span className="text-eco-green text-xs">{data[4]?.attributes?.offer+"% off"}</span>
                </div>
            </Link>
        </div>
    </div>
    }
    </>
  )
}

export default Collage