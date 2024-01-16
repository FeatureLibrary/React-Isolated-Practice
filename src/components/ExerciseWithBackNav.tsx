import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const ExerciseWithBackNav = ({ name }: { name: string }) => {
    const navigate = useNavigate();

    return (
        <div className="flex items-center gap-5 mb-10">
            <div className="cursor-pointer" onClick={() => navigate(-1)}>
                <FaArrowLeft size={20} />
            </div>
            <h1 className="font-bold text-2xl">{name} Exercise</h1>
        </div>
    );
};

export default ExerciseWithBackNav;
