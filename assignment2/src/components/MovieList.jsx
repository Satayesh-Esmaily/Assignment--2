import MovieItem from "./MovieItem";

export default function MovieList({ movies, onDelete, onToggle }) {
  if (movies.length === 0) {
    return <p className="empty">Did you add any movie? I don't think soo.</p>;
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
