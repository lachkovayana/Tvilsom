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
    const sort = useSelector(state => state.filter.sort)

    function sortProducts(arr) {
        switch (sort.sortProperty) {
            case 'rating':
                return arr.sort((a, b) => a.rating > b.rating ? 1 : -1)
            case 'name':
                return arr.sort((a, b) => a.name > b.name ? 1 : -1)
            case 'price':
                return arr.sort((a, b) => a.price > b.price ? 1 : -1)
        }
        return arr;
    }

    useEffect(() => {
        fetch(`https://62938c037aa3e6af1a0d29ac.mockapi.io/Product?id=${categoryId}`)
            .then(res => res.json())
            .then(arr => {
                var sortedProducts = sortProducts(arr[0].products);
                var result = arr[0];
                result.products = sortedProducts;
                setCategory(result);
            })

    }, [categoryId, sort])
    return (
        <>
            <Categories activeIndex={categoryId} />
            <div className="section_header">
                <p>{category.title}</p>
                <Search />
                <Sort />
            </div>
            <div className="product_wrapper">
                <div className="products_list">
                    {category.products
                        .map((elem, i) =>
                            <ProductBlock activeIndex={categoryId} info={elem} key={i} />
                        )
                    }
                </div>
            </div>
        </>
    )
}