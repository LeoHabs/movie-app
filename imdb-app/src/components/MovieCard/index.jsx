import React from "react";
import { useState } from "react";

export default function MovieCard({ image, title, score, crew, year }) {
  const [displayState, setDisplayState] = useState("--hidden");

  function getScoreColor(score) {
    if (score >= 7) {
      return "green-score"
    }
    if (score > 3 && score < 7) {
      return "yellow-score"
    }
    return "red-score"
  }

  return (
    <>
      <div
        className="movieCard"
        onMouseOver={() => {
          setDisplayState("--show");
        }}
        onMouseLeave={() => {
          setDisplayState("--hidden");
        }}
      >
        <img src={image} alt={`Official poster for ${title}`} />
        <div>
          <h3>{title}</h3>
          <h4 className={getScoreColor(score)} >{score}</h4>
        </div>
        <div id="more-info" className={"moreInfo" + displayState}>
          <h3>{year}</h3>
          <h4>{crew}</h4>
        </div>
      </div>
    </>
  );
}
