import '../App.css';
import axios from 'axios';
import React, { useState, useEffect } from 'react';

function Filme({ titulo, data, sinopse, imagem, diretor, produtor, personagens, planetas, especies }) {

    //Listar Chars
    const [chars, setChars] = useState([]);
    useEffect(() => {
        async function fetchData() {
            for (const link of personagens) {
                const response = await axios.get(link);
                setChars(prevChars => [...prevChars, response.data]);
            }
        }
        fetchData();
    }, []);

    //Listar Planetas
    const [planets, setPlanets] = useState([]);
    useEffect(() => {
        async function fetchData() {
            for (const link of planetas) {
                const response = await axios.get(link);
                setPlanets(prevPlanets => [...prevPlanets, response.data]);
            }
        }
        fetchData();
    }, []);

     //Listar Espéciess
     const [species, setSpecies] = useState([]);
     useEffect(() => {
         async function fetchData() {
             for (const link of especies) {
                 const response = await axios.get(link);
                 setSpecies(prevSpecies => [...prevSpecies, response.data]);
             }
         }
         fetchData();
     }, []);


    const [showModal, setShowModal] = React.useState(false);

    return (
        <>

            <a href="#" onClick={() => setShowModal(true)} id="filme" class=" box-border max-h-[700px] h-100px w-[50%] mb-10 container place-items-center mx-5 flex-col items-center  bg-slate-100 border rounded-lg shadow-md md:flex-row md:max-w-xl sm:w-[50%] md:w-[35%] lg:w-[25%] xl:w-[20%]">
                <div class="bg-slate-600 box-border rounded-lg">
                    <img class="relative object-cover rounded-lg rounded-b-none h-[350px] w-[100%]" src={imagem} alt={titulo} />
                </div>
                <div class="flex-col justify-between p-4">
                    <span class="mt-2 flex align-middle"><svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z"></path></svg><h5 class="ml-1 uppercase mb-2 text-xl font-bold text-gray-900 dark:text-white">{titulo}</h5></span>
                    <span class="flex"><svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg><h5 class="ml-1">{data}</h5></span>
                    <br />
                    <p class="truncate mb-3 font-normal text-[#926207] dark:text-gray-400">{sinopse}</p>
                </div>
            </a>

            {showModal ? (
                <>
                    <div onClick={() => setShowModal(false)}>
                        <div
                            className="align-middle justify-center items-center flex overflow-x-hidden overflow-y-hidden fixed inset-0 z-50 outline-none shadow-xl focus:outline-none" >
                            <div className=" overflow-y-scroll h-[60%] w-[70%] relative my-6 mx-auto">
                                {/*content*/}
                                <div className=" border-0 rounded-r-none rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                    {/*header*/}
                                    <div className=" flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                                        <h3 className="text-3xl font-semibold uppercase">
                                            {titulo}
                                        </h3>
                                        <button
                                            className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                            onClick={() => setShowModal(false)}
                                        >
                                            <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                                            </span>
                                        </button>
                                    </div>
                                    {/*body*/}
                                    <div className=" flex relative p-6 flex-auto">
                                        <img class="object-cover h-[50%] w-[12%]" src={imagem} alt={titulo} />
                                        <p className="mx-4 text-slate-500 text-lg leading-relaxed">
                                            <p><strong>Data de criação: </strong>{data}</p>
                                            <p><strong>Diretor: </strong>{diretor}</p>
                                            <p><strong>Produção: </strong>{produtor}</p>
                                            <p><strong>Sinopse: </strong>{sinopse}</p>
                                        </p>
                                    </div>
                                    <div class="bg-slate-500 my-5 px-6 py-5">
                                        <p><strong>Personagens: </strong></p>
                                        <hr />
                                        <ul>
                                            {chars.map(char => (
                                                <li key={char.id}>{char.name}</li>
                                            ))}

                                        </ul>
                                    </div>
                                    <div class="bg-slate-500 my-5 px-6 py-5">
                                        <p><strong>Planetas: </strong></p>
                                        <hr />
                                        <ul>
                                        {planets.map(planeta => (
                                                <li key={planeta.id}>{planeta.name}</li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div class="bg-slate-500 my-5 px-6 py-5">
                                        <p><strong>Espécies: </strong></p>
                                        <hr />
                                        <ul>
                                        {species.map(especie => (
                                                <li key={especie.id}>{especie.name}</li>
                                            ))}
                                        </ul>
                                    </div>


                                    {/*footer*/}
                                    <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                                        <button
                                            className="text-[black] background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                            type="button"
                                            onClick={() => setShowModal(false)}
                                        >
                                            Fechar
                                        </button>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                    </div>
                </>
            ) : null}


        </>

    );
}

export default Filme;