import React, { useContext } from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { LanguageContext } from "../../pages/Main";

function MovieModal({ movie, display, setDisplay }) {
    const langContext = useContext(LanguageContext);

    return (
        <div className={`movieModal ${display ? "dtl-show" : "dtl-hide"}`}>
            <div>
                <img src={movie.image} alt="Movie poster" />
            </div>
            <div className="detailsModal">
                <button className="closeBtn" onClick={() => setDisplay(false)}><AiOutlineCloseCircle size={30} /></button>
                <h1>{movie.title}</h1>
                <h3>({movie.year})</h3>
                <p>{langContext === "en" ? movie.plot : movie.plotLocal}</p>
                <div className="secondary-container">
                    <div className="line">
                        <h2 className="labeler">Starring:</h2>
                        <h2 className="labeler">{movie.stars}</h2>
                    </div>
                    <div className="line">
                        <h2 className="labeler">Genre:</h2>
                        <h2 className="labeler">{movie.genres}</h2>
                    </div>
                    <div className="line">
                        <h2 className="labeler">Audio Languages:</h2>
                        <h2 className="labeler">{movie.languages}</h2>
                    </div>
                </div>
            </div>
        </div >
    );
}

export default MovieModal;