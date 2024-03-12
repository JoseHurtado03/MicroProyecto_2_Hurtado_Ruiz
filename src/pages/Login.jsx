import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { handleClickGoogle } from "../controllers/auth";
import { useNavigate } from "react-router-dom";
import styles from "./Login.module.css";
import { loginWithCredentials } from "../controllers/auth";
import { useUser } from "../context/user";
import { useEffect } from "react";
import { unstable_batchedUpdates } from "react-dom";

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const user = useUser();
  console.log(user);
  if (user !== null) {
    navigate("/HomePage", { replace: true });
  }

  const submitLogin = async () => {
    const user = await loginWithCredentials(email, password);
    if (user != null) {
      navigate("/HomePage");
    } else {
      alert("La contraseña o el correo no coinciden");
    }
  };
  const signInGoogle = async () => {
    handleClickGoogle();
  };

  return (
    <div className={styles.container}>
      <section className={styles.box}>
        <div className={styles.mainTitle}>Iniciar Sesión</div>
        <section className={styles.field}>
          <div className={styles.text}>Correo</div>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Ej: example@gmail.com"
            className={styles.input}
          ></input>
        </section>
        <section className={styles.field}>
          <div className={styles.text}>Contraseña</div>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className={styles.input}
          ></input>
        </section>
        <section className={styles.field} id={styles["button_field"]}>
          <button onClick={submitLogin} className={styles.buttons}>
            Iniciar
          </button>
          <button onClick={signInGoogle} className={styles.buttons}>
            Iniciar con Google
          </button>
        </section>
        <Link to="/register" className={styles.enlace}>
          ¿No tienes cuenta? Regístrate
        </Link>
      </section>
    </div>
  );
}
