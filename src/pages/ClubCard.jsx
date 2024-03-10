import React from 'react'
import styles from './ClubCard.module.css'
import { useState } from 'react'
import { Link } from 'react-router-dom';

export default function ClubCard({name, description, id}) {
    const [numID, setNumID] = useState(0);
    const handleButtonClick = () => {
        setNumID(id);
        localStorage.setItem('ClubId', id);
        console.log(id)
    };
    return (
        <div className={styles.carta}>
            <section>
                <h1>{name}</h1>
            </section>
            <section className={styles.info}>
                <h2>{description}</h2>
                <Link to="/club">
                    <h2 className={styles.botoncito} onClick={handleButtonClick}>Ir al Club</h2>
                </Link>
            </section>
        </div>
    )
} 
