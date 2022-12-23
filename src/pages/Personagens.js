import '../App.css'
import Personagem from '../components/Personagem';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const getAllCharacters = async () => {
  let allCharacters = [];
  let nextPage = 'https://swapi.dev/api/people/';
  while (nextPage) {
    const response = await axios.get(nextPage);
    const { data } = response;
    allCharacters = allCharacters.concat(data.results);
    nextPage = data.next;
  }
  return allCharacters;
};

function Personagens () {

  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const characters = await getAllCharacters();
      setCharacters(characters);
    };
    fetchData();
  }, []);

  
  return (
    <div>
      <br />
      <div className="App">
        <br />
        <div className=" mt-10 pt-10 mb-5 z-1">
          <div className="container mx-auto text-center">
            <h1 className="text-4xl font-bold text-white">Personagens</h1>
            <br />
          </div>
        </div>
      </div>
      <div class="justify-center container mx-auto flex flex-row flex-wrap align-top items-stretch">


      {characters.map((char, index) => (
        <Personagem nome={char.name} imagem={`https://starwars-visualguide.com/assets/img/characters/${index + 1}.jpg`} planeta={char.homeworld} nascimento={char.birth_year} genero={char.gender} filmes={char.films} especie={char.species}/>
      ))}

      </div>

    </div>

  );
}

export default Personagens;
