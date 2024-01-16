import Tab from "./Tab";
import { TabsContext } from "../contexts/TabsContext";
import { useContext } from "react";

const Tabs = () => {
    const { tabs } = useContext(TabsContext);

    return (
        <ul className="flex items-center">
            {tabs.map((tab, index) => (
                <Tab key={tab.label} index={index} />
            ))}
        </ul>
    );
};

export default Tabs;
