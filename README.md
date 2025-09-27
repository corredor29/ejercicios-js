#  Ejercicios de Logica en JavaScript

Este repositorio contiene una serie de retos de lógica implementados en el lenguaje **JavaScript **.  
Cada ejercicio aborda problemas de algoritmos, estructuras de datos y manipulación de strings.

---

## 📖 Contenido

- 🧙 El códice de Arkanus  
- 🤖 Archivos comprometidos  
- ✍️ Frases plagiadas  
- 🧃 Frutas envasadas  
- 👩‍💻 Habilidades compatibles  
- ⏳ Puertas del portal temporal  
- 🔤 Anagramas  

---

## ⚙️ Instalación

Clona este repositorio en tu máquina local:

```bash
git clone https://github.com/tuusuario/ejercicios-js.git
cd ejercicios-js\

---

# 📜 El códice de Arkanus

Naira, una aprendiz de hechicería, ha encontrado un antiguo códice en las ruinas de Arkanus.  
Este códice está lleno de símbolos arcanos que, según los manuscritos, ocultan un poderoso conjuro olvidado.  
Para descifrar el conjuro, debe interpretar correctamente los símbolos según un antiguo sistema numérico mágico.

---

## 🔮 Símbolos y valores

Estos son los símbolos conocidos y sus equivalencias:

| Símbolo | Valor |
|---------|-------|
| 𐑂      | 1     |
| 𐑃      | 5     |
| 𐑄      | 10    |
| 𐑅      | 50    |
| 𐑆      | 100   |

---

## ⚠️ Advertencia

La energía mágica es caprichosa.  
Si un símbolo de menor valor aparece **justo antes** que uno de mayor valor, su energía se resta en lugar de sumarse.

---

## ✨ Instrucciones

Debes crear una función que reciba una cadena con los símbolos y retorne su valor numérico total.  
Si encuentras un símbolo desconocido, el conjuro se corrompe y la función debe devolver `NaN`.

---

## 📖 Ejemplos

Convierte números a letras según:

```js
decodeSpell("𐑂𐑂𐑂") // 3
decodeSpell("𐑄𐑂")     // 9  (10 - 1)
decodeSpell("𐑃𐑂")     // 6  (5 + 1)
decodeSpell("𐑂𐑂𐑃")   // 7  (1 + 1 + 5)
decodeSpell("𐑂𐑄𐑆")   // 109 (1 + (100 - 10))
decodeSpell("𐑄𐑅𐑂")   // 49  (50 - 1)
decodeSpell("𐑄𐑃𐑂")   // 14  (10 + 5 - 1)
decodeSpell("𐑂𐑄𐑆𐑅") // 149 (1 + (100 - 50) + 10 - 1)
decodeSpell("𐑂𐑆𐑃")   // 104 (100 + 5 - 1)
decodeSpell("𐑅")       // 50
decodeSpell("𐑂𐑇")     // NaN

---

# 🤖 Reto: Archivos comprometidos

En el año 3025, las ciudades están controladas por Inteligencias Artificiales que almacenan registros de todos los movimientos humanos.  
Cada cierto tiempo, los nodos de vigilancia hacen una descarga segura de datos para evitar pérdidas ante apagones del sistema.

Tienes el **timestamp de la última descarga segura** y un registro de modificaciones recientes que hicieron los drones.  
Cada modificación está representada como un par:


---

## 🎯 Objetivo

Implementar la función `getCompromisedFiles(lastSafeDownload, droneLogs)` que devuelva un array con los IDs de los archivos modificados **después** de la última descarga, **ordenados de menor a mayor**.

---

## 📖 Ejemplo

```js
const lastSafeDownload = 1670000000;
const droneLogs = [
  [42, 1670000500],
  [13, 1670000000],
  [8, 1670000700],
  [8, 1670000001],
  [99, 1669999999]
];

getCompromisedFiles(lastSafeDownload, droneLogs);
// => [8, 42]

---

# ✍️ Reto: Frases Plagiadas

Varias escuelas están usando un sistema automático para detectar si los alumnos copiaron texto de otras fuentes.  
Tu tarea es implementar una función que compare un conjunto de frases escritas por un estudiante con una base de frases consideradas como sospechosas de ser copiadas.  

Una frase se considera plagiada si coincide con una frase de la base **ignorando mayúsculas, espacios al inicio/final y signos de puntuación al final** (como `"."`, `","`, `"?"`, `"!"` al final de la frase).

---

## 📖 Ejemplo

```js
const base = [
  'El conocimiento es poder.',
  'Aprender nunca es una pérdida de tiempo!',
  'Programar es divertido'
];

const frasesEstudiante = [
  'el conocimiento es poder',
  'Aprender nunca es una pérdida de tiempo ',
  'programar es divertido.',
  'La práctica hace al maestro.'
];

detectarPlagio(base, frasesEstudiante);
// => ["El conocimiento es poder.",
//     "Aprender nunca es una pérdida de tiempo!",
//     "Programar es divertido"]

---

# 🍏 Reto: Frutas envasadas

En la fábrica de jugos *Frutápolis*, los robots empacadores reciben frutas en una cinta transportadora.  
Por reglas de seguridad, las frutas deben entrar y salir en un orden específico: **la última fruta que entra debe ser la primera en salir**.

---

## 🎯 Objetivo

Tu misión es ayudar a verificar si una secuencia de salida es posible, dadas las frutas que entraron.  
Implementa la función `frutaEmpacadaCorrectamente` que reciba dos arrays:

- **entrada** → (el orden en que las frutas llegaron)  
- **salida** → (el orden en el que las frutas se empacaron)  

y devuelva **`true`** si la secuencia de salida es válida, o **`false`** si no se puede lograr respetando el orden de apilado.

---

## 📖 Ejemplos

```js
frutaEmpacadaCorrectamente(
  ['manzana', 'banana', 'kiwi'],
  ['kiwi', 'banana', 'manzana']
);
// => true  ✅ se empacaron en orden LIFO

frutaEmpacadaCorrectamente(
  ['manzana', 'banana', 'kiwi'],
  ['banana', 'kiwi', 'manzana']
);
// => false ❌ no se puede obtener así desde una pila

---

# 🛠️ Reto: Habilidades compatibles

Estás creando un sistema de emparejamiento entre candidatos y ofertas laborales.  
Cada oferta publica una lista de habilidades deseadas (por ejemplo `"JavaScript"`, `"React"`, `"CSS"`).  
A su vez, cada candidato envía su CV con habilidades declaradas.

## 🎯 Objetivo

Tu objetivo es crear una función que reciba una oferta laboral y una lista de candidatos, y devuelva los **IDs de los candidatos** que cumplan al menos el **70% de las habilidades requeridas**.

---

## 📖 Ejemplo

```js
const oferta = ["JavaScript", "React", "Node", "CSS", "Git"];
const candidatos = [
  { id: "sam", skills: ["JavaScript", "React", "Node", "Git"] },
  { id: "ana", skills: ["JavaScript", "CSS", "HTML", "React", "Node"] },
  { id: "sara", skills: ["HTML", "CSS"] },
  { id: "bob", skills: ["JavaScript", "Node"] }
];

candidatosCompatibles(oferta, candidatos);
// => ["ana", "sam"]

---

# ⏳ Reto: Puertas del portal temporal

En el año 4022, los humanos usan portales temporales para moverse entre dimensiones.  
Cada portal tiene un código único (una letra minúscula) y solo uno de ellos está fuera de fase:  
no se repite en la secuencia de activaciones.  

Tu misión es encontrar el primer portal fuera de fase que aparece en la lista.

---

## 🎯 Objetivo

Implementa la función `portalFueraDeFase` que reciba un string con los códigos de portales activados en orden,  
y devuelva el índice del primer portal que **no se repite**.  

Si todos los portales están en fase (es decir, se repiten), devuelve `-1`.

---

## 📖 Ejemplos

```js
portalFueraDeFase("xyxxy")   // todas se repiten => -1
portalFueraDeFase("aabbc")   // 'c' en el índice 4
portalFueraDeFase("aabbcdeffgg") // 'c' en el índice 4
portalFueraDeFase("aabbccddeffg") // 'g' en el índice 12

---

# 🔤 Reto: Anagramas

Dado un par de palabras, debemos determinar si son anagramas entre sí.  
Dos palabras son anagramas si contienen las mismas letras en la misma cantidad, pero en cualquier orden.

---

## 📖 Ejemplos

- `"cinema"` y `"iceman"` son anagramas.  
- `"hello"` y `"world"` no son anagramas.  

---

## 📝 Instrucciones

- Crear una función que reciba dos cadenas de texto.  
- La función debe devolver `true` si las palabras son anagramas y `false` si no lo son.  

---

## ⚙️ Reglas

- La comparación debe ser insensible a mayúsculas y minúsculas.  

---

## 📘 Ejemplos en código

```js
esAnagrama("cinema", "iceman") // true
esAnagrama("hello", "world")   // false
esAnagrama("listen", "silent") // true
esAnagrama("evil", "vile")     // true

---

# 🏆 Objetivo

Estos ejercicios están diseñados para:

- Practicar **JavaScript**  
- Mejorar la **lógica de programación**.  
- Prepararse para **proyecto de jolver :(** 

---

## Autor

- Felipe Corredor Silva  
