
export default function VacanciesCard({info}) {
    return (
        <div className="card">
            {/* <img src={info.imageUrl} alt="Vacancy"/> */}
                <div className="container">
                    <h4>{info.title}</h4>
                    <p>{info.description}</p>
                </div>
        </div>
    )
} 