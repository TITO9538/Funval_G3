let array = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
let sumaArray = 0;
for (let index = 0; index < array.length; index++) {
    console.log(array[index][index]);
   sumaArray += array[index][index];
}
console.log("La suma de la diagonal de este array es:", sumaArray);
