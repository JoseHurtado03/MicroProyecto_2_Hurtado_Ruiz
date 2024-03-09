import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Login.module.css'

export default function Login() {
    return (
        <div className={styles.container}>
            <section className={styles.box}>
                <h1 className={styles.mainTitle}>Iniciar Sesión</h1>
                <section>
                    <h2 className={styles.text}>Correo</h2>
                    <input type="text" placeholder="Ej: example@gmail.com" className={styles.input}></input>
                </section>
                <section>
                    <h2 className={styles.text}>Contraseña</h2>
                    <input type="password" className={styles.input}></input>
                </section>
                <section>
                    <button className={styles.buttons}>Iniciar</button>
                    <button className={styles.buttons}>Iniciar con Google</button>
                </section>
                <Link to="/register" className={styles.enlace}>¿No tienes cuenta? Regístrate</Link>
            </section>
        </div>
    )
}
