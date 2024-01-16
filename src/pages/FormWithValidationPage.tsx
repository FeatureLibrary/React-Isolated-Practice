import ExerciseWithBackNav from "../components/ExerciseWithBackNav";
import Layout from "../Layout";
import { useState } from "react";

const FormWithValidationPage = () => {
    const [email, setEmail] = useState("");
    const [validationMessage, setValidationMessage] = useState("");

    const validateEmail = (email: string) => {
        const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        return regex.test(email);
    };

    const handleEmailValidityCheck = () => {
        if (validateEmail(email)) {
            setValidationMessage("Email is valid");
        } else {
            setValidationMessage("Email is invalid");
        }

        setTimeout(() => {
            setValidationMessage("");
        }, 3000);
    };

    return (
        <Layout>
            <ExerciseWithBackNav name="Form with Validation" />
            <form className="mb-5">
                <input
                    className="border border-gray-300 px-4 h-12 rounded-md w-[300px]"
                    type="email"
                    name="email"
                    placeholder="Enter email"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                />
            </form>
            {validationMessage && (
                <p
                    className={
                        "mb-2 " +
                        (validationMessage === "Email is valid"
                            ? "text-green-500"
                            : "text-red-500")
                    }
                >
                    {validationMessage}
                </p>
            )}
            <button
                className="border border-blue-500 bg-blue-500 font-medium h-12 rounded-lg text-white text-lg w-[300px]"
                type="button"
                onClick={handleEmailValidityCheck}
            >
                Check validity
            </button>
        </Layout>
    );
};

export default FormWithValidationPage;
