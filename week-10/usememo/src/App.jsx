import { useMemo, useState } from "react";

const items = ["apple", "banana", "orange", "mango", "grapes"];

const FilterList = () => {
  const [query, setQuery] = useState("");

  // Memoizing the filtered items
  const filteredItems = useMemo(() => {
    console.log("Filtering items");
    return items.filter((item) =>
      item.toLowerCase().includes(query.toLowerCase())
    );
  }, [query]);

  return (
    <div>
      <input
        type="text"
        placeholder="Search items"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <ul>
        {filteredItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default FilterList;
