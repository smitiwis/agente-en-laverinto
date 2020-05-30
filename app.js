var numCuadrados = 50;
var canvas = document.getElementById("canvas");
var context = canvas.getContext("2d");
// array vacios para llenar las nuevas coordenadas y hacer 
// comparaciones
var x_array = [];
var y_array = [];

function crearCuadritos(x_array, y_array, p) {
    var pared = document.getElementById("pared");
    context.drawImage(pared, x_array[p], y_array[p], 50, 50);

}

function crearMapa() {

    var coordPared = {
        x: 0,
        y: 0
    };

    for (var p = 0; p < numCuadrados; p++) {
        // numeros redondeados al menor multiplos de 50
        coordPared.x = (Math.floor(Math.random(1) * 10)) * 50;
        coordPared.y = (Math.floor(Math.random(1) * 10)) * 50;

        x_array.push(coordPared.x);
        y_array.push(coordPared.y);

        for (var r = 0; r <= x_array.length; r++) {
            // codicional: para evaluar y que no se compare
            // el ultimo valor de cordenadas x,y con si mismo
            // solamente cuando son diferentes se comparan sus valores dentro del array
            if (p != r) {
                // preguntamos si son iguales las coordenadas en X y Y borramos
                // el valor ultimo que se retime
                if (x_array[p] == x_array[r] && y_array[p] == y_array[r]) {
                    // el indexOF :  Selecciona el # de elemento
                    var borrarX = x_array.indexOf(x_array.length);
                    x_array.splice(borrarX, 1);

                    var borrarY = y_array.indexOf(x_array.length);
                    y_array.splice(borrarY, 1);
                    p--;
                } else {
                    crearCuadritos(x_array, y_array, p);
                }
            }

        }
    }
  
    crearAgente();



}
// crear un Agente 
function crearAgente() {
    var AgenteCoordenada = {
        x: 0,
        y: (Math.floor(Math.random(1) * 10)) * 50
    };
    var agente = document.getElementById("img");
    context.drawImage(agente, AgenteCoordenada.x, AgenteCoordenada.y, 50, 50);

    var borrarBoton = document.getElementById("crearMapa");
    borrarBoton.classList.add("enable");
}


// AGENTE CLICK APARECE AGENTE
var agente = document.getElementById("crearMapa");
agente.addEventListener("click", function () {
    crearMapa();
});
/* Click TRASLADAR AL AGENTE*/

var mover = document.getElementById("mover");
mover.addEventListener("click", function () {
    var up, bot, left, rigth;


    console.log("ya me movere pronto :D");
});





/* LIMPIAR EL CANVAS */

function limpiar() {
    canvas.width = canvas.width;
    x_array.splice(0, numCuadrados);
    y_array.splice(0, numCuadrados);

    var apareceBoton = document.getElementById("crearMapa");
    apareceBoton.classList.remove("enable");
}

