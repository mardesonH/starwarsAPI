import '../App.css';
import axios from 'axios';
import React, { useState, useEffect } from 'react';

function Filme({ nome, planeta, imagem, nascimento, genero}) {


    const [showModal, setShowModal] = React.useState(false);

    return (
        <>

            <a href="#" onClick={() => setShowModal(true)} id="filme" class=" box-border max-h-[700px] h-100px w-[50%] mb-10 container place-items-center mx-5 flex-col items-center  bg-slate-100 border rounded-lg shadow-md md:flex-row md:max-w-xl sm:w-[50%] md:w-[35%] lg:w-[25%] xl:w-[20%]">
                <div class="bg-slate-600 box-border rounded-lg">
                    <img class="relative object-cover rounded-lg rounded-b-none h-[350px] w-[100%]" src={imagem} alt={nome} />
                </div>
                <div class="flex-col justify-between p-4">
                    <span class="mt-2 flex align-middle"><svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg><h5 class="ml-1 uppercase mb-2 text-xl font-bold text-gray-900 dark:text-white">{nome}</h5></span>
                    <span class="flex"><svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg><h5 class="ml-1">{planeta}</h5></span>
                    <br />
                    <p class="truncate mb-3 font-normal text-[#926207] dark:text-gray-400">{}</p>
                </div>
            </a>

            {showModal ? (
                <>
                    <div onClick={() => setShowModal(false)}>
                        <div
                            className="align-middle justify-center items-center flex overflow-x-hidden overflow-y-hidden fixed inset-0 z-50 outline-none shadow-xl focus:outline-none" >
                            <div className="h-[60%] w-[70%] relative my-6 mx-auto">
                                {/*content*/}
                                <div className=" border-0 rounded-r-none rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                    {/*header*/}
                                    <div className=" flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                                        <h3 className="text-3xl font-semibold uppercase">
                                            {nome}
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
                                        <img class="object-cover h-[50%] w-[12%]" src={imagem} alt={nome} />
                                        <p className="mx-4 text-slate-500 text-lg leading-relaxed">
                                            <p><strong>Planeta natal: </strong>{planeta}</p>
                                            <p><strong>Data de nascimento: </strong>{nascimento}</p>
                                            <p><strong>Gênero: </strong>{genero}</p>
                                        </p>
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