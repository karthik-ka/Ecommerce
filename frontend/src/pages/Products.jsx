import img from "../assets/slide-1.jpg"
import useFetch from "../hooks/useFetch"
import { useState } from "react";
import ProductsList from "../component/ProductsList";
import { useParams } from "react-router-dom";

const Products = () => {

   const {id} =  useParams();

   const {data} = useFetch(`sub-categories?filters[categories][id][$eq]=${id}`);

   const [subCategoryId, setSubCategoryId] = useState(2);
   const [priceRange, setPriceRange] = useState("");

   // const CategoryChange = (e) =>{
   //    const value = e.target.value;
   //    const isChecked = e.target.checked;
   //    setCategoryId(isChecked ? [...categoryId, value] : categoryId.filter((item)=> item !== value))
   //    console.log("catId===",categoryId);
   // }
   const subCategoryChange = (e) =>{
      const value = e.target.value;
      setSubCategoryId(value )
   }

	return (
		<section className="max-w-[90vw] md:max-w-[700px] lg:max-w-[900px] xl:max-w-[1280px] m-auto py-6">
			<div className="flex justify-between">
				{/* ======================Left section========================= */}
				<div className="hidden md:block pl-2">
               {/* <div className=" pb-8 pr-24 ">
                     <h1 className="font-semibold py-2">Gender</h1>
                     {data[0]?.attributes?.categories?.data?.map((item)=>{
                     return(
                        <div className="flex items-center" key={item.id}>
                           <input type="radio" value={item.id}  onChange={CategoryChange}/>
                           <label className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">{item?.attributes?.title.charAt(0).toUpperCase() + item?.attributes?.title.slice(1)}</label>
                        </div>
                        )
                     })}
               </div> */}

               <div className=" pb-8 pr-24">
                  <h1 className="font-semibold py-2">Category</h1>
                  {data?.map((item)=>{
                        return(
                           <div className="flex items-center" key={item.id} onChange={subCategoryChange}>
                              <input id="default-radio-1" type="radio" value={item.id} name="default-radio" />
                              <label htmlFor={item.id} className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">{item?.attributes?.title.charAt(0).toUpperCase() + item?.attributes?.title.slice(1)}</label>
                           </div>
                        )
                  })}
               </div>

               <div className="checkbox">
                  <h1 className="font-semibold py-2">Price Range</h1>
                  <div className="flex items-center">
                     <input id="default-radio-1" type="radio" value="L-H" name="default-radio" onChange={()=> setPriceRange("L-H")}/>
                     <label className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Low to high</label>
                  </div>
                  <div className="flex items-center">
                     <input id="default-radio-1" type="radio" value="H-L" name="default-radio" onChange={()=> setPriceRange("H-L")}/>
                     <label className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">High to low</label>
                  </div>
               </div>
				</div>
				{/* =====================Right section========================== */}
				<div className="right">
               <img src={img} alt="" className="h-24 lg:h-40 w-[100vw] object-cover object-top rounded-xl" />
               <ProductsList categId={id} subCategId={subCategoryId} priceRange={priceRange}/>
            </div>
			</div>
		</section>
	);
};

export default Products;
