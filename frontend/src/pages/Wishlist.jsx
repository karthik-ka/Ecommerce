import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';

const data = [
   { id: 1, title: "Nike jordan 5xl", image: "../p1.png", price: "10000"},
   { id: 2, title: "Nike jordan 5xl", image: "../p1.png", price: "10000"}
];

const Wishlist = () => {

   return (
   <section className="max-w-[90vw] md:max-w-[700px] lg:max-w-[900px] m-auto py-16">

         <div className='md:px-6 flex-1'>
            <div className='flex pb-6 justify-between'>
               <h1 className='font-semibold text-2xl'>Wishlist</h1>
               <span className='text-sm font-semibold text-eco-red'><DeleteOutlineOutlinedIcon fontSize='10'/>Clear list</span>
            </div>
            <table className='w-full'>
               <tr className='text-eco-grey border-b-2 border-eco-light-grey'>
                  <th className='float-left'>PRODUCTS</th>
                  <th>PRICE</th>
               </tr>

               {data.map((item)=>{
                  return (
                     <tr key={item.id} className='text-center text-eco-light-black border-b-2 border-eco-light-grey'>
                        <td className='flex flex-col md:flex-row gap-3 py-4'> 
                           <img src={item.image} alt="" className='w-24 h-24 object-cover rounded-lg' />
                           <h2 className='font-semibold hidden md:block'>{item.title}</h2>
                        </td>
                        <td>
                           <h2 className='font-medium'>₹{item.price}</h2>
                           <p className='text-sm font-semibold my-2 text-eco-red'><DeleteOutlineOutlinedIcon fontSize='10'/>Remove</p>
                        </td>
                     </tr>
                  )
               })}
            </table>
      </div>
   </section>
   )
}

export default Wishlist