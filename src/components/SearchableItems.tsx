import SearchableItem from "./SearchableItem";

const SearchableItems = ({
    searchableItems,
}: {
    searchableItems: string[];
}) => {
    return (
        <ul>
            {searchableItems.map((item) => (
                <SearchableItem key={item} item={item} />
            ))}
        </ul>
    );
};

export default SearchableItems;
