export default function Summary({ movies }) {
  const total = movies.length;
  const watched = movies.filter((m) => m.watched).length;
  const unwatched = total - watched;

  return (
    <div className="summary">
      <p>Total movies: {total}</p>
      <p>Already watched: {watched}</p>
      <p>Still to unwatched: {unwatched}</p>

      {total > 0 && watched === total && (
        <p className="success">So it is not anything else to watch,
         you can close this site and do your work.</p>
      )}
    </div>
  );
}
