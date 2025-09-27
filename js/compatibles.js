"use strict";

function filtrarPostulantes(requisitos, postulantes) {
    const umbral = Math.floor(requisitos.length * 0.7);
    const requisitosLimpios = requisitos.map(r => r.toLowerCase());
    const aceptados = [];

    for (let persona of postulantes) {
        const habilidadesLimpias = persona.habilidades.map(h => h.toLowerCase());

        let conteo = 0;
        for (let h of habilidadesLimpias) {
        if (requisitosLimpios.includes(h)) {
            conteo++;
        }
        }

        if (conteo >= umbral) {
        aceptados.push(persona.identificador);
        }
    }

    return aceptados.sort();
}

let textoRequisitos = prompt("Escribe las habilidades requeridas en la oferta (separadas por , ):");
let requisitos = textoRequisitos.split(",").map(x => x.trim());

let totalPostulantes = Number(prompt("¿Cuántos postulantes deseas ingresar?"));
let postulantes = [];

for (let i = 0; i < totalPostulantes; i++) {
    let identificador = prompt(`Identificador del postulante #${i + 1}:`);
    let textoHabilidades = prompt(`Habilidades de ${identificador} (separadas por , ):`);
    let habilidades = textoHabilidades.split(",").map(x => x.trim());

    postulantes.push({ identificador, habilidades });
}

let seleccionados = filtrarPostulantes(requisitos, postulantes);

if (seleccionados.length > 0) {
    alert("Postulantes compatibles:\n" + seleccionados.join("\n"));
} else {
    alert("Ningún postulante cumple con el 70% de las habilidades.");
}
