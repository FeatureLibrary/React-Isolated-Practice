import { useContext } from "react";

import { type IQuizDataObj, QuizContext } from "../contexts/QuizContext";
import cn from "../utils/twMerge";

const FinishButton = ({
    quizObjList,
    showFinishButton,
}: {
    quizObjList: IQuizDataObj[];
    showFinishButton: boolean;
}) => {
    const { quiz, setQuizTrack } = useContext(QuizContext);

    if (!showFinishButton) return null;

    const calulateScore = () => {
        setQuizTrack((track) => ({
            ...track,
            score: (track.correctList.length / quiz.length) * 100,
            complete: true,
        }));
    };

    const onLastQuestion = quizObjList.length === quiz.length;

    if (!onLastQuestion) return null;

    return (
        <button
            className={cn(
                "bg-black/90 py-3 rounded-lg text-white text-lg w-36",
            )}
            type="button"
            onClick={calulateScore}
        >
            Finish
        </button>
    );
};

export default FinishButton;
