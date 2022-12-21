import Navbar from './components/Navbar'
import './App.css';
import Hero from './components/Hero';
import Footer from './components/Footer'
import SWCrawl from './components/SWCrawl'

async function fetchPlanets() { 
  const results = await fetch("https://swapi.dev/api/planets/?page=1");
  const data = await results.json();
    console.log(data);
} 
fetchPlanets();

function App() {
  return (
    <div className="App">
      <Navbar/>
      
      
      <br/>
    <div className=" mt-10 pt-10 mb-5 z-1">
      <div className="container mx-auto text-center">
        <h1 className="text-4xl font-bold text-white">AsCan - Desafio Front-End</h1>
        <br/>
        <p className="text-2xl text-gray-500">Desafio da trilha de frontend para o programa de estágio AsCan do Instituto Atlântico.</p>
      </div>
    </div>
<SWCrawl/>
    

    <Hero titulo="A franquia Star Wars" subtitulo="A saga Star Wars teve início há mais de 40 anos, em 1977, quando foi lançado o primeiro filme, batizado mais tarde de Uma Nova Esperança. Com 33 anos de idade e poucos filmes no currículo, o cineasta George Lucas criou sozinho uma história complexa que, de forma resumida, consistia na batalha de um grupo de rebeldes contra o império que domina uma galáxia. Com uma produção gigantesca e efeitos especiais inovadores, os produtores temiam que fracassasse junto ao público. Mas aconteceu justamente o contrário: o filme se tornou um sucesso estrondoso e revolucionou a cultura pop."/>

   <br/>
    
    <Footer/>

    </div>
  );
}

export default App;
