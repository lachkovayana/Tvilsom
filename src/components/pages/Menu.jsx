
import { useState } from "react"
import ProductBlock from "../menu/ProductBlock"
import Categories from "../menu/Categories"
import Search from "../menu/Search"
import Sort from "../menu/Sort"

export default function Menu() {
    const [activeIndex, setActiveIndex] = useState(0)

    return (
        <>
            <Categories activeIndex={activeIndex} setActiveIndex={setActiveIndex} />
            <div className="section_header">
                <p>{activeIndex}</p>
                <Search />
                <Sort />
            </div>
            <div className="product_wrapper">
                <div className="products_list">
                    {[...new Array(5)].map(() =>
                        <ProductBlock activeIndex={activeIndex} />
                    )}
                </div>
            </div>
        </> 
    )
}