/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import {AiTwotoneStar} from "react-icons/ai"
import { useState } from "react";
import {useDispatch} from "react-redux"
import { addListItem, removeListItem } from "../utils/listSlice"

import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";


const ProductCard = ({ products }) => {
	const [heart, setHeart] = useState(false);

	const dispatch = useDispatch();

	return (
		<Link to={`/product/${products.id}`} className="bg-eco-light-grey text-eco-off-black rounded-xl overflow-hidden relative">
			<div className="relative">
				<img src={products?.attributes?.thumbnail?.data?.attributes?.url} alt="no image" className="w-full h-[180px] xl:h-[280px] object-cover object-top" />
				<span className={`absolute bottom-2 right-2 flex items-center text-eco-white text-sm px-1 xl:py-1 rounded-md 
					${products?.attributes?.rating >= 4 ? "bg-eco-green" : products?.attributes?.rating >=3 ? "bg-eco-yellow" : "bg-eco-orange" }`}><AiTwotoneStar/> {products?.attributes?.rating}
				</span>
			</div>
			{!heart ? (
				<FavoriteBorderIcon
				className="absolute top-4 right-4 cursor-pointer ease-out" onClick={(e) => {e.preventDefault(), dispatch(addListItem(products)), setHeart(true)}}/>
			) : (
				<FavoriteIcon
				className="absolute top-4 right-4 text-eco-red cursor-pointer ease-out" onClick={(e) => {e.preventDefault(), dispatch(removeListItem(products)), setHeart(false)}}/>
			)}
			<h3 className="pt-4 px-4 font-medium text-s">{products?.attributes?.title.slice(0,23)}</h3>
			<div className="flex justify-between py-2 px-4 text-base">
				<p className="">
					₹{products?.attributes?.price}
					<span className="text-sm line-through text-eco-grey pl-2">
						₹{products?.attributes?.oldPrice}
					</span>
				</p>
				<span className="text-eco-green">{products?.attributes?.offer+"% off"}</span>
			</div>
		</Link>
	);
};

export default ProductCard;
