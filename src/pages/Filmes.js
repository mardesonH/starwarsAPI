import '../App.css';
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
          <div class="items-center container mx-auto flex flex-row flex-wrap">
          <Filme />
          <Filme />
          </div>

    </div>
    
  );
}

export default Filmes;
