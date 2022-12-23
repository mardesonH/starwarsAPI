import '../App.css'
import Planeta from '../components/Planeta';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const getAllCharacters = async () => {
  let allCharacters = [];
  let nextPage = 'https://swapi.dev/api/planets/';
  while (nextPage) {
    const response = await axios.get(nextPage);
    const { data } = response;
    allCharacters = allCharacters.concat(data.results);
    nextPage = data.next;
  }
  return allCharacters;
};

function Planetas () {

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
            <h1 className="text-4xl font-bold text-white">Planetas</h1>
            <br />
          </div>
        </div>
      </div>
      <div class="justify-center container mx-auto flex flex-row flex-wrap align-top items-stretch">


      {characters.map((char, index) => (
        <Planeta nome={char.name} imagem={`https://starwars-visualguide.com/assets/img/planets/${index + 1}.jpg`} diametro={char.diameter} populacao={char.population} genero="teste" filmes={char.films} especie={char.residents}/>
      ))}

      </div>

    </div>

  );
}

export default Planetas;
