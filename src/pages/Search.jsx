import React from "react";
import styles from "./Search.module.css";
import { useState } from "react";
import { getGamesByGenre } from "../controllers/data";
import GameCard from "./GameCard";
import { Link } from "react-router-dom";

export default function Search() {
  const [genre, setGenre] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async () => {
    try {
      const games = await getGamesByGenre(genre);
      setSearchResults(games);
    } catch (error) {
      console.error("Error al buscar juegos:", error);
    }
  };

  return (
    <div>
      <section className={styles.barra}>
        <input
          type="text"
          placeholder="Ejemplos de Género: RPG, Multijugador, Battle Royale, Acción/Aventura, Aventura..."
          className={styles.input}
          value={genre}
          onChange={(e) => setGenre(e.target.value)}
        />
        <button onClick={handleSearch}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="57"
            height="57"
            viewBox="0 0 57 57"
            fill="none"
          >
            <path
              d="M46.55 49.875L31.5875 34.9125C30.4 35.8625 29.0344 36.6146 27.4906 37.1687C25.9469 37.7229 24.3042 38 22.5625 38C18.2479 38 14.5968 36.5053 11.609 33.516C8.62125 30.5267 7.12658 26.8755 7.125 22.5625C7.125 18.2479 8.61967 14.5968 11.609 11.609C14.5983 8.62125 18.2495 7.12658 22.5625 7.125C26.8771 7.125 30.529 8.61967 33.5184 11.609C36.5077 14.5983 38.0016 18.2495 38 22.5625C38 24.3042 37.7229 25.9469 37.1687 27.4906C36.6146 29.0344 35.8625 30.4 34.9125 31.5875L49.875 46.55L46.55 49.875ZM22.5625 33.25C25.5312 33.25 28.0551 32.2113 30.134 30.134C32.2129 28.0567 33.2516 25.5328 33.25 22.5625C33.25 19.5938 32.2113 17.0707 30.134 14.9934C28.0567 12.916 25.5328 11.8766 22.5625 11.875C19.5938 11.875 17.0707 12.9145 14.9934 14.9934C12.916 17.0723 11.8766 19.5953 11.875 22.5625C11.875 25.5312 12.9145 28.0551 14.9934 30.134C17.0723 32.2129 19.5953 33.2516 22.5625 33.25Z"
              fill="black"
            />
          </svg>
        </button>
      </section>
      <Link to="/homePage">
        <button className={styles.hButton}>HomePage</button>
      </Link>
      <section className={styles.results}>
        {searchResults.map((game) => (
          <GameCard
            key={game.ID}
            name={game.titulo}
            description={game.descripcion}
            genre={game.genero}
          />
        ))}
      </section>
    </div>
  );
}
