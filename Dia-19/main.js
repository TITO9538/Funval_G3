let a = [1, 2, 3];
let b = ["a", "b", "c"];

let [a1, a2, a3] = a;
let [b1, b2, b3] = b;

console.log(a1, b1, a2, b2, a3, b3);

for (let index = 0; index < a.length; index++) {
    console.log(a[index], b[index]);  
}



let profecional = {
    carrera: "medico",
    especialidad: "pediatra"
};

let superProfecional = {
    ...profecional,
    turno: "Tarde",
    pacientes: ["Juan", "Pepe"]
};

console.log(superProfecional);
console.log(profecional);