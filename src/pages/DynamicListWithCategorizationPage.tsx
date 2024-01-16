import { useEffect, useState } from "react";

import ExerciseWithBackNav from "../components/ExerciseWithBackNav";
import { FaTrashCan } from "react-icons/fa6";
import Layout from "../Layout";

type Item = {
    task: string;
    category: "Personal" | "Work" | "Shopping" | "Last minute";
};

type Items = Item[];

const categories: Item["category"][] = [
    "Personal",
    "Work",
    "Shopping",
    "Last minute",
];

const spanStyles =
    "border bg-gray-300 cursor-pointer font-normal mr-2 px-2 py-1 rounded-md shadow-sm text-sm text-gray-700";

const DynamicListWithCategorizationPage = () => {
    const [listItems, setListItems] = useState<Items>([]);
    const [listItem, setListItem] = useState<Item>({
        category: "Personal",
        task: "",
    });
    const [validationMessage, setValidationMessage] = useState("");
    const [selectedCategory, setSelectedCategory] =
        useState<Item["category"]>("Personal");

    useEffect(() => {
        const stringifiedListItems = localStorage.getItem("listItems");
        const parsedListItems =
            stringifiedListItems && (JSON.parse(stringifiedListItems) as Items);

        if (parsedListItems) {
            setListItems(parsedListItems);
        }
    }, []);

    const handleSelectChange = (
        event: React.ChangeEvent<HTMLSelectElement>,
    ) => {
        const targetAsCategory = event.target.value as Item["category"];

        setSelectedCategory(targetAsCategory);
        setListItem((prevItem) => ({
            ...prevItem,
            category: targetAsCategory,
        }));
    };

    const handleAddListItemsToStorage = () => {
        const stringifiedListItems = localStorage.getItem("listItems");

        if (listItem) {
            if (stringifiedListItems) {
                const parsedListItems = JSON.parse(
                    stringifiedListItems,
                ) as Items;
                parsedListItems.push(listItem);

                localStorage.setItem(
                    "listItems",
                    JSON.stringify(parsedListItems),
                );
            } else {
                localStorage.setItem("listItems", JSON.stringify(listItems));
            }
        }
    };

    const handleRemoveListItemsInStorage = (item: Item) => {
        const stringifiedListItems = localStorage.getItem("listItems");
        const parsedListItems = JSON.parse(stringifiedListItems!) as Items;
        const filteredListItems = parsedListItems.filter(
            (listItem) =>
                listItem.task.toLocaleLowerCase() !==
                item.task.toLocaleLowerCase(),
        );

        localStorage.setItem("listItems", JSON.stringify(filteredListItems));
    };

    const handleSubmitListItem = (event: React.FormEvent) => {
        event.preventDefault();

        if (!listItem?.task) {
            setValidationMessage("You must enter an item to be submitted");
        } else {
            const foundListItem = listItems.find(
                (item) =>
                    item.task.toLocaleLowerCase() ===
                    listItem.task.toLocaleLowerCase(),
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
        }

        setSelectedCategory("Personal");
        setListItem({ category: "Personal", task: "" });

        setTimeout(() => {
            setValidationMessage("");
        }, 3000);
    };

    const handleRemoveItem = (item: Item) => {
        setListItems((listItems) =>
            listItems.filter(
                (listItem) =>
                    listItem.task.toLocaleLowerCase() !==
                    item.task.toLocaleLowerCase(),
            ),
        );

        handleRemoveListItemsInStorage(item);
    };

    const resetItems = () => {
        const stringifiedListItems = localStorage.getItem("listItems");
        const parsedListItems =
            stringifiedListItems && (JSON.parse(stringifiedListItems) as Items);

        parsedListItems && setListItems(parsedListItems);
    };

    const handleItemFilter = (category: Item["category"]) => {
        setListItems((listItems) =>
            listItems.filter(
                (item) =>
                    item.category.toLocaleLowerCase() ===
                    category.toLocaleLowerCase(),
            ),
        );
    };

    return (
        <Layout>
            <ExerciseWithBackNav name="Dynamic List With Categorization" />
            <div className="flex gap-20">
                <div>
                    <form
                        className="flex flex-col gap-5 mb-5"
                        onSubmit={handleSubmitListItem}
                    >
                        <div className="border border-gray-300 px-2 h-10 rounded-lg w-[300px]">
                            <select
                                value={selectedCategory}
                                onChange={handleSelectChange}
                                className="h-full outline-none text-lg text-gray-500 w-full"
                            >
                                <option value="Personal">Personal</option>
                                <option value="Work">Work</option>
                                <option value="Shopping">Shopping</option>
                                <option value="Last minute">Last minute</option>
                            </select>
                        </div>
                        <input
                            className="border border-gray-300 px-4 h-12 rounded-md w-[300px]"
                            type="text"
                            name="listItem"
                            placeholder="Enter an item"
                            value={listItem?.task}
                            onChange={(event) =>
                                setListItem({
                                    category: selectedCategory,
                                    task: event.target.value,
                                })
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
                <div className="flex flex-col gap-5">
                    <h1 className="font-bold text-2xl text-gray-500">
                        Your Todo List
                    </h1>
                    <p className="font-medium">
                        Filter list by:{" "}
                        <>
                            <span className={spanStyles} onClick={resetItems}>
                                All
                            </span>
                            {categories.map((category) => (
                                <span
                                    className={spanStyles}
                                    key={category}
                                    onClick={() => {
                                        resetItems();
                                        handleItemFilter(category);
                                    }}
                                >
                                    {category}
                                </span>
                            ))}
                        </>
                    </p>
                    <ul className="flex flex-col gap-2">
                        {listItems.map((item) => (
                            <li
                                className="flex items-center justify-between text-lg w-[300px]"
                                key={item.task}
                            >
                                <p>
                                    {item.task}{" "}
                                    <span
                                        className="cursor-pointer text-sm text-blue-500"
                                        onClick={() => {
                                            resetItems();
                                            handleItemFilter(item.category);
                                        }}
                                    >
                                        ({item.category})
                                    </span>
                                </p>
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
            </div>
        </Layout>
    );
};

export default DynamicListWithCategorizationPage;
