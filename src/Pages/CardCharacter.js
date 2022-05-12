import React from "react";
import { Link } from 'react-router-dom'

const CardCharacter = ({ character }) => {
    return (
        <Link className="test" key={character.id} to={`/character/$
        {character.id}`}>
            <div key={character.id}>
                <img lazy='true'
                    className="Poster" src={character.image} alt={character.name} />

            </div>
            <p>{character.name}</p>
        </Link>
    )
}
export default CardCharacter