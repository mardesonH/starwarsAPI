import { MouseParallax, ScrollParallax } from "react-just-parallax";
import deathstar from '../deathstar.png';
import xwing from '../xwing.png';
import './starwars.css'

function Hero({titulo, subtitulo}){

    return(
    <div id="hero" className="bg-yellow-400 p-6 mt-10 mb-10 absolute items-center justify-center mx-auto text-center md:flex">
      <div class="wrapper flex justify-center mb-5">
      
      <img src="https://www.seekpng.com/png/full/11-114257_falcon-falcon-star-war-ships-png.png" id="falcon" width="100" class="absolute ml-0 mt-20"></img>      
      <img src={xwing} id="xwing2" width="100" class="absolute ml-0 mt-48 object-center"></img>

      <img src="https://wiki.swgoh.help/images/8/84/Unit-Ship-Imperial_TIE_Fighter.png" id="tiefighter" width="100" class="absolute ml-0 mt-20"></img>
      <img src={deathstar} class="w-48 sm:w-64"></img>
      
      </div>
      
      <div className="container mx-auto text-left ml-10">
        <h1 className="text-4xl font-bold text-black">{titulo}</h1>
        <br/>
        <p className="text-2xl text-black md:text-base">{subtitulo}</p>
      </div>
    
    </div>
        )
}

  export default Hero;