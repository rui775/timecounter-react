import React from "react";

import { useState, useEffect } from "react";

const TimeCounter = () => {

    let [currentTime, setCurrentTime] = useState(new Date());
    let [counter, setCounter] = useState(0);

    useEffect(() => {
        setInterval(() => {
            setCurrentTime(new Date());
        }, 120000)
    }, [])

    useEffect(() => {
        setCounter(counter+1);
    }, [currentTime])

    return (
        <div>
            <h1>{currentTime.toString()}</h1>
            <h1>Counter: {counter}</h1>
        </div>
    )
}

export default TimeCounter;