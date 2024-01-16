import React, { useState } from "react";

type Tab = { label: string; relatedContent: string };

type TabsContextInitValue = {
    pos: number;
    tabs: Tab[];
    handleTagSelect: (value: number) => void;
};

const tabs = [
    {
        label: "Tab1",
        relatedContent: "Tab1 focuses on the animalistic behavior of wolves",
    },
    {
        label: "Tab2",
        relatedContent: "Tab2 focuses on how big elephants are",
    },
    {
        label: "Tab3",
        relatedContent: "Tab3 focuses on how AI is taking over shit",
    },
] as Tab[];

export const TabsContext = React.createContext<TabsContextInitValue>({
    pos: 0,
    tabs,
    handleTagSelect: () => null,
});

const TabsContextProvider = ({ children }: { children: React.ReactNode }) => {
    const [pos, setPos] = useState<number>(0);

    const handleTagSelect = (index: number) => {
        setPos(index);
    };

    return (
        <TabsContext.Provider
            value={{
                pos,
                tabs,
                handleTagSelect,
            }}
        >
            {children}
        </TabsContext.Provider>
    );
};

export default TabsContextProvider;
