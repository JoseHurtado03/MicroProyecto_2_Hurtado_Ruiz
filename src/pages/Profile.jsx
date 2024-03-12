import { useEffect, useState } from "react";
import styles from "./Profile.module.css";
import logo from "../assets/img/profilepic.png";
import { logOut } from "../controllers/auth";
import { Link } from "react-router-dom";
import { useUser } from "../context/user";
import { useNavigate } from "react-router-dom";

import { getUserByID } from "../controllers/data";

export default function Profile() {
  const [user, setUser] = useState(null);

  const getUserInfo = async () => {
    try {
      const userID = localStorage.getItem("userID");
      console.log("Hi, here begins test");
      console.log(userID);
      const userData = await getUserByID(userID);
      console.log(userData);
      setUser(userData);
      console.log(user);
    } catch (error) {
      console.error("Error al obtener la información del usuario:", error);
    }
  };

  useEffect(() => {
    getUserInfo();
  }, []);
  const navigate = useNavigate();
  const useR = useUser();
  console.log(useR);
  if (!useR) {
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
              className={styles.input}
            ></input>
            <button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
              >
                <path
                  d="M11.6665 11.6667H9.99984C9.11578 11.6667 8.26794 12.0179 7.64281 12.643C7.01769 13.2681 6.6665 14.116 6.6665 15V30C6.6665 30.8841 7.01769 31.7319 7.64281 32.357C8.26794 32.9821 9.11578 33.3333 9.99984 33.3333H24.9998C25.8839 33.3333 26.7317 32.9821 27.3569 32.357C27.982 31.7319 28.3332 30.8841 28.3332 30V28.3333"
                  stroke="black"
                  stroke-width="3.33333"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M26.6667 8.33334L31.6667 13.3333M33.975 10.975C34.6314 10.3186 35.0002 9.42831 35.0002 8.5C35.0002 7.5717 34.6314 6.68141 33.975 6.025C33.3186 5.36859 32.4283 4.99982 31.5 4.99982C30.5717 4.99982 29.6814 5.36859 29.025 6.025L15 20V25H20L33.975 10.975Z"
                  stroke="black"
                  stroke-width="3.33333"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
          </main>
          <main className={styles.field}>
            <div className={styles.text}>Nombre</div>
            <input
              placeholder={user ? user.name : ""}
              className={styles.input}
            ></input>
            <button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
              >
                <path
                  d="M11.6665 11.6667H9.99984C9.11578 11.6667 8.26794 12.0179 7.64281 12.643C7.01769 13.2681 6.6665 14.116 6.6665 15V30C6.6665 30.8841 7.01769 31.7319 7.64281 32.357C8.26794 32.9821 9.11578 33.3333 9.99984 33.3333H24.9998C25.8839 33.3333 26.7317 32.9821 27.3569 32.357C27.982 31.7319 28.3332 30.8841 28.3332 30V28.3333"
                  stroke="black"
                  stroke-width="3.33333"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M26.6667 8.33334L31.6667 13.3333M33.975 10.975C34.6314 10.3186 35.0002 9.42831 35.0002 8.5C35.0002 7.5717 34.6314 6.68141 33.975 6.025C33.3186 5.36859 32.4283 4.99982 31.5 4.99982C30.5717 4.99982 29.6814 5.36859 29.025 6.025L15 20V25H20L33.975 10.975Z"
                  stroke="black"
                  stroke-width="3.33333"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
          </main>
          <main className={styles.field}>
            <div className={styles.text}>Apellido</div>
            <input
              placeholder={user ? user.lastName : ""}
              className={styles.input}
            ></input>
            <button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
              >
                <path
                  d="M11.6665 11.6667H9.99984C9.11578 11.6667 8.26794 12.0179 7.64281 12.643C7.01769 13.2681 6.6665 14.116 6.6665 15V30C6.6665 30.8841 7.01769 31.7319 7.64281 32.357C8.26794 32.9821 9.11578 33.3333 9.99984 33.3333H24.9998C25.8839 33.3333 26.7317 32.9821 27.3569 32.357C27.982 31.7319 28.3332 30.8841 28.3332 30V28.3333"
                  stroke="black"
                  stroke-width="3.33333"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M26.6667 8.33334L31.6667 13.3333M33.975 10.975C34.6314 10.3186 35.0002 9.42831 35.0002 8.5C35.0002 7.5717 34.6314 6.68141 33.975 6.025C33.3186 5.36859 32.4283 4.99982 31.5 4.99982C30.5717 4.99982 29.6814 5.36859 29.025 6.025L15 20V25H20L33.975 10.975Z"
                  stroke="black"
                  stroke-width="3.33333"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
          </main>
          <main className={styles.field}>
            <div className={styles.text}>Usuario</div>
            <input
              placeholder={user ? user.username : ""}
              className={styles.input}
            ></input>
            <button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
              >
                <path
                  d="M11.6665 11.6667H9.99984C9.11578 11.6667 8.26794 12.0179 7.64281 12.643C7.01769 13.2681 6.6665 14.116 6.6665 15V30C6.6665 30.8841 7.01769 31.7319 7.64281 32.357C8.26794 32.9821 9.11578 33.3333 9.99984 33.3333H24.9998C25.8839 33.3333 26.7317 32.9821 27.3569 32.357C27.982 31.7319 28.3332 30.8841 28.3332 30V28.3333"
                  stroke="black"
                  stroke-width="3.33333"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M26.6667 8.33334L31.6667 13.3333M33.975 10.975C34.6314 10.3186 35.0002 9.42831 35.0002 8.5C35.0002 7.5717 34.6314 6.68141 33.975 6.025C33.3186 5.36859 32.4283 4.99982 31.5 4.99982C30.5717 4.99982 29.6814 5.36859 29.025 6.025L15 20V25H20L33.975 10.975Z"
                  stroke="black"
                  stroke-width="3.33333"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
          </main>
          <main className={styles.field}>
            <div className={styles.text} id={styles["vgame"]}>
              Videojuego Favorito
            </div>
            <input
              placeholder={user ? user.pref_game : ""}
              className={styles.input}
            ></input>
            <button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
              >
                <path
                  d="M11.6665 11.6667H9.99984C9.11578 11.6667 8.26794 12.0179 7.64281 12.643C7.01769 13.2681 6.6665 14.116 6.6665 15V30C6.6665 30.8841 7.01769 31.7319 7.64281 32.357C8.26794 32.9821 9.11578 33.3333 9.99984 33.3333H24.9998C25.8839 33.3333 26.7317 32.9821 27.3569 32.357C27.982 31.7319 28.3332 30.8841 28.3332 30V28.3333"
                  stroke="black"
                  stroke-width="3.33333"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M26.6667 8.33334L31.6667 13.3333M33.975 10.975C34.6314 10.3186 35.0002 9.42831 35.0002 8.5C35.0002 7.5717 34.6314 6.68141 33.975 6.025C33.3186 5.36859 32.4283 4.99982 31.5 4.99982C30.5717 4.99982 29.6814 5.36859 29.025 6.025L15 20V25H20L33.975 10.975Z"
                  stroke="black"
                  stroke-width="3.33333"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
          </main>
          <main className={styles.field}>
            <div className={styles.text}>Contraseña</div>
            <input placeholder="********" className={styles.input}></input>
            <button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
              >
                <path
                  d="M11.6665 11.6667H9.99984C9.11578 11.6667 8.26794 12.0179 7.64281 12.643C7.01769 13.2681 6.6665 14.116 6.6665 15V30C6.6665 30.8841 7.01769 31.7319 7.64281 32.357C8.26794 32.9821 9.11578 33.3333 9.99984 33.3333H24.9998C25.8839 33.3333 26.7317 32.9821 27.3569 32.357C27.982 31.7319 28.3332 30.8841 28.3332 30V28.3333"
                  stroke="black"
                  stroke-width="3.33333"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M26.6667 8.33334L31.6667 13.3333M33.975 10.975C34.6314 10.3186 35.0002 9.42831 35.0002 8.5C35.0002 7.5717 34.6314 6.68141 33.975 6.025C33.3186 5.36859 32.4283 4.99982 31.5 4.99982C30.5717 4.99982 29.6814 5.36859 29.025 6.025L15 20V25H20L33.975 10.975Z"
                  stroke="black"
                  stroke-width="3.33333"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
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
