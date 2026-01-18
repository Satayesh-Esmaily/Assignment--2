export default function Summary({ movies }) {
  const total = movies.length;
  const watched = movies.filter((m) => m.watched).length;
  const unwatched = total - watched;

  return (
    <div className="summary">
      <p>Total: {total}</p>
      <p>Watched: {watched}</p>
      <p>Unwatched: {unwatched}</p>

      {total > 0 && watched === total && (
        <p className="success">🎉 You watched everything!</p>
      )}
    </div>
  );
}
