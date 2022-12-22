import '../App.css'
import { MouseParallax, ScrollParallax } from "react-just-parallax";
import Filme from '../components/Filme';

function Filmes() {
  return (
    <div>
      <br/>
      <div className="App">
            <br/>
    <div className=" mt-10 pt-10 mb-5 z-1">
      <div className="container mx-auto text-center">
        <h1 className="text-4xl font-bold text-white">Filmes</h1>
        <br/>
      </div>
    </div>
          </div>
                  <div class="justify-center container mx-auto flex flex-row flex-wrap align-top items-stretch">
          <Filme titulo="A ameaça fantasma" data="1999" sinopse="Turmoil has engulfed the Galactic Republic. The taxation of trade routes to outlying star systems is in dispute. Hoping to resolve the matter with a blockade of deadly battleships, the greedy Trade Federation has stopped all ..." imagem="https://m.media-amazon.com/images/I/51yHBMzxszL._AC_.jpg" />
          
          <Filme titulo="Ataque dos Clones" data="2001" sinopse="There is unrest in the Galactic Senate. Several thousand solar systems have declared their intentions to leave the Republic. This separatist movement, under the leadership of the mysterious Count Dooku, has made it difficult for the limited number of Jedi Knights to maintain peace and order in the galaxy. Senator Amidala, the former Queen of Naboo, is returning to the Galactic Senate to vote on the critical issue of creating an ARMY OF THE REPUBLIC to assist the overwhelmed Jedi...." imagem="https://amc-theatres-res.cloudinary.com/v1579117780/amc-cdn/production/2/movies/4300/4343/Poster/p_800x1200_AMC_StarWarsIIAttackOfTheClones_09132019.jpg"/>

          <Filme titulo="A ameaça fantasma" data="1999" sinopse="Turmoil has engulfed the Galactic Republic. The taxation of trade routes to outlying star systems is in dispute. Hoping to resolve the matter with a blockade of deadly battleships, the greedy Trade Federation has stopped all ..." imagem="https://m.media-amazon.com/images/I/51yHBMzxszL._AC_.jpg" />

          <Filme />

          <Filme />

          <Filme />
          
          </div>

    </div>
    
  );
}

export default Filmes;
