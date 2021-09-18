import React, { useCallback } from "react";
import styles from "./search-bar.module.css";

import { FaSearch, FaUserCircle } from "react-icons/fa";

const SearchBar = ({ onFilter }) => {
  const onSearch = useCallback(
    (e) => {
      onFilter(e.target.value);
    },
    [onFilter]
  );

  return (
    <div className={styles.searchBarContainer}>
      <div className={styles.avatar}>
        <FaUserCircle size="50px" color="slategrey" />
      </div>

      <div className={styles.searchInput}>
        <FaSearch size="12px" color="silver" />

        <input
          className={styles.searchInputText}
          placeholder="Search or start new chat"
          type="text"
          onChange={onSearch}
        />
      </div>
    </div>
  );
};

export default SearchBar;
