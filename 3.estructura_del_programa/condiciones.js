// //ejemplo de condicion simple

// //capturamos la edad y lo convertimos a numero
// let edad = Number(prompt("imgresa tu edad"))
// //verificamos si el tipo de datos edad es number realmente
// if (typeof edad == "number"){
//   //si la comparacion es verdad mostraremos por consola la raiz cuadra de edad
//   console.log(edad*edad)
// };

// //ejemplo de una condicion simple de una sola linea
// if (1+1==2) console.log("Es verdad");

// //Ejercicio: de condiciones
// // crear un programa que me pida un numero y me muestre por consola si es un numero par o impar
// let numero=prompt("Ingres un numero")
// if (+numero%2==0){
//   console.log("Es par");
// }else{
//   console.log("Es impar")
// }

//EJERCICIO
//Crear un programa que pida al usuario su edad y dependiendo su edad le daremos una serie de regalos
//REGALOS
/**
 * - si su edad esta entre 4 a 8 años: te ganaras un chupetin
 * - si su edad esta entre 9 a 13 años: te ganaras una pelota firmada por cuto.
 * - si su edad esta entre 14 a 17 años: te ganaras un celular nokia 6101.
 * - si su edad es mayor igual a 18 : te ganaras al primo lo haces leña.
 */
let edadPersona=Number(prompt("Ingresa tu edad"))

if (edadPersona>=4 && edadPersona<=8){
  console.log("te gaste un chupetin")
}
else if (edadPersona>=9 && edadPersona<=13){
  console.log("te ganaste una pelota")
}
else if(edadPersona>=14 && edadPersona<=17){
  console.log("te ganaste un nokia")
}
else if(edadPersona>=18 && edadPersona<=100){
  console.log("te ganaste al primo")
}
else{
  console.log("no tienes la edad necesaria")
}