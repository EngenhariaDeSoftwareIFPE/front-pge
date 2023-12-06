"use client"

import React, { useState } from 'react';
import Modal from './Modal';
import ButtonGreen from './ui/ButtonGreen';
import ButtonRed from './ui/ButtonRed';
import ButtonWhite from './ui/ButtonWhite';
import InputCalendar from './ui/InputCalendar';
import InputFrequencyHours from './ui/InputFrequencyHours';
import ModelCadastreStage from './ModelCadastreStage';

const button = {
    width: 'w-[250px]',
    height: 'h-[45px]',
}

const hoursAmount = {
    id: 'hours',
    placeHolder: 'Quantidade de horas'
}

const widths = {
    buttonGreen: 'w-[150px]',
}
  
const height = {
    buttonGreen: 'h-[40px]',
}

const StageTable = () => {
  const [showMore, setShowMore] = useState(false);

  const [showModel, setShowModel] = useState(false);

  const totalRows = 150; //passar aqui o valor de linhas totais 

  const rowsToShow = showMore ? totalRows : 7;

  const tableData = [
    {
      student: "Ana Silva",
      professor: "Mariana Santos",
      course: "Licenciatura em Música",
      type: "Estágio I"
    },
    {
      student: "Mariana Oliveira",
      professor: "Carlos Lima",
      course: "Técnico em Agroindústria",
      type: "Estágio Comum"
    },
    {
      student: "Rafaela Mendes",
      professor: "Ana Pereira",
      course: "Técnico em Agropecuária",
      type: "Estágio Comum"
    },
    {
      student: "Pedro Castro",
      professor: "Luis Oliveira",
      course: "Licenciatura em Música",
      type: "Estágio IV"
    },
    {
      student: "Lucas Almeida",
      professor: "Ana Pereira",
      course: "Técnico em Agroindústria",
      type: "Estágio Comum"
    },
    {
      student: "Carla Rodrigues",
      professor: "João Silva",
      course: "Licenciatura em Música",
      type: "Estágio II"
    },
    {
      student: "Gustavo Santos",
      professor: "Maria Oliveira",
      course: "Técnico em Agroindústria",
      type: "Estágio Comum"
    },
    {
      student: "Juliana Lima",
      professor: "João Silva",
      course: "Licenciatura em Música",
      type: "Estágio Comum"
    },
    {
      student: "Fernanda Oliveira",
      professor: "Maria Oliveira",
      course: "Licenciatura em Música",
      type: "Estágio Comum"
    },
    {
      student: "Isaac Souza",
      professor: "Daniel Leite",
      course: "Licenciatura em Música",
      type: "Estágio III"
    },
    {
      student: "Beatriz Almeida",
      professor: "Mariana Santos",
      course: "Técnico em Agroindústria",
      type: "Estágio II"
    },
    {
      student: "Mateus Pereira",
      professor: "Carlos Lima",
      course: "Técnico em Agropecuária",
      type: "Estágio I"
    },
    {
      student: "Camila Santos",
      professor: "Ana Pereira",
      course: "Técnico em Agropecuária",
      type: "Estágio Comum"
    },
    {
      student: "Luana Mendes",
      professor: "Luis Oliveira",
      course: "Licenciatura em Música",
      type: "Estágio Comum"
    }
  ]
  
  return (
    <div className="flex flex-col mt-10 m-auto w-1/2" id='conteudo'>
        <h2 className="mx-auto text-center text-black text-[22px] font-semibold">Estágios</h2>
        <div className='inline-block border shadow-2xl mt-8'>
            <table className="bg-white w-full border-4 border-green-500">
            <thead>
                <tr>
                <th className="border-2 border-green-500 px-4 py-2">Aluno</th>
                <th className="border-2 border-green-500 px-4 py-2">Professor Orientador</th>
                <th className="border-2 border-green-500 px-4 py-2">Curso</th>
                <th className="border-2 border-green-500 px-4 py-2">Tipo de estágio</th>
                </tr>
            </thead>
            <tbody>
                {tableData.slice(0, rowsToShow).map((rowData, index) => (
                <tr key={index}>
                    <td className="border-2 border-green-500 px-4 py-2 text-center">{rowData.student}</td>
                    <td className="border-2 border-green-500 px-4 py-2 text-center relative">{rowData.professor}</td>
                    <td className="border-2 border-green-500 px-4 py-2 text-center relative">{rowData.course}</td>
                    <td className="border-2 border-green-500 px-4 py-2 text-center relative">{rowData.type}</td>
                </tr>
                ))}
            </tbody>
            </table>
        </div>

        {totalRows > 7 && (
            <a
            className="mt-2 p-2 text-green rounded flex items-center"
            onClick={() => setShowMore(!showMore)}
            >
            {showMore ? 'Ver Menos' : 'Ver Mais'}
            {showMore ? (
                            <img src="mini-arrow-up.svg" alt="ícone seta para baixo" />
                        ) : (
                            <img src="mini-arrow-down.svg" alt="ícone seta para cima" />
                        )}
            
            </a>
        )}

        <div className='mx-auto'> 
            <button 
                className={`${button.height} ${button.width} flex items-center justify-center drop-shadow-xl bg-button-green rounded-[10px] font-bold text-white text-[20px] hover:bg-secundary-green`}
                onClick={() => setShowModel(true)}
            >
                <img src='../ic_added_stage.svg' alt='Icone adicionar estágio' className='mr-[4px]'/>
                Adicionar estágio
            </button>
        </div>
        <ModelCadastreStage isVisible={showModel} onClose={() => setShowModel(false)}/>
    </div>
  );
};

export default StageTable;
