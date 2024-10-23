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
switch (edadPersona){
  case (edadPersona>=4 && edadPersona<=8):
    console.log("te gaste un chupetin")
    break
  case (edadPersona>=9 && edadPersona<=13):
    console.log("te ganaste una pelota")
    break
  case (edadPersona>=14 && edadPersona<=17):
    console.log("te ganaste un nokia")
    break
  case (edadPersona>=18 && edadPersona<=100):
    console.log("te ganaste al primo")
    break
  default:
    console.log("no tienes la edad necesaria")
    break
}

//EJERCICIO
//realizar un programa que pida 5 frutas a travez del navegador.
// y realizar las siguientes evaluaciones
// naranja,limon -> "es una fruta citrica"
// platano, manzana -> "es una fruta dulce"
// fresa,pera,papaya -> "para la ensala de fruta"
// si ingresa otro tipo de frutas -> "no tiene clasificacion"
for (let i=1;i<=5;i++){
  let fruta=prompt(`escribe el nombre de tu fruta numero: ${i}`)
  switch (fruta){
    case "naranja":
    case "limon":
      console.log(fruta,"es una fruta citrica");
      break;
    case (fruta=="manzana" || fruta =="platano"):
      console.log(fruta,"es un fruta dulce");
      break;
    case "fresa":
    case "pera":
    case "papaya":
      console.log(fruta,"para la ensala de fruta");
      break;
    default:
      console.log("orlando es una fruta");
      break;
  }
}