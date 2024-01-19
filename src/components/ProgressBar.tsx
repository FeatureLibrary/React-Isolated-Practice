import { QuizContext } from "../contexts/QuizContext";
import { useContext } from "react";

const ProgressBar = () => {
    const { quizTrack } = useContext(QuizContext);

    return (
        <div className="border border-gray-400 mb-10 h-4 rounded-full w-[425px]">
            <div
                className="animate-pulse bg-green-500 h-full overflow-hidden rounded-full"
                style={{
                    width: `${quizTrack.percentProgress}%`,
                }}
            ></div>
        </div>
    );
};

export default ProgressBar;
