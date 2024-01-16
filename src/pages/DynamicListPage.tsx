import ExerciseWithBackNav from "../components/ExerciseWithBackNav";
import { FaTrashCan } from "react-icons/fa6";
import Layout from "../Layout";
import { useState } from "react";

const DynamicListPage = () => {
    const [listItems, setListItems] = useState<string[]>([]);
    const [listItem, setListItem] = useState("");
    const [validationMessage, setValidationMessage] = useState("");

    const handleAddListItemsToStorage = () => {
        const stringifiedListItems = localStorage.getItem("listItems");

        if (stringifiedListItems) {
            const parsedListItems = JSON.parse(
                stringifiedListItems,
            ) as string[];
            parsedListItems.push(listItem);

            localStorage.setItem("listItems", JSON.stringify(parsedListItems));
        } else {
            localStorage.setItem("listItems", JSON.stringify(listItems));
        }
    };

    const handleRemoveListItemsInStorage = (item: string) => {
        const stringifiedListItems = localStorage.getItem("listItems");
        const parsedListItems = JSON.parse(stringifiedListItems!) as string[];
        const filteredListItems = parsedListItems.filter(
            (listItem) =>
                listItem.toLocaleLowerCase() !== item.toLocaleLowerCase(),
        );

        localStorage.setItem("listItems", JSON.stringify(filteredListItems));
    };

    const handleSubmitListItem = (event: React.FormEvent) => {
        event.preventDefault();

        if (!listItem) {
            setValidationMessage("You must enter an item to be submitted");
        } else {
            const foundListItem = listItems.find(
                (item) =>
                    item.toLocaleLowerCase() === listItem.toLocaleLowerCase(),
            );

            if (foundListItem) {
                setValidationMessage("You already have that item in the list");

                setTimeout(() => {
                    setValidationMessage("");
                }, 3000);

                return;
            }

            handleAddListItemsToStorage();

            setListItems((listItems) => [...listItems, listItem]);
            setListItem("");
        }

        setTimeout(() => {
            setValidationMessage("");
        }, 3000);
    };

    const handleRemoveItem = (item: string) => {
        setListItems((listItems) =>
            listItems.filter(
                (listItem) =>
                    listItem.toLocaleLowerCase() !== item.toLocaleLowerCase(),
            ),
        );

        handleRemoveListItemsInStorage(item);
    };

    const stringifiedListItems = localStorage.getItem("listItems");
    const parsedListItems =
        stringifiedListItems && (JSON.parse(stringifiedListItems) as string[]);

    return (
        <Layout>
            <ExerciseWithBackNav name="Dynamic List" />
            <div>
                <div>
                    <form
                        className="flex flex-col gap-5 mb-5"
                        onSubmit={handleSubmitListItem}
                    >
                        <input
                            className="border border-gray-300 px-4 h-12 rounded-md w-[300px]"
                            type="text"
                            name="listItem"
                            placeholder="Enter an item"
                            value={listItem}
                            onChange={(event) =>
                                setListItem(event.target.value)
                            }
                        />
                        <button
                            className="border border-blue-500 bg-blue-500 font-medium h-12 rounded-lg text-white text-lg w-[300px]"
                            type="submit"
                        >
                            Add item
                        </button>
                    </form>
                    {validationMessage && (
                        <p className={"mb-2 text-red-500"}>
                            {validationMessage}
                        </p>
                    )}
                </div>
                <ul className="flex flex-col gap-2">
                    {parsedListItems &&
                        parsedListItems.map((item) => (
                            <li
                                className="flex items-center justify-between text-lg w-[300px]"
                                key={item}
                            >
                                <p>{item}</p>
                                <div
                                    onClick={() => handleRemoveItem(item)}
                                    title="Remove item"
                                >
                                    <FaTrashCan color="red" />
                                </div>
                            </li>
                        ))}
                </ul>
            </div>
        </Layout>
    );
};

export default DynamicListPage;
