import "./SpeechToTextPage.scss";
import sound from "../../assets/images/sound.png"

function SpeechToTextPage() {

    function handleRecordButton(event) {
        event.preventDefault();
    }

    function handleConvertToTextButton(event) {
        event.preventDefault();
    }


    return (
        <section className="speech">
            <p className="speech__text">Press the image below to start recording!</p>
            <img src={sound} className="speech__image" onClick={handleRecordButton}></img>
            <button className="speech__button" onClick={handleConvertToTextButton}>Convert to Text</button>
            <p className="speech__converted-text">No text</p>
        </section>
    )
}

export default SpeechToTextPage;