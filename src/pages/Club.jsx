import React from 'react'
import GameCard from './GameCard'

export default function Club() {
  return (
    <div>
        <section>
            <h1>Titulo del Club</h1>
            <button>Buscar</button>
        </section>
        <section>Descripcion Generica</section>
        <section>
            <GameCard/>
            <GameCard/>
            <GameCard/>
        </section>
    </div>
  )
}
