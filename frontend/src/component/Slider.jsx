/* eslint-disable no-unused-vars */
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";

import slide1 from "../assets/slide-1.jpg";
import slide2 from "../assets/slide-2.png";
import slide3 from "../assets/slide-3.jpg";

const Slider = () => {
  return (
    <div className="md:rounded-3xl overflow-hidden pb-16 pt-1 md:max-w-[700px] lg:max-w-[900px] xl:max-w-[1280px] m-auto ">
      <Carousel
        autoPlay={true}
        infiniteLoop={true}
        showThumbs={false}
        showStatus={false}
        renderArrowPrev={(clickHandler, hasPrev) => (
          <div
            onClick={clickHandler}
            className="bg-eco-light-grey absolute right-[31px] md:right-[65px] bottom-4 rounded-tl-lg rounded-bl-lg w-[30px] md:w-[50px] h-[30px] md:h-[50px] bg-black z-10  items-center justify-center cursor-pointer hover:opacity-90 hidden xl:flex"
          >
            <ArrowBackRoundedIcon className="text-sm md:text-lg" />
          </div>
        )}
        renderArrowNext={(clickHandler, hasNext) => (
          <div
            onClick={clickHandler}
            className="bg-eco-light-grey absolute right-4 bottom-4 rounded-tr-lg rounded-br-lg w-[30px] md:w-[50px] h-[30px] md:h-[50px] bg-black z-10  items-center justify-center cursor-pointer hover:opacity-90 hidden xl:flex"
          >
            <ArrowBackRoundedIcon className="rotate-180 text-sm md:text-lg" />
          </div>
        )}
      >
        <div>
          <img src={slide1} className="md:rounded-3xl h-60 md:h-full object-cover" />
        </div>
        <div>
          <img src={slide2} className="md:rounded-3xl h-60 md:h-full object-cover" />
        </div>
        <div>
          <img src={slide3} className="md:rounded-3xl h-60 md:h-full object-cover" />
        </div>
      </Carousel>
    </div>
  );
};

export default Slider;
