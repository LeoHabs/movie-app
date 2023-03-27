import React, { useContext } from "react";
import { LanguageContext } from "../../App";

function MovieModal({ movie }) {
    const langContext = useContext(LanguageContext);

    return (
        <div className="movieModal">
            <div>
                <img src={movie.image} alt="Movie poster" />
            </div>
            <div className="detailsModal">
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
        </div>
    );
}

export default MovieModal;