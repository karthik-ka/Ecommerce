import useFetch from "../hooks/useFetch";
import ProductsCard from "./ProductCard";
import {Shimmer_4} from "./Shimmer"

const FeaturedProducts = () => {

  const {data, loading, error} = useFetch("/products?populate=*&filters[type][$eq]=featured")

  return (
    <section className="pb-8 md:pb-16 pt-32">
      <h1 className="pb-8 text-center text-3xl font-bold text-eco-off-black">Featured Products</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 m-auto">
        { loading ? <Shimmer_4 /> :
            data.map((item)=>{
                return <ProductsCard products={item} key={item.id} />
            })
        }
      </div>
    </section>
  
  );
};

export default FeaturedProducts;
