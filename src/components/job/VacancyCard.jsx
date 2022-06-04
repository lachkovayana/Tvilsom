
export default function VacanciesCard({info}) {
    return (
        <div className="card">
            <img src={"https://makelovepizza.ru/img/vacancy/C3sPfemXbxWb.png "} alt="Vacancy"/>
                <div className="container">
                    <h4>{info.title}</h4>
                    <p>{info.description}</p>
                </div>
        </div>
    )
} 