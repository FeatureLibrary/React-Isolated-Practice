import React, { type SetStateAction } from "react";
import quizData from "../data/quizData.json";
import { useState } from "react";

export type Question = { number: number; text: string };
export type Answer = {
    choice: string;
    choiceText: string;
};
export type CorrectAnswer = Answer & { description: string };

export interface IQuizDataObj {
    answerChosen?: Answer;
    answers: Answer[];
    correctAnswer: CorrectAnswer;
    question: Question;
}

export interface IQuizTrack {
    answerSelected: boolean;
    correctList: IQuizDataObj[];
    currentQuestion: number;
    incorrectList: IQuizDataObj[];
    percentProgress: number;
    score: number;
    complete: boolean;
}

export interface IQuizContext {
    quiz: IQuizDataObj[];
    quizTrack: IQuizTrack;
    setQuizTrack: React.Dispatch<SetStateAction<IQuizTrack>>;
}

/**
 *
 * Display a single Q and A
 * User selects an answer to the question
 * Check if answer is a 'correctAnswer'
 * If answer is correct, add qAndA to 'correctList'
 * If answer is incorrect, add qAndA to 'incorrectList'
 *
 * Also, if answer is incorrect, merge new property into qAndA that contains the qAndA
 * along with the incorrect answer: { ...qAndA, answerChosen: [IncorrectAnswer] }
 *
 */

export const QuizContext = React.createContext<IQuizContext>({
    quiz: quizData,
    quizTrack: {
        answerSelected: false,
        correctList: [],
        currentQuestion: 0,
        incorrectList: [],
        percentProgress: 0,
        score: 0,
        complete: false,
    },
    setQuizTrack: () => null,
});

const QuizContextProvider = ({ children }: { children: React.ReactNode }) => {
    const [quiz] = useState<IQuizDataObj[]>(quizData);
    /**
     *
     * This quiz track should keep track of:
     * - the current question
     * - list of correct answers
     * - list of incorrect answers
     * - progress percentage (((length of correct answer + length of incorrect answers) / total questions ) * 100)
     *
     */
    const [quizTrack, setQuizTrack] = useState<IQuizTrack>({
        answerSelected: false,
        complete: false,
        correctList: [],
        currentQuestion: 0,
        incorrectList: [],
        percentProgress: 0,
        score: 0,
    });

    return (
        <QuizContext.Provider
            value={{
                quiz,
                quizTrack,
                setQuizTrack,
            }}
        >
            {children}
        </QuizContext.Provider>
    );
};

export default QuizContextProvider;
