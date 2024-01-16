import Layout from "../Layout";
import { Link } from "react-router-dom";
import { FaArrowCircleRight } from "react-icons/fa";

type Exercise = { name: string; path: string };

const exercises = [
    {
        name: "Counter",
        path: "/counter",
    },
    {
        name: "Toggle Switch",
        path: "/toggle-switch",
    },
    {
        name: "Form with Validation",
        path: "/form-with-validation",
    },
    {
        name: "Dynamic List",
        path: "/dynamic-list",
    },
    {
        name: "Timer",
        path: "/timer",
    },
    {
        name: "Tabbed Interface",
        path: "/tabbed-interface",
    },
    {
        name: "Search Filter",
        path: "/search-filter",
    },
] satisfies Exercise[];

const HomePage = () => {
    return (
        <Layout>
            <h1 className="font-bold mb-10 text-2xl">Exercises List</h1>
            <ul className="flex flex-wrap gap-5">
                {exercises.map((exercise) => (
                    <li
                        className="bg-gray-100 border border-gray-200 flex hover:scale-105 items-center rounded-lg shadow-md transition-transform"
                        key={exercise.name}
                    >
                        <Link
                            className="flex font-medium items-center gap-3 p-5 text-gray-600 text-xl"
                            to={exercise.path}
                        >
                            {exercise.name}
                            <FaArrowCircleRight fill="#16a6e9" size={20} />
                        </Link>
                    </li>
                ))}
            </ul>
        </Layout>
    );
};

export default HomePage;
