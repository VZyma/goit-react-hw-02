export default function Description({ totalFeedback, values: { good, neutral, bad }, positiveFeedback }) {
    return (
        <>
            <p>Good: {good}</p>
            <p>Neutral: {neutral}</p>
            <p>Bad: {bad}</p>
            <p>TotalFeedback: {totalFeedback}</p>
            <p>Positive: {positiveFeedback}%</p>
        </>
    );
}