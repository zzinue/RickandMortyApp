import React, { useState, useEffect } from "react";
import axios from 'axios'
import CardCharacter from './CardCharacter'

const URL = 'https://rickandmortyapi.com/api/character/?page='

const Home = () => {
    const [characters, setCharacters] = useState([])
    const [page, setPage] = useState(1)
    useEffect(() => {
        fetch(URL + page)
            .then((res) => res.json())
            .then((body) => setCharacters([...characters, ...body.results]))
    }, [page])
    /*   const fetching= async()=>{
          const resp= await axios(URL)
          setCharacters(resp.data.results)
      } */

    return (
        <>
            <h1>Rick and Morty</h1>
            <div className="Home-Content-Result">
                {
                    characters.map((character) => (
                        <CardCharacter key={character.id} character={character} />
                    ))
                }
                <button onClick={() => {
                    setPage(page + 1)
                }}
                >
                    more
                </button>
            </div>
        </>
    )

}

export default Home