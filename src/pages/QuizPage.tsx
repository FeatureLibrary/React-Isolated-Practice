import ExerciseWithBackNav from "../components/ExerciseWithBackNav";
import Layout from "../Layout";
import NavButtons from "../components/NavButtons";
import ProgressBar from "../components/ProgressBar";
import Question from "../components/Question";
import QuizContextProvider from "../contexts/QuizContext";
import Scoreboard from "../components/Scoreboard";

const QuizPage = () => {
    return (
        <Layout>
            <ExerciseWithBackNav name="Quiz" />
            <QuizContextProvider>
                <div className="flex gap-36">
                    <div className="w-[450px]">
                        <ProgressBar />
                        <Question />
                        <NavButtons />
                    </div>
                    <Scoreboard />
                </div>
            </QuizContextProvider>
        </Layout>
    );
};

export default QuizPage;
