"use strict";

function obtenerArchivosInfectados(ultimaDescargaSegura, registrosDron) {

    const archivos = new Set();

    for (let [archivoId, momento] of registrosDron) {
        if (momento > ultimaDescargaSegura) {
        archivos.add(archivoId); 
        }
    }

    return Array.from(archivos).sort((a, b) => a - b);
}


const ultimaDescargaSegura1 = 1670000000;
const registrosDron1 = [
    [42, 1670000500],  
    [13, 1670000000],  
    [8, 1670000700],   
    [8, 1670000001],   
    [99, 1669999999],   
];

console.log(obtenerArchivosInfectados(ultimaDescargaSegura1, registrosDron1));


const ultimaDescargaSegura2 = 2000;
const registrosDron2 = [
    [5, 1999],  
    [10, 2001], 
    [7, 3000],  
    [10, 2500], 
    [1, 2000],   
];

console.log(obtenerArchivosInfectados(ultimaDescargaSegura2, registrosDron2));


const ultimaDescargaSegura3 = 5000;
const registrosDron3 = [
    [2, 4000],
    [3, 5000],
    [4, 4500],
];

console.log(obtenerArchivosInfectados(ultimaDescargaSegura3, registrosDron3));
