function Hero({titulo, subtitulo}){

    return(
        <>
        <br/>
    <div className="bg-gray-800 p-6">
      <div className="container mx-auto text-center">
        <h1 className="text-4xl font-bold text-white">{titulo}</h1>
        <br/>
        <p className="text-2xl text-gray-500">{subtitulo}</p>
      </div>
    </div>
    </>
    )
}

  export default Hero;