import { renderArgentinos, renderCards, renderEdad, renderSkeleton } from "./functions.js";

let datos = [
  {
    nombre: "pepe",
    edad: 18,
    pais: "Argentina",
  },
  {
    nombre: "juan",
    edad: 34,
    pais: "Peru",
  },
  {
    nombre: "kevin",
    edad: 28,
    pais: "Narnia",
  },
  {
    nombre: "Thomas",
    edad: 28,
    pais: "Argentina",
  },
  {
    nombre: "Johan",
    edad: 28,
    pais: "Chile",
  },
  {
    nombre: "Juana",
    edad: 28,
    pais: "Chile",
  },
];

let cards = document.querySelector("#cards");
let argentinos = document.querySelector("#argentinos");
let años28 = document.querySelector("#años28");
let main = document.querySelector("#main")

/* PROMESA */
function traerDatos() {
  let exito = true;
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (exito) {
        resolve(datos);
      } else {
        reject("error al traer los datos");
      }
    }, 3000);
  });
}

renderSkeleton(datos, cards);
renderSkeleton(datos, argentinos);
renderSkeleton(datos, años28);
async function renderizarDatos() {
  try {
    let estudiantes = await traerDatos(); //espera a q la promesa se resuleva
    renderCards(datos, cards);
    renderArgentinos(datos, argentinos);
    renderEdad(datos, años28);
  } catch (error) {
    console.log(error);
  }
}
renderizarDatos();
