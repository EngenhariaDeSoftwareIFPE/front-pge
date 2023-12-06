"use client";

import React from 'react';
import { Chart } from "react-google-charts";

const HoursChart = () => {
    const data = [
        ["Quantidade de horas", "Porcentagem"],
        ["45 horas", 35],
        ["150 horas", 65]
    ];

    const options = {
        pieStartAngle: 90,
        is3D: true,
        pieSliceText: "label",
        legend: "none",
        slices: {
            0: {
                color: "#D9D9D9",
                textStyle: { color: 'black', fontSize: 18, fontName: "Montserrat", fontWeight: 600 } // Definindo o fontWeight para 600
            },
            1: {
                color: "#49F577",
                textStyle: { color: 'black', fontSize: 18, fontName: "Montserrat", fontWeight: 600 } // Definindo o fontWeight para 600
            }
        },
        backgroundColor: { fill: 'transparent' },
        chartArea: {
            left: 0,
            right: 0,
            top: 1,
            bottom: 1,
            borderWidth: 0
        }
    };

    return (
        <div>
            <div className="w-[555px] mt-4 ms-24 h-[280px] bg-green-900 rounded-xl font-monteserrat flex flex-col items-center justify-center">
                <div className="w-80 text-center text-white text-xl font-semibold font-Montserrat">Progresso do seu estágio</div>
                <div className='flex items-center justify-center mt-5'>
                  <Chart
                      chartType="PieChart"
                      data={data}
                      options={options}
                      className='h-[200px] w-52'
                  />
                  <div className="flex flex-col justify-center h-full ms-5">
                      <div className='flex w-52'>
                          <div className="w-3.5 h-3 mt-2 bg-green-400 rounded-full" />
                          <div className="text-white text-base font-normal font-Montserrat ms-2">Horas concluídas</div>
                      </div>
                      <div className='flex w-52'>
                          <div className="w-3.5 h-3 mt-2 bg-zinc-300 rounded-full" />
                          <div className="text-white text-base font-normal font-Montserrat ms-2">Horas que ainda faltam</div>
                      </div>
                  </div>
                </div>
            </div>
        </div>
    );
};

export default HoursChart;
