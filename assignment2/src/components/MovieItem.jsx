export default function MovieItem({ movie, onDelete, onToggle }) {
  return (
    <div className="movie-item">
      <div className="movie-info">
        <h4>{movie.title}</h4>
        <p>Genre: {movie.genre}</p>
        <p>Status: {movie.watched ? "Watched" : "Unwatched"}</p>
      </div>

      <div className="actions">
      <button onClick={() => onToggle(movie.id)}>
      {movie.watched ? "Mark as Unwatched" : "Mark as Watched"}
      </button>

        <button onClick={() => onDelete(movie.id)}>Delete</button>
      </div>
    </div>
  );
}
