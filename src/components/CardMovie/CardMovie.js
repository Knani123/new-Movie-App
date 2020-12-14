import React from "react";
import StarRating from "../StarRating";
import Description from "./Description";
const CardMovie = ({ film }) => {
  const addStars = (star) => {
    console.log(star);
  };
  return (
    <div className="col-lg-3 col-md-4 col-sm-6 border border-secondary m-2 p-2 shadow-lg">
      <h4>
        <StarRating rate={film.rate} addStars={addStars} />
      </h4>
      <img src={film.image} alt={film.name} width="150px" height="200px" />
      <h3>{film.name}</h3>
      <p>{film.date}</p>
      <hr style={{ height: "2px", color: "blueviolet" }} />
      <Description trailer={film.trailer} info={film.info} />
    </div>
  );
};

export default CardMovie;
