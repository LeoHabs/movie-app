import React from "react";

export default function MovieCard({image , title , score}) {
    return <>
        <div className="movieCard">
            <img src={image} alt={`Movie image for ${title}`}/>
            <h3>{title}</h3>
            <h4>{score}</h4>
        </div>
    </>
}