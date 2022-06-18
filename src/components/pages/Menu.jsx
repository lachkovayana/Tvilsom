
import { useState } from "react"
import ProductBlock from "../menu/ProductBlock"
import Categories from "../menu/Categories"
import Search from "../menu/Search"
import Sort from "../menu/Sort"

export default function Menu() {
    const [activeIndex, setActiveIndex] = useState(0)
    const categories = [
        { name: "Пицца", index: 0 },
        { name: "Напитки", index: 1 },
        { name: "Десерты", index: 2 },
        { name: "Веган", index: 3 }]

    return (
        <>
            <Categories activeIndex={activeIndex} setActiveIndex={setActiveIndex} categories={categories} />
            <div className="section_header">
                <p>{categories.filter((obj) => obj.index == activeIndex)[0].name}</p>
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