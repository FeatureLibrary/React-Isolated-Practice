import { IQuizDataObj, QuizContext } from "../contexts/QuizContext";

import cn from "../utils/twMerge";
import { useContext } from "react";

const NextQuestionButton = ({
    quizObjList,
    showNextButton,
}: {
    quizObjList: IQuizDataObj[];
    showNextButton: boolean;
}) => {
    const { quiz, setQuizTrack } = useContext(QuizContext);

    const navigateToNextQuestion = () => {
        setQuizTrack((track) => ({
            ...track,
            answerSelected: false,
            currentQuestion: track.currentQuestion + 1,
        }));
    };

    const onLastQuestion = quizObjList.length === quiz.length;

    if (!showNextButton || onLastQuestion) return null;

    return (
        <button
            className={cn(
                "bg-black/90 py-3 rounded-lg text-white text-lg w-36",
            )}
            type="button"
            onClick={navigateToNextQuestion}
        >
            Next
        </button>
    );
};

export default NextQuestionButton;
