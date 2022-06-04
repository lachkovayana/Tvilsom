import VacancyCard from "../job/VacancyCard";
import arrow from "../../assets/img/arrow.png";

export default function Job() {
    return (
        <div>
            <p className="text">Стань частью нашей команды!</p>
            <div className="cardList">
                <VacancyCard info={{ "title": "текст", "description": "текст побольше", "imageUrl": "../assets/img/deliveryman.jpg" }} />
                <VacancyCard info={{ "title": "текст", "description": "текст побольше", "imageUrl": "../assets/img/deliveryman.jpg" }} />
                <VacancyCard info={{ "title": "текст", "description": "текст побольше", "imageUrl": "../assets/img/deliveryman.jpg" }} />
            </div>
            <div className="linkContainer">
                <p className="text">Заполняй анкету по ссылке</p>
                <div className="arrow_with_link">
                    <img src={arrow} width="100px" />
                    <a href="https://forms.gle/RiLd1CzFZzR5T1BU8">тут</a>
                </div>
            </div>
        </div>
    )
}