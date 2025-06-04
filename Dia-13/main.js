let saldo = 0;
let usuario = prompt("Ingrese su Nombre por favor");
let accion;

while (true) {
    // Pedir acción válida
    do {
        accion = parseInt(prompt(`
        Bienvenido ${usuario} a nuestro Banco Virtual del Chanchito Feliz.
        Ingrese el número de la acción que desea realizar:
        - Retirar dinero: 1
        - Depositar dinero: 2
        - Consultar saldo: 3
        `));
    } while (accion < 1 || accion > 3 || isNaN(accion));

    switch (accion) {
        case 1: // Retirar dinero
            let dineroRetirar;
            do {
                dineroRetirar = parseFloat(prompt("Ingrese el monto a retirar:"));
            } while (isNaN(dineroRetirar) || dineroRetirar <= 0);

            if (dineroRetirar <= saldo) {
                saldo -= dineroRetirar;
                alert(`Transaccion exitosa!! 
                    Has retirado $${dineroRetirar}. Saldo restante: $${saldo}.`);
            } else {
                alert("Saldo insuficiente.");
            }
            break;

        case 2: // Depositar dinero
            let dineroDepositar;
            do {
                dineroDepositar = parseFloat(prompt("Ingrese el monto a depositar:"));
            } while (isNaN(dineroDepositar) || dineroDepositar <= 0);

            saldo += dineroDepositar;
            alert(`Transaccion exitosa!! Has depositado $${dineroDepositar}. Tu saldo actual es: $${saldo}.`);
            break;

        case 3: // Consultar saldo
            alert(`Tu saldo actual es: $${saldo}.`);
            if (saldo > 0) {
                alert ("Felicidades Campeon! no eres pobre!");
            } else {
                alert ("Estas sin plata :( estas re seco");
            }
            break;
    }

    // Preguntar si desea hacer otra operación
    let continuar = prompt("¿Desea realizar otra operación? ingrese 's' para 'si' o cualquier caracter para 'no'");
    if (continuar.toLowerCase() !== "s") {
        alert("Gracias por usar el Banco Virtual del Chanchito Feliz.");
        break;
    }
}
