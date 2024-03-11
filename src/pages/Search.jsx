import React from 'react'
import styles from './Search.module.css'
import { useState } from 'react';
import { getGamesByGenre } from '../controllers/data';
import GameCard from './GameCard';

export default function Search() {
    const [genre, setGenre] = useState('');
    const [searchResults, setSearchResults] = useState([]);

    const handleSearch = async () => {
        try {
            const games = await getGamesByGenre(genre);
            setSearchResults(games);
        } catch (error) {
            console.error('Error al buscar juegos:', error);
        }
    };

    return (
        <div>
            <section className={styles.barra}>
                <input 
                    type="text" 
                    placeholder='Ejemplos de Género: RPG, Multijugador, Battle Royal, Acción/Aventura, Aventura...' 
                    className={styles.input}
                    value={genre}
                    onChange={(e) => setGenre(e.target.value)}
                />
                <button onClick={handleSearch}>Buscar</button>
            </section>
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
    )
}
