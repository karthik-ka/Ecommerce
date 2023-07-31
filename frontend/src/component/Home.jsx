
import About from "./About";
import Categegories from "./Categegories";
import FeaturedProducts from "./FeaturedProducts";
import Slider from "./Slider";

const Home = () => {
  return (
    <div className="max-w-[95vw] md:max-w-[700px] lg:max-w-[900px] xl:max-w-[1280px] m-auto">

      <Slider />
      <FeaturedProducts />
      <About />
      <Categegories />
    </div>
  );
};

export default Home;
