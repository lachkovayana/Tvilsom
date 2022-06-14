import VacancyCard from "../job/VacancyCard";
import arrow from "../../assets/img/arrow.png";
import { useState } from "react";
import { useEffect } from "react";
import VacancySkeleton from "../job/VacancySkeleton";

export default function Job() {
    const [items, setItems] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        fetch('https://62938c037aa3e6af1a0d29ac.mockapi.io/Vacancies')
            .then(res => res.json())
            .then(arr => {
                setItems(arr);
                setIsLoading(false);
            })

    }, [])

    return (
        <div>
            <p className="text">Стань частью нашей команды!</p>
            <div className="cardList">
                {isLoading ?
                    [...new Array(3)].map(() =>
                        <VacancySkeleton />
                    )
                    :
                    items.map(obj =>
                        <VacancyCard info={obj} key={obj.id} />
                    )}
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