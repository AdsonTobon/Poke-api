import React, { useState, useEffect } from 'react'
import './css/card.css';
import axios from "axios";
import Header from './Header';

export default function Cards(props) {

    const {history} = props;
    const [pokemonData, setPokemonData] = useState({})
    const [filter, setFilter] = useState("")
    const initialURL = 'https://pokeapi.co/api/v2/pokemon/?limit=25'

  const handleSearchChange =(e) =>{
    setFilter(e.target.value);
  };

    useEffect(() => {
      axios
        .get(initialURL)
        .then(function (response) {
          const { data } = response;
          const { results } = data;
          const newData = {};
          results.forEach((pokemon, index) => {
            newData[index + 1] = {
              id: index + 1,
              name: pokemon.name,
              sprite: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
                index + 1
              }.png`,
              
            };
          });
          setPokemonData(newData);
          console.log(newData)
        });
    }, []);

    

    const getPokemonCard = (pokemonId) => {
      const { id, name, sprite } = pokemonData[pokemonId];
      
      return (
        <div className="container-cards" key={pokemonId} >
        
             <div className="card" onClick={() => history.push(`/${id}`)}>
                    <div className="container-card-img"><img src={sprite} alt="imagen pokemon"/></div>
                    <div className="card-name">{name.toUpperCase()}</div>
                    <div className="card-ID">{id}</div>
                   
              </div>
            
        
     </div>
      );
    };
      
    return (
      <div className="principal">
        <Header change={handleSearchChange}/>
        <div className="container-cards">
           
           {Object.keys(pokemonData).map((pokemonId)=> 
           pokemonData[pokemonId].name.includes(filter) &&
           getPokemonCard(pokemonId))}
           
        </div>
        <div>
          <footer className="footer">
            <b> <span className="create">Create by:</span></b>   2020 | Camilo Castañeda | Anderson Tobon 
          </footer>
        </div>
      </div>
        
    )
}
