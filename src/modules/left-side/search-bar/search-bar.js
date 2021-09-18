import React, {useState} from 'react';
import styles from "./search-bar.module.css"

import {FaSearch} from "react-icons/fa";
import {FaUserCircle} from "react-icons/fa";

const SearchBar = () => {
    const [query, setQuery] = useState('');

    const getPersons = (value) => {


    }

    const onSearch = (e) => {
        e.preventDefault();

        setQuery(e.target.value);
        getPersons(e.target.value);
    }

    return (
        <div className={styles.searchBarContainer}>

            <div className={styles.avatar}>
                <FaUserCircle size="50px" color="slategrey"/>
            </div>

            <div className={styles.searchInput}>
                <FaSearch size="12px" color="silver"/>

                <input className={styles.searchInputText}
                       placeholder="Search or start new chat"
                       type="text"
                       value={query}
                       onChange={onSearch}/>
            </div>

        </div>
    )
}

export default SearchBar;
