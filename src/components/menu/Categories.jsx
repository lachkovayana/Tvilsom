import pizza from "../../assets/img/food_units/pizza.svg"
import drinks from "../../assets/img/food_units/drinks.svg"
import des from "../../assets/img/food_units/des.svg"
import vegan from "../../assets/img/food_units/vegan.svg"

const Categories = ({ activeIndex, setActiveIndex }) => {
    return (
        <div className="menu_units">
            <div className={activeIndex == 0 ? "item item--active" : "item"}
                onClick={() => { setActiveIndex(0) }}>
                <img src={pizza} alt="pizza" />
                <p>Пицца</p>
            </div>
            <div className={activeIndex == 1 ? "item item--active" : "item"}
                onClick={() => { setActiveIndex(1) }}>
                <img src={drinks} alt="drinks" />
                <p>Напитки</p>
            </div>
            <div className={activeIndex == 2 ? "item item--active" : "item"}
                onClick={() => { setActiveIndex(2) }}>
                <img src={des} alt="desserts" />
                <p>Десерты</p>
            </div>
            <div className={activeIndex == 3 ? "item item--active" : "item"}
                onClick={() => { setActiveIndex(3) }}>
                <img src={vegan} alt="vegan" />
                <p>Веган</p>
            </div>
        </div>
    )
}

export default Categories;