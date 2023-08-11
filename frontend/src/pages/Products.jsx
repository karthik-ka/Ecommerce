import ProductCard from "../component/ProductCard" 
import img from "../assets/slide-1.jpg"
import useFetch from "../hooks/useFetch"
import {Shimmer_4} from "../component/Shimmer"

const Products = () => {

   const {data, loading} = useFetch(`/products?populate=*`);
   console.log("data===",data);

	return (
		<section className="max-w-[90vw] md:max-w-[700px] lg:max-w-[900px] xl:max-w-[1280px] m-auto py-6">
			<div className="flex justify-between">
				{/* ======================Left section========================= */}
				<div className="pl-4 pr-12 hidden md:block">
						<div className="radioButton pb-8">
							<h1 className="font-semibold py-2">FILTER</h1>
							<div>
                        <input type="radio" value="" name="default-radio" className="cursor-pointer"/>
                        <label className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Men</label>
							</div>
							<div className="flex items-center">
                        <input checked id="default-radio-2" type="radio" value="" name="default-radio" className="cursor-pointer"/>
                        <label className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Women</label>
							</div>
							<div className="flex items-center">
                        <input checked id="default-radio-2" type="radio" value="" name="default-radio" className="cursor-pointer"/>
                        <label className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Shoes</label>
							</div>
							<div className="flex items-center">
                        <input checked id="default-radio-2" type="radio" value="" name="default-radio" className="cursor-pointer"/>
                        <label className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Accessories</label>
							</div>
							<div className="flex items-center">
                        <input checked id="default-radio-2" type="radio" value="" name="default-radio" className="cursor-pointer"/>
                        <label className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">All</label>
							</div>
						</div>
                  <div className="checkbox">
                     <h1 className="font-semibold py-2">Price Range</h1>
                     <div className="flex items-center">
                        <input id="default-checkbox" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                        <label className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">100-199</label>
                     </div>
                     <div className="flex items-center">
                        <input id="default-checkbox" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                        <label className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">200-499</label>
                     </div>
                     <div className="flex items-center">
                        <input id="default-checkbox" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                        <label className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">500-999</label>
                     </div>
                     <div className="flex items-center">
                        <input id="default-checkbox" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                        <label className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Above 1000</label>
                     </div>
                  </div>
				</div>
				{/* =====================Right section========================== */}
				<div className="right">
               <img src={img} alt="" className="h-24 lg:h-40 w-[100vw] object-cover object-top rounded-xl" />
               <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 pt-3">
                  {loading? <Shimmer_4 /> :
                     data.map((item)=>{
                        return <ProductCard products={item} key={item.id} />
                     })
                  }
               </div>
            </div>
			</div>
		</section>
	);
};

export default Products;
