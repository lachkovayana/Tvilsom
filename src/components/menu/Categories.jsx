import pizza from "../../assets/img/food_units/pizza.svg"
import drinks from "../../assets/img/food_units/drinks.svg"
import des from "../../assets/img/food_units/des.svg"
import vegan from "../../assets/img/food_units/vegan.svg"
import { useState } from "react"
import { useEffect } from "react"

const Categories = ({ activeIndex, setActiveIndex }) => {
    const [categories, setCategories] = useState([])
    useEffect(() => {
        fetch('https://62938c037aa3e6af1a0d29ac.mockapi.io/Product')
            .then(res => res.json())
            .then(arr => {
                setCategories(arr)
            })
    })

    return (
        <div className="menu_units">
            {categories.map((obj, i) =>
                <div className={activeIndex == i ? "item item--active" : "item"}
                    onClick={() => { setActiveIndex(i) }}>
                    <img src={obj.imageUrl}  />
                    <p>{obj.title}</p>
                </div>
            )}
        </div>
    )
}

export default Categories;