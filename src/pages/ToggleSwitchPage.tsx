import { FaLightbulb, FaRegLightbulb } from "react-icons/fa";
import React, { useState } from "react";

import ExerciseWithBackNav from "../components/ExerciseWithBackNav";
import Layout from "../Layout";

const size = 30;

const ToggleSwitchPage = () => {
    const [toggled, setToggled] = useState(false);

    return (
        <Layout>
            <ExerciseWithBackNav name="Toggle Switch" />
            <div className="flex items-center gap-10">
                <button
                    className="bg-blue-500 border border-blue-500 text-white px-3 py-2 rounded-lg"
                    type="button"
                    onClick={() => setToggled((prev) => !prev)}
                >
                    Turn {toggled ? "off" : "on"}
                </button>
                {toggled ? (
                    <FaLightbulb color="#f7d102" size={size} />
                ) : (
                    <FaRegLightbulb size={size} />
                )}
            </div>
        </Layout>
    );
};

export default ToggleSwitchPage;
