import { useEffect, useState } from "react";

import ExerciseWithBackNav from "../components/ExerciseWithBackNav";
import Layout from "../Layout";

const TimerPage = () => {
    const [hours, setHours] = useState("00");
    const [mins, setMins] = useState("00");
    const [secs, setSecs] = useState("00");
    const [timerStarted, setTimerStarted] = useState(false);
    const [shouldReset, setShouldReset] = useState(false);
    const [shouldStop, setShouldStop] = useState(false);

    const setTimeUnit = (timeUnit: string, maxNumUnits: number = 59) => {
        const timeUnitAsNum = +timeUnit + 1;
        if (timeUnitAsNum > maxNumUnits) return "00";
        if (timeUnitAsNum < 10) return "0" + timeUnitAsNum;
        else return "" + timeUnitAsNum;
    };

    const resetUnits = () => {
        setHours("00");
        setMins("00");
        setSecs("00");
    };

    const resetTimer = () => {
        setShouldReset(true);
        resetUnits();
    };

    const stopTimer = () => {
        setShouldStop(true);
        resetUnits();
    };

    useEffect(() => {
        let secsInterval: number;
        let minsInterval: number;
        let hoursInterval: number;

        const clearAllIntervals = (intervals: number[]) => {
            for (const interval of intervals) clearInterval(interval);
        };

        if (timerStarted) {
            secsInterval = setInterval(() => {
                setSecs((secs) => setTimeUnit(secs));
            }, 1000);

            minsInterval = setInterval(() => {
                setMins((mins) => setTimeUnit(mins));
            }, 60000);

            hoursInterval = setInterval(() => {
                setHours((hours) => setTimeUnit(hours, 23));
            }, 3600000);

            const intervals = [secsInterval, minsInterval, hoursInterval];

            if (shouldReset) {
                clearAllIntervals(intervals);
                setTimerStarted(true);
                setShouldReset(false);
            }

            if (shouldStop) {
                clearAllIntervals(intervals);
                setTimerStarted(false);
                setShouldStop(false);
            }
        }

        return () => {
            const intervals = [secsInterval, minsInterval, hoursInterval];
            clearAllIntervals(intervals);
        };
    }, [shouldReset, shouldStop, timerStarted]);

    return (
        <Layout>
            <ExerciseWithBackNav name="Timer" />
            <p className="font-bold mb-10 text-gray-500 text-7xl">
                {hours}:{mins}:{secs}
            </p>
            <div className="flex items-center gap-3">
                <button
                    className={`border border-blue-500 bg-blue-500 font-medium h-12 rounded-lg text-white text-lg w-[150px] ${
                        timerStarted ? "cursor-not-allowed" : "cursor-pointer"
                    }`}
                    type="button"
                    disabled={timerStarted}
                    onClick={() => {
                        setTimerStarted(true);
                    }}
                >
                    {timerStarted ? "Timer started" : "Start timer"}
                </button>
                <button
                    className="border border-green-500 bg-green-500 font-medium h-12 rounded-lg text-white text-lg w-[150px]"
                    type="button"
                    onClick={resetTimer}
                >
                    Reset Timer
                </button>
                <button
                    className="border border-red-500 bg-red-500 font-medium h-12 rounded-lg text-white text-lg w-[150px]"
                    type="button"
                    onClick={stopTimer}
                >
                    Stop timer
                </button>
            </div>
        </Layout>
    );
};

export default TimerPage;
