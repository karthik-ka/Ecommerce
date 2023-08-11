import { useState } from "react";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import StarIcon from "@mui/icons-material/Star";
import useFetch from "../hooks/useFetch";
import { useParams } from "react-router-dom";
import { Shimmer_4 } from "../component/Shimmer";

const Product = () => {
	const {id} = useParams();

	const {data, loading} = useFetch(`/products?populate=*&sort=id:ASC&filters[$and][0][id][$eq]=${id}`)

	const [img, setImg] = useState();
	const [active, setActive] = useState("");

	return (
		<section className="max-w-[90vw] md:max-w-[700px] lg:max-w-[900px] xl:max-w-[1200px] m-auto ">
			<div className="lg:flex py-4 lg:py-16 justify-around">

				{/* -----------------------Image section-------------------------- */}
				<div className="flex flex-col lg:flex-row">
					<div className="flex gap-2 w-20 order-2 lg:flex-col my-2 lg:my-0 lg:mx-2">
						{loading ? <Shimmer_4 /> :data[0]?.attributes?.image?.data?.map((item)=>{
							return (<img src={item?.attributes?.url} key={item.id} alt="" className="rounded-xl cursor-pointer" onClick={() => setImg(item?.attributes?.url)} />);
						})}
					</div>
					<div className="flex lg:order-2 lg:w-[30rem] lg:h-[35rem] rounded-xl object-cover overflow-hidden">
							<img src={img} alt="" className="" />
					</div>
				</div>

				{/* -----------------------Detail section-------------------------- */}
				<div className="text-eco-off-black lg:w-[28rem]">
					<div className="">
						<h1 className="text-3xl font-semibold pt-4 md:py-0">
							{data[0]?.attributes?.title}
						</h1>
						<p className="text-sm font-medium text-eco-grey my-2">
							{data[0]?.attributes?.subtitle}
						</p>
						<span className="text-eco-white text-sm bg-eco-off-black px-2 py-1 rounded-lg align-middle">
							<StarIcon />
							{data[0]?.attributes?.rating}
						</span>
					</div>
					<hr className="opacity-20 my-4" />
					<div className="">
						<h2 className="text-xl font-medium">
							MRP : ₹{data[0]?.attributes?.price}
							<span className="text-base line-through">₹{data[0]?.attributes?.oldPrice}</span>
						</h2>
						<span className="text-eco-grey text-sm">
							incl. of taxes <br /> (Also includes all applicable duties)
						</span>
					</div>

					<div className="mt-8">
						<span className="flex text-md font-semibold justify-between">
							<h2>Select Size</h2>{" "}
							<h2 className="text-eco-grey cursor-pointer">Select Guide</h2>
						</span>
						<div className="flex flex-wrap gap-1 my-4">
							{data[0]?.attributes?.size?.data?.map((sizes)=>{
								return <button key={sizes.id} className={`w-14 h-8 border-2 rounded-md ${active === sizes.size ? "border-eco-black" : "border-eco-light-grey" } ${!sizes.enabled && "bg-eco-light-grey opacity-70 cursor-not-allowed"} shadow-sm transition ease-in hover:border-eco-black`} onClick={()=>setActive(sizes?.size)} >{sizes?.size}</button>
							})}
					</div>
					</div>
					<div className="md:flex gap-2 lg:flex-col ">
						<button className="text-eco-white bg-eco-off-black text-md my-1 w-full h-14 rounded-full hover:bg-eco-light-black transition ease-in">
							Add to Cart
						</button>
						<button className="bg-eco-white border text-md my-1 w-full h-14 rounded-full hover:text-eco-grey transition ease-in">
							Whishilst <FavoriteBorderIcon />{" "}
						</button>
					</div>
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
