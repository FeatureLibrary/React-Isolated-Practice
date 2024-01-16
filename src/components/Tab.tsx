import { TabsContext } from "../contexts/TabsContext";
import { useContext } from "react";

const Tab = ({ index }: { index: number; }) => {
    const { handleTagSelect, pos, tabs } = useContext(TabsContext);

    return (
        <li
            className={` border border-gray-500/50 border-b-0 cursor-pointer rounded-t-md px-4 py-1  ${
                pos === index
                    ? "bg-blue-500 text-white"
                    : "bg-gray-100 text-gray-600"
            }`}
            onClick={() => handleTagSelect(index)}
        >
            {tabs[index].label}
        </li>
    );
};

export default Tab;
