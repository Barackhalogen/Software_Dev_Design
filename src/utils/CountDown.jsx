import React, { useState, useEffect } from "react";

const Countdown = ({ time }) => {
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

    return (
        <div className="flex flex-row gap-3 font-bold w-[100%]  text-[30px]">
            <div className="flex flex-col items-center">
                <span className="text-4xl font-bold text-[38px] space-mono">{hours<10?'0':''}{hours} </span>
                <span className="text-lg text-[12px] font-[400] spce-mono">Hours</span>
            </div>:
            <div className="flex flex-col items-center">
                <span className="text-4xl font-bold text-[38px] space-mono">{minutes<10?'0':''}{minutes} </span>
                <span className="text-lg text-[12px] font-[400] spce-mono">Minutes</span>
            </div>:
            <div className="flex flex-col items-center">
                <span className="text-4xl font-bold text-[38px] space-mono">{seconds<10?'0':''}{seconds} </span>
                <span className="text-lg text-[12px] font-[400] spce-mono">Seconds</span>
            </div>
        </div>
    );
};

export default Countdown;
