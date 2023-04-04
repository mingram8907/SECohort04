

function MovieDisplay(props) {
    const { movie } = props;
    if(movie?.Error){
        return <h3>Movie not found</h3>
    }

    const loaded = () => {
        return (
            <div>
            <h1>{movie.Title} ({movie.Year})</h1>
            <h4>Rated: {movie.Rated}</h4>
            <h4>Genre: {movie.Genre}</h4>
            <img src={movie.Poster} alt={movie.Title} />
            <h3>Directed by: {movie.Director}</h3>
            <h3>Featuring: {movie.Actors}</h3>
            <p>{movie.Plot}</p>
            <h4>imdb Rating: {movie.imdbRating}</h4>
        </div>
        )
    }

    const loading = () => <h1>No Movie to Display</h1>

    return movie ? loaded() : loading()
}

export default MovieDisplay