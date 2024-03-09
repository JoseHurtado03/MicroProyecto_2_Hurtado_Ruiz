import { useState } from "react";
import { Link } from "react-router-dom";
import { createUser } from "../controllers/users";
import styles from "./Register.module.css";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const nombre = "";
  const apellido = "";
  const videojuego_preferido = "";

  async function submitRegisterButton() {
    await createUser({
      username,
      email,
      password,
      nombre,
      apellido,
      videojuego_preferido,
    });
    alert("Usuario creado con exito");
  }

  return (
    <div className={styles.container}>
      <section className={styles.box}>
        <div className={styles.mainTitle}>Registro</div>
        <section className={styles.field}>
          <div className={styles.text}>Correo</div>
          <input
            className={styles.input}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Ej: jose.hurtado@gmail.com"
          ></input>
        </section>
        <section className={styles.field}>
          <div className={styles.text}>Nombre</div>
          <input
            type="text="
            placeholder="Giussepe"
            className={styles.input}
          ></input>
        </section>
        <section className={styles.field}>
          <div className={styles.text}>Apellido</div>
          <input
            type="text="
            placeholder="Hurtuiz"
            className={styles.input}
          ></input>
        </section>
        <section className={styles.field}>
          <div className={styles.text}>Usuario</div>
          <input
            className={styles.input}
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Ej: Phox01"
          ></input>
        </section>
        <section className={styles.field}>
          <div className={styles.text}>Contraseña</div>
          <input
            className={styles.input}
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></input>
        </section>
        <section className={styles.field}>
          <div className={styles.text}>Juego Favorito</div>
          <input
            type="text"
            placeholder="Pokemon Violet"
            className={styles.input}
          ></input>
        </section>
        <section className={styles.field} id={styles["button_field"]}>
          <button onClick={submitRegisterButton} className={styles.buttons}>
            Registrarse
          </button>
          <button className={styles.buttons}>Registrarse con Google</button>
        </section>
        <Link to="/" className={styles.enlace}>
          ¿Ya tienes una cuenta? Inicia Sesión
        </Link>
      </section>
    </div>
  );
}
