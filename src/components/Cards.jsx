import React, { useState, useEffect } from 'react'
import { getPokemon, getAllPokemon } from './Services/pokemon';

export default function Cards() {

    
    const [pokemonData, setPokemonData] = useState([])
    // const [loading, setLoading] = useState(true);
    const initialURL = 'https://pokeapi.co/api/v2/pokemon/?limit=25'

    useEffect(() => {
        async function fetchData() {
          let response = await getAllPokemon(initialURL)
          await loadPokemon(response.results);
        //   setLoading(false);
        }
        fetchData();
      }, [])

    
      const loadPokemon = async (data) => {
        let _pokemonData = await Promise.all(data.map(async pokemon => {
          let pokemonRecord = await getPokemon(pokemon)
          return pokemonRecord
        }))
        setPokemonData(_pokemonData);
      }
    
      
    return (
        <div>
           <table>
                <thead>
                    <tr>
                        <th>Numero</th>
                        <th>Nombre</th>
                        <th>Foto</th>
                        <th>Tipo</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        pokemonData.map((poken,index)=>{
                            return <tr key={index}> 
                                <td>{poken.id}</td>
                                <td>{poken.name}</td>
                                <td><img src={poken.sprites.front_default} alt="imagen pokemon"/> </td>
                        <td><ul>{poken.types.map((tag,i) =><li key={i}>{tag.type.name}</li>)}</ul></td>
                            </tr>
                        
                    })}
                </tbody>
            </table>
        </div>
    )
}
