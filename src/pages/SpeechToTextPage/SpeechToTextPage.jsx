import "./SpeechToTextPage.scss";
import sound from "../../assets/images/sound.png"

function SpeechToTextPage() {

    function handleStartRecord(event) {
        event.preventDefault();
    }
    
    function handleStopRecord(event) {
        event.preventDefault();
    }

    return (
        <section className="speech">
            <p className="speech__text">Press the 'start' button below to start recording!</p>
            <img src={sound} className="speech__image"></img>

            <div className="speech__buttons">
                <button className="speech__buttons__button" onClick={handleStartRecord}>Start</button>
                <button className="speech__buttons__button speech__buttons__button--stop" onClick={handleStopRecord}>Stop</button>
            </div>
            
            <p className="speech__converted-text">No text</p>
        </section>
    )
}

export default SpeechToTextPage;