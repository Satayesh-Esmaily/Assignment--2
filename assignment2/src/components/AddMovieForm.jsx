import { useState } from "react";

export default function AddMovieForm({ onAdd }) {
  const [title, setTitle] = useState("");
  const [genre, setGenre] = useState("Action");

  function handleSubmit(e) {
    e.preventDefault();

    if (title.trim() === "") return;

    onAdd(title, genre);
    setTitle("");
  }

  return (
    <form onSubmit={handleSubmit} className="add-form">
      <input
        type="text"
        placeholder="Movie title..."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

<select
  value={genre}
  onChange={(e) => setGenre(e.target.value)}
>
  <option value="Action">Action</option>
  <option value="Drama">Drama</option>
  <option value="Comedy">Comedy</option>
  <option value="Sci-Fi">Sci-Fi</option>
  <option value="Horror">Horror</option>
  <option value="Romance">Romance</option>
  <option value="Fantasy">Fantasy</option>
  <option value="Documentary">Documentary</option>
  <option value="Thriller">Thriller</option>
  <option value="Mystery">Mystery</option>
  <option value="Animation">Animation</option>
  <option value="Adventure">Adventure</option>
</select>


      <button>Add Movie</button>
    </form>
  );
}
