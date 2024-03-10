import React from 'react'
import GameCard from './GameCard'
import { getClubsByID } from '../controllers/data'
import { useState, useEffect } from 'react'

export default function Club() {
    const [clubInfo, setClubInfo] = useState(null);
    useEffect(() => {
        const selectedClubId = localStorage.getItem('ClubId');
        const fetchClubInfo = async () => {
            try {
                const clubData = await getClubsByID(selectedClubId);
                setClubInfo(clubData);
            } catch (error) {
                console.error('Error al obtener la información del club:', error);
            }
        };

        fetchClubInfo();
    }, []);

    return (
        <div>
            <section>
                <h1>{clubInfo.nombre}</h1>
                <button>Buscar</button>
            </section>
            <section>{clubInfo.descripcion}</section>
            <section>
                <GameCard/>
                <GameCard/>
                <GameCard/>
            </section>
        </div>
    )
}
