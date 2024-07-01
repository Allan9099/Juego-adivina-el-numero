
/*Juego adivina el numero v1.0 con insultos por RNG :y*/

let numeroSecreto = 0;
let numeroIntentos = 0;
let rngInsulto = 0;
let insulto = 0;
let numeroMaximo = 10;
let listaNumerosUsados = [];

condicionesIniciales();

function funcionHTML (elemento,texto) {

    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;

}

function insultoGratis() {

    if(rngInsulto == 1) {

        return "Patetico";

    } else if(rngInsulto == 2) {

        return "Decepcionante";

    } else {

        return "Oye basura";

    }

}

function intentoUsuario() {

    let numeroIngresado = parseInt(document.getElementById("valorUsuario").value);

    if (numeroIngresado === numeroSecreto) {

        funcionHTML("p",`${(numeroIntentos === 1) ? "Adivinaste a la primera!!   :0" : `Adivinaste en ${numeroIntentos} intentos, basura.`}`);
        document.getElementById("reiniciar").removeAttribute("disabled");

    } else { 

        rngInsulto = GenerarRngInsulto();
        insulto = insultoGratis();
        if (numeroIngresado > numeroSecreto) {

            funcionHTML("p",`${insulto}, es menor.`);
        
        } else {
        
            funcionHTML("p",`${insulto}, es mayor.`)
       
        }
       
        numeroIntentos++;
        limpiar();

    }
    return;
}

function generarNumeroSecreto() {
    
    let rngNumero = Math.floor(Math.random() * numeroMaximo) + 1;

    if(listaNumerosUsados.length == numeroMaximo) {

        funcionHTML("p","Replays maximos alcanzados. GRACIAS POR JUGAR, BASURA :D");
        document.querySelector("#intentar").setAttribute("disabled","true");

    } else {

        if (listaNumerosUsados.includes(rngNumero)) {

            return generarNumeroSecreto();

        } else {

            listaNumerosUsados.push(rngNumero);
            return rngNumero;

        }
    }
}

function limpiar() {
    
    document.querySelector("#valorUsuario").value = "";

}

function condicionesIniciales() {

    funcionHTML("h1","Juego del número secreto");
    funcionHTML("p",`Elige un numero del 1 al ${numeroMaximo}, basura. :)`);
    numeroSecreto = generarNumeroSecreto();
    numeroIntentos = 1;
    rngInsulto = GenerarRngInsulto();
    return;

}

function reiniciarJuego() {

    limpiar();

    condicionesIniciales();
    
    document.querySelector("#reiniciar").setAttribute("disabled","true");
    return;

}

function GenerarRngInsulto () {

    return Math.floor(Math.random() * 3) + 1;

}