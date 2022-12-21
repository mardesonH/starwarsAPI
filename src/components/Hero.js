import { MouseParallax, ScrollParallax } from "react-just-parallax";
import deathstar from '../deathstar.png';
import xwing from '../xwing.png';
import './starwars.css'

function Hero({titulo, subtitulo}){

    return(
      <div class="">
        <ScrollParallax strength={0.02}>
   <div id="hero" className="bg-yellow-400 p-6 mt-10 mb-90 pb-10  sm:flex ">
      <div class="wrapper flex justify-center mb-5">
      
      <img src="https://www.seekpng.com/png/full/11-114257_falcon-falcon-star-war-ships-png.png" id="falcon" width="100" class="absolute ml-0 mt-20"></img>      
      <img src={xwing} id="xwing2" width="100" class="absolute ml-0 mt-48 object-center"></img>

      <img src="https://wiki.swgoh.help/images/8/84/Unit-Ship-Imperial_TIE_Fighter.png" id="tiefighter" width="100" class="absolute ml-0 mt-20"></img>
      <img src={deathstar} class=" object-scale-down w-[50%] sm:w-[70%] lg:w-[100%]"></img>
      
      </div>
      
      <div className="container text-center sm:ml-10 md:text-left ">
        <h1 className="text-4xl font-bold text-black">{titulo}</h1>
        <br/>
        <p className="text-black text-base p-2 md:text-2xl">{subtitulo}</p>
      </div>
    
    </div>
    </ScrollParallax>
    </div>
        )
}

  export default Hero;