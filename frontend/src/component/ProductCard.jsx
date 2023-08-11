/* eslint-disable react/prop-types */
import { Link, useParams } from "react-router-dom";
import {AiTwotoneStar} from "react-icons/ai"



const ProductCard = ({ products }) => {

	const { attributes :{title, offer, price, oldPrice, rating, thumbnail}} = products;

	return (
		<Link to={`/product/${products.id}`} className="bg-eco-light-grey text-eco-off-black rounded-xl overflow-hidden">
			<div className="relative">
				<img src={thumbnail?.data?.attributes?.url} alt="no image" className="w-full h-[180px] xl:h-[280px] object-cover object-top" />
				<span className={`absolute bottom-2 right-2 flex items-center text-eco-white text-sm px-1 xl:py-1 rounded-md 
					${rating >= 4 ? "bg-eco-green" : rating >=3 ? "bg-eco-yellow" : "bg-eco-orange" }`}><AiTwotoneStar/> {rating}
				</span>
			</div>
			<h3 className="pt-4 px-4 font-medium text-s">{title}</h3>
			<div className="flex justify-between py-2 px-4 text-base">
				<p className="">
					₹{price}
					<span className="text-sm line-through text-eco-grey pl-2">
						₹{oldPrice}
					</span>
				</p>
				<span className="text-eco-green">{offer+"% off"}</span>
			</div>
		</Link>
	);
};

export default ProductCard;
