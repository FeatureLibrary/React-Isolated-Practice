import Answer from "./Answer";
import {
    QuizContext,
    type IQuizDataObj,
    type Answer as AnswerType,
} from "../contexts/QuizContext";
import { useContext } from "react";

const Answers = ({ quizObj }: { quizObj: IQuizDataObj }) => {
    const {
        quizTrack: { correctList, incorrectList },
    } = useContext(QuizContext);

    const checkIfCorrectOrIncorrect = (answer: AnswerType) => {
        const foundCorrectQuizObj = correctList.find(
            (obj) => obj.question.text === quizObj.question.text,
        );

        const foundIncorrectQuizObj = incorrectList.find(
            (obj) => obj.question.text === quizObj.question.text,
        );

        const isCorrectAnswerChosen =
            (foundCorrectQuizObj &&
                quizObj.answerChosen?.choice === answer.choice) ||
            (foundIncorrectQuizObj &&
                quizObj.correctAnswer.choice === answer.choice);

        const isIncorrectAnswerChosen =
            foundIncorrectQuizObj &&
            quizObj.answerChosen?.choice === answer.choice;

        return { isCorrectAnswerChosen, isIncorrectAnswerChosen };
    };

    return (
        <ul className="flex flex-col gap-5 my-5">
            {quizObj.answers.map((answer) => {
                const { isCorrectAnswerChosen, isIncorrectAnswerChosen } =
                    checkIfCorrectOrIncorrect(answer);

                return (
                    <Answer
                        key={answer.choiceText}
                        isCorrectAnswerChosen={!!isCorrectAnswerChosen}
                        isIncorrectAnswerChosen={!!isIncorrectAnswerChosen}
                        answer={answer}
                    />
                );
            })}
        </ul>
    );
};

export default Answers;
