import React, { useEffect, useState } from "react";
// import { toFirstCharUppercase } from "./constants";
import axios from "axios";
import './css/modal.css';
import TypeColor from './Services/TypeColors';

const Pokemon = (props) => {
  const { match, history } = props;
  const { params } = match;
  const { pokemonId } = params;
  const [pokemon, setPokemon] = useState(undefined);

  useEffect(() => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${pokemonId}/`)
      .then(function (response) {
        const { data } = response;
        setPokemon(data);
        console.log(data);
      })
      .catch(function (error) {
        setPokemon(false);
      });
  }, [pokemonId]);

  const generatePokemonJSX = (pokemon) => {
    const { name, id, species, height, weight, types, abilities } = pokemon;
    const fullImageUrl = `https://pokeres.bastionbot.org/images/pokemon/${id}.png`;
    
    return (
      <>
      <div className="container-info">
        <div>
           <b>{`${id}: `} {name.toUpperCase()}</b> 
            </div>
            <img style={{ width: "150px", height: "150px" }} src={fullImageUrl} alt="pokemon"/>
            <div className="info">
                <div> <b>Pokemon Info</b> </div>
                
                <div>
                    <b>Species: </b>
                    <a href={species.url}>{species.name} </a>
                </div>
                
                <div>
                    <b>Height:</b> {height} 
                </div>
        
                <div>
                   <b>Weight:</b> {weight} 
                </div>

                <div>
                    <b>Types:</b> 
                    
                    {types.map((typeInfo) => {
                        const { type } = typeInfo;
                        const { name } = type;
                        return <div key={name} style={{ backgroundColor: TypeColor[name] }}> {`${name.toUpperCase()}`}</div>;
                        })}
                </div>
                <div>
                    <b>Abilities:</b> 
                    
                    {abilities.map((abilityInfo,i) => {
                        return <div key={i} style={{ backgroundColor: TypeColor[name] }}> {`${abilityInfo.ability.name}`}</div>;
                        })}
                </div>
            </div>
            
      </div>
       
       
      </>
    );
  };
  return (
    <>
      <div className="container-modal">
        {pokemon !== undefined && pokemon && generatePokemonJSX(pokemon)}
        {pokemon !== undefined && (
            <button className="button-back" onClick={() => history.push("/")}>
            Back to pokedex
            </button>
        )}
      </div>
      
    </>
  );
};
export default Pokemon;


