
import { useState } from "react"
import ProductBlock from "../menu/ProductBlock"
import Categories from "../menu/Categories"

export default function Menu() {
    const [activeIndex, setActiveIndex] = useState(0)

    return (
        <div >
            <Categories activeIndex={activeIndex} setActiveIndex={setActiveIndex} />
            <div className="product_wrapper">
                <div className="products_list">
                    {[...new Array(5)].map(() =>
                        <ProductBlock activeIndex={activeIndex} />
                    )}
                </div>
            </div>
        </div>
    )
}