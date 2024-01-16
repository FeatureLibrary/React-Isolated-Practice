import ExerciseWithBackNav from "../components/ExerciseWithBackNav";
import Layout from "../Layout";
import TabAssociatedContent from "../components/TabAssociatedContent";
import Tabs from "../components/Tabs";
import TabsContextProvider from "../contexts/TabsContext";

const TabbedInterfacePage = () => {
    return (
        <Layout>
            <ExerciseWithBackNav name="Tabbed Interface" />
            <TabsContextProvider>
                <Tabs />
                <TabAssociatedContent />
            </TabsContextProvider>
        </Layout>
    );
};

export default TabbedInterfacePage;
