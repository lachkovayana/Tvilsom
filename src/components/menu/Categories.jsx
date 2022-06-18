import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { setCategoryId } from "../../redux/slices/filterSlice"

const Categories = ({ activeIndex }) => {
    const [categories, setCategories] = useState([])
    const dispatch = useDispatch();

    useEffect(() => {
        fetch('https://62938c037aa3e6af1a0d29ac.mockapi.io/Product')
            .then(res => res.json())
            .then(arr => {
                setCategories(arr)
            })
    }, [])


    const onChangeCategory = (id) => {
        dispatch(setCategoryId(id))
    }

    return (
        <div className="menu_units">
            {categories.map((obj, i) =>
                <div
                    className={activeIndex == i ? "item item--active" : "item"}
                    onClick={() => { onChangeCategory(i) }}
                    key={obj.id}>
                    <img src={obj.imageUrl} />
                    <p>{obj.title}</p>
                </div>
            )}
        </div>
    )
}

export default Categories;