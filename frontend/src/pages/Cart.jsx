import { useState } from 'react';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import { useDispatch, useSelector } from 'react-redux';
import { clearCart, removeItem } from '../utils/cartSlice';

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
   const subTotal = () => {
      let total = 0;
      cartItems.forEach((item)=>(total += item.attributes.price))
      return total;
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
            <div className='w-full'>
               <div className='flex text-eco-grey border-b-2 border-eco-light-grey justify-between'>
                  <th>PRODUCTS</th>
                  <th>PRICE</th>
               </div>

               {cartItems.map((item, id)=>{
                  return (
                     <div key={id} className='flex text-eco-light-black border-b-2 border-eco-light-grey justify-between items-center'>
                        <div>
                           <td className='flex md:flex-row gap-3 py-4'> 
                              <img src={item?.attributes?.thumbnail?.data?.attributes?.url} alt="" className='w-20 md:w-24 md:h-24 object-cover rounded-lg' />
                              <div className='flex flex-col'>
                                 <h2 className='font-semibold text-left text-sm md:text-base'>{item?.attributes?.title}</h2>
                                 <div className="flex">
                                    <div className='md:mx-8 my-4'>
                                       <span className='text-xs font-semibold text-eco-grey'>Size</span>
                                       <select name="" id="" className='text-xs font-semibold text-eco-grey bg-eco-light-grey px-1 py-1 ml-1 outline-none'>
                                          {item?.attributes?.size?.data?.map((item, id) =>(
                                             <option value="" key={id}>{item?.size}</option>
                                          ))}
                                       </select>
                                    </div>
                                    <div className='mx-4 my-4'>
                                       <span className='text-xs font-semibold text-eco-grey'>Quantity</span>
                                       <select name="" id="" className='text-xs font-semibold text-eco-grey bg-eco-light-grey px-1 py-1 ml-1 outline-none'>
                                          <option value="">1</option>
                                          <option value="">2</option>
                                          <option value="">3</option>
                                          <option value="">4</option>
                                          <option value="">5</option>
                                          <option value="">6</option>
                                          <option value="">7</option>
                                          <option value="">8</option>
                                          <option value="">9</option>
                                          <option value="">10</option>
                                       </select>
                                    </div>
                                 </div>
                              </div>
                           </td>
                        </div>
                        <td>
                           <h2 className='font-semibold text-sm'>₹{item?.attributes?.price}</h2>
                        </td>
                     </div>
                  )
               })}
            </div>

         </div>

         {/* =================================right section======================================= */}
         <div className='lg:w-80 h-max py-4 border border-eco-light-grey shadow-lg rounded-xl'>
            <div className='flex justify-between px-4 text-sm text-eco-grey font-medium'>
               <h2>Subtotal</h2>
               <p className='text-eco-light-black font-semibold'>₹{subTotal()}</p>
            </div>
            <div className='flex justify-between px-4 mt-4 text-sm text-eco-grey font-medium'>
               <h2>Discount</h2>
               <p className='font-semibold'>₹0</p>
            </div>
            <hr className='opacity-10 mt-4 px-8'/>
            <div className='flex justify-between px-4 py-4 text-sm text-eco-light-black font-medium'>
               <h2>Grand total</h2>
               <p className='font-semibold'>₹{subTotal()}</p>
            </div>
               <div className='py-3 w-72 m-auto text-center bg-eco-off-black text-eco-white rounded-lg cursor-pointer hover:bg-eco-black transition ease-in'>Checkout</div>
         </div>
      </div>
   </section>
   )
}

export default Cart