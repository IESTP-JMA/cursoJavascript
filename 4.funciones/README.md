# FUNCIONES
- [estructura de una funcion](#estructura-de-una-funcion-como-se-crea-una-funcion)
- [tipos de argumentos y parametros](#tipos-de-argumentos-y-parametros)
  - [posicionales](#argumentos-y-parametros-posicionales)
  - [nominales](#argumentos-y-parametros-nominales)
Las funciones en javascript son `bloques de codigo ejecutable`, a los que podemos pasar parametros y operar con ellos.
Nos sirve para modular(modularizar) nuestros programas y estructurarlos en bloques que `realicen una tarea concreta`, de esta manera nuestro codigo es mas legible y mantenible.
Las funciones normalmente, al acabar su ejecucion `devuelven un valor`, que conseguimos con el parametro `return`.

## estructura de una funcion (como se crea una funcion)
para crear un funcion debemos realizar los siquientes pasos.
1. hacer uso del keyword `function`.
2. darle un nombre a la funcion.
3. crear los parametros que recibira entre parentesis `()`.
4. crear el cuerpo de la funcion `{}`.
```js
//funcion sin parametros
function miFuncion(){
  console.log("esta es mi funcion")
}
//funcion con un parametro
function mifuncionParametros(a){
  console.log("tu parametro es",a)
}
//funcion con varios parametros
function variosParametros(a,b){
  console.log(a+b)
}
```
**COMO EJECUTAMOS UNA FUNCION**
para ejecutar una funcion debemos hacer el llamado de la misma haciendo uso unicamente de su nombre y los parametros que recibira.
```js
//creando la funcion
function saludo(){
  console.log("hola")
}
//ejecutamos la funcion
saludo()

function saludo2(texto){
  console.log("hola: ",texto)
}
//ejecutar
saludo2("jory")
```

> [!NOTE]
> **REGLAS PARA PONER EL NOMBRE A UNA FUNCION** - los nombres de las funciones deben representar acciones, por lo que deben construirse usando el `verbo` que representa la accion seguido de un `sustantivo` representara a la entidad.

```js
function crearUsuario(){

}
function enviarCorre(){

}
```
## Tipos de Argumentos y Parametros
es la manera como se reemplazan los argumentos con los parametros
### Argumentos y Parametros Posicionales
posicionales se le llama por que los arguementos tomaran los parametros en el orden que se le pase a la funcion, segun la posicion entre argumento y parametro
```js
function sumaNumeros(a,b,c,d){
  let suma=a+b+c+d
  return suma
}
//argumentos posicionales
let respuesta=sumaNumeros(2,6,7,8)
console.log(respuesta)
```
### Argumentos y Parametros Nominales
se les conoce a los argumentos que en su creacion se asocian a un parametro en especifico
```js
function registroAlumno(nombre,apellido,sexo){
  let respuesta=`${nombre}, ${apellido}, ${sexo}`
  return respuesta
}
//nominal
regitroAlumno(sexo="primo",nombre="edwin",apellido="del mar")
//posicion
registroAlumno("jory","rodriguez","todos los dias")
```
> [!INFO]
> Posicionales en orden y Nominales especifiacr el parametro y su valor