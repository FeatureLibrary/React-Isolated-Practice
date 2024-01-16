import { TabsContext } from "../contexts/TabsContext";
import { useContext } from "react";

const TabAssociatedContent = () => {
    const { pos, tabs } = useContext(TabsContext);

    return <div>{tabs[pos].relatedContent}</div>;
};

export default TabAssociatedContent;
