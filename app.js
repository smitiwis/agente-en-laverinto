var canvas, context, pos_x_Agente, pos_y_Agente;
var numCuadrados = 30;


canvas = document.getElementById("canvas");
context = canvas.getContext("2d");

// array vacios para llenar las nuevas coordenadas y hacer comparaciones
var x_array = [];
var y_array = [];

/* -------------------------
      DIBUJAR EL AGENTE
----------------------------*/
function crearAgente(coordenada_X, coordenada_Y) {
   var agente = document.getElementById("img");
   context.drawImage(agente, coordenada_X, coordenada_Y, 50, 50);

   // colocar al elemento CREAR MAPA la clase enable
   // el cual en css tiene como display none.
   var borrarBoton = document.getElementById("crearMapa");
   borrarBoton.classList.add("enable");
}


/* -------------------------
 TRASLADAR AL AGENTE
----------------------------*/

var mover = document.getElementById("mover");
mover.addEventListener("click", function () {

   console.log("pronto me movere");

});


/* ------------------------------------------------
   CLICK CREAR UN AGENTE EN X = 0 Y ALEATORIO EN Y
---------------------------------------------------*/
var clickAgente = document.getElementById("agente");
clickAgente.addEventListener("click", function () {
   crearPosicionAgente();
});

/*------------------------------------------------
   FUNCION PARA LA UBICACION DEL AGENTE
--------------------------------------------------*/
function crearPosicionAgente() {
   var coorYarray = [];
   // filtro de coordenadas que empiezan x en CERO y un valor en Y cualqueira
   // console.log(coorYarray); // coordenadas en (Y) capturadas cuando x = 0;
   for (var i = 0; i < numCuadrados; i++) {
      if (x_array[i] == 0) {
         coorYarray.push(y_array[i]);
      }
   }
   // coordenadas existentes por si: 10 valores
   var y_quiero = [0, 50, 100, 150, 200, 250, 300, 350, 400, 450];
   /* console.log(y_quiero);
   console.log(coorYarray); */
   for (var j = 0; j < coorYarray.length; j++) {
      for (var k = 0; k < y_quiero.length; k++) {
         if (coorYarray[j] == y_quiero[k]) {
            // console.log(contador + "ra igualdad : " + coorYarray[j] + " con " + y_quiero[k]);
            // borramos el elemento que se repite
            y_quiero.splice(k, 1);
            /*  console.log(coorYarray);
             console.log(y_quiero); */
         }
      }
   }
   /*  console.log(y_quiero); */
   var coordAleatorioAgente_Y = Math.floor(Math.random() * (y_quiero.length));
   /*  console.log(coordAleatorioAgente_Y); */
   crearAgente(0, y_quiero[coordAleatorioAgente_Y]);
}

/* -------------------------
      DIBUJAR LA PARED
----------------------------*/
function crearCuadritos(x_array, y_array, p) {
   var pared = document.getElementById("pared");
   context.drawImage(pared, x_array[p], y_array[p], 50, 50);
}

/* -------------------------
    CLICK CREAR MAPA
 ----------------------------*/
var agente = document.getElementById("crearMapa");
agente.addEventListener("click", function () {
   crearMapa();
});


/* -------------------------
 FUNCION PARA CREAR EL MAPA
----------------------------*/
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

}

/* -------------------------
      LIMPIAR CANVAS
----------------------------*/
var limpiar = document.getElementById("limpiar");
limpiar.addEventListener("click", function () {
   canvas.width = canvas.width;
   x_array.splice(0, numCuadrados);
   y_array.splice(0, numCuadrados);

   var apareceBoton = document.getElementById("crearMapa");
   apareceBoton.classList.remove("enable");
});






