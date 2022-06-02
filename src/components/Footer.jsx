import inst from "../assets/img/instagram.png"
import vk from "../assets/img/vk.png"
import telegram from "../assets/img/telegram.png"

export default function Footer() {
    return (
        <div className="footer">
            <div className="social_media">
                <img width={30} src={inst} />
                <img width={30} src={vk} />
                <img width={30} src={telegram} />
            </div>
            <p className="email">exampleEmail@mail.ru</p>
            <p className="phone">
                <p className="phone__number">89516061040</p>
                <p className="phone__tip">звонок бесплатный</p>
            </p>
        </div>
    )
}