import React from "react";

const StarRating = ({ rate, addStars }) => {
  const stars = (n) => {
    let T = [];
    for (let i = 0; i < 5; i++) {
      i < n
        ? T.push(
            <span
              key={i}
              style={{ color: "#ffd700", cursor: "pointer" }}
              onClick={() => addStars(i + 1)}
            >
              ★
            </span>
          )
        : T.push(
            <span
              key={i}
              style={{ color: "#000", cursor: "pointer" }}
              onClick={() => addStars(i + 1)}
            >
              ★
            </span>
          );
    }
    return T;
  };
  return <div>{stars(rate).map((el) => el)}</div>;
};

export default StarRating;
