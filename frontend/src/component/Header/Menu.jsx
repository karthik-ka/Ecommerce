/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import ExpandMoreRoundedIcon from "@mui/icons-material/ExpandMoreRounded";

const data = [
	{ id: 1, name: "Home", url: "/" },
	{ id: 2, name: "About", url: "/about" },
	{ id: 3, name: "Categories", subMenu: true },
	{ id: 4, name: "Contact", url: "/contact" },
];

const subMenuData = [
	{ id: 1, name: "Sale", url:"/products/sales", doc_count: 11 },
	{ id: 2, name: "New Season", url:"/products/new", doc_count: 8 },
	{ id: 3, name: "Men", url:"/products/men", doc_count: 64 },
	{ id: 4, name: "Women", url:"/products/women", doc_count: 58 },
	{ id: 5, name: "Shoes", url:"/products/shoes", doc_count: 70 },
	{ id: 6, name: "Accessories", url:"/products/accessories", doc_count: 15 },
];

const Menu = ({ setShowCatMenu, showCatMenu }) => {
	return (
		<ul className="hidden md:flex items-center gap-8 text-sm font-medium text-eco-off-black">
			{data.map((item) => {
				return (
					<Link to={item.url} key={item.id}>
						{item.subMenu ? (
							<li
								className=" hover:text-eco-black ease-in-out duration-300"
								onClick={() => setShowCatMenu(!showCatMenu)}
							>
								{item.name} <ExpandMoreRoundedIcon />
								{showCatMenu && (
									<ul className="absolute top-[80px] bg-eco-off-white rounded-b-md">
										{subMenuData.map((item) => {
											return (
                                    <Link to={item.url} key={item.id}>
										<li className="flex w-48 h-8 m-1 p-4 bg-eco-off-white items-center justify-between">
											{item.name}
											<span className="">{item.doc_count}</span>
										</li>
                                    </Link>
											);
										})}
									</ul>
								)}
							</li>
						) : (
							<li className="hover:text-eco-black ease-in-out duration-300">
								<Link to={item.url}> {item.name} </Link>
							</li>
						)}
					</Link>
				);
			})}
		</ul>
	);
};

export default Menu;
