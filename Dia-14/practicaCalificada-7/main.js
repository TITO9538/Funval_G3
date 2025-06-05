  const productos = [
    { nombre: "Laptop", precio: 1200 },
    { nombre: "Mouse", precio: 25 },
    { nombre: "Teclado", precio: 50 },
    { nombre: "Monitor", precio: 300 },
    { nombre: "Silla Gamer", precio: 450 },
    { nombre: "Audífonos", precio: 80 },
    { nombre: "Webcam", precio: 60 },
    { nombre: "USB 128GB", precio: 30 },
    { nombre: "Impresora", precio: 200 },
    { nombre: "Tablet", precio: 500 }
 ]; 
console.log("Estos son los Productos", productos);

console.log(`
    Ejercicio 1
    `);
productos.forEach((producto) => 
    console.log(`${producto.nombre}, con un precio de: $${producto.precio}`));


console.log(`
    Ejercicio 2
    `);
const productosMap = productos.map((producto) => producto.nombre);
console.log (productosMap.includes("Laptop"));

console.log(`
    Ejercicio 3
    `);
const productosMap2 = productos.map((producto) => {
  return {
    nombre: producto.nombre,
    precioConDescuento: producto.precio * 0.9
  };
});
console.log (productosMap2);


console.log(`
    Ejercicio 4
    `);
const arrFiltro = productos.filter((producto) => producto.precio < 100);
console.log (arrFiltro);


console.log(`
    Ejercicio 5
    `);
console.log(productos.slice(0, 2));


console.log(`
    Ejercicio 6
    `);
function compareNumbers(a, b) {
  return a - b;
}
const productosMap3 = productos.map((producto) => producto.precio);
productosMap3.sort(compareNumbers);
console.log(productosMap3);

console.log(`
    Ejercicio 7
    `);
const productosInvertidos = productos.reverse();
console.log (productosInvertidos);