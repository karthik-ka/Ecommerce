import MenCollage from "./MenCollage";
import WomenCollage from "./WomenCollage";

const Collection = () => {
  return (
    <section className="pb-8">
        <div className="py-8">
            <h1 className="text-center text-3xl font-bold text-eco-off-black pb-8">For Men's Collection</h1>
            <MenCollage />
        </div>
        <div className="py-8">
            <h1 className="text-center text-3xl font-bold text-eco-off-black pb-8">For Women's Collection</h1>
            <WomenCollage />
        </div>
    </section>
  )
}

export default Collection