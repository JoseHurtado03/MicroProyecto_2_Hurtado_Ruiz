import React from "react";
import GameCard from "./GameCard";
import { getClubsByID, getGamesByID } from "../controllers/data";
import { useState, useEffect } from "react";
import styles from './Club.module.css'
import { Link } from 'react-router-dom';

export default function Club() {
  const [clubInfo, setClubInfo] = useState("");
  const [games, setGames] = useState([]);

  useEffect(() => {
    const selectedClubId = localStorage.getItem("ClubId");
    const fetchClubInfo = async () => {
      try {
        const clubData = await getClubsByID(selectedClubId);
        setClubInfo(clubData);

        const gamesDetails = await Promise.all(clubData.videojuegos.map(async gameId => {
            return await getGamesByID(gameId);
        }))
        setGames(gamesDetails);
      } catch (error) {
        console.error("Error al obtener la información del club:", error);
      }
    };

    fetchClubInfo();
  }, []);

  return (
    <div>
        <section className={styles.header}>
            <h1>{clubInfo.nombre}</h1>
            <Link to='/search'>
                <button className={styles.button}>Buscar</button>
            </Link>
        </section>
        <section className={styles.info}>{clubInfo.descripcion}</section>
        <button className={styles.buttonY}>Suscribirse</button>
        <section style={{marginLeft: '150px'}}>
            <div style={{ overflow: 'auto', maxWidth: '100%' }}>
                <div style={{ display: 'flex', gap: '50px' }}>
                    {games.map(game => (
                        <GameCard 
                            key={game.ID} 
                            name={game.titulo} 
                            description={game.descripcion} 
                            genre={game.genero} 
                        />
                    ))}
                </div>
            </div>
        </section>
    </div>
  );
}
