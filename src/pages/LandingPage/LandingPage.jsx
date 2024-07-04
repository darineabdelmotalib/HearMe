import "./LandingPage.scss";
import hero from "../../assets/images/peopleTalking.png"

function LandingPage() {
    return (
        <section className="landing">
            <img src={hero} className="landing__hero"></img>
            <p className="landing__title">Bridging Communication for the Hearing Impaired</p>

            <div className="buttons">
                <button className="buttons__button buttons__button--getstarted">Get Started</button>
                <button className="buttons__button buttons__button--login">Log In</button>
            </div>

        </section>

    );
}

export default LandingPage;