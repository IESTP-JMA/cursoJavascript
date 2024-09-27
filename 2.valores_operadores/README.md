# Valores, Tipos y Operadores
## Indice
- [Valores, Tipos y Operadores](#valores-tipos-y-operadores)
  - [valores](#valores)
    - [Datos Primitivos](#datos-primitivos)
      - [Numeros(Number)](#numerosnumber)
      - [Aritmetica](#aritmetica)
      - [cadenas](#cadenas)
      - [concatenacion](#concatenacion)
      - [plantillas literales](#plantillas-literales)
## valores
Imagina un mar de bits.
Una computadora moderna tiene mas de 100 mil millones de bits almacenados en su `memoria de trabajo`o`memoria principal`o`memoria volatil`o`ram`.
Ahora la memoria no volatil o memoria secundaria tiene estos bits de manera ordenanda general mente apilada como si de un estante de una biblioteca se tratara.
Cuando nosotros programamos hacemos uso de la `memoria de trabajo`, para trabajar de manera ordenada con los bits que se encuentran en nuestro mar de bits, JavaScript ordena los bits en pequeños partes o piezas de informacion, a esto se le conoce como `valores`.
Cada valor tiene una funcionalidad distinta; puede ser numero, texto o una funcion.
Cuando hablamos de tipos de datos en JavaScript nos referimos a su representacion binaria y el tipo de valor que usamos.
### Datos Primitivos
Son aquellos datos que ya existen, no pueden ser creados, actualizados ni eliminados, solo pueden ser llamados para elo uso que deseamos darle.
Los datos primitivos en JavaScript son:
#### Numeros(Number)
Los valores de tipo Numero, como es de esperar son numnero y en JavaScript se escribe o se hace el llamado del valor de la siguiente manera:
- numero de tipo entero
```js
20 //positivo
-20 //negativo
//estamos usando un patron de bits para el numero 20 que existia dentro de la memoria de trabajo.
//cantidad limite que se puede almacenar en un solo patron o cajita de 64bits  es de 2 elevado a 64. Por cada numero la representacion siempre sera 64 bits en javascript
```
- numero fraccional (punto flotante, decimal, franccion)
```js
2.7 
0.
.0 // positivo
-3,6 // negativo
// Cada numero equivale a 64 bits y se le agrega un  bit por el punto
// internamente java guarda los numero como flotante positivo independientemente de su tipo de numero
// Cuando crea un patron de bits para alamcenar todos los numeros los almacena como decimal positivo.
```
- numeros de tipo notacion cientifica
```js
2.998e8 // positivo
-2.46e8 // negativo
// es igual que decir 2.998^ 10*8
//e significa (*10)
```
> [!WARNING]
> Cuando javascript realiza operaciones con numeros enteros el resultado siempre sera exacta, cuando realice operacion con numeros decimales el resultado perdera presicion por que solo tiene 64 bits para alamacenar el numero, esto suele ocurrir con resultados cuyos decimales sean infinitos como en el caso de PI.
---
> [!TIP]
> cuando javascript hace trabajo de memoria(cuando crea un patron de bit para alamcenar) todos numero se almacena como decimal positivo.
- numeros especiales 
En javascript existen tres valores de tipo numero que se consideran un dato primitivo numerico de tipo especial
```js
infinity
- infinity // negativo
NaN // not a number
// cuando el resultado de una operacion es matematicamente imposible.
```
#### Aritmetica
la principal operacion que se se puede hacer con numeros es la aritmetica.
para esto tememos los Operadores aritmeticos basicos como:
- suma (+).
- resta (-).
- multiplicacion (*).
- division (/).
- potencia (**).
- modulo (%).
**podemos agrupar operaciones con parentesis () las operaciones ques este entre los parentesis se ejecutar primero**
consulta el archivos de operadores [aqui](./operadores.js).
ve los ejercicios [aqui](./ejercicios.js)
#### Cadenas
El siguiente tipo de dato primitivo es la `cadena` - `string`.
¿Para que se usan las cadenas en javascript?
- para representar texto
se escribe encerrando su contenido entre comillas:
```js
//cadenas con contenido
"soy un texto" //comillas dobles
'tambien soy un texto' //comillas simples
`yo tambien soy` // acento grave

//cadena vacia
""
```
**Problema** - como representamos un texto entre comillas
para hacer el uso de comillas dentro del contenido de una cadena podemos seguir las siguientes recomendaciones:
```js
//si nuestro texto tiene que estar entre comillas simples
"'este texto se muestra entre comillas simples'"
//si nuestro texto tiene que estzr entre comillas dobles
'"este texto se muestra entre comillas dobles"'
//si nuestro texto tendra tanto comillas dobles como simples
`'esta en en comillas simples', "esta en comillas dobles"`
```
otra manera de hacer lo antes mencionado es haciendo uso de la barra invertida `\` tambien conocida como `caracter de escape`.
hacer uso de este caracter indica que el caracter posterior tendra un significado especial.
```js
" de este texto solo esta \"palabra\" estara en comillas "
```
**Problema** - deseamos agregar un salto de linea en nuestro texto.
```js
//solucionamos este problema hacienod uso de los acentos graves
`primera linea
segunda linea`
```
antes de la incorporacion de es6 en el uso de acentos graves se utilizaba el caracter de escape `\`
```js
" esta es mi prime linea \n y esta es la segunda linea"
```
**Problema** - deseo tabular un texto
```js
`
este texto no esta tabulado
    este texto si esta tabulado
`
```
ahora tabularemos haciendo uso del cartacter de escape
```js
"si tabular \t y tabulado"
```
#### concatenacion
El unico operador aritmnetico que puede ser usado por cadenas es el operador de suma (+) puede ser usado entre dos a mas cadenas y pasa a llamar operador de concatenacion, lo que realizar es unir cadena en una sola.
```js
"hola"+" "+"mundo"
```
#### plantillas literales
las plantilla literales mencionadad anteriormente con el nombre de acentos graves son usadas para mostrar texto literal, tambien nos permite ejecutra codigo javascript dentro de una plantilla literal el codigo o el resultado de este codigo sera transformado en un dato de tipo texto y se incluira en la posicion en que se encuentre.
para hacer uso de esta funcionalidad debemos usar, 
la siguiente expresion `${}`.
```js
//creando un plantilla literal - template literals
``
//usando js dentro de un plantilla literal
`la suma de 1+1 es ${1+1}`
```

> [!TIP]
> Se dice literal por que con el formato que codificamos sera mostrado de esa misma forma en la consola