export default function MovieItem({ movie, onDelete, onToggle }) {
  return (
   <div className="movie-item">
  <div className="movie-info">
    <h4>{movie.title}</h4>
    <small>{movie.genre}</small>
  </div>

  <span className={movie.watched ? "watched" : "unwatched"}>
    {movie.watched ? "Watched" : "Unwatched"}
  </span>

  <div className="actions">
    <button onClick={() => onToggle(movie.id)}>Toggle</button>
    <button onClick={() => onDelete(movie.id)}>Delete</button>
  </div>
</div>

  );
}
