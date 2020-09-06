import React from 'react'
import ImgPokemon from './img/pokemon.png';
import './css/header.css';

export default function Header({change}) {

    return (
        <div className="container-search">
            <header>
                <div>
                    <h1>Pokemon-Api</h1>
                    <img className="img-pokemon" src={ImgPokemon} alt=""/>
                </div>
                <div>
                    <input type="text" placeholder="search to pokemon" onChange={change}/>
                </div>
            </header>
        </div>
    )
}
