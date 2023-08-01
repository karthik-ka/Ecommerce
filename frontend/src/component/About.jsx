import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
import AddReactionOutlinedIcon from '@mui/icons-material/AddReactionOutlined';
import AddShoppingCartOutlinedIcon from '@mui/icons-material/AddShoppingCartOutlined';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';

const About = () => {
  return (
    <section className="py-16">
      <div className="md:flex justify-between pb-16">
        <h1 className="md:text-3xl font-semibold text-eco-light-black max-w-[24rem] pb-2">We provide best customer experiences</h1>
        <p className='text-sm text-eco-grey border-l-4 flex items-center px-8'>we ensure our customers have the best shopping experience</p>
      </div>

      <div className='grid md:grid-cols-3 lg:grid-cols-4 gap-2'>
        <div className="bg-eco-off-white w-full p-4 rounded-xl">
            <p className='px-4 py-3 w-max bg-eco-light-grey rounded-lg'><CurrencyExchangeIcon fontSize='10' /></p>
            <h1 className='font-semibold py-2 text-eco-black'>Orginal Products</h1>
            <p className='text-xs text-eco-grey max-w-[16rem]'>we provide money back guarantee if the product are not orginal</p>
        </div>
        <div className="bg-eco-off-white w-full p-4 rounded-xl">
            <p className='px-4 py-3 w-max bg-eco-light-grey rounded-lg '><AddReactionOutlinedIcon fontSize='10' /></p>
            <h1 className='font-semibold py-2 text-eco-black '>Satisfaction Guarantee</h1>
            <p className='text-xs text-eco-grey max-w-[16rem] '>Exchange the product you've purchased if it doesn't fit on you</p>
        </div>
        <div className="bg-eco-off-white w-full p-4 rounded-xl">
            <p className='px-4 py-3 w-max bg-eco-light-grey rounded-lg'><AddShoppingCartOutlinedIcon fontSize='10' /></p>
            <h1 className='font-semibold py-2 text-eco-black'>New Arrival Everyday</h1>
            <p className='text-xs text-eco-grey max-w-[16rem]'>We update our collections almost everyday</p>
        </div>
        <div className="bg-eco-off-white w-full p-4 rounded-xl">
            <p className='px-4 py-3 w-max bg-eco-light-grey rounded-lg'><LocalShippingOutlinedIcon fontSize='10' /></p>
            <h1 className='font-semibold py-2 text-eco-black'>Fast & Free Shipping</h1>
            <p className='text-xs text-eco-grey max-w-[16rem]'>W offer fast and free shipping for our premium customers</p>
        </div>

      </div>
    </section>
  );
};

export default About;
