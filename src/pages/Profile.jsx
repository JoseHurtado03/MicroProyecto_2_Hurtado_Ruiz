import { useEffect, useState } from "react";
import styles from "./Profile.module.css";
import logo from "../assets/img/profilepic.png";
import { logOut } from "../controllers/auth";
import { Link } from "react-router-dom";
import { useUser } from "../context/user";
import { useNavigate } from "react-router-dom";
import { updateProfile } from "../controllers/data";

import { getUserByID } from "../controllers/data";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase";

export default function Profile() {
  const [user, setUser] = useState(null);
  const [email, setEmail] = useState(""); //NUEVO NUEVO
  const [name, setName] = useState(""); //NUEVO NUEVO
  const [lastName, setLastName] = useState(""); //NUEVO NUEVO
  const [username, setUsername] = useState(""); //NUEVO NUEVO
  const [prefGame, setPrefGame] = useState("");
  const getUserInfo = async () => {
    try {
      const userID = localStorage.getItem("userID");
      const userData = await getUserByID(userID);
      setUser(userData);
      setEmail(userData.email);
      setName(userData.name);
      setLastName(userData.lastName);
      setUsername(userData.username);
      setPrefGame(userData.pref_game);
    } catch (error) {
      console.error("Error al obtener la información del usuario:", error);
    }
  };

  const handleUpdateProfile = async () => {
    try {
      const userID = localStorage.getItem("userID");
      await updateProfile(userID, {
        email,
        name,
        lastName,
        username,
        pref_game: prefGame,
      });
      alert("Perfil actualizado correctamente");
    } catch (error) {
      console.error("Error al actualizar el perfil:", error);
    }
  };
  //NUEVO NUEVO NUEVO NUEVO NUEVO NUEVO NUEVO

  useEffect(() => {
    getUserInfo();
  }, []);
  // const navigate = useNavigate();
  // const useR = useUser();
  // console.log(useR);
  // if (!useR) {
  //   navigate("/", { replace: true });
  // }

  const navigate = useNavigate();
  const userDataCurrent = auth.currentUser;
  console.log(userDataCurrent);
  if (userDataCurrent == null) {
    navigate("/", { replace: true });
  }

  return (
    <div className={styles.titles}>
      <section>
        <div className={styles.mainTitle}>Perfil</div>
        <article className={styles.box} id={styles["invisible"]}>
          <img src={logo} alt="react logo" />
          <div className={styles.screen}></div>
        </article>
      </section>
      <section>
        <div className={styles.mainTitle}>{user ? user.username : ""}</div>
        <article className={styles.box}>
          <main className={styles.field}>
            <div className={styles.text}>Correo</div>
            <input
              placeholder={user ? user.email : ""}
              value={email} //NUEVO NUEVO
              onChange={(e) => setEmail(e.target.value)} //NUEVO NUEVO
              className={styles.input}
            ></input>
            <button onClick={handleUpdateProfile}>Actualizar</button>
          </main>
          <main className={styles.field}>
            <div className={styles.text}>Nombre</div>
            <input
              placeholder={user ? user.name : ""}
              value={name} //NUEVO NUEVO
              onChange={(e) => setName(e.target.value)} //NUEVO NUEVO
              className={styles.input}
            ></input>
            <button onClick={handleUpdateProfile}>Actualizar</button>
          </main>
          <main className={styles.field}>
            <div className={styles.text}>Apellido</div>
            <input
              placeholder={user ? user.lastName : ""}
              value={lastName} //NUEVO NUEVO
              onChange={(e) => setLastName(e.target.value)} //NUEVO NUEVO
              className={styles.input}
            ></input>
            <button onClick={handleUpdateProfile}>Actualizar</button>
          </main>
          <main className={styles.field}>
            <div className={styles.text}>Usuario</div>
            <input
              placeholder={user ? user.username : ""}
              value={username} //NUEVO NUEVO
              onChange={(e) => setUsername(e.target.value)} //NUEVO NUEVO
              className={styles.input}
            ></input>
            <button onClick={handleUpdateProfile}> Actualizar</button>
          </main>
          <main className={styles.field}>
            <div className={styles.text} id={styles["vgame"]}>
              Videojuego Favorito
            </div>
            <input
              placeholder={user ? user.pref_game : ""}
              value={prefGame} //NUEVO NUEVO
              onChange={(e) => setPrefGame(e.target.value)} //NUEVO NUEVO
              className={styles.input}
            ></input>
            <button onClick={handleUpdateProfile}> Actualizar</button>
          </main>
          <main className={styles.field}>
            <div className={styles.text}>Contraseña</div>
            <input placeholder="********" className={styles.input}></input>
            <button>Actualizar</button>
          </main>
        </article>
      </section>
      <section>
        <Link to="/" onClick={logOut} className={styles.logout}>
          Cerrar Sesión
        </Link>
        <article
          className={styles.box}
          style={{ width: "1px" }}
          id={styles["invisible"]}
        ></article>
      </section>
    </div>
  );
}
