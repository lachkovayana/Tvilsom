import pizza from "../../assets/img/food_units/pizza.svg"
import drinks from "../../assets/img/food_units/drinks.svg"
import des from "../../assets/img/food_units/des.svg"
import vegan from "../../assets/img/food_units/vegan.svg"

const Categories = ({ activeIndex, setActiveIndex, categories }) => {
   
    return (
        <div className="menu_units">
            <div className={activeIndex == 0 ? "item item--active" : "item"}
                onClick={() => { setActiveIndex(0) }}>
                <img src={pizza} alt="pizza" />
                <p>{categories.filter((obj) => obj.index == 0)[0].name}</p>
            </div>
            <div className={activeIndex == 1 ? "item item--active" : "item"}
                onClick={() => { setActiveIndex(1) }}>
                <img src={drinks} alt="drinks" />
                <p>{categories.filter((obj) => obj.index == 1)[0].name}</p>
            </div>
            <div className={activeIndex == 2 ? "item item--active" : "item"}
                onClick={() => { setActiveIndex(2) }}>
                <img src={des} alt="desserts" />
                <p>{categories.filter((obj) => obj.index == 2)[0].name}</p>
            </div>
            <div className={activeIndex == 3 ? "item item--active" : "item"}
                onClick={() => { setActiveIndex(3) }}>
                <img src={vegan} alt="vegan" />
                <p>{categories.filter((obj) => obj.index == 3)[0].name}</p>
            </div>
        </div>
    )
}

export default Categories;