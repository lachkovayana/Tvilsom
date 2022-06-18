import foodEx from "../../assets/img/food/darkDodster.png"

const ProductBlock = ({activeIndex}) => {
    return (
        <li className="product">
            <img src={foodEx} alt="example" className="product_image" />
            <p className="product_title">Темный Додстер</p>
            <p className="product_description">Горячая закуска по новому:
                колбаски чоризо, соус бургер,
                цыпленок, томаты, моцарелла в
                черной пшеничной лепешке</p>
            <div className={activeIndex == 0 ? "size_choice" : "hidden"}>
                <ul>
                    <li className="item item--active">q</li>
                    <li className="item">s</li>
                </ul>
                <ul className="size_choice_list">
                    <li className="item">aa</li>
                    <li className="item">bb</li>
                    <li className="item item--active">bb</li>
                </ul>
            </div>
           

            <div className="price_and_button">
                <p className="product_price">
                    <span className="price">169 </span>
                    <span className="valute">₽</span>
                </p>
                <div className="button"
                    onClick={() => { console.log("click") }} >
                    <span>Добавить</span>
                </div>
            </div>
        </li>
    )
}
export default ProductBlock;