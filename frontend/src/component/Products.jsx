/* eslint-disable react/prop-types */
import { useState } from "react";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { Link } from "react-router-dom";


const Products = ({ products }) => {

	const [heart, setHeart] = useState(false);

	return (
		<Link to={`/product/${products.id}`} className="bg-eco-light-grey text-eco-off-black rounded-xl overflow-hidden relative">
			<img src={products.image} alt="no image" className="w-full h-[180px] md:h-[280px] object-cover" />
			{!heart ? (
				<FavoriteBorderIcon
					className="absolute top-4 right-4 cursor-pointer ease-out"
					onClick={() => setHeart(true)}
				/>
			) : (
				<FavoriteIcon
					className="absolute top-4 right-4 text-eco-red cursor-pointer ease-out"
					onClick={() => setHeart(false)}
				/>
			)}

			<h3 className="pt-4 px-4 font-medium text-lg">{products.name}</h3>
			<p className="py-2 px-4 font-normal text-base">
				₹{products.price}
				<span className="text-sm line-through text-eco-grey">
					₹{products.prevPrice}
				</span>
			</p>
		</Link>
	);
};

export default Products;
