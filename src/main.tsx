import "./index.css";

import { RouterProvider, createBrowserRouter } from "react-router-dom";

import CounterPage from "./pages/CounterPage.tsx";
import DynamicListPage from "./pages/DynamicListPage.tsx";
import DynamicListWithCategorizationPage from "./pages/DynamicListWithCategorizationPage.tsx";
import FormWithValidationPage from "./pages/FormWithValidationPage.tsx";
import HomePage from "./pages/HomePage.tsx";
import QuizPage from "./pages/QuizPage.tsx";
import ReactDOM from "react-dom/client";
import SearchFilterPage from "./pages/SearchFilterPage.tsx";
import TabbedInterfacePage from "./pages/TabbedInterfacePage.tsx";
import TimerPage from "./pages/TimerPage.tsx";
import ToggleSwitchPage from "./pages/ToggleSwitchPage.tsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <HomePage />,
    },
    {
        path: "/counter",
        element: <CounterPage />,
    },
    {
        path: "/toggle-switch",
        element: <ToggleSwitchPage />,
    },
    {
        path: "/form-with-validation",
        element: <FormWithValidationPage />,
    },
    {
        path: "/dynamic-list",
        element: <DynamicListPage />,
    },
    {
        path: "/timer",
        element: <TimerPage />,
    },
    {
        path: "/tabbed-interface",
        element: <TabbedInterfacePage />,
    },
    {
        path: "/search-filter",
        element: <SearchFilterPage />,
    },
    {
        path: "/dynamic-list/with-categorization",
        element: <DynamicListWithCategorizationPage />,
    },
    {
        path: "/quiz",
        element: <QuizPage />,
    },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
    <RouterProvider router={router} />,
);
