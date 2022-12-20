import Navbar from './components/Navbar'
import './App.css';
import Hero from './components/Hero';
import Footer from './components/Footer'

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
    <div className="">
      <div className="container mx-auto text-center">
        <h1 className="text-4xl font-bold text-white">AsCan - Desafio Front-End</h1>
        <br/>
        <p className="text-2xl text-gray-500">Desafio da trilha de frontend para o programa de estágio AsCan do Instituto Atlântico.</p>
      </div>
    </div>

    

    <Footer/>

    </div>
  );
}

export default App;
