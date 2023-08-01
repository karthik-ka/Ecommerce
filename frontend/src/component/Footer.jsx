import logo from "../assets/logo.png";
import payment from "../assets/payment.png";

const Footer = () => {
  return (
    <footer className="bg-eco-light-grey">
      <div className="md:flex h-fit md:h-[220px] py-10 max-w-[90vw] md:max-w-[700px] lg:max-w-[900px] xl:max-w-[1280px] m-auto justify-evenly">
        <div className="text-eco-grey">
          <img src={logo} alt="brand logo" className="w-20 md:w-28" />
          <p className="text-[8px] lg:text-sm max-w-xs mt-2 mb-6">
            Specializes in provideing high-quality, stylish product fror your
            wardrob.
          </p>
        </div>
        <div className="flex justify-between">
          <div className="md:mx-6">
            <h1 className="font-semibold text-[10px] md:text-xs lg:text-base">SHOP</h1>
            <ul className="text-[8px] lg:text-sm text-eco-grey my-1 lg:my-3">
              <li className="md:py-1">All Collections</li>
              <li className="md:py-1">Winter Edition</li>
              <li className="md:py-1">Discount</li>
            </ul>
          </div>
          <div className="md:mx-6">
            <h1 className="font-semibold text-[10px] md:text-xs lg:text-base">GET HELP</h1>
            <ul className="text-[8px] lg:text-sm text-eco-grey my-1 lg:my-3">
              <li className="md:py-1">Order Status</li>
              <li className="md:py-1">Delivery</li>
              <li className="md:py-1">Return</li>
              <li className="md:py-1">Return</li>
              <li className="md:py-1">Contact Us</li>
            </ul>
          </div>
          <div className="md:mx-6">
            <h1 className="font-semibold text-[10px] md:text-xs lg:text-base">
              ABOUT NOSTRA
            </h1>
            <ul className="text-[8px] lg:text-sm text-eco-grey my-1 lg:my-3">
              <li className="md:py-1">About Us</li>
              <li className="md:py-1">Contact</li>
              <li className="md:py-1">Affiliates</li>
            </ul>
          </div>
          <div className="md:mx-6">
            <h1 className="font-semibold text-[10px] md:text-xs lg:text-base">
              PAYMENT METHODS
            </h1>
            <img
              src={payment}
              alt="method"
              className="w-32 lg:w-48 my-1 lg:my-3"
            />
          </div>
        </div>

      </div>
      <span className="flex justify-center pt-8 pb-4 text-eco-grey text-xs">Copyright © 2023, All Rights Reserved by NOSTRA</span>
    </footer>
  );
};

export default Footer;
