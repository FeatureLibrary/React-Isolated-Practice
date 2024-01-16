import ExerciseWithBackNav from "../components/ExerciseWithBackNav";
import Layout from "../Layout";
import SearchableItems from "../components/SearchableItems";
import { useState } from "react";

const items = [
    "Blue Whale",
    "Mount Everest",
    "Golden Gate Bridge",
    "Shakespeare",
    "Pyramids of Giza",
    "Amazon Rainforest",
    "Van Gogh",
    "Great Barrier Reef",
    "Tesla Model S",
    "Machu Picchu",
    "Beethoven",
    "Sahara Desert",
    "Mona Lisa",
    "Statue of Liberty",
    "Galapagos Islands",
    "Eiffel Tower",
    "Himalayas",
    "Grand Canyon",
    "Leonardo da Vinci",
    "Niagara Falls",
];

const SearchFilterPage = () => {
    const [searchableItems, setSearchableItems] = useState(items);
    const [query, setQuery] = useState("");

    const checkQueryAgainstItems = (item: string, query: string) => {
        return (
            item.toLocaleLowerCase().startsWith(query.toLocaleLowerCase()) ||
            item.toLocaleLowerCase().endsWith(query.toLocaleLowerCase()) ||
            item.toLocaleLowerCase().includes(query.toLocaleLowerCase()) ||
            item.toLocaleLowerCase() === query.toLocaleLowerCase()
        );
    };

    const handleChange = (event: React.ChangeEvent) => {
        const target = event.target as HTMLInputElement;

        const itemsCopy = [...searchableItems];
        const filteredItems = itemsCopy.filter((item) =>
            checkQueryAgainstItems(item, target.value),
        );

        setSearchableItems(() => {
            if (target.value === "") {
                return items;
            }

            return filteredItems;
        });

        setQuery(target.value);
    };

    return (
        <Layout>
            <ExerciseWithBackNav name="Search Filter" />
            <form className="mb-5">
                <input
                    className="border border-gray-300 px-4 h-12 rounded-md w-[300px]"
                    type="search"
                    name="query"
                    placeholder="Search random list"
                    value={query}
                    onChange={handleChange}
                />
            </form>
            <SearchableItems searchableItems={searchableItems} />
        </Layout>
    );
};

export default SearchFilterPage;
