import ClubCard from './ClubCard'
import styles from './HomePage.module.css'
import { getClubs } from '../controllers/data'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';

export default function HomePage() {
    const [clubs, setClubs] = useState([]);

    useEffect(() => {
        const fetchClubs = async () => {
            try {
                const clubsData = await getClubs();
                setClubs(clubsData);
            } catch (error) {
                console.error('Error al obtener los clubes:', error);
            }
        };

        fetchClubs();
    }, []);

    return (
        <div>
            <section className={styles.header}>
                <h1>Giusseppe Games Club</h1>
                <Link to="/search">
                    <button className={styles.button}>Buscar</button>
                </Link>
                <Link to="/profile">
                    <button>Perfil</button>
                </Link>
            </section>
            <section>
                <div style={{ overflow: 'auto', maxWidth: '100%' }}>
                    <div style={{ display: 'flex', gap: '50px' }}>
                        {clubs.map((club, index) => (
                            <ClubCard key={index} name={club.nombre} description={club.descripcion} id={club.ID}/>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}
