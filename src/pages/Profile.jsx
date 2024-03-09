import React from 'react'
import styles from './Profile.module.css'

export default function Profile() {
  return (
    <div>
        <section>
            <h1 className={styles.mainTitle}>Perfil</h1>
            <h1 className={styles.mainTitle}>[Nombre de Usuario]</h1>
            <image></image>
        </section>
        <section>
            <section className={styles.boxes}>
                <h2 className={styles.texts}>Correo</h2>
                <h2>[Correo del usuario]</h2>
                <button>Editar</button>
            </section>
            <section className={styles.boxes}>
                <h2 className={styles.texts}>Nombre</h2>
                <h2>[Nombre del usuario]</h2>
                <button>Editar</button>
            </section>
            <section className={styles.boxes}>
                <h2 className={styles.texts}>Apellido</h2>
                <h2>[Apellido del usuario]</h2>
                <button>Editar</button>
            </section>
            <section className={styles.boxes}>
                <h2 className={styles.texts}>Usuario</h2>
                <h2>[Nombre de Usuario]</h2>
                <button>Editar</button>
            </section>
            <section className={styles.boxes}>
                <h2 className={styles.texts}>Videojuego Favorito</h2>
                <h2>[Videojuego Favorito del usuario]</h2>
                <button>Editar</button>
            </section>
            <section className={styles.boxes}>
                <h2 className={styles.texts}>Contrasena</h2>
                <h2>[Contrasena del usuario]</h2>
                <button>Editar</button>
            </section>
        </section>
    </div>
  )
}
