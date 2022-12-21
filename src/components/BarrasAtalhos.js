function BarrasAtalhos({titulo, imagem, rota}){

    return(
        
<a href={rota}>
<div
class="flex items-center justify-center h-[350px] mb-12 bg-fixed bg-center bg-cover w-[100%]" style={{
  backgroundImage: `url(${imagem})`
}}>
<div class="p-5 text-[50px] text-white md:text-[100px]">
  {titulo}
</div>
</div></a>
    )
}

export default BarrasAtalhos;