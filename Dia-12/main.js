let calc = parseInt(prompt(`
    Ingresa que tipo de calculo desea hacer con los siguientes comandos:
    - Calculas el area de un Cuadrado: 1
    - Calculas el area de un Rectangulo: 2
    - Calculas el area de un Triangulo: 3`));

 while ((calc > 3) || (calc < 1)) {
     alert ("Tu numero no esta dentro del rango pedido, por favor ingrese su numero devuelta")
     calc = parseInt(prompt(`
     Ingresa que tipo de calculo desea hacer con los siguientes comandos:
     - Calculas el area de un Cuadrado: 1
     - Calculas el area de un Rectangulo: 2
     - Calculas el area de un Triangulo: 3`));
 }

switch (calc) {
    case 1:
        let lado = prompt("Ingrese las medidas del lado de su Cuadrado");
        let resultado = (lado * lado);
        alert ("El resultado del area de su cuadrado es: " + resultado);
        break;
    
    case 2:
        let base = parseInt(prompt("Ingrese las medidas de la BASE de su Rectangulo"));
        let altura = parseInt(prompt("Ingrese las medidas de la ALTURA de su Rectangulo"));
        let resultado1 = (base * altura);
        alert ("El resultado del area de su Rectangulo es: " + resultado1);
        break;

    case 3:
        let base1 = parseInt(prompt("Ingrese las medidas de la BASE de su Triangulo"));
        let altura1 = parseInt(prompt("Ingrese las medidas de la ALTURA de su Triangulo"));
        let resultado2 = ((base1 * altura1) / 2);
        alert ("El resultado del area de su Triangulo es: " + resultado2);
        break;

    default: alert ("El numero ingresado no es valido")
        break;
}