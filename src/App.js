import Navbar from './components/Navbar'
import './App.css';

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
      Testando
    </div>
  );
}

export default App;
