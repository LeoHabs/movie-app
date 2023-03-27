import React, { useContext } from "react";
import { useState } from "react";
import { LanguageContext } from "../../App.js"

export default function MovieCard({ image, title, score, crew, year, id }) {
  const [displayState, setDisplayState] = useState("--hidden");
  const langContext = useContext(LanguageContext);

  function getScoreColor(score) {
    if (score >= 7) {
      return "green-score"
    }
    if (score > 3 && score < 7) {
      return "yellow-score"
    }
    return "red-score"
  }

  const clickHandler = () => {
    fetch(`https://imdb-api.com/${langContext}/API/Title/k_jy7bm1my/${id}`)
      .then(r => r.json())
      .then(r => console.log(r));
  };

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
        onClick={clickHandler}
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
