const MovieCard = ({ movieInfo, deleteMovie }) => {

    return (
        <div className="MovieCard">
            <h3>{movieInfo.title}</h3>
            <p>Director: {movieInfo.director}</p>
            <p>Rating: {movieInfo.IMDBRating}</p>
            <p>{movieInfo.hasOscars ? '¡Tuvo Oscars!' : 'Cero premios 💩'}</p>
            <button className="btn-delete" onClick={() => deleteMovie(movieInfo._id)}>Delete</button>
        </div>
    )
}

export default MovieCard