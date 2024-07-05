import { useState, useEffect } from "react";

import Description from "../Description/Description";
import Options from "../Options/Options";
import Feedback from "../Feedback/Feedback";
import Notification from "../Notification/Notification";

export default function App() {
    const initValues = {
        good: 0,
        neutral: 0,
        bad: 0,
    };

    const [values, setValues] = useState(() => {
        const savedValues = window.localStorage.getItem("values");
        if (savedValues === null) {
            return initValues;
        }
        return JSON.parse(savedValues);
    });

    const { good, neutral, bad } = values;
    const totalFeedback = good + neutral + bad;
    const positiveFeedback  = Math.round((good / totalFeedback) * 100);

    const updateValues = (valueType) => {
        if (valueType === "reset") {
            setValues(initValues);
            return;
        }

        setValues({
            ...values,
            [valueType]: values[valueType] + 1,
        });
    };

    useEffect(() => {
        window.localStorage.setItem("values", JSON.stringify(values));
    }, [values]);

    return (
        <>
            <Description />
            <Options updateValues={updateValues} totalFeedback={totalFeedback} />
            {totalFeedback > 0 ? <Feedback values={values} totalFeedback={totalFeedback} positiveFeedback ={positiveFeedback } /> : <Notification />}
        </>
    );
}