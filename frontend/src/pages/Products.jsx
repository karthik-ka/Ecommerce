import img from "../assets/slide-1.jpg"
import useFetch from "../hooks/useFetch"
import {Shimmer_4} from "../component/Shimmer"
import { useState } from "react";
import ProductsList from "../component/ProductsList";

const Products = () => {

   const {data} = useFetch(`/categories?populate=*`);

   const [categoryId, setCategoryId] = useState([]);
   const [subCategoryId, setSubCategoryId] = useState([]);

   const handleChange = (e) =>{
      const value = e.target.value;
      const isChecked = e.target.checked;
      setCategoryId(isChecked ? [...categoryId, value] : categoryId.filter((item)=> item !== value))
   }
   const subCategoryChange = (e) =>{
      const value = e.target.value;
      const isChecked = e.target.checked;
      setSubCategoryId(isChecked ? [...subCategoryId, value] : subCategoryId.filter((item)=> item !== value))
      console.log("sub===",subCategoryId);
   }

	return (
		<section className="max-w-[90vw] md:max-w-[700px] lg:max-w-[900px] xl:max-w-[1280px] m-auto py-6">
			<div className="flex justify-between">
				{/* ======================Left section========================= */}
				<div className="hidden md:block pl-2">
               <div className="checkbox pb-8 pr-24 ">
                     <h1 className="font-semibold py-2">Gender</h1>
                     {data?.map((item)=>{
                        return(
                           <div className="flex items-center" key={item.id}>
                              <input type="checkbox" id={item.id} value={item.id} onChange={handleChange} className="cursor-pointer"/>
                              <label htmlFor={item.id} className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">{item?.attributes?.title.charAt(0).toUpperCase() + item?.attributes?.title.slice(1)}</label>
                           </div>
                        )
                     })}
               </div>

               <div className="checkbox pb-8">
                  <h1 className="font-semibold py-2">Category</h1>
                  {data[0]?.attributes?.sub_categories?.data?.map((item)=>{
                     return(
                        <div className="flex items-center" key={item.id}>
                           <input type="checkbox" value={item.id} onChange={subCategoryChange} className="cursor-pointer"/>
                           <label className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">{item?.attributes?.title.charAt(0).toUpperCase() + item?.attributes?.title.slice(1)}</label>
                        </div>
                     )
                  })}
               </div>

               <div className="checkbox">
                  <h1 className="font-semibold py-2">Price Range</h1>
                  <div className="flex items-center">
                     <input type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                     <label className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">100-199</label>
                  </div>
                  <div className="flex items-center">
                     <input type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                     <label className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">200-499</label>
                  </div>
                  <div className="flex items-center">
                     <input type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                     <label className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">500-999</label>
                  </div>
                  <div className="flex items-center">
                     <input type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                     <label className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Above 1000</label>
                  </div>
               </div>
				</div>
				{/* =====================Right section========================== */}
				<div className="right">
               <img src={img} alt="" className="h-24 lg:h-40 w-[100vw] object-cover object-top rounded-xl" />
               <ProductsList categId={categoryId} subCategId={subCategoryId} />
            </div>
			</div>
		</section>
	);
};

export default Products;
