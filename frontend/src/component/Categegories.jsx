import { Link } from "react-router-dom";

const Categegories = () => {
  return (
    <section className="md:py-16 ">
      <h1 className="pb-16 text-center text-3xl font-bold text-eco-off-black">
        Shop by Category
      </h1>
      <div className="grid md:grid-cols-4 md:grid-rows-2 gap-2">
       {/* ! image-1  */}
        <Link to={"/products"} className="relative">
          <img src="https://images.unsplash.com/photo-1574634534894-89d7576c8259?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=464&q=80" alt=""
            className="w-full h-[300px] object-cover object-bottom hover:brightness-50 transition ease-in"
          />
          <span className="absolute top-[40%] left-[40%] text-eco-white font-semibold backdrop-blur-sm border-2 rounded-sm px-4 py-1">
            SALE
          </span>
        </Link>
        {/* ! image-2  */}
        <Link to={"/products"} className="md:row-span-2 relative">
          <img src="https://images.unsplash.com/photo-1597019558926-3eef445fdf60?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80" alt=""
            className="h-[610px] object-cover hover:brightness-50 transition ease-in"
          />
          <span className="absolute top-[45%] left-[30%] text-eco-white font-semibold backdrop-blur-sm border-2 rounded-sm px-4 py-1">
            NEW SEASON
          </span>
        </Link>
        {/* ! image-3  */}
        <Link to={"/products"} className="relative">
          <img src="https://images.pexels.com/photos/2036646/pexels-photo-2036646.jpeg?auto=compress&cs=tinysrgb&w=1600" alt=""
            className="w-full h-[300px] object-cover object-top hover:brightness-50 transition ease-in"
          />
          <span className="absolute top-[40%] left-[35%] text-eco-white font-semibold backdrop-blur-sm border-2 rounded-sm px-4 py-1">
            WOMEN
          </span>
        </Link>
        
        {/* ! image-4  */}
        <Link to={"/products"} className="relative">
          <img src="https://images.pexels.com/photos/13002684/pexels-photo-13002684.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt=""
            className="w-full h-[300px] object-cover object-top hover:brightness-50 transition ease-in"
          />
          <span className="absolute top-[40%] left-[30%] text-eco-white font-semibold backdrop-blur-sm border-2 rounded-sm px-4 py-1">
            ACCESSORIES
          </span>
        </Link>
        {/* ! image-5  */}
        <Link to={"/products"} className="relative">
          <img src="https://images.pexels.com/photos/17651315/pexels-photo-17651315/free-photo-of-portrait-of-a-man-standing-in-a-city.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt=""
            className="w-full h-[300px] object-cover object-center hover:brightness-50 transition ease-in"
          />
          <span className="absolute top-[40%] left-[40%] text-eco-white font-semibold backdrop-blur-sm border-2 rounded-sm px-4 py-1">
            MEN
          </span>
        </Link>
        {/* ! image-6  */}
        <Link to={"/products"} className="md:col-span-2 md:col-start-3 relative">
          <img src="https://images.unsplash.com/photo-1518002171953-a080ee817e1f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80" alt=""
            className="h-[300px] w-full object-cover hover:brightness-50 transition ease-in"
          />
          <span className="absolute top-[40%] left-[40%] text-eco-white font-semibold backdrop-blur-sm border-2 rounded-sm px-4 py-1">
            SHOES
          </span>
        </Link>
      </div>
    </section>
  );
};

export default Categegories;
