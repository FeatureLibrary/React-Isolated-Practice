import { useContext, useMemo } from "react";

import FinishButton from "./FinishButton";
import NextQuestionButton from "./NextQuestionButton";
import { QuizContext } from "../contexts/QuizContext";

const NavButtons = () => {
    const {
        quiz,
        quizTrack: { currentQuestion, correctList, incorrectList },
    } = useContext(QuizContext);

    const { foundQuizObj, quizObjList } = useMemo(() => {
        const quizObjList = [...correctList.concat(...incorrectList)];

        const foundQuizObj = quizObjList.find(
            (obj) => obj.question.text === quiz[currentQuestion].question.text,
        );

        return { foundQuizObj, quizObjList };
    }, [correctList, currentQuestion, incorrectList, quiz]);

    if (!foundQuizObj) return null;

    return (
        <div>
            <NextQuestionButton
                quizObjList={quizObjList}
                showNextButton={!!foundQuizObj}
            />
            <FinishButton
                quizObjList={quizObjList}
                showFinishButton={!!foundQuizObj}
            />
        </div>
    );
};

export default NavButtons;
