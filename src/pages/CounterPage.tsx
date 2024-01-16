import ExerciseWithBackNav from "../components/ExerciseWithBackNav";
import Layout from "../Layout";
import { useState } from "react";

const buttonStyles =
    "bg-green-300 border border-green-400 font-semibold px-3 py-2 rounded-lg";

function CounterPage() {
    const [count, setCount] = useState(0);

    const incrementCount = () => {
        setCount((prev) => prev + 1);
    };

    const decrementCount = () => {
        if (count === 0) {
            return alert("Can't go any lower than 0");
        }

        setCount((prev) => prev - 1);
    };

    return (
        <Layout>
            <ExerciseWithBackNav name="Counter" />
            <div className="flex items-center gap-3">
                <button
                    className={buttonStyles}
                    type="button"
                    onClick={incrementCount}
                >
                    Increment
                </button>
                <button
                    className={buttonStyles}
                    type="button"
                    onClick={decrementCount}
                >
                    Decrement
                </button>
                <p>{count}</p>
            </div>
        </Layout>
    );
}

export default CounterPage;
