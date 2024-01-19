import Question from "./Question";
import { QuizContext } from "../contexts/QuizContext";
import { useContext } from "react";

const Scoreboard = () => {
    const {
        quizTrack: { correctList, complete, incorrectList, score },
    } = useContext(QuizContext);

    if (!complete) return null;

    return (
        <div className="w-full">
            <p className="font-bold mb-10 text-center text-xl">
                You scored {score}% on this quiz
            </p>
            <div className="flex justify-evenly gap-20">
                <div>
                    <p className="font-medium mb-5 text-lg">✅ Correct</p>
                    <ul className="w-[400px]">
                        {correctList.map((obj) => (
                            <Question
                                key={obj.question.text}
                                answeredQuestion={obj}
                            />
                        ))}
                    </ul>
                </div>
                <div>
                    <p className="font-medium mb-5 text-lg">❌ Incorrect</p>
                    <ul className="w-[400px]">
                        {incorrectList.map((obj) => (
                            <Question
                                key={obj.question.text}
                                answeredQuestion={obj}
                            />
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Scoreboard;
