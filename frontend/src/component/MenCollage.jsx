/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";


const data = [
    { id: 1, name: "Shoes", image: "../p1.png", price:"10000", rating:"4.5", prevPrice: "15000" },
    { id: 2, name: "Shirt", image: "../p2.png", price:"10000", rating:"3.5", prevPrice: "15000" },
    { id: 3, name: "Jeans", image: "../p3.png", price:"10000", rating:"5.0", prevPrice: "15000" },
    { id: 4, name: "Jeans", image: "../p3.png", price:"10000", rating:"5.0", prevPrice: "15000" },
    { id: 5, name: "Bag", image: "../p4.png", price:"10000", rating:"1.5", prevPrice: "15000" },
  ];

const Collage = () => {
  return (
    <div className="grid md:grid-cols-4 gap-4 max-w-[1000px] m-auto">
        <div className="row-span-2 col-span-2 bg-eco-light-grey text-eco-off-black relative">
            <Link>
            <img src={data[0].image} alt="no image" className="w-full h-[460px] object-cover " />
                <h3 className="pt-4 px-4 font-medium text-lg">{data[0].name}</h3>
                <p className="py-2 px-4 font-normal text-base">
                    ₹{data[0].price}
                    <span className="text-sm line-through text-eco-grey">
                        ₹{data[0].prevPrice}
                    </span>
                </p>
            </Link>
        </div>
        <div className="bg-eco-light-grey text-eco-off-black relative">
            <Link>
            <img src={data[0].image} alt="no image" className="w-full h-[180px] object-cover " />
                <h3 className="pt-4 px-4 font-medium text-lg">{data[0].name}</h3>
                <p className="py-2 px-4 font-normal text-base">
                    ₹{data[0].price}
                    <span className="text-sm line-through text-eco-grey">
                        ₹{data[0].prevPrice}
                    </span>
                </p>
            </Link>
        </div>
        <div className="bg-eco-light-grey text-eco-off-black relative">
            <Link>
            <img src={data[0].image} alt="no image" className="w-full h-[180px] object-cover " />
                <h3 className="pt-4 px-4 font-medium text-lg">{data[0].name}</h3>
                <p className="py-2 px-4 font-normal text-base">
                    ₹{data[0].price}
                    <span className="text-sm line-through text-eco-grey">
                        ₹{data[0].prevPrice}
                    </span>
                </p>
            </Link>
        </div>
        <div className="bg-eco-light-grey text-eco-off-black relative">
            <Link>
            <img src={data[0].image} alt="no image" className="w-full h-[180px] object-cover " />
                <h3 className="pt-4 px-4 font-medium text-lg">{data[0].name}</h3>
                <p className="py-2 px-4 font-normal text-base">
                    ₹{data[0].price}
                    <span className="text-sm line-through text-eco-grey">
                        ₹{data[0].prevPrice}
                    </span>
                </p>
            </Link>
        </div>
        <div className="bg-eco-light-grey text-eco-off-black relative">
            <Link>
            <img src={data[0].image} alt="no image" className="w-full h-[180px] object-cover " />
                <h3 className="pt-4 px-4 font-medium text-lg">{data[0].name}</h3>
                <p className="py-2 px-4 font-normal text-base">
                    ₹{data[0].price}
                    <span className="text-sm line-through text-eco-grey">
                        ₹{data[0].prevPrice}
                    </span>
                </p>
            </Link>
        </div>
    </div>
  )
}

export default Collage