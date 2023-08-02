import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import { useState } from 'react';

const data = [
   { id: 1, title: "Nike jordan 5xl", image: "../p1.png", price: "10000"},
   { id: 2, title: "Nike jordan 5xl", image: "../p1.png", price: "10000"}
];

const Cart = () => {

   const [count, setCount] = useState(0);

   const handleInc = () =>{
      setCount(count+1);
   }
   const handleDec = () =>{
      setCount(count-1);
   }

   return (
   <section className="max-w-[90vw] md:max-w-[700px] lg:max-w-[900px] xl:max-w-[1280px] m-auto py-16">
      <div className='flex gap-4 justify-between'>

         {/* =================================left section======================================= */}

         <div className='px-6 flex-1'>
            <div className='flex pb-6 justify-between'>
               <h1 className='font-semibold text-2xl'>Cart</h1>
               <span className='text-sm font-semibold mr-8'><DeleteOutlineOutlinedIcon fontSize='10'/>Clear cart</span>
            </div>
            <table className='w-full'>
               <tr className='text-eco-grey'>
                  <th className='float-left'>PRODUCTS</th>
                  <th>QUANTITY</th>
                  <th>PRICE</th>
               </tr>

               {data.map((item)=>{
                  return (
                     <tr key={item.id} className='text-center text-eco-light-black' >
                        <td className='flex gap-3 py-2'> 
                           <img src={item.image} alt="" className='w-24 h-24 object-cover rounded-lg' />
                           <h2 className='font-semibold'>{item.title}</h2>
                        </td>
                        <td >
                           <button className='px-3 py-1 rounded-sm mx-1 bg-eco-light-grey' onClick={handleDec}>-</button>
                           <span className='font-medium'>{count}</span>
                           <button className='px-3 py-1 rounded-sm mx-1 bg-eco-light-grey' onClick={handleInc}>+</button>
                           <p className='text-sm font-semibold my-2'><DeleteOutlineOutlinedIcon fontSize='10'/>Remove</p>
                        </td>
                        <td>
                           <h2 className='font-medium'>₹{item.price}</h2>
                        </td>
                     </tr>
                  )
               })}
            </table>

         </div>

         {/* =================================right section======================================= */}

         <div className='md:w-80 h-max py-4 border border-eco-light-grey shadow-lg rounded-xl'>
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
               <div className='py-3 w-72 m-auto text-center bg-eco-off-black text-eco-white rounded-lg cursor-pointer'>Checkout</div>
         </div>
      </div>
   </section>
   )
}

export default Cart