// mensajes por consola de tipo informativo

//para mostrar texto sin formato texto plano
console.log("mensaje de texto sin formato")
//para mostrar informacion
console.info("soy informacion")
//mensaje de error
console.error("soy un error")
//mensaje de alerta
console.warn("soy alerta")

// mensajes por consola de gestion de tiempo
console.time("tiempo de ejecucion")

edad=17
if(edad >= 18){
   console.log("eres mayor de edad")
}else{
   console.warn("eres pulpin")
}

console.timeEnd("tiempo de ejecucion")