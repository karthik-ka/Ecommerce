import { useState } from "react";
import useFetch from "../hooks/useFetch";
import {useDispatch} from "react-redux"
import {addItems} from "../utils/cartSlice";
import { addListItem } from "../utils/listSlice";
import { useParams } from "react-router-dom";

import { Shimmer_4 } from "../component/Shimmer";

import {AiTwotoneStar} from "react-icons/ai"
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";


const Product = () => {
	const {id} = useParams();

	const {data, loading} = useFetch(`/products?populate=*&sort=id:ASC&filters[$and][0][id][$eq]=${id}`)
	
	const [img, setImg] = useState(null); 
	const [active, setActive] = useState("");
	
	const dispatch = useDispatch();
	const addProductItem = (item) => {
		dispatch(addItems(item))
	}
	const addList = (item) => {
		dispatch(addListItem(item))
	}

	return (
		<section className="max-w-[90vw] md:max-w-[700px] lg:max-w-[900px] xl:max-w-[1200px] m-auto ">
			<div className="lg:flex py-4 lg:py-16 justify-around">

				{/* -----------------------Image section-------------------------- */}
				<div className="flex flex-col lg:flex-row overflow-hidden">
					<div className="overflow-x-scroll order-2">
						<div className="flex gap-2 w-20 lg:flex-col my-2 lg:my-0 lg:mx-2">
							{loading ? <Shimmer_4 /> :data[0]?.attributes?.image?.data?.map((item)=>{
								return (<img src={item?.attributes?.url} key={item.id} alt="" className="rounded-xl cursor-pointer" onClick={() => setImg(item?.attributes?.url)} />);
							})}
						</div>
					</div>
					<div className="flex lg:order-2 w-full h-[28rem] lg:w-[20rem] lg:h-[30rem] xl:w-[30rem] xl:h-[35rem] rounded-xl overflow-hidden">
						<img src={img === null ? data[0]?.attributes?.image?.data[0]?.attributes?.url : img} alt="" className="object-cover w-full" />
					</div>
				</div>

				{/* -----------------------Detail section-------------------------- */}
				<div className="text-eco-off-black lg:w-[28rem]">
					{/* ======= Titel | subtitle | rating | offer ====== */}
					<div>
						<h1 className="text-3xl font-semibold pt-4 md:py-0">
							{data[0]?.attributes?.title}
						</h1>
						<p className="text-sm font-medium text-eco-grey my-2">
							{data[0]?.attributes?.subtitle}
						</p>
						<div className="flex justify-between">
							<span className={`flex items-center text-eco-white text-sm px-1 xl:py-1 rounded-md w-max
								${data[0]?.attributes?.rating >= 4 ? "bg-eco-green" : data[0]?.attributes?.rating >=3 ? "bg-eco-yellow" : "bg-eco-orange" }`}>
								<AiTwotoneStar/> {data[0]?.attributes?.rating}
							</span>
							<span className="text-eco-green">{data[0]?.attributes?.offer+"% off"}</span>
						</div>
					</div>
					<hr className="opacity-20 my-4" />
					{/* ======= price | oldprice ====== */}
					<div className="">
						<h2 className="text-xl font-medium">
							MRP : ₹{data[0]?.attributes?.price}
							<span className="text-base line-through pl-2">₹{data[0]?.attributes?.oldPrice}</span>
						</h2>
						<span className="text-eco-grey text-sm">
							incl. of taxes <br /> (Also includes all applicable duties)
						</span>
					</div>
					{/* ======= size ====== */}
					<div className="mt-8">
						<span className="flex text-md font-semibold justify-between">
							<h2>Select Size</h2>{" "}
							<h2 className="text-eco-grey cursor-pointer">Select Guide</h2>
						</span>
						<div className="flex flex-wrap gap-2 my-4">
							{data[0]?.attributes?.size?.data?.map((sizes,idx)=>{
								return <button key={idx} className={`w-14 h-10 border-2 rounded-md ${active === sizes.size ? "border-eco-black" : "border-eco-light-grey" } ${!sizes.enabled && "bg-eco-light-grey opacity-70 cursor-not-allowed"} shadow-sm transition ease-in hover:border-eco-black`} onClick={()=>setActive(sizes?.size)} >{sizes?.size}</button>
							})}
						</div>
					</div>
					{/* ======= Buttons ====== */}
					<div className="md:flex gap-2 lg:flex-col ">
						<button className="text-eco-white bg-eco-off-black text-md my-1 w-full h-14 rounded-full hover:bg-eco-light-black transition ease-in" onClick={()=>addProductItem(data[0])}>
							Add to Cart
						</button>
						<button className="bg-eco-white border text-md my-1 w-full h-14 rounded-full hover:text-eco-grey transition ease-in" onClick={()=>addList(data[0])}>
							Whishilst <FavoriteBorderIcon />{" "}
						</button>
					</div>
					{/* ======= discription ====== */}
					<div className=" py-8">
						<h2 className="text-md font-semibold">Product Details</h2>
						<p className="text-sm py-2 leading-relaxed text-justify">
							{data[0]?.attributes?.description}
						</p>
					</div>
				</div>

			</div>
		</section>
	);
};

export default Product;
