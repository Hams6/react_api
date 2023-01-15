import Movie from "./Movie";

const movies = ({movies}) => {
    return (
        typeof movies !== "undefined" ?
        (
            <div className="container">
                {movies.map((movie) => (
                    <Movie movie={movie} />
                ))}
            </div>
        ) : (
            <div className="empty">
                <h2>No movies found</h2>
            </div>
        )
    )
}




export default movies;