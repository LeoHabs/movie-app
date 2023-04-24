import React, { useContext } from "react";
import { useState } from "react";
import { LanguageContext } from "../../pages/Main"
import MovieModal from "../MovieModal/MovieModal.jsx";
import { MdOutlineFavoriteBorder } from "react-icons/md";
import { collection, deleteDoc, doc, setDoc } from "firebase/firestore";
import Firebase from "../../gateway/Firebase.js"
import { UserContext } from "../../UserProvider";
import { useLocation } from "react-router";

export default function MovieCard({ image, title, score, crew, year, id }) {
  const [displayState, setDisplayState] = useState("--hidden");
  const langContext = useContext(LanguageContext);
  const [isDtlOpen, setIsDtlOpen] = useState(false);
  const [detailObj, setDetailObj] = useState({});
  const { user } = useContext(UserContext);
  const route = useLocation();

  function getScoreColor(score) {
    if (score >= 7) {
      return "green-score"
    }
    if (score > 3 && score < 7) {
      return "yellow-score"
    }
    return "red-score"
  }

  const clickHandler = async () => {
    const movieDetail = await fetch(`https://imdb-api.com/${langContext}/API/Title/k_jy7bm1my/${id}`)
      .then(r => r.json())
    await setDetailObj(movieDetail);
    await setIsDtlOpen(true);
  };

  const addFavoriteHandler = async (e) => {
    e.stopPropagation();
    const favoriteRef = doc(
      collection(Firebase.firestore, "users", user?.uid, "favorites"),
      id
    );
    setDoc(favoriteRef, {
      id,
      image,
      title,
      score,
      crew,
      year
    });

  };

  const deleteFavoriteHandler = async (e) => {
    e.stopPropagation();
    const favoriteRef = doc(
      collection(Firebase.firestore, "users", user?.uid, "favorites"),
      id
    );
    await deleteDoc(favoriteRef);
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
          <button className="fav-button" onClick={(e) => route === "/favorite" ? deleteFavoriteHandler : addFavoriteHandler}>
            <MdOutlineFavoriteBorder size={30} />
          </button>
        </div>
      </div>
      <MovieModal movie={detailObj} display={isDtlOpen} setDisplay={setIsDtlOpen}></MovieModal>
    </>
  );
}
