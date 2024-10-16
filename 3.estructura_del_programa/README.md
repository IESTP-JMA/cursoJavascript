# Estructura del programa
## Indice
- [interaccion con el usuario](#interaccion-basica-con-el-usuario)
- [declaraciones y expresiones](#expresiones-y-declaraciones)
- [bindings o enlaces](#bindings-enlaces)
- [El Entorno](#el-entorno)
- [control de flujo](#control-de-fujo)
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
## Bindings (enlaces)
cuando creamos un valor estos valores son volatiles solo exiten en la ejecucion del programa y solo cuando son llamados.
el bingings o enlace es la manera que javascript recuerda los valores y mantiene un estada interno asi como la reutilizacion de valores.
**como usamos los bingings en javascript**.
para usar el bindings primero debemo usar la palabra reservada o `keyword` de nombre `let`, despues debemos darle un nombre para identificar el enlace luego asignarle el valor.
```js
// este es un enlace que puede apuntar a varios valores
//como un pulpito como muchos brazitos
let edadPersona = 34

//si deseamos que nuesto enlace solo apunte a un valor osea un pulpito con un bracit entonces para crear este enlace debemos hacer uso de la keywor const
const edad=45
//este enlace siempre apuntara al valor 45 no podra modifcar su enlace a otro valor
```

> [!NOTE]
> **Que nombre ponerle a nuestro Enlaces** - el nombre de un enlace debera describir el valor al que esta enlasado, y debera estar escrita en `camelCase`

```js
//quiero crear un elace que tenga el valor de la fecha actual
//incorrecto
let yyyymmdd="20240910"
// correcto
let fechaActual="09-10-2024"
// corecto
let edadActualAlumno=34
```
## El Entorno
el entorno es conocido como el momento en el que se ejecuta o inicia un archivo javascrip.
el entorno al crearce no se crea vacio dentro del entorno se crearan la coleccion de enlaces y valores.
**Tarea** - Averiguar mas sobre la ejecucion en linea de los entornos en javascrip
## Control de fujo
Una sentencia se ejecuta como si fuera una historia de arriba abajo.
por ejemplo:
```js
let elNumero = Number(prompt("Elige un numero"))
console.log(`tu numero es la raiz cuadrada de: ${elNumero*elNumero}`)
//primero le pide al usuario un numero y despues muestra un menaje y el cuadro de ese numero
```
### Ejecucion Condicional
Hacemos uso de este control de flujo cuando tenemos distintos caminos o distintos mensajes que deseamos mostrar segun una condicion.
**Como creamos una condicion en javascript**
la ejecucion condicional se crea con la palabra reservada (keyword)
`if` a continuacion de una `condicion` en llaves `{}` se escribira el cuerpo del codigo que deseo ejecutar en caso la condicion sea `verdad`.
- **condicion simple `if`**
```js
let comparacion=5>4
if comparacion{
  prompt("escribe tu nombre")
}
```
- **condicion simple `if` de una sola linea**
```js
if (1+1==2) console.log("es verdad");
```
- **condicion de doble evaluacion `if else`**
existen casos en los que tendremos que ejecutar un codigo si es verdad pero tambien si es falso. ejecucion condicional de dos caminos.
```js
let edadPersona = 16;
if (edadPersona >= 18){
  console.log("eres mayor de edad");
}else{
  console.log("eres menor de edad");
}
```
- **condicion multiple `if` `else if`**
Se utiliza cuando se tiene que evaluar y devolver varias opciones o multiples respuestas
```js
let total_compra=105
if (total_compra >= 50 && total_compra <100){
  console.log(`tiene un descuento del 10% ${total_compra*0.10}`)
}
else if (total_compra >= 100 && total_compra <500){
  console.log(`tienes un descuento del 20% ${total_compra*0.20}`)
}else{
  console.log(`tienes un descuento del 50% ${total_compra*0.50}`)
}

```