import React from 'react'
import styles from './GameCard.module.css'

export default function GameCard({name, description, genre}) {
  return (
    <div className={styles.carta}>
        <h1>{name}</h1>
        <section className={styles.info}>
            <h3>{description}</h3>
            <section>
                <h3>Genero</h3>
                <h3>{genre}</h3>
            </section>
        </section>
    </div>
  )
}
