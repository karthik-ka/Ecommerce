import Products from "./Products";
const data = [
    { id: 1, name: "Shoes", image: "../p1.png", price:"10000", prevPrice: "15000" },
    { id: 2, name: "Shirt", image: "../p2.png", price:"10000", prevPrice: "15000" },
    { id: 3, name: "Jeans", image: "../p3.png", price:"10000", prevPrice: "15000" },
    { id: 4, name: "Bag", image: "../p4.png", price:"10000", prevPrice: "15000" },
  ];

const FeaturedProducts = () => {
  return (
    <section className="py-16">
      <h1 className="pb-16 text-center text-3xl font-bold text-eco-off-black">Featured Products</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {
            data.map((item,idx)=>{
                return <Products products={item} key={idx} />
            })
        }
      </div>
    </section>
  );
};

export default FeaturedProducts;
