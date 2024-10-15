//ejemplo de condicion simple

//capturamos la edad y lo convertimos a numero
let edad = Number(prompt("imgresa tu edad"))
//verificamos si el tipo de datos edad es number realmente
if (typeof edad == "number"){
  //si la comparacion es verdad mostraremos por consola la raiz cuadra de edad
  console.log(edad*edad)
};

//ejemplo de una condicion simple de una sola linea
if (1+1==2) console.log("Es verdad");