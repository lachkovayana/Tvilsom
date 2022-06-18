
import { useState } from "react"
import ProductBlock from "../menu/ProductBlock"
import Categories from "../menu/Categories"
import Search from "../menu/Search"
import Sort from "../menu/Sort"
import { useEffect } from "react"

export default function Menu() {
    const [activeIndex, setActiveIndex] = useState(0)
    const [items, setItems] = useState([])
    const categories = [
        { name: "Пицца", index: 0 },
        { name: "Напитки", index: 1 },
        { name: "Десерты", index: 2 },
        { name: "Веган", index: 3 }]

    useEffect(() => {
        fetch('https://62938c037aa3e6af1a0d29ac.mockapi.io/Product?id=' + activeIndex)
            .then(res => res.json())
            .then(arr => {
                console.log(arr)
                setItems(arr[0].products);
            })

    }, [activeIndex])

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
                    {items.map((elem) =>
                        <ProductBlock activeIndex={activeIndex} info={elem}/>
                    )}
                </div>
            </div>
        </>
    )
}