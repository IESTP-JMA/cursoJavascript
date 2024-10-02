# Estrcutra del programa
## Indice
- [interaccion con el usuario](#interaccion-basica-con-el-usuario)
- [declaraciones y expresiones](#expresiones-y-declaraciones)
## interaccion basica con el usuario
Podemos interactuar con el usuario desde JavaScript, utilizando un metodo sencillo que biene implementado en los navegadores.
el metodo es conosido como `Window` o el metodo de ventana este metodo en realidad es un objeto que contiene o almacena varias funciones entre ellas las de mostrar mensajes o pedir datos al usuario.
- **alert** - esta funcion nos muestra un mensaje en pantalla
```js
window.alert("mensaje")
```
- **confirm** -preguntar al usuario y ofrecer dos botones que se traducen en valores booleanos `Aceptar` (true) y `cancelar` o `cerar` (false)
```js
window.confirm("quieres ser mi enamorado")
//si deseamos capturar la respuesta almacenaremos el codigo en una varible
respuesta=window.confirm("quieres salir del closed!!?")
```
- **prompt** - pregunta al usuario y espera que se ingres una respuesta
```js
window.prompt("como te llamas?")
// si deseamos almacenar la respuesta usaremos una variable
respuesta=window.promot("como te llamas")
```
## Expresiones y Declaraciones
- **Expresiones** - en javascript un fragmento de codigo que produce un valor es llamada `Expresion`. tambien se dice que una `expresion` es el fragmento de una `oracion`.
```js
1
"hola"
3*6
5>7
!true
```
- **Declaraciones** - en javascript es una oracion
```js
!true;
let estado=!false;
```