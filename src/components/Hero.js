import { MouseParallax, ScrollParallax } from "react-just-parallax";

function Hero({titulo, subtitulo}){

    return(
        <>
        <br/>
    <div className="p-6 flex text-center text-yellow-400">
      
      
      <div className="container mx-auto text-left ml-10">
        <h1 className="text-4xl font-bold">{titulo}</h1>
        <br/>
        <p className="text-2xl text-gray-500">{subtitulo}</p>
      </div>
    </div>
    </>
    )
}

  export default Hero;