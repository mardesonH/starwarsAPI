import '../App.css';

async function fetchPlanets() { 
  const results = await fetch("https://swapi.dev/api/planets/?page=1");
  const data = await results.json();
    console.log(data);
} 
fetchPlanets();

function Filmes() {
  return (
    <div>
      <h1>Filmes</h1>

    </div>
    
  );
}

export default Filmes;
