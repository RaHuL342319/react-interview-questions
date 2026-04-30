import React, { useState, useEffect } from "react";
import useDebounce from "../../hooks/useDebounce";

function SearchComponent() {
  const [search, setSearch] = useState("");

  const debouncedSearch = useDebounce(search, 500);

  useEffect(() => {
    if (debouncedSearch) {
      console.log("API Call with:", debouncedSearch);
      // call API here
    }
  }, [debouncedSearch]);

  return (
    <input
      type="text"
      placeholder="Search..."
      value={search}
      onChange={(e) => setSearch(e.target.value)}
    />
  );
}

export default SearchComponent;