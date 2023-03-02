import React from 'react'
import { MdSearch } from 'react-icons/md';

const Search = ({ handleSearchNote }) => {
    return <div className="search">
        <MdSearch classNane='search-icons' size='1.3em' />
        <input onChange={(event)=>
            handleSearchNote(event.target.value)
        }
        type="text"
        placeholder='検索...' />
    </div>;
};

export default Search;