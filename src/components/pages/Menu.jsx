
import { useState } from "react"
import ProductBlock from "../menu/ProductBlock"
import Categories from "../menu/Categories"
import Search from "../menu/Search"
import Sort from "../menu/Sort"
import { useEffect } from "react"

export default function Menu() {
    const [activeIndex, setActiveIndex] = useState(0)
    const [category, setCategory] = useState({ "id": 0, "name": "", "products": [] })
  
    useEffect(() => {
        fetch('https://62938c037aa3e6af1a0d29ac.mockapi.io/Product?id=' + activeIndex)
            .then(res => res.json())
            .then(arr => {
                console.log(arr[0].products)
                setCategory(arr[0]);
            })

    }, [activeIndex])

    return (
        <>
            <Categories activeIndex={activeIndex} setActiveIndex={setActiveIndex} />
            <div className="section_header">
                <p>{category.title}</p>
                <Search />
                <Sort />
            </div>
            <div className="product_wrapper">
                <div className="products_list">
                    {category.products.map((elem) =>
                        <ProductBlock activeIndex={activeIndex} info={elem} />
                    )}
                </div>
            </div>
        </>
    )
}