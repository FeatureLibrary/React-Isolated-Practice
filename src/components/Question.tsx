import { IQuizDataObj, QuizContext } from "../contexts/QuizContext";

import Answers from "./Answers";
import { useContext } from "react";

const Question = ({
    answeredQuestion,
}: {
    answeredQuestion?: IQuizDataObj;
}) => {
    const { quiz, quizTrack } = useContext(QuizContext);

    const quizObj = answeredQuestion
        ? answeredQuestion
        : quiz[quizTrack.currentQuestion];

    return (
        <div>
            <p className="flex items-center gap-3 text-lg">
                <span className="font-medium">{quizObj.question.number}.</span>
                {quizObj.question.text}
            </p>
            <Answers quizObj={quizObj} />
        </div>
    );
};

export default Question;
