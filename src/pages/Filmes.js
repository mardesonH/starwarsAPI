import Navbar from '../components/Navbar'
import '../App.css';
import Hero from '../components/Hero';
import Footer from '../components/Footer'
import SWCrawl from '../components/SWCrawl'
import BarrasAtalhos from '../components/BarrasAtalhos';
import ImagemFilmes from '../imgs/star-wars-filmes.jpg';
import ImagemPersonagens from '../imgs/darth-vader.jfif';
import ImagemPlanetas from '../imgs/planets.jpg';
import ImagemEspecies from '../imgs/creatures.webp';

async function fetchPlanets() { 
  const results = await fetch("https://swapi.dev/api/planets/?page=1");
  const data = await results.json();
    console.log(data);
} 
fetchPlanets();

function App() {
  return (
    <div>
      <h1>Filmes</h1>

    </div>
    
  );
}

export default App;
