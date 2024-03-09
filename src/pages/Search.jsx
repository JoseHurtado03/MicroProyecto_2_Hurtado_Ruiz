import React from 'react'
import styles from './Search.module.css'

export default function Search() {
  return (
    <div>
        <section className={styles.barra}>
            <input type="text" placeholder='Hogwarts Legacy' className={styles.input}></input>
            <button>Buscar</button>
        </section>
    </div>
  )
}
