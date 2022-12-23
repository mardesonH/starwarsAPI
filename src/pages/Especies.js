import '../App.css'
import Especie from '../components/Especie';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const getAllSpecies = async () => {
  let allSpecies = [];
  let nextPage = 'https://swapi.dev/api/species/';
  while (nextPage) {
    const response = await axios.get(nextPage);
    const { data } = response;
    allSpecies = allSpecies.concat(data.results);
    nextPage = data.next;
  }
  return allSpecies;
};

function Planetas () {

  const [species, setSpecies] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const species = await getAllSpecies();
      setSpecies(species);
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
            <h1 className="text-4xl font-bold text-white">Espécies</h1>
            <br />
          </div>
        </div>
      </div>
      <div class="justify-center container mx-auto flex flex-row flex-wrap align-top items-stretch">


      {species.map((specie, index) => (
        <Especie nome={specie.name} imagem={`https://starwars-visualguide.com/assets/img/species/${index + 1}.jpg`} classificacao={specie.classification} lingua={specie.language} cor={specie.skin_colors} filmes={specie.films} especie="teste" planeta={specie.homeworld}/>
      ))}

      </div>

    </div>

  );
}

export default Planetas;
