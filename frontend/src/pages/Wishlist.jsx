import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import { useDispatch, useSelector } from 'react-redux';
import { clearList, removeListItem } from '../utils/listSlice';

const Wishlist = () => {

   const listItems = useSelector(store => store.wishlist.items)
   console.log("list==",listItems);

   const dispatch = useDispatch();

   const clearWishlist = () => {
      dispatch(clearList());
   }
   const removeWishlistItem = (id) => {
      dispatch(removeListItem(id));
   }

   return (
   <section className="max-w-[90vw] md:max-w-[700px] lg:max-w-[900px] m-auto py-16">

         <div className='md:px-6 flex-1'>
            <div className='flex pb-6 justify-between'>
               <h1 className='font-semibold text-2xl'>Wishlist</h1>
               <span className='text-sm font-semibold hover:text-eco-red transition-all ease-out duration-300 cursor-pointer' onClick={()=>clearWishlist()}><DeleteOutlineOutlinedIcon fontSize='10'/>Clear list</span>
            </div>
            <table className='w-full'>
               <tr className='text-eco-grey border-b-2 border-eco-light-grey'>
                  <th className='float-left'>PRODUCTS</th>
                  <th>PRICE</th>
               </tr>
               {listItems.map((item, id)=>{
                  return (
                     <tr key={id} className='text-center text-eco-light-black border-b-2 border-eco-light-grey'>
                        <td className='flex flex-col md:flex-row gap-3 py-4'> 
                           <img src={item?.attributes?.thumbnail?.data?.attributes?.url} alt="" className='w-24 h-24 object-cover rounded-lg' />
                           <h2 className='font-semibold hidden md:block'>{item?.attributes?.title}</h2>
                        </td>
                        <td>
                           <h2 className='font-medium'>₹{item?.attributes?.price}</h2>
                           <p className='text-sm font-semibold my-2 hover:text-eco-red transition-all ease-out duration-300 cursor-pointer' onClick={()=>removeWishlistItem(id)}><DeleteOutlineOutlinedIcon fontSize='10'/>Remove</p>
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