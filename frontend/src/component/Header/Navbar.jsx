/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import { useState } from "react";
import logo from "../../assets/logo.png";
import Menu from "./Menu";
import MobileMenu from "./MobileMenu";

import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import {useEffect} from "react"
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { Link } from "react-router-dom";

const Navbar = () => {
   const [mobileMenu, setMobileMenu] = useState(false);
   const [showCatMenu, setShowCatMenu] = useState(false);
   const [show, setShow] = useState("translate-y-0");
   const [lastScrollY, setLastScrollY] = useState(0);
   const [categories, setCategories] = useState(null);

   const controlNavbar = () => {
      if (window.scrollY > 200) {
         if (window.scrollY > lastScrollY && !mobileMenu) {
            setShow("-translate-y-[80px]");
         } else {
         setShow("shadow-sm");
         }
      } else {
         setShow("translate-y-0");
      }
      setLastScrollY(window.scrollY);
   };

   useEffect(() => {
      window.addEventListener("scroll", controlNavbar);
      return () => {
         window.removeEventListener("scroll", controlNavbar);
      };
   }, [lastScrollY]);


   return (
      <div className={`w-full z-20 sticky top-0 transition-transform duration-300 ${show} bg-eco-white shadow-sm`}>
         <div className="flex h-[50px] md:h-[80px] max-w-[95vw] md:max-w-[700px] lg:max-w-[900px] xl:max-w-[1280px] m-auto justify-between items-center">
         <Link to="/"><img src={logo} alt="Brand-logo" className="w-24" /></Link>

         <div className="">
            <Menu showCatMenu={showCatMenu} setShowCatMenu={setShowCatMenu}/>
            {mobileMenu && ( <MobileMenu mobileMenu={mobileMenu} setShowCatMenu={setShowCatMenu} showCatMenu={showCatMenu} />)}
         </div>

         <div className="flex">
            <div className="flex relative">
               <Link to="/wishlist">
               <FavoriteBorderIcon className="mx-4" size={42} />
               <span className="bg-eco-red w-4 h-4 rounded-full absolute -top-1 left-8 text-[10px] font-semibold text-eco-white text-center">10</span>
               </Link>
            </div>
            <div className="flex relative">
               <Link to="/cart">
                  <ShoppingCartIcon size={43} />
                  <span className="bg-eco-red w-4 h-4 rounded-full absolute -top-1 left-4 text-[10px] font-semibold text-eco-white text-center">10</span>
               </Link>
            </div>
            <div className="ml-4 md:hidden">
               {mobileMenu ? (
               <CloseIcon onClick={() => setMobileMenu(false)} />
               ) : (
               <MenuIcon onClick={() => setMobileMenu(true)} />
               )}
            </div>
         </div>
         </div>
      </div>
   );
};

export default Navbar;
