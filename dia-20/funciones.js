function suma(a, b) {
  let resultado = a + b;
  return resultado;
}

function resta(a, b) {
  let resultado = a - b;
  return resultado;
}

function multiplicacion(a, b) {
  let resultado = a * b;
  return resultado;
}

function division(a, b) {
  let resultado = a / b;
  return resultado;
}

function renderizar(cliente, elemento) {
  elemento.innerHTML += `<li>${cliente.nombre}</li>`;
}

function renderClientesBuenos(cliente, elemento) {
  elemento.innerHTML += `<div class="w-90 bg-slate-300 rounded-xl p-10 shadow-2xl transform transition-transform duration-300 hover:scale-110">
          <h2 class="text-2xl font-bold"><span class="text-slate-800 text-shadow-blue-400 font-medium">${cliente.nombre}</span></h2>
          <h3 class="text-slate-700">Edad: <span class="text-slate-800 text-shadow-blue-400 font-medium">${cliente.edad}</span></h3>
          <h3 class="text-slate-700">Correo: <span class="text-slate-800 text-shadow-blue-400 font-medium">${cliente.correo}</span></h3>
          <h3 class="text-slate-700">Num. de Visitas: <span class="text-slate-800 text-shadow-blue-400 font-medium">${cliente.compras.length}</span></h3>
          <h3 class="text-slate-700">Num. de Compras: <span class="text-slate-800 text-shadow-blue-400 font-medium">${cliente.compras}</span></h3>
          <h3 class="text-slate-700">Tot. de Compras: <span class="text-slate-800 text-shadow-blue-400 font-medium">${totalDeCompras(cliente)}</span></h3>

        </div>`;
}

function totalDeCompras(cliente) {
  let total = 0;
  for (let index = 0; index < cliente.compras.length; index++) {
    total += cliente.compras[index];
  }
  return total;
}

export { suma, resta, multiplicacion, division, renderizar, renderClientesBuenos, totalDeCompras};
