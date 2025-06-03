let edad = 18;
let deseo = true;
let plata = true;
let dignidad = true;
let papelesMedicos = true;
let maletas = true;
let novia = true;

let detallesSioSi = (edad >= 18) && dignidad && maletas && papelesMedicos;

let detallesImportantes = deseo || plata;

let missionSinDestraccion = !novia;

let irALaMission = detallesSioSi && detallesImportantes && (!novia || plata);

console.log ("Mision exitosa?",irALaMission);
console.log ("Estaras distraido?", !missionSinDestraccion)
console.log ("Te podras comprar cosas alla?", plata)