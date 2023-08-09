import About from "../component/About";
import Categegories from "../component/Categegories";
import FeaturedProducts from "../component/FeaturedProducts";
import Slider from "../component/Slider";
import Contact from "../component/Contact";
import Collection from "../component/Collection";

const Home = () => {

  return (
    <>
      <Slider />
      <div className="max-w-[90vw] md:max-w-[700px] lg:max-w-[900px] xl:max-w-[1280px] m-auto">
        <FeaturedProducts />
        <About />
        <Categegories />
        <Collection />
        <Contact />
      </div>
    </>
  );
};

export default Home;
