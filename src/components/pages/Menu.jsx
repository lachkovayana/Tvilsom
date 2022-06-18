import ProductBlock from "../menu/ProductBlock"
import Categories from "../menu/Categories"
export default function Menu(){
    return (
        <>
            {/* <Categories /> */}
            <div className="product_wrapper">
            <div className="products_list">
            <ProductBlock activeIndex={0} />
            <ProductBlock activeIndex={0} />
            <ProductBlock activeIndex={0} />
            <ProductBlock activeIndex={0} />
            <ProductBlock activeIndex={1} />
            <ProductBlock activeIndex={0} />
            </div>
            </div>
        </>
    )
}