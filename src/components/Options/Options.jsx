import css from "./Options.module.css";

export default function Description({ totalFeedback, updateValues }) {
    return (
        <>
            <div className={css.btnsWrap}>
                <button onClick={() => updateValues("good")}>Good</button>
                <button onClick={() => updateValues("neutral")}>Neutral</button>
                <button onClick={() => updateValues("bad")}>Bad</button>
                <button className={totalFeedback ? css.show : css.hidden} onClick={() => updateValues("reset")}>
                    Reset
                </button>
            </div>
        </>
    );
}