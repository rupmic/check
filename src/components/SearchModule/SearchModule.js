import React, { useEffect, useState } from "react";
import styles from "./SearchModule.module.scss";

import { ResultsList } from "./ResultsList";

const SearchModule = ({ data }) => {
  const [search, setSearch] = useState("");
  const [results, setResults] = useState([]);
  const [info, setInfo] = useState("");

  useEffect(() => {
    if (!data) return;
    if (data.length >= 20) {
      data.slice(0, 20);
      setInfo("Listę ograniczono do 20 pozycji.");
    }
    setResults([data]);
    if (!search) return;
  }, [search, data]);

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  return (
    <div className={styles.search_wrapper}>
      <input
        type="text"
        value={search}
        onChange={handleChange}
        className={styles.search_input}
      />
      {results && results.length > 0 ? (
        <ResultsList data={results} info={info} />
      ) : null}
    </div>
  );
};

export { SearchModule };
