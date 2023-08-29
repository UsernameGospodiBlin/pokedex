//Создание кнопок для выбора покемонов
import react from "react";
import './PokeCell.css'

const PokeCell = ({pokeClass, handleOnClick}) => {
    return (
        <button onClick={() => handleOnClick(pokeClass + 1)} className="poke-cell" >
           pokemon 
        </button>
    )
}

export default PokeCell