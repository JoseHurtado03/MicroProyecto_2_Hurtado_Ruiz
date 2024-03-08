import React from 'react'
import { Link } from 'react-router-dom'

export default function Register() {
    return (
        <div>
            <section>
                <h1>Registrarse</h1>
                <section>
                    <h2>Correo</h2>
                    <input type="text" placeholder="Ej: jose.hurtado@gmail.com"></input>
                </section>
                <section>
                    <h2>Usuario</h2>
                    <input type="text" placeholder="Ej: Phox01"></input>
                </section>
                <section>
                    <h2>Contraseña</h2>
                    <input type="password"></input>
                </section>
                <section>
                    <button>Registrarse</button>
                    <button>Registrarse con Google</button>
                </section>
                <Link to="/">¿Ya tienes una cuenta? Inicia Sesión</Link>
            </section>
        </div>
    )
}
