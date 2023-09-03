import { useState } from 'react';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import { useDispatch, useSelector } from 'react-redux';
import { clearCart, removeItem } from '../utils/cartSlice';

const data = [
   { id: 1, title: "Nike jordan 5xl", image: "../p1.png", price: "10000"}
];

const Cart = () => {

   const [count, setCount] = useState(0);

   const cartItems = useSelector((store)=> store.cart.items) 

   const dispatch = useDispatch();
   const handleClearCart = () =>{
      dispatch(clearCart())
   }
   const handleRemoveItems = (id) =>{
      dispatch(removeItem(id))
   }

   const handleInc = () =>{
      setCount(count+1);
   }
   const handleDec = () =>{
      setCount(count-1);
   }

   return (
   <section className="max-w-[90vw] md:max-w-[700px] lg:max-w-[900px] xl:max-w-[1280px] m-auto py-16">
      <div className='flex flex-col lg:flex-row gap-4 justify-between'>

         {/* =================================left section======================================= */}

         <div className='md:px-6 flex-1'>
            <div className='flex pb-6 justify-between'>
               <h1 className='font-semibold text-2xl'>Cart</h1>
               <span className='text-sm font-semibold transition ease-in hover:text-eco-red cursor-pointer' onClick={()=>handleClearCart()}><DeleteOutlineOutlinedIcon fontSize='10' />Clear cart</span>
            </div>
            <table className='w-full'>
               <tr className='text-eco-grey border-b-2 border-eco-light-grey'>
                  <th className='float-left'>PRODUCTS</th>
                  <th>QUANTITY</th>
                  <th>PRICE</th>
               </tr>

               {cartItems.map((item, id)=>{
                  return (
                     <tr key={id} className='text-center text-eco-light-black border-b-2 border-eco-light-grey'>
                        <td className='flex flex-col md:flex-row gap-3 py-4'> 
                           <img src={item?.attributes?.thumbnail?.data?.attributes?.url} alt="" className='w-24 h-24 object-cover rounded-lg' />
                           <h2 className='font-semibold hidden md:block text-left'>{item?.attributes?.title}</h2>
                        </td>
                        <td >
                           <div className="md:flex xl:block items-center">
                              <button className='px-3 py-1 rounded-sm mx-1 bg-eco-light-grey' onClick={handleDec}>-</button>
                              <span className='font-medium'>{count}</span>
                              <button className='px-3 py-1 rounded-sm mx-1 bg-eco-light-grey' onClick={handleInc}>+</button>
                           </div>
                           <button className='text-sm font-semibold my-2 transition ease-in hover:text-eco-red' onClick={()=>handleRemoveItems(id)}><DeleteOutlineOutlinedIcon fontSize='10'/>Remove</button>
                        </td>
                        <td>
                           <h2 className='font-medium'>₹{item?.attributes?.price}</h2>
                        </td>
                     </tr>
                  )
               })}
            </table>

         </div>

         {/* =================================right section======================================= */}
         <div className='lg:w-80 h-max py-4 border border-eco-light-grey shadow-lg rounded-xl'>
            <div className='flex justify-between px-4 text-sm text-eco-grey font-medium'>
               <h2>Subtotal</h2>
               <p className='text-eco-light-black font-semibold'>₹{data[0].price}</p>
            </div>
            <div className='flex justify-between px-4 mt-4 text-sm text-eco-grey font-medium'>
               <h2>Discount</h2>
               <p className='font-semibold'>₹0</p>
            </div>
            <hr className='opacity-10 mt-4 px-8'/>
            <div className='flex justify-between px-4 py-4 text-sm text-eco-light-black font-medium'>
               <h2>Grand total</h2>
               <p className='font-semibold'>₹{data[0].price}</p>
            </div>
               <div className='py-3 w-72 m-auto text-center bg-eco-off-black text-eco-white rounded-lg cursor-pointer hover:bg-eco-black transition ease-in'>Checkout</div>
         </div>
      </div>
   </section>
   )
}

export default Cart