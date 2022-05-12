import React from 'react'
import { Link } from 'react-router-dom'

const CardDetails = ({ character }) => {
    return (
        <div>

            <div >
                <img lazy='true'
                    className="Poster" src={character.image} alt={character.name} />

            </div>
            <p>{character.name}</p>

        </div>
    )
}

export default CardDetails