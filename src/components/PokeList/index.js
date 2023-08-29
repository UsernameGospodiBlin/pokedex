//импорт покемонов по их айдишникам и вставка в кнопки
import React, {useState, useEffect} from "react";
import './PokeList.css'
import PokeCell from "../PokeCell";
const PokeList = ({handleOnClick}) => {
    const [pokemon, setPokemon] = useState([])
    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=10') //импорт ДО 10 покемонов, если поставить значение больше то импорт больше
            const data = await response.json()
            const pokemonList = data.results.slice(0, data.results.length).map(items => items).flat()
            setPokemon(pokemonList)
      
        }
       fetchData() //вызов функции импорта
    }, [])
    return( //присваивание к кнопкам айди покемонов
        <section className="poke-list">
           {pokemon.map((pokeClass, id) => {
            return(
               <PokeCell key = {id} pokeClass={id} handleOnClick ={handleOnClick}/> 
            )
           })}
        </section>
    )
}

export default PokeList