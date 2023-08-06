const Contact = () => {
  return (
    <section className="md:flex justify-evenly py-8" id="contact">
      <div className="grid grid-cols-2 gap-2 w-60">
        <img className="w-28 h-28 object-cover object-top rounded-full" src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=420&q=80" alt="" />
        <img className="w-28 h-28 object-cover rounded-tl-[70%]" src="https://images.unsplash.com/photo-1485518882345-15568b007407?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGZhc2hpb24lMjBzdG9yZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=400&q=60" alt="" />
        <img className="w-28 h-28 object-cover rounded-br-[70%]" src="https://images.unsplash.com/photo-1609252546279-1dff6542315b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE3fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=400&q=60" alt="" />
        <img className="w-28 h-28 object-cover rounded-tr-[70%]" src="https://images.unsplash.com/photo-1551232864-3f0890e580d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80" alt="" />
      </div>

      <div className="py-8">
        <h1 className="md:text-3xl xl:text-4xl font-bold text-eco-off-black">Subscribe to Newsletter </h1>
        <p className="text-sm text-eco-grey pt-2 pb-4">Get 20% off on your order by just subscribing to our news letter</p>
        <form action="" className="">
          <div className="flex relative">
              <input type="text" aria-describedby="floating_helper_text" className="block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm  border-0 border-b-2  dark:focus:border-blue-500 focus:outline-none focus:ring-0 peer" placeholder=" " />
              <label className="absolute text-sm text-eco-grey duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">Your email</label>
              <button className="px-6 h-13 bg-eco-off-black text-eco-white text-sm transition ease-in-out hover:bg-eco-black ">Subscribe</button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
