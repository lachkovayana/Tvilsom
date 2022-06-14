import VacancyCard from "../job/VacancyCard";
import arrow from "../../assets/img/arrow.png";
import { useState } from "react";
import { useEffect } from "react";

export default function Job() {
    const [items, setItems] = useState([])

    useEffect(()=>{
        fetch('https://62938c037aa3e6af1a0d29ac.mockapi.io/Vacancies')
        .then(res => res.json())
        .then(arr => setItems(arr))
    }, [])

    return (
        <div>
            <p className="text">Стань частью нашей команды!</p>
            <div className="cardList">
                {items.map((obj)=> (
                    <VacancyCard info={obj} />
                ))}
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