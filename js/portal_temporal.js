"use strict";

function portalFueraDeFase(portales) {
    const conteo = {};

    for (let letra of portales) {
        conteo[letra] = (conteo[letra] || 0) + 1;
    }

    for (let i = 0; i < portales.length; i++) {
        if (conteo[portales[i]] === 1) {
        return i;
        }
    }

    return -1;
}

let secuencia = prompt("Ingresa la secuencia de portales (solo letras minúsculas):");
let resultado = portalFueraDeFase(secuencia);

if (resultado === -1) {
    alert("Todos los portales están en fase (se repiten).");
} else {
    alert("El primer portal fuera de fase está en el índice: " + resultado);
}