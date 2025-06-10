let btnMas = document.querySelector("#btnMas");
let btnMenos = document.querySelector("#btnMenos");
let parrafo = document.querySelector("#parrafo");
let contador = 0;

btnMas.addEventListener("click", function () {
    contador++;
    parrafo.textContent = contador;
});

btnMenos.addEventListener("click", function () {
    contador--;
    parrafo.textContent = contador;
});

let btnImg = document.querySelector("#btnImg");
let img = document.querySelector("#img");
let estadoBtnImg = 0;

btnImg.addEventListener("click", function () {
    if (estadoBtnImg == 0) {
        estadoBtnImg = 1;
        img.setAttribute("src", "./Naruto-Sabio.webp");
        btnImg.textContent = "Naruto Sabio";
    } else if (estadoBtnImg == 1) {
        estadoBtnImg = 2;
        img.setAttribute("src", "./Naruto-Kurama.jpg");
        btnImg.textContent = "Naruto Kurama";
    } else if (estadoBtnImg == 2) {
        estadoBtnImg = 3;
        img.setAttribute("src", "./Naruto-Bairon.jpg");
        btnImg.textContent = "Naruto Bairon";
    } else {
        estadoBtnImg = 0;
        img.setAttribute("src", "./Naruto_Uzumaki_HD.webp");
        btnImg.textContent = "Naruto";
    }
})