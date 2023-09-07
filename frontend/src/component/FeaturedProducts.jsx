import useFetch from "../hooks/useFetch";
import ProductsCard from "./ProductCard";
import {Procuct_skelton} from "./Shimmer"

const FeaturedProducts = () => {

  const {data, loading} = useFetch("/products?populate=*&filters[type][$eq]=featured")

  return (
    <section className="pb-8 md:pb-16 pt-32">
      <h1 className="pb-8 text-center text-3xl font-bold text-eco-off-black">Featured Products</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 m-auto xl:w-[1180px]">
        { loading ? <Procuct_skelton card={4} /> :
            data.map((item)=>{
                return <ProductsCard products={item} key={item.id} />
            })
        }
      </div>
    </section>
  
  );
};

export default FeaturedProducts;
