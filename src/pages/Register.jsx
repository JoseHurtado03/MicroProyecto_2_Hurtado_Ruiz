import { useState } from "react";
import { Link } from "react-router-dom";
import { createUser } from "../controllers/users";
import {
  handleClickGoogle,
  registerWithCredentials,
} from "../controllers/auth";
import styles from "./Register.module.css";
import { useNavigate } from "react-router-dom";
import { useUser } from "../context/user";

export default function Register() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [pref_game, setGame] = useState("");
  const memberships = [];

  async function submitRegisterButton() {
    if (name !== "" && lastName !== "" && username !== "" && pref_game !== "") {
      await createUser({
        username,
        email,
        name,
        lastName,
        pref_game,
        memberships,
      });
      alert("Usuario creado con exito");
    } else {
      alert(
        "Rellena los siguientes datos para completar tu inicio con google: nombre, apellido, username y juego preferido"
      );
    }
  }

  const signupGoogle = async () => {
    handleClickGoogle();
    if (useUser != null) {
      navigate("/HomePage");
    }
  };

  const handleSignup = async () => {
    if (name !== "" && lastName !== "" && username !== "" && pref_game !== "") {
      const user = await registerWithCredentials(email, password);
      if (user != null) {
        submitRegisterButton();
        navigate("/HomePage");
      } else {
        alert("No se pudo crear la cuenta");
      }
    } else {
      alert(
        "Rellena los siguientes datos para completar tu inicio con google: nombre, apellido, username y juego preferido"
      );
    }
  };

  return (
    <div className={styles.container}>
      <section className={styles.box}>
        <div className={styles.mainTitle}>Registro</div>
        <section className={styles.field}>
          <div className={styles.text}>Correo</div>
          <input
            className={styles.input}
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Ej: jose.hurtado@gmail.com"
          ></input>
        </section>
        <section className={styles.field}>
          <div className={styles.text}>Nombre</div>
          <input
            type="text="
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Giussepe"
            className={styles.input}
          ></input>
        </section>
        <section className={styles.field}>
          <div className={styles.text}>Apellido</div>
          <input
            type="text="
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
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
            value={pref_game}
            onChange={(e) => setGame(e.target.value)}
            placeholder="Pokemon Violet"
            className={styles.input}
          ></input>
        </section>
        <section className={styles.field} id={styles["button_field"]}>
          <button onClick={handleSignup} className={styles.buttons}>
            Registrarse
          </button>
          <button onClick={signupGoogle} className={styles.buttons}>
            Registrarse con Google
          </button>
        </section>
        <Link to="/" className={styles.enlace}>
          ¿Ya tienes una cuenta? Inicia Sesión
        </Link>
      </section>
    </div>
  );
}
