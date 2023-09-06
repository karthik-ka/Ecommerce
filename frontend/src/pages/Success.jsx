import { Link } from "react-router-dom"
const Success = () => {
    return (
        <section className="max-w-[90vw] md:max-w-[700px] lg:max-w-[900px] xl:max-w-[1200px] m-auto py-20" >
            <div>
                <img src="/payment.PNG" alt="" className="m-auto" />
                <div className="text-center">
                    <h1 className="text-2xl font-semibold mt-6 mb-2">Payment Successfull</h1>
                    <p className="text-sm">Thank you for using online payment system</p>
                    <Link to="/">
                        <button className='text-sm text-eco-white bg-eco-light-black px-6 py-3 rounded-full mt-4 mb-10 active:scale-95'>Continue Shopping</button>
                    </Link>
                </div>
            </div>
        </section>
    
    )
}

export default Success