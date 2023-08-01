/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import ExpandMoreRoundedIcon from "@mui/icons-material/ExpandMoreRounded";

const data = [
  { id: 1, name: "Home", url: "/" },
  { id: 2, name: "About", url: "/about" },
  { id: 3, name: "Categories", subMenu: true },
  { id: 4, name: "Contact", url: "/contact" },
];

const subMenuData = [
  { id: 1, name: "Sale", doc_count: 11 },
  { id: 2, name: "New Season", doc_count: 8 },
  { id: 3, name: "Men", doc_count: 64 },
  { id: 4, name: "Women", doc_count: 58 },
  { id: 5, name: "Shoes", doc_count: 70 },
  { id: 6, name: "Accessories", doc_count: 15 },
];

const MonileMenu = ({ setShowCatMenu, showCatMenu, mobileMenu }) => {
  return (
    <div
      className={`${ mobileMenu === false && "hidden"} md:hidden  absolute top-0 left-0 bg-eco-off-white w-[60%] h-[100vh]`}>
      <Link to="/"> <img src={logo} alt="Brand-logo" className="w-24 pt-6 ml-4" /> </Link>
      <ul className="mt-14 ml-4">
        {data.map((item) => {
          return (
            <Link to={item.url} key={item.id}>
              {item.subMenu ? (
                <li className="" onClick={() => setShowCatMenu(!showCatMenu)}>
                  {item.name} <ExpandMoreRoundedIcon />
                  {showCatMenu && (
                    <ul className="my-4 pl-4 pr-2 text-sm">
                      {subMenuData.map((item) => {
                        return (
                          <Link to={item.url} key={item.id}>
                            <li className="my-2 flex justify-between">
                              {item.name}
                              <span className="pr-2">{item.doc_count}</span>
                            </li>
                          </Link>
                        );
                      })}
                    </ul>
                  )}
                </li>
              ) : (
                <li className="my-4">
                  <Link to={item.url}> {item.name} </Link>
                </li>
              )}
            </Link>
          );
        })}
      </ul>
    </div>
  );
};

export default MonileMenu;
