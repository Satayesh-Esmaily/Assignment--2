export default function FilterControls({ filter, setFilter }) {
  return (
    <div className="filters">
      <button
        className={filter === "All" ? "active" : ""}
        onClick={() => setFilter("All")}
      >
        All
      </button>

      <button
        className={filter === "Watched" ? "active" : ""}
        onClick={() => setFilter("Watched")}
      >
        Watched
      </button>

      <button
        className={filter === "Unwatched" ? "active" : ""}
        onClick={() => setFilter("Unwatched")}
      >
        Unwatched
      </button>
    </div>
  );
}
