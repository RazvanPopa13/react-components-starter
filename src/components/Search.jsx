import { useEffect } from "react";

const Search = ({ handleSearchTerm }) => {
  return (
    <button className="button" onClick={() => handleSearchTerm("From comp")}>
      Search
    </button>
  );
};
export default Search;
