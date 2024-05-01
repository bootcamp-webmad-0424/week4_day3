import { useState } from 'react';
import moviesData from '../movies-data.json'
import MovieCard from '../MovieCard/MovieCard';

function MovieList() {

    const [movies, setMovies] = useState(moviesData)
    const [showMovies, setShowMovies] = useState(true)

    const deleteMovie = moveIdToDelete => {
        console.log('VAMOS A FILTRAR LAS PELICULAS DEJANDO LAS QUE TIENEN UN _id QUE NO COINCIDE CON EL ELIMINADO ->', moveIdToDelete)
        const filteredMoves = movies.filter(eachMovie => eachMovie._id != moveIdToDelete)
        setMovies(filteredMoves)
    }

    const handleMovieShow = () => {
        setShowMovies(!showMovies)
    }

    return (
        <div>
            <h2>Movie List</h2>

            <hr />

            <button onClick={handleMovieShow}>
                {showMovies ? 'Ocultar películas' : 'Mostrar películas'}
            </button>

            <hr />
            {
                showMovies && movies.map(movie => {
                    return <MovieCard movieInfo={movie} deleteMovie={deleteMovie} key={movie._id} />
                })
            }
        </div>
    )
}

export default MovieList