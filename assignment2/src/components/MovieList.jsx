import MovieItem from "./MovieItem";

export default function MovieList({ movies, onDelete, onToggle }) {
  if (movies.length === 0) {
    return <p className="empty">No movies found. Add one!</p>;
  }

  return (
    <div className="movie-list">
      {movies.map((movie) => (
        <MovieItem
          key={movie.id}
          movie={movie}
          onDelete={onDelete}
          onToggle={onToggle}
        />
      ))}
    </div>
  );
}
