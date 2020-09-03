import React, { useState, useEffect } from 'react'

export default function Cards() {

    const [Pokemones, setPokemones] = useState([])

    useEffect(function() {

        fetch("https://pokeapi.co/api/v2/Pokemon/?offset=25&limit=25")
        .then(r =>r.json())
        .then(myResultado => {
            setPokemones(myResultado)
            console.log(myResultado)
        })
      },[])


    return (
        <div>
            
        </div>
    )
}
