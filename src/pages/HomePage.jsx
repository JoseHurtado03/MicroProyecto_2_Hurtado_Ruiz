import React from 'react'
import ClubCard from './ClubCard'

export default function HomePage() {
    return (
        <div>
            <section>
                <h1>Giusseppe Games Club</h1>
                <button>Buscar</button>
            </section>
            <section>
                <ClubCard/>
                <ClubCard/>
                <ClubCard/>
                <ClubCard/>
                <ClubCard/>
            </section>
        </div>
    )
}
