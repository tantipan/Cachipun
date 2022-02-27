// Se crean variable variable para solicitar cantidad de partidas
var cantidad_partidas = 0;

do{
  // Se solicita al usuario ingresar la cantidad de partidas
  cantidad_partidas = parseInt(prompt("Ingrese cuántas veces desea jugar?: "));

  // Se solicita la cantidad de peatidas mientras no se ingrese un valor entero
}while (!Number.isInteger(cantidad_partidas));


//Se inicia ciclo para la cantidad de partidas
for(i=0; i < cantidad_partidas; i++ ){
  let jugada = 0;
  do{
    // Se solicita al usuario ingresar Su jugada
    jugada = prompt("Seleccione su jugada (" + (i+1) +") : 0-Piedra, 1-Papel o 2-Tijera" );

    // Se verifica que la jugada es valida
  }while (jugada_nopermitida(jugada));

  jugada = parseInt(jugada);
  resultado = ganador(jugada);

}

// Esta funcion verifica si la jugada ingresada sea un numero entre el 0 y el 2
function jugada_nopermitida(opcion){
var valoresAceptados = /^[0-2]+$/;
  if (opcion.match(valoresAceptados)) {
    // Si es una jugada aceptada devuelve false
    return false;
  } else {
    // Sino devuelve muetra mensaje y edvuelve true
    alert("Jugada no valida");
    return true;
  }
}

function ganador(usuario){
  // Selecciona aleatoriamente jugada el computador entre 0, y 2
  let computador = Math.floor(Math.random()*3)
  var opciones = new Array("Piedra", "Papel", "Tijera");
  switch (usuario) {
    case 0: // Usuario Piedra
      if (computador == 0){ //Computador piedra
        // Declarar un empate
        alert("Ud selecciono " + opciones[0] + " y el computador selecciono " + opciones[0] + ", es un empate");
      }
      else if(computador == 1){ //Computador Papel
        // Ha perdido contra la máquina
        alert("Ud selecciono " + opciones[0] + " y el computador selecciono " + opciones[1] + ", ud ha perdido!");
      }else{//Computador Tijera
        // Felicitar al usuario ya que ha ganado
        alert("Ud selecciono " + opciones[0] + " y el computador selecciono " + opciones[2] + ", Felicitaciones es el ganador!!");
      }
      break;
    case 1: //Usuario Papel
      if (computador == 0){ //Computador piedra
        // Felicitar al usuario ya que ha ganado
        alert("Ud selecciono " + opciones[1] + " y el computador selecciono " + opciones[0] + ", Felicitaciones es el ganador!!");
      }
      else if(computador == 1){ //Computador Papel
        // Declarar un empate
        alert("Ud selecciono " + opciones[1] + " y el computador selecciono " + opciones[1] + ", es un empate");

      }else{//Computador Tijera
        // Ha perdido contra la máquina
        alert("Ud selecciono " + opciones[1] + " y el computador selecciono " + opciones[2] + ", ud ha perdido!");
      }
        break;

    case 2: //Usuario Tijera
      if (computador == 0){ //Computador piedra
        // Ha perdido contra la máquina
        alert("Ud selecciono " + opciones[2] + " y el computador selecciono " + opciones[0] + ", ud ha perdido!");
      }
      else if(computador == 1){ //Computador Papel{
        // Felicitar al usuario ya que ha ganado
        alert("Ud selecciono " + opciones[2] + " y el computador selecciono " + opciones[1] + ", Felicitaciones es el ganador!!");
      }else{//Computador Tijera
        // Declarar un empate
        alert("Ud selecciono " + opciones[2] + " y el computador selecciono " + opciones[2] + ", es un empate");
      }
      break;
  }
}
