"use strict";

function revisarCoincidencias(fuente, oracionesAlumno) {
    function limpiarTexto(oracion) {
        return oracion
        .trim()
        .toLowerCase()
        .replace(/[.!?]$/, "");
    }

    const fuenteLimpia = fuente.map(limpiarTexto);
    const coincidencias = [];

    for (let oracion of oracionesAlumno) {
        if (fuenteLimpia.includes(limpiarTexto(oracion))) {
        coincidencias.push(oracion);
        }
    }

    return coincidencias;
}

let entradaFuente = prompt("Ingresa las oraciones de la fuente (separadas por | ):");
let fuente = entradaFuente.split("|");

let entradaAlumno = prompt("Ingresa las oraciones del alumno (separadas por | ):");
let oracionesAlumno = entradaAlumno.split("|");

let hallazgos = revisarCoincidencias(fuente, oracionesAlumno);

if (hallazgos.length > 0) {
    alert("Oraciones coincidentes:\n" + hallazgos.join("\n"));
    } else {
    alert("No se encontraron coincidencias.");
}
