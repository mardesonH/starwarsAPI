import '../App.css'
import Filme from '../components/Filme';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

async function listarFilmes() {
  try {
    const response = await axios.get('https://swapi.dev/api/films/');
    return response.data.results;
  } catch (error) {
    console.error(error);
  }
}

function Filmes() {

  const [filmes, setFilmes] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const filmesData = await listarFilmes();
      setFilmes(filmesData);
    }
    fetchData();
  }, []);

  return (
    <div>
      <br />
      <div className="App">
        <br />
        <div className=" mt-10 pt-10 mb-5 z-1">
          <div className="container mx-auto text-center">
            <h1 className="text-4xl font-bold text-white">Filmes</h1>
            <br />
          </div>
        </div>
      </div>
      <div class="justify-center container mx-auto flex flex-row flex-wrap align-top items-stretch">

      {filmes.map(filme => (
        <Filme key={filme.episode_id} titulo={filme.title} data={filme.release_date} sinopse={filme.opening_crawl} diretor={filme.director} imagem={`https://starwars-visualguide.com/assets/img/films/${filme.episode_id}.jpg`} produtor={filme.producer} personagens={filme.characters} planetas={filme.planets} especies={filme.species}/>
      ))}

      </div>

    </div>

  );
}

export default Filmes;
