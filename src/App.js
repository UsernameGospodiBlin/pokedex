import React, {Component} from 'react';
import './App.css';
import { PokeList, DetailView, Pokemon } from './components';
class App extends Component{

  constructor(){
    super()
    this.state ={
      pokemon: {
        id:1,
        name:'bulbasaur',
        type:'grass',
        weight:69,
        height:7,
        sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"
      }
    }

    this.handleOnClick = this.handleOnClick.bind(this)
  }
  handleOnClick(id){
   fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
   .then(response => response.json()) 
   .then(data => {
    const pokemon = new Pokemon(data)
    this.setState({ pokemon })
   })
   .catch(err => console.log(err))
  }
  render(){
    return(
      <div className = "App">
        <PokeList handleOnClick = {this.handleOnClick}/>
        <DetailView pokemon={this.state.pokemon}/>
      </div>
    )
  }
}

export default App;
