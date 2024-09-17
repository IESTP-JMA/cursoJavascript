# Introduccion
- **Temario**
  - [comentarios](#comentarios)
  - [la consola](#consola)
  - Naiming

## Comentarios
Es la parte dentro de mi archivo de codigo que no es leido ni ejecutado por el interprete de `js`.
> [!TIP]
> Los comentarios nos ayudan a entender nuestro codigo, y en ocasiones podemos usarlos para silenciar temporalmente partes del codigo *(comentar un codigo)*.

### Tipos de Comentarios
1. **Una sola linea**
   ```js
   //comentario de una sola linea
   ```
2. **Multiples lineas**
   ```js
   /*
   comentario 
   de multi
   linea
   */
   ```
3. **JSDoc**
   ```js
   /**
    * este es una linea
    * esta es otra linea
    */
   ```
   este tipo de comentario es muy usado para documnetar el codigo, generalmente usado para la explicacion de funciones y clases en `js`.
   [link del archivo](comentarios.js)

## Consola
la herramienta de javascript mas usada, dentro de los navegadores es usada para la [depuracion](#depuracion) de nuestro codigo

> [!TIP]
> ##### depuracion, es la tecnica que nos permite mostra el codigo en las distintas faces del desarrollo, y verificar que el mensaje mostrardo sea el correcto. y verificando que el codigo no tenga errore de sintaxis de logica o de precaucion.

### Tipos de mensajes por consola
#### 1. Notificadores
mostrar un mensaje por consola
```js
console.log("hola mundo")
```
Mostrar un mensaje de estilo informativo
```js
console.info("mensaje informativo")
```
Mostrar un mensaje de estilo o tipo alerta
```js
console.warn("mensaje de tipo alerta")
```
Mostrar un mensaje de estilo o tipo error
```js
console.error("mensaje de error")
```
#### 2. Gestion de tiempo
este tipo de mensaje nos sirve para ver la duracion de ejecucion de nuestro codigo y por optimizarlo para hacer uso de esta herrameinta tenemos que iniciar la consola con un `time()` luego vendra el codigo que deseamos ver la duracion y finalmente terminar el time de la consola con `timeEnd()`
```js
edad=18
if(edad >= 18){
   console.log("eres mayor de edad")
}else{
   console.warn("eres pulpin")
}
```
#### 3. Tablas