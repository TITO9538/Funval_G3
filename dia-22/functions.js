function renderCards(array, whereToRender) {
  whereToRender.innerHTML = "";
  array.forEach((student) => {
    whereToRender.innerHTML += `
        <div class="w-80 p-6 bg-slate-600 rounded-lg shadow-xl/50 hover:bg-slate-500">
          <h5 class="mb-2 text-2xl font-bold tracking-tight text-slate-200">Nombre: ${student.nombre}</h5>
          <p class="font-normal text-slate-400">Edad: ${student.edad}</p>
          <p class="font-normal text-slate-400">Pais: ${student.pais}</p>
        </div>
        `;
  });
}

function renderSkeleton(array, whereToRender) {
    array.forEach(() => {
    whereToRender.innerHTML += `
        <div class="w-80 p-6 bg-slate-800 rounded-lg shadow-xl/50 animate-pulse">
          <h5 class="mb-2 text-2xl font-bold tracking-tight text-slate-700">Nombre</h5>
          <p class="font-normal text-slate-700">Edad</p>
          <p class="font-normal text-slate-700">Pais</p>
        </div>
        `;
  });
}

function renderArgentinos(array, whereToRender) {
  whereToRender.innerHTML = "";
  array.forEach((student) => {
    if (student.pais === "Argentina") {
      whereToRender.innerHTML += `
        <div class="w-80 p-6 bg-slate-600 rounded-lg shadow-xl/50 hover:bg-slate-500">
          <h5 class="mb-2 text-2xl font-bold tracking-tight text-slate-200">Nombre: ${student.nombre}</h5>
          <p class="font-normal text-slate-400">Edad: ${student.edad}</p>
          <p class="font-normal text-slate-400">Pais: ${student.pais}</p>
        </div>
        `;
    }
  });
}

function renderEdad(array, whereToRender) {
  whereToRender.innerHTML = "";
  array.forEach((student) => {
    if (student.edad == 28) {
      whereToRender.innerHTML += `
        <div class="w-80 p-6 bg-slate-600 rounded-lg shadow-xl/50 hover:bg-slate-500">
          <h5 class="mb-2 text-2xl font-bold tracking-tight text-slate-200">Nombre: ${student.nombre}</h5>
          <p class="font-normal text-slate-400">Edad: ${student.edad}</p>
          <p class="font-normal text-slate-400">Pais: ${student.pais}</p>
        </div>
        `;
    }
  });
}

export { renderCards, renderSkeleton, renderArgentinos, renderEdad };