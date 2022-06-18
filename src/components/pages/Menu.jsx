
import { useState } from "react"
import ProductBlock from "../menu/ProductBlock"
import Categories from "../menu/Categories"
import Search from "../menu/Search"
import Sort from "../menu/Sort"
import { useEffect } from "react"
import { useSelector } from "react-redux"

export default function Menu() {
    const [category, setCategory] = useState({ "id": 0, "title": "", "products": [] })

    const categoryId = useSelector(state => state.filter.categoryId)


    useEffect(() => {
        fetch('https://62938c037aa3e6af1a0d29ac.mockapi.io/Product?id=' + categoryId)
            .then(res => res.json())
            .then(arr => {
                setCategory(arr[0]);
            })

    }, [categoryId])
    return (
        <>
            <Categories activeIndex={categoryId}/>
            <div className="section_header">
                <p>{category.title}</p>
                <Search />
                <Sort />
            </div>
            <div className="product_wrapper">
                <div className="products_list">
                    {category.products.map((elem, i) =>
                        <ProductBlock activeIndex={categoryId} info={elem} key={i} />
                    )}
                </div>
            </div>
        </>
    )
}