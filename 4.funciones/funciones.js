//Ejercicio
//crear una funcion que me de un saludo de bienvenida
// function saludoBienvenida(){
//     console.log("Bienvenido")
// }

//funcion como valor de un enlace o variable
// let saludo=function(){
//     console.log("bienvenido")
// }
// saludo()

//de flecha simple
// let mensaje=texto=>console.log("hola, ",texto)
// console.log(mensaje("el primo"))

//flecha con parametros y mas lineas de codigo
// let registroUsuario=(nombre,apellido)=>{
//     let alumno=`${nombre},${apellido}`
//     return alumno
// }
// console.log(registroUsuario("edwin","cachondo"))

//antes de ejecutar hace el binding, en javascript lo que hace es subir las funciones declarativas a la cabecera de mi archivo
// En el caso de funcion como valor o funciones flecha el binding solo evalua el principio del archivo la declaracion de enlace o variable mas no el valor por eso en estos casos debemos ejecutar las funciones despues de haberlo creado 
// let  saludo=()=>{return "holaa"}
// console.log(saludo())
// // en el caso de la funcion declarativa el binding eleva toda funcion al principio del archivo por eso podemos ejecutar la funcion desde cualquier parte del archivo incluso antes de que sea creada.
// function despedidad(){
//     return "adios"
// }

// ejercicio crear una funcion que tenda o almacene una variable contador y podamos con funciones realizar la suma mas uno de esta variable y la resta mas uno de la misma variable ademas de poder tener un funcion que me permita acceder al valor actuala y poder mostrarlo.

//let contador=0
// fuction incremento
// return contador++
// function decremento
// return contador--
// function valorContador
// return contador
// function contador(){
//     let contador=0
//     function incre(){
//         return contador++
//     }
//     function decre(){
//         return contador--
//     }
//     function valueCount(){
//         console.log(contador)
//     }
//     return {
//         valueCount,
//         incre,
//         decre
//     }
// }
// let count1=contador()
// for(let i=0;i<5;i++){
//     count1.incre()
// }
// count1.valueCount()

// let count2=contador()
// for(let i=0;i<5;i++){
//     count2.decre()
// }
// count2.valueCount()
function contador(){
    this.contador=0
    this.incre=function(){
      this.contador++
    }
    this.decre=function(){
      this.contador--
    }
  }
//realizamos la instancia
let count1=new contador()
console.log(count1.contador)
count1.incre()
console.log(count1.contador)