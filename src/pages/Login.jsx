import React from "react";
import { Link } from "react-router-dom";
import styles from "./Login.module.css";

export default function Login() {
  return (
    <div className={styles.container}>
      <section className={styles.box}>
        <div className={styles.mainTitle}>Iniciar Sesión</div>
        <section className={styles.field}>
          <div className={styles.text}>Correo</div>
          <input
            type="text"
            placeholder="Ej: example@gmail.com"
            className={styles.input}
          ></input>
        </section>
        <section className={styles.field}>
          <div className={styles.text}>Contraseña</div>
          <input type="password" className={styles.input}></input>
        </section>
        <section className={styles.field} id={styles["button_field"]}>
          <button className={styles.buttons}>Iniciar</button>
          <button className={styles.buttons}>Iniciar con Google</button>
        </section>
        <Link to="/register" className={styles.enlace}>
          ¿No tienes cuenta? Regístrate
        </Link>
      </section>
    </div>
  );
}
