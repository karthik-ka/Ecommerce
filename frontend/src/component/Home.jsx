import About from "./About";
import Categegories from "./Categegories";
import FeaturedProducts from "./FeaturedProducts";
import Slider from "./Slider";
import Contact from "./Contact";

const Home = () => {
  return (
    <>
      <Slider />
      <div className="max-w-[90vw] md:max-w-[700px] lg:max-w-[900px] xl:max-w-[1280px] m-auto">
        <FeaturedProducts />
        <About />
        <Categegories />
        <Contact />
      </div>
    </>
  );
};

export default Home;
