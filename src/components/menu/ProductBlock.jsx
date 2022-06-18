import { useState } from "react";

const ProductBlock = ({ activeIndex, info }) => {
    const [activeSize, setActiveSize] = useState(0)
    const [activeWeight, setActiveWeight] = useState(0)

    return (
        <li className="product">
            <div>
                <img src={info.imageUrl} alt="example" className="product_image" />
                <p className="product_title">{info.name}</p>
                <p className="product_description">{info.description}</p>
            </div>
            <div className={activeIndex == 0 ? "size_choice" : "hidden"}>
                <ul>
                    {info.sizes.map((size, i) =>
                        <li
                            className={i == activeSize ? "item item--active" : "item"}
                            onClick={() => setActiveSize(i)}
                        >{size}</li>
                    )}
                </ul>
                <ul>
                    <li
                        className={activeWeight == 0 ? "item item--active" : "item"}
                        onClick={() => setActiveWeight(0)}
                    >Тонкое</li>
                    <li
                        className={activeWeight == 1 ? "item item--active" : "item"}
                        onClick={() => setActiveWeight(1)}
                    >Толстое</li>
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