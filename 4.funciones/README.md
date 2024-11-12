# FUNCIONES
- [estructura de una funcion](#estructura-de-una-funcion-como-se-crea-una-funcion)
- [tipos de argumentos y parametros](#tipos-de-argumentos-y-parametros)
  - [posicionales](#argumentos-y-parametros-posicionales)
  - [nominales](#argumentos-y-parametros-nominales)
- [tipos de dunciones por su notacion](#tipos-de-funciones-por-su-notacion)
  - [funciones como valor](#funciones-como-valor)
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

## Tipos de funciones por su notacion
### Funciones como valor
en este caso se crea una funcion como si fuera el valor de un enlace.
```js
let saludo=function(){
  console.log("bienvenido")
}
saludo()
```
en este caso el nombre de la funcion sera el nombre que le pongamos al enlace y para llamarlo o ejecutarlo debemos poner el nombre del enlace mas los parentesis.
al igual que una funcion clasica podemos tambien pasarle parametros

### Funcion como declaracion
se le conoce como funcion `declarativa` a la manera clasica de como creamos una funcion.
```js
function saludo(){
  return "saludos a todos"
}
console.log(saludo())
```
### Funcion de flecha (arrow function)
esta funcion es introducida a partir de la version de ecma script 5 `es5`.
se implemento para la creacion y ejecucion rapida y mas entendible de las funciones.
la funcion flecha evita la `verbosidad` en javascript
> [!NOTE]
> `verbosidad` o `verboso` se utiliza en la programacion para referice a un codigo que necesita demacias lineas de codigo o necesita cumplir estrictamente una serie de reglas podemos comprar la `verbosidad` a un texto demaciado extenso o redundante.
 se crea de la mism manera que una funcion como valor, eso quiere decir que la funcion flecha sera el valor de un enlace.
 la funcion flecha tiene la siguiente estructura.
 el parametro seguido del simbolo flecha `=>` y del cuerpo de ser nesecario o solo de codigo que se retornara
 ```js
 function saludo(){
  return "hola mundo"
 }
 console.log(saludo())

 let saludo=()=>("hola mundo")
 console.log(saludo())

 let mensaje=texto=>console.log("hola,",texto)
 console.log(mensaje("el primo"))
 //en el caso de tener mas de un parametro y ejecutar mas de una sola linea de codigo
 let registroUsuario=(nombre,apellido)=>{
  let alumno=`${nombre}, ${apellido}`
  return alumno
 }

 console.log(registroUsuario("edwin","cachondo"))
 ```
### Direfencias
Las diferencias que te enemos al momento de crear una funcion declarativa, funcion como valor y flecha es el binding.
- **binding** es una tecnica que guarda las funciones y variables (enlaces)  sube al principio la declaracion y no el valor a la cabecera o al principio del archivo de javascript.
```js
despedida() //en funciones declarativas
function saludo(){
    return "hola"
}
function despedida(){
    return "adios"
}
```
```js
saludo()
despedida()
```
## La pila de llamadas
Es una tecnica que se usa para controlar de manera correcta la ejecucion de una funcion.
-**tarea** averiguar sobre LIFO, es un algoritmo de estructura de datos, tecnica para ordenar una pila de lamadas, last in first out
```js
//programa 
function cortarTomate() {
    console.log("cortando tomate")
}
function cortarLechuga() {
    console.log("cortando lechuga")
}
function cortarPepino() {
    console.log("cortando pepino")
}
function cortarLimon() {
    console.log("cortando limon")
}
function prepararEnsalada() {
    cortarTomate()
    cortarLechuga()
    cortarPepino()
    cortarLimon()
    console.log("mezclando verduras")
}
function comer() {
    prepararEnsalada()
     console.log("comiendo la ensalada")   
}
comer()
```
## CLOSURE o Funciones de Cierre(Funciones que retorna funciones)
Un `closure` es una funcion que encapsula una serie de variables y definiciones locales que unicamente seran accesibles si son devueltas con el keyword `return`.
antes de que aparesca la version `ecma 6` los `closure` eran un patron creacional que nops permitia modulararizar nuestro codigo, en lugar de usar las `clases`, que eran populares en otros lenguajes pero que javascript aun no lo implementaba.
```javascript
//una funcion que retorna otra funcion(por lo general es una funcion anonima)
//funcion clasica
function retornaValor(n){
  return n+1
}
//llamando a la funcion clasica
retornaValor(10)

//funcion closure
fucntion retornaValor(n){
  return function(){
    return n+1
  }
}
//lamando a la funcion closure
retornaValor(10)()
```
> [!NOTE]
> Las funciones `closure` son usadas por que pueden mantener el valor de sus enlaces o variables locales en todo el proceso de la ejecucion de su funcion padre por cada llamada que se le realize.

### Closure Tipo Clase
son funciones cuyo uso son iguales a las clases dentro de la ejecucion de una clase tenemos lo que se llama como `instancia` en javascript tenemos funciones `closure` que se pueden instanciar al igual que una clase, la diferencia con la funciones `closure` clasicas es que en esta hacemos uso de la palabra reservada `keyword` llama `this`.
```javascript
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
count1.contador
for(let i=0;i<5;i++){
  count1.incre()
}
```
> [!NOTE]
> la funcion closure de tipo clase no hace uso de `return` en sus funciones al hacer uso de `this` casa funcion o variable estara enlazada al objeto que se cree

> [!WARNING]
> El problema principal de este tipo de funcion, es que cuando creamos un nuevo objeto a partir de la funcion tipo clase, reservara espacion en memoria para toda la clase y sus valor creados eso quiere decir variable y funciones, cada vez que llamos a un funcion esta se replica en memoria.

### prototype (Tarea- averiguar y sus ejemplos)