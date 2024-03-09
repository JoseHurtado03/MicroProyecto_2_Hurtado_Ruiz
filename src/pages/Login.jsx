import React from 'react'
import { Link } from 'react-router-dom'

export default function Login() {
    return (
        <div>
            <section>
                <h1>Iniciar Sesión</h1>
                <section>
                    <h2>Usuario</h2>
                    <input type="text" placeholder="Ej: Phox01"></input>
                </section>
                <section>
                    <h2>Contraseña</h2>
                    <input type="password"></input>
                </section>
                <section>
                    <button>Iniciar</button>
                    <button>Iniciar con Google</button>
                </section>
                <Link to="/register">¿No tienes cuenta? Regístrate</Link>
            </section>
        </div>
    )
}
