import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import close from "../assets/img/closeW.png"
import testimg from "../assets/img/logo.png"
// import noOrder from "../assets/img/noOrder.png"
import Ordering from "../components/Ordering";
export default function CartPreview({ menuActive, setMenuActive, hasOrder }) {
    // if (hasOrder)
        return (
            <BrowserRouter>
                <div className={menuActive ? "cartPreview--active cartPreview" : "cartPreview"} onClick={(e) => e.stopPropagation()} >
                    <img className="cartPreview__close" src={close} onClick={() => { setMenuActive(false); console.log("false") }} />

                    <div className="general_info">
                        <span className="order_num">2 товара</span>
                        <span className="order_cost">160 Р</span>
                    </div>
                    {/* <div className="order_item order_item__template">
                        <div className="description">
                            <img className="image" src={testimg} width="50px" />
                            <div className="info">
                                <div className="title">Pizza here</div>
                                <div className="size">200г</div>
                            </div>
                        </div>
                        <div className="plus_minus_item">
                            <p className="minus">-</p>
                            <p className="num">2</p>
                            <p className="plus">+</p>
                        </div>
                        <div className="cost">350 Р</div>
                    </div> */}

                    <div className="order_items_list">
                        <div className="order_item order_item__template">
                            <div className="description">
                                <img className="image" src={testimg} width="50px" />
                                <div className="info">
                                    <div className="title">Pizza here</div>
                                    <div className="size">200г</div>
                                </div>
                            </div>
                            <div className="plus_minus_item">
                                <p className="minus">-</p>
                                <p className="num">2</p>
                                <p className="plus">+</p>
                            </div>
                            <div className="cost">350 Р</div>
                        </div>
                        <div className="order_item order_item__template">
                            <div className="description">
                                <img className="image" src={testimg} width="50px" />
                                <div className="info">
                                    <div className="title">Pizza here</div>
                                    <div className="size">200г</div>
                                </div>

                            </div>
                            <div className="plus_minus_item">
                                <p className="minus">-</p>
                                <p className="num">2</p>
                                <p className="plus">+</p>
                            </div>
                        </div>
                        <div className="order_item order_item__template">
                            <div className="description">
                                <img className="image" src={testimg} width="50px" />
                                <div className="info">
                                    <div className="title">Pizza here</div>
                                    <div className="size">200г</div>
                                </div>

                            </div>
                            <div className="plus_minus_item">
                                <p className="minus">-</p>
                                <p className="num">2</p>
                                <p className="plus">+</p>
                            </div>
                        </div>
                        <div className="order_item order_item__template">
                            <div className="description">
                                <img className="image" src={testimg} width="50px" />
                                <div className="info">
                                    <div className="title">Pizza here</div>
                                    <div className="size">200г</div>
                                </div>

                            </div>
                            <div className="plus_minus_item">
                                <p className="minus">-</p>
                                <p className="num">2</p>
                                <p className="plus">+</p>
                            </div>
                        </div>
                        <div className="order_item order_item__template">
                            <div className="description">
                                <img className="image" src={testimg} width="50px" />
                                <div className="info">
                                    <div className="title">Pizza here</div>
                                    <div className="size">200г</div>
                                </div>

                            </div>
                            <div className="plus_minus_item">
                                <p className="minus">-</p>
                                <p className="num">2</p>
                                <p className="plus">+</p>
                            </div>
                        </div>
                        <div className="order_item order_item__template">
                            <div className="description">
                                <img className="image" src={testimg} width="50px" />
                                <div className="info">
                                    <div className="title">Pizza here</div>
                                    <div className="size">200г</div>
                                </div>

                            </div>
                            <div className="plus_minus_item">
                                <p className="minus">-</p>
                                <p className="num">2</p>
                                <p className="plus">+</p>
                            </div>
                        </div>
                        <div className="order_item order_item__template">
                            <div className="description">
                                <img className="image" src={testimg} width="50px" />
                                <div className="info">
                                    <div className="title">Pizza here</div>
                                    <div className="size">200г</div>
                                </div>

                            </div>
                            <div className="plus_minus_item">
                                <p className="minus">-</p>
                                <p className="num">2</p>
                                <p className="plus">+</p>
                            </div>
                        </div>
                        <div className="order_item order_item__template">
                            <div className="description">
                                <img className="image" src={testimg} width="50px" />
                                <div className="info">
                                    <div className="title">Pizza here</div>
                                    <div className="size">200г</div>
                                </div>

                            </div>
                            <div className="plus_minus_item">
                                <p className="minus">-</p>
                                <p className="num">2</p>
                                <p className="plus">+</p>
                            </div>
                        </div>
                        <div className="order_item order_item__template">
                            <div className="description">
                                <img className="image" src={testimg} width="50px" />
                                <div className="info">
                                    <div className="title">Pizza here</div>
                                    <div className="size">200г</div>
                                </div>

                            </div>
                            <div className="plus_minus_item">
                                <p className="minus">-</p>
                                <p className="num">2</p>
                                <p className="plus">+</p>
                            </div>
                        </div>
                        <div className="order_item order_item__template">
                            <div className="description">
                                <img className="image" src={testimg} width="50px" />
                                <div className="info">
                                    <div className="title">Pizza here</div>
                                    <div className="size">200г</div>
                                </div>

                            </div>
                            <div className="plus_minus_item">
                                <p className="minus">-</p>
                                <p className="num">2</p>
                                <p className="plus">+</p>
                            </div>
                        </div>
                        <div className="order_item order_item__template">
                            <div className="description">
                                <img className="image" src={testimg} width="50px" />
                                <div className="info">
                                    <div className="title">Pizza here</div>
                                    <div className="size">200г</div>
                                </div>

                            </div>
                            <div className="plus_minus_item">
                                <p className="minus">-</p>
                                <p className="num">2</p>
                                <p className="plus">+</p>
                            </div>
                        </div>
                        <div className="order_item order_item__template">
                            <div className="description">
                                <img className="image" src={testimg} width="50px" />
                                <div className="info">
                                    <div className="title">Pizza here</div>
                                    <div className="size">200г</div>
                                </div>

                            </div>
                            <div className="plus_minus_item">
                                <p className="minus">-</p>
                                <p className="num">2</p>
                                <p className="plus">+</p>
                            </div>
                        </div></div>
                    <div className="order__btn">
                        <Link to="/cart" onClick={() => { setMenuActive(false); console.log("false") }}>Оформить заказ</Link>
                    </div>
                </div>
                <Routes>
                    <Route exact path="/cart" element={<Ordering />} />
                </Routes>
            </BrowserRouter>

        )
        // else 
        // return(
        //     <div className="no_order_info">
        //         <img src={testimg} alt="cart is empty"/>
        //         <p>Cart is empty!</p>
        //     </div>
        // )
}