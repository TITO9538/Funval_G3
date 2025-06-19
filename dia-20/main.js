import {
  suma,
  resta,
  multiplicacion,
  division,
  renderizar,
  renderClientesBuenos,
  totalDeCompras
} from "./funciones.js";
import { cliente } from "./data.js";

let lista = document.querySelector("#lista-clientes");

for (let i = 0; i < cliente.length; i++) {
  renderizar(cliente[i], lista);
}

/* renderizar el cliente completo 
funcion para traer solo a los clientes q hayan realizado mas de una compra
*/
let clientesBuenos = document.querySelector("#clientes2");

for (let index = 0; index < cliente.length; index++) {
  let numCompras = 0;
  for (let i = 0; i < cliente[index].compras.length; i++) {
    numCompras += cliente[index].compras[i]
  }
  if (numCompras > 1) {
    renderClientesBuenos(cliente[index], clientesBuenos)
  }
}