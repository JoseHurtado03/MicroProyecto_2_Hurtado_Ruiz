import { useState } from "react";
import { Link } from "react-router-dom";
import { createUser, registerClick } from "../controllers/users";

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
    <div>
      <section>
        <h1>Registrarse</h1>
        <section>
          <h2>Correo</h2>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Ej: jose.hurtado@gmail.com"
          ></input>
        </section>
        <section>
          <h2>Usuario</h2>
          <input
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Ej: Phox01"
          ></input>
        </section>
        <section>
          <h2>Contraseña</h2>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></input>
        </section>
        <section>
          <button onClick={submitRegisterButton}>Registrarse</button>
          <button onClick={registerClick}>Registrarse con Google</button>
        </section>
        <Link to="/">¿Ya tienes una cuenta? Inicia Sesión</Link>
      </section>
    </div>
  );
}
