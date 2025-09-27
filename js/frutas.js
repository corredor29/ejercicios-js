"use strict";

function verificarOrdenCaja(ingresos, egresos) {
    const stack = [];
    let indice = 0;

    for (let item of ingresos) {
        stack.push(item);

        while (stack.length > 0 && stack[stack.length - 1] === egresos[indice]) {
        stack.pop();
        indice++;
        }
    }

    return stack.length === 0;
}

let textoIngresos = prompt("Escribe los elementos en el orden de entrada (separados por , ):");
let ingresos = textoIngresos.split(",").map(x => x.trim());

let textoEgresos = prompt("Escribe los elementos en el orden de salida (separados por , ):");
let egresos = textoEgresos.split(",").map(x => x.trim());

let esValido = verificarOrdenCaja(ingresos, egresos);

if (esValido) {
    alert("La secuencia de salida es válida con una pila.");
} else {
    alert("La secuencia de salida NO es válida con una pila.");
}
