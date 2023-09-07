/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import  useFetch  from "../hooks/useFetch";
import { useState } from "react";
import {Shimmer_1, Shimmer_4} from "./Shimmer"
import {AiTwotoneStar} from "react-icons/ai"

const Collage = () => {

    const [category, setCategory] = useState("tshirt");
    
    const {data, loading} = useFetch(`/products?populate=*&filters[$and][0][categories][title][$notContains]=women&filters[$and][1][isNew][$eq]=true&filters[$and][2][sub_categories][title][$eq]=${category}`)
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
        <div className="grid md:grid-cols-4 gap-2 max-w-[1000px] m-auto">
            {loading ? <Shimmer_1 /> :
                <div className="row-span-2 col-span-2 bg-eco-light-grey text-eco-off-black relative">
                    <Link to={`/product/${data[0].id}`}>
                        <div className="relative">
                            <img src={data[0]?.attributes?.thumbnail?.data?.attributes?.url} alt="no image" className="md:row-span-2 md:col-span-2 w-full h-[180px] md:h-[560px] xl:h-[600px] object-cover bg-eco-light-grey text-eco-off-black relative" />
                            <span className={`absolute bottom-2 right-3 flex items-center text-eco-white text-sm px-1 xl:py-1 rounded-md 
                                ${data[0]?.attributes?.rating >= 4 ? "bg-eco-green" : data[0]?.attributes?.rating >=3 ? "bg-eco-yellow" : "bg-eco-orange" }`}><AiTwotoneStar/> {data[0]?.attributes?.rating}
                            </span>
                        </div>
                        <h3 className="pt-4 px-4 font-medium text-lg">{data[0]?.attributes?.title}</h3>
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
            }

            {loading ? <Shimmer_4 /> : data.slice(1).map((item)=>{
                return(
                    <div className="bg-eco-light-grey text-eco-off-black relative" key={item.id}>
                        <Link to={`/product/${item.id}`}>
                            <div className="relative">
                                <img src={item?.attributes?.thumbnail?.data?.attributes?.url} alt="no image" className="w-full h-[230px] object-cover object-top " />
                                <span className={`absolute bottom-2 right-3 flex items-center text-eco-white text-sm px-1 xl:py-1 rounded-md 
                                    ${item?.attributes?.rating >= 4 ? "bg-eco-green" : item?.attributes?.rating >=3 ? "bg-eco-yellow" : "bg-eco-orange" }`}><AiTwotoneStar/> {item?.attributes?.rating}
                                </span>
                            </div>

                            <h3 className="pt-4 px-4 font-medium text-sm">{item?.attributes?.title}</h3>
                            <div className="flex justify-between py-2 px-4 text-base">
                                <p className="">
                                ₹{item?.attributes?.price}
                                <span className="text-sm line-through text-eco-grey pl-2">
                                    ₹{item?.attributes?.oldPrice}
                                </span>
                                </p>
                                <span className="text-eco-green text-xs">{item?.attributes?.offer+"% off"}</span>
                            </div>
                        </Link>
                    </div>
                )
            })}
        </div>
    </>
    )
}

export default Collage