import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';

const data = [
   { id: 1, title: "Nike jordan 5xl", image: "../p1.png", price: "10000"},
   { id: 2, title: "Nike jordan 5xl", image: "../p1.png", price: "10000"}
];

const Cart = () => {
   return (
   <section className="max-w-[90vw] md:max-w-[700px] lg:max-w-[900px] xl:max-w-[1280px] m-auto py-16">
      <div className='flex justify-between'>

         <div className='px-4 flex-1'>
            <div className='flex justify-between'>
               <h1 className='font-semibold text-2xl'>Cart</h1>
               <span className='text-sm font-semibold'><DeleteOutlineOutlinedIcon fontSize='10'/>Clear cart</span>
            </div>
            <table className='w-full'>
               <tr className='text-eco-grey'>
                  <th className='float-left'>PRODUCTS</th>
                  <th>QUANTITY</th>
                  <th>PRICE</th>
               </tr>

               {data.map((item)=>{
                  return (
                     <tr key={item.id} className='text-center' >
                        <td className='flex gap-3 py-2'> 
                           <img src={item.image} alt="" className='w-24 h-24 object-cover rounded-lg' />
                           <h2 className='font-semibold'>{item.title}</h2>
                        </td>
                        <td >
                           <button className='px-3 py-1 rounded-sm mx-1 bg-eco-light-grey'>-</button>0<button className='px-3 py-1 rounded-sm mx-1 bg-eco-light-grey'>+</button>
                           <p className='text-sm font-semibold my-2'><DeleteOutlineOutlinedIcon fontSize='10'/>Remove</p>
                        </td>
                        <td>
                           <h2>₹{item.price}</h2>
                        </td>
                     </tr>
                  )
               })}
            </table>

         </div>

         <div className='bg-eco-light-grey rounded-xl'>
            <div className='flex justify-between px-4'>
               <h2>Subtotal</h2>
               <p>₹{data[0].price}</p>
            </div>
            <div className='flex justify-between px-4'>
               <h2>Discount</h2>
               <p>₹0</p>
            </div>
            <div className='flex justify-between px-4'>
               <h2>Grand total</h2>
               <p>₹{data[0].price}</p>
            </div>
               <button>Checkout</button>
         </div>
      </div>
   </section>
   )
}

export default Cart