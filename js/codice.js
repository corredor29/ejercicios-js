"use strict";

const runas = {
    "☽": 1,
    "☾": 5,
    "♁": 10,
    "⚕": 50,
    "⚡": 100
};

const tablaRunas = [
    { numero: 100, signo: "⚡" },
    { numero: 50,  signo: "⚕" },
    { numero: 10,  signo: "♁" },
    { numero: 5,   signo: "☾" },
    { numero: 1,   signo: "☽" }
];

function descifrarHechizo(cadena) {
    let suma = 0;

    for (let i = 0; i < cadena.length; i++) {
        let actual = runas[cadena[i]];
        let siguiente = runas[cadena[i + 1]];

        if (actual === undefined) {
        return NaN; 
        }

        if (siguiente !== undefined && actual < siguiente) {
        suma -= actual;
        } else {
        suma += actual;
        }
    }

    return suma;
}

function cifrarHechizo(numero) {
    let hechizo = "";

    for (let i = 0; i < tablaRunas.length; i++) {
        while (numero >= tablaRunas[i].numero) {
        hechizo += tablaRunas[i].signo;
        numero -= tablaRunas[i].numero;
        }
    }

    return hechizo;
}

// Pruebas
console.log(descifrarHechizo("☽☽☽"));   // 3
console.log(descifrarHechizo("☽☾"));     // 4
console.log(descifrarHechizo("☾☽"));     // 6
console.log(descifrarHechizo("☽☽☽⚡")); // 101
console.log(descifrarHechizo("☽⚕"));     // 49
console.log(descifrarHechizo("⚕.♒"));   // NaN

let entrada = parseInt(prompt("Escribe un número encantado:"));
let enRunas = cifrarHechizo(entrada);
alert("Tu número en runas mágicas es: " + enRunas);
