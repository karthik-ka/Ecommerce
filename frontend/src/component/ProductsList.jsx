/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import {AiTwotoneStar} from "react-icons/ai"
import useFetch from "../hooks/useFetch";
import { Shimmer_4 } from "./Shimmer";



const ProductsList = ({categId, subCategId}) => {

	const {data, loading} = useFetch(`/products?populate=*&filters[categories][id][$eq]=${categId}&filters[sub_categories][id][$eq]=${subCategId}`)
	return (
		<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 pt-3">
			{ loading ? <Shimmer_4 /> :
			data.map((items)=>{
					console.log("items==",items);
					return(
						<Link to={`/product/${items.id}`} key={items.id} className="bg-eco-light-grey text-eco-off-black rounded-xl overflow-hidden">
							<div className="relative">
								<img src={items?.attributes?.thumbnail?.data?.attributes?.url} alt="no image" className="w-full h-[180px] xl:h-[280px] object-cover object-top" />
								<span className={`absolute bottom-2 right-2 flex items-center text-eco-white text-sm px-1 xl:py-1 rounded-md 
									${items?.attributes?.rating >= 4 ? "bg-eco-green" : items?.attributes?.rating >=3 ? "bg-eco-yellow" : "bg-eco-orange" }`}><AiTwotoneStar/> {items?.attributes?.rating}
								</span>
							</div>
							<h3 className="pt-4 px-4 font-medium text-s">{items?.attributes?.title.slice(0,23)}</h3>
							<div className="flex justify-between py-2 px-4 text-base">
								<p className="">
									₹{items?.attributes?.price}
									<span className="text-sm line-through text-eco-grey pl-2">
										₹{items?.attributes?.oldPrice}
									</span>
								</p>
								<span className="text-eco-green">{items?.attributes?.offer+"% off"}</span>
							</div>
						</Link>
					)
				})
			}
			
		</div>
	);
};

export default ProductsList;
