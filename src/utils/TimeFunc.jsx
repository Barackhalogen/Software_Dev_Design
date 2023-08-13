import React, { useState, useEffect } from "react";

const TimeFunc = (time) => {
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);

    useEffect(() => {
        const countdownInterval = setInterval(() => {
            const remainingTime = Math.max(time - Date.now(), 0);
            const remainingSeconds = Math.floor((remainingTime / 1000) % 60);
            const remainingMinutes = Math.floor((remainingTime / (1000 * 60)) % 60);
            const remainingHours = Math.floor(
                (remainingTime / (1000 * 60 * 60)) % 24
            );

            setHours(remainingHours);
            setMinutes(remainingMinutes);
            setSeconds(remainingSeconds);

            if (remainingTime <= 0) {
                clearInterval(countdownInterval);
            }
        }, 1000);

        return () => clearInterval(countdownInterval);
    }, [time]);

    return [hours, minutes, seconds];
};

export default TimeFunc;
