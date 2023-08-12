/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import {AiTwotoneStar} from "react-icons/ai"



const ProductCard = ({ products }) => {

	// const { attributes :{price, oldPrice, rating, thumbnail}} = products;

	return (
		<Link to={`/product/${products.id}`} className="bg-eco-light-grey text-eco-off-black rounded-xl overflow-hidden">
			<div className="relative">
				<img src={products?.attributes?.thumbnail?.data?.attributes?.url} alt="no image" className="w-full h-[180px] xl:h-[280px] object-cover object-top" />
				<span className={`absolute bottom-2 right-2 flex items-center text-eco-white text-sm px-1 xl:py-1 rounded-md 
					${products?.attributes?.rating >= 4 ? "bg-eco-green" : products?.attributes?.rating >=3 ? "bg-eco-yellow" : "bg-eco-orange" }`}><AiTwotoneStar/> {products?.attributes?.rating}
				</span>
			</div>
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
