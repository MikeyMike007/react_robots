import React from "react";
const SearchBox = ({searchChange}) => {
  return (
  <input onChange={searchChange} type='search' placeholder="search robots" />
  );
}

export default SearchBox
