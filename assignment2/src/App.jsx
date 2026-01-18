import { useState } from "react";
import AddMovieForm from "./components/AddMovieForm";
import FilterControls from "./components/FilterControls";
import MovieList from "./components/MovieList";
import Summary from "./components/Summary";
import "./App.css";

export default function App() {
  const [movies, setMovies] = useState([]);
  const [filter, setFilter] = useState("All");

  function addMovie(title, genre) {
    setMovies([
      ...movies,
      {
        id: Date.now(),
        title,
        genre,
        watched: false,
      },
    ]);
  }

  function deleteMovie(id) {
    setMovies(movies.filter((m) => m.id !== id));
  }

  function toggleWatched(id) {
    setMovies(
      movies.map((m) =>
        m.id === id ? { ...m, watched: !m.watched } : m
      )
    );
  }


  const filteredMovies = movies.filter((movie) => {
    if (filter === "Watched") return movie.watched;
    if (filter === "Unwatched") return !movie.watched;
    return true;
  });

  return (
    <div className="app">
      <h1> Movie Watch list</h1>

      <AddMovieForm onAdd={addMovie} />
      <FilterControls filter={filter} setFilter={setFilter} />
      <Summary movies={movies} />

      <MovieList
        movies={filteredMovies}
        onDelete={deleteMovie}
        onToggle={toggleWatched}
      />
    </div>
  );
}
