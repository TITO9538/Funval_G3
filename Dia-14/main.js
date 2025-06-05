let arrFrutas = ["Manzana", "Banana", "Tomate", "Naranja", "Sandia"];


//EJERCICO 1

console.log (`
    Ejercicio 1
    `);
for (let index = 0; index < arrFrutas.length; index++) {
    console.log (arrFrutas[index]);
}


//EJERCICO 2

console.log (`
    Ejercicio 2
    `);
console.log(arrFrutas[0], arrFrutas[arrFrutas.length - 1]);


//EJERCICO 3

console.log (`
    Ejercicio 3
    `);
arrFrutas.push("Pera");
console.log (arrFrutas)


//EJERCICO 4

console.log (`
    Ejercicio 4
    `);
arrFrutas.shift();
console.log (arrFrutas);


//EJERCICO 5

console.log (`
    Ejercicio 5
    `);
let arrNumeros = [100, 90, 80, 70, 60, 50, 5];
let resultado = 0;
for (let index = 0; index < arrNumeros.length; index++) {
    resultado += arrNumeros[index];
}
console.log (resultado);


//EJERCICO 6

console.log (`
    Ejercicio 6
    `);
console.log (arrNumeros.length);


//EJERCICO 7

console.log (`
    Ejercicio 7
    `);
let resultado7 = 0;
for (let index = 0; index < arrNumeros.length; index++) {
    if (arrNumeros[index] > resultado7) {
        resultado7 = arrNumeros[index];
    }
}
console.log (resultado7);


//EJERCICO 8

console.log (`
    Ejercicio 8
    `);
let resultado8 = 0;
for (let index = 0; index < arrNumeros.length; index++) {
    if (arrNumeros[index] > 10) {
        resultado8 += 1;
    }
}
console.log (resultado8);


//EJERCICO 9

console.log (`
    Ejercicio 9
    `);
let arrNumerosDoble = [];
for (let index = 0; index < arrNumeros.length; index++) {
    arrNumerosDoble.push(arrNumeros[index] * 2);
}
console.log (arrNumerosDoble);


//EJERCICO 10

console.log (`
    Ejercicio 10
    `);
for (let index = 0; index < arrFrutas.length; index++) {
    console.log (arrFrutas[index].toUpperCase());
    arrFrutas[index] = arrFrutas[index].toUpperCase();
}


//EJERCICO 11

console.log (`
    Ejercicio 11
    `);
let elemento = "BANANA";
    if (arrFrutas.includes(elemento)) {
        console.log (`${elemento} si se encuentra en el array`);
    } else {
        console.log (`${elemento} No se encuentra en el array`);
    }


//EJERCICIO 12

console.log (`
    Ejercicio 12
    `);
let notasFunval = [100, 90, 10, 15, 67, 70, 0, 88];
let suma = 0;

notasFunval.forEach((notas) => {
    suma += notas;
});

let promedio = suma / notasFunval.length;

console.log (`El promedio es: ${promedio}`);

let p = 0;
notasFunval.forEach((notas) => {
    p += notas / notasFunval.length;
})
console.log (`El promedio es: ${p}`);