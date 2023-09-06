import {Link} from "react-router-dom"
const Failed = () => {
    return (
        <section className="max-w-[90vw] md:max-w-[700px] lg:max-w-[900px] xl:max-w-[1200px] m-auto py-20" >
            <div className="md:flex justify-center">
                <div className="flex justify-center">
                <img src="https://t3.ftcdn.net/jpg/05/83/87/88/360_F_583878813_lQ9MoaTWRBSjxourBrYYn8DNjM0xmHwA.jpg" alt="" className="w-80 lg:w-96" />
                </div>
                <div className="flex flex-col justify-center text-center md:items-start px-4">
                    <h1 className="text-xl md:text-2xl lg:text-3xl font-semibold mt-6 mb-4">Opps! Payment Failed</h1>
                    <Link to="/cart">
                        <button className='text-sm text-eco-white bg-eco-light-black px-6 py-3 rounded-full mb-10 active:scale-95'>Try Again</button>
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default Failed