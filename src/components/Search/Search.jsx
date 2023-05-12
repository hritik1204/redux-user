import React, { useState } from "react";
import { FiSearch } from "react-icons/fi";

import "./Search.css";

const Search = ({ search, setSearch }) => {
  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  return (
    <div className="search">
      <div className="search-box">
        <FiSearch color="#d2d2d2" style={{ marginLeft: "15px" }} />
        <input placeholder="Search" value={search} onChange={handleSearch} />
      </div>
    </div>
  );
};

export default Search;
