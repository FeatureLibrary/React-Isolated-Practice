import { QuizContext } from "../contexts/QuizContext";
import { useContext } from "react";

const PreviousQuestionButton = () => {
    const { isAnswerSelected, progress, handleNavigateToPreviousQuestion } =
        useContext(QuizContext);

    if (!isAnswerSelected || progress.currentQ === 1) return null;

    return (
        <button
            className="bg-black/90 py-3 rounded-lg text-white text-lg w-36"
            type="button"
            onClick={handleNavigateToPreviousQuestion}
        >
            Previous
        </button>
    );
};

export default PreviousQuestionButton;
