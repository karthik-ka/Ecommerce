import { useState } from "react";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import StarIcon from "@mui/icons-material/Star";

const data = { id: 1, title: "Nike jordan 5xl", subtitle: "Running shoes for men", rating: "4.5", image: {
	img1: "../p1.png",
	img2: "../p2.png",
	img3: "../p3.png",
	img4: "../p4.png",
	}, price: "10000", prevPrice: "15000", };


const Product = () => {
	const [image, setImage] = useState("img1");
	const [active, setActive] = useState("");

	return (
		<section className="max-w-[90vw] md:max-w-[700px] lg:max-w-[900px] xl:max-w-[1200px] m-auto ">
			<div className="lg:flex py-4 lg:py-16 justify-around">
				{/* -----------------------Image section-------------------------- */}

				<div className="flex flex-col lg:flex-row">
					<div className="flex gap-2 w-20 order-2 lg:flex-col my-2 lg:my-0 lg:mx-2">
						<img src={data.image.img1} alt="" className="rounded-xl cursor-pointer" onClick={() => setImage("img1")} />
						<img src={data.image.img2} alt="" className="rounded-xl cursor-pointer" onClick={() => setImage("img2")} />
						<img src={data.image.img3} alt="" className="rounded-xl cursor-pointer" onClick={() => setImage("img3")} />
						<img src={data.image.img4} alt="" className="rounded-xl cursor-pointer" onClick={() => setImage("img4")} />
					</div>
					<div className="flex lg:order-2 lg:w-[30rem] rounded-xl overflow-hidden">
							<img src={data.image[image]} alt="" className="" />
					</div>
				</div>

				{/* -----------------------Detail section-------------------------- */}
				<div className="text-eco-off-black lg:w-[28rem]">
					<div className="">
						<h1 className="text-3xl font-semibold pt-4 md:py-0">
							{data.title}
						</h1>
						<p className="text-sm font-medium text-eco-grey my-2">
							{data.subtitle}
						</p>
						<span className="text-eco-white text-sm bg-eco-off-black px-2 py-1 rounded-lg align-middle">
							<StarIcon />
							{data.rating}
						</span>
					</div>
					<hr className="opacity-20 my-4" />
					<div className="">
						<h2 className="text-xl font-medium">
							MRP : ₹{data.price}{" "}
							<span className="text-base line-through">₹{data.prevPrice}</span>
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
						<button className={`w-14 h-8 border-2 rounded-md ${active === "XS" ? "border-eco-black" : "border-eco-light-grey" } shadow-sm transition ease-in hover:border-eco-black`} onClick={(e)=>setActive(e.target.innerHTML)} >XS</button>
						<button className={`w-14 h-8 border-2 rounded-md ${active === "S" ? "border-eco-black" : "border-eco-light-grey" } shadow-sm transition ease-in hover:border-eco-black`} onClick={(e)=>setActive(e.target.innerHTML)} >S</button>
						<button className={`w-14 h-8 border-2 rounded-md ${active === "M" ? "border-eco-black" : "border-eco-light-grey" } shadow-sm transition ease-in hover:border-eco-black`} onClick={(e)=>setActive(e.target.innerHTML)} >M</button>
						<button className={`w-14 h-8 border-2 rounded-md ${active === "L" ? "border-eco-black" : "border-eco-light-grey" } shadow-sm transition ease-in hover:border-eco-black`} onClick={(e)=>setActive(e.target.innerHTML)} >L</button>
						<button className={`w-14 h-8 border-2 rounded-md ${active === "XL" ? "border-eco-black" : "border-eco-light-grey" } shadow-sm transition ease-in hover:border-eco-black`} onClick={(e)=>setActive(e.target.innerHTML)} >XL</button>
						<button className={`w-14 h-8 border-2 rounded-md ${active === "2XL" ? "border-eco-black" : "border-eco-light-grey" } shadow-sm transition ease-in hover:border-eco-black`} onClick={(e)=>setActive(e.target.innerHTML)} >2XL</button>
						<button className={`w-14 h-8 border-2 rounded-md ${active === "3XL" ? "border-eco-black" : "border-eco-light-grey" } shadow-sm transition ease-in hover:border-eco-black`} onClick={(e)=>setActive(e.target.innerHTML)} >3XL</button>
						<button className={`w-14 h-8 border-2 rounded-md ${active === "4XL" ? "border-eco-black" : "border-eco-light-grey" } shadow-sm transition ease-in hover:border-eco-black`} onClick={(e)=>setActive(e.target.innerHTML)} >4XL</button>
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
							Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi
							sequi, eligendi ipsam voluptatum tenetur quibusdam reprehenderit
							facere aliquam quam, quis nesciunt, voluptatibus iste id culpa
							sint sed accusamus blanditiis pariatur.
						</p>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Product;
