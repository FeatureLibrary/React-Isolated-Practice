import { useContext, useState } from "react";
import { QuizContext, type Answer } from "../contexts/QuizContext";
import cn from "../utils/twMerge";

const Answer = ({
    answer,
    isCorrectAnswerChosen,
    isIncorrectAnswerChosen,
}: {
    answer: Answer;
    isCorrectAnswerChosen: boolean;
    isIncorrectAnswerChosen: boolean;
}) => {
    const { quiz, quizTrack, setQuizTrack } = useContext(QuizContext);
    const [status, setStatus] = useState<"correct" | "incorrect" | undefined>(
        undefined,
    );

    const currentQuestion = quiz[quizTrack.currentQuestion];

    const calculatePercentage = () => {
        setQuizTrack((track) => {
            const correctListLength = track.correctList.length;
            const incorrectListLength = track.incorrectList.length;

            const percentProgress =
                ((correctListLength + incorrectListLength) / quiz.length) * 100;

            return {
                ...track,
                percentProgress,
            };
        });
    };

    const handleSelection = () => {
        if (quizTrack.answerSelected) return null;

        setQuizTrack((track) => ({ ...track, answerSelected: true }));

        const currentQuestionWithSelection = {
            ...currentQuestion,
            answerChosen: answer,
        };

        if (answer.choice === currentQuestion.correctAnswer.choice) {
            setStatus("correct");
            setQuizTrack((track) => ({
                ...track,
                correctList: [
                    ...track.correctList,
                    currentQuestionWithSelection,
                ],
            }));
        } else {
            setStatus("incorrect");
            setQuizTrack((track) => ({
                ...track,
                incorrectList: [
                    ...track.incorrectList,
                    currentQuestionWithSelection,
                ],
            }));
        }

        calculatePercentage();
    };

    return (
        <li
            className={cn(
                "bg-gray-100 border-2 border-gray-200",
                "cursor-pointer",
                "hover:scale-105",
                "p-5",
                "rounded-md",
                "transition-transform",
                {
                    "bg-green-400 border-green-500":
                        status === "correct" || isCorrectAnswerChosen,
                    "bg-red-400 border-red-500":
                        status === "incorrect" || isIncorrectAnswerChosen,
                    "cursor-not-allowed hover:scale-100":
                        quizTrack.answerSelected,
                },
            )}
            onClick={handleSelection}
        >
            <p className="flex items-center gap-3 mb-2 text-lg">
                <span className="font-medium">{answer.choice}.</span>
                {answer.choiceText}
            </p>
            {(status === "correct" || isCorrectAnswerChosen) && (
                <p className="font-light">
                    {currentQuestion.correctAnswer.description}
                </p>
            )}
        </li>
    );
};

export default Answer;
