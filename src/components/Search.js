import React from "react";
import StarRating from "./StarRating";

const Search = ({ searchValue, handleValue, handleRate, serachRate }) => {
  return (
    <div className="d-flex justify-content-around sticky-top bg-info flex-wrap">
      <h2>MovieApp</h2>
      <div className="d-flex  justify-content-center  align-items-center flex-wrap">
        <input
          type="text"
          placeholder="search"
          value={searchValue}
          onChange={handleValue}
        />
        <StarRating rate={serachRate} addStars={handleRate} />
      </div>
    </div>
  );
};

export default Search;
