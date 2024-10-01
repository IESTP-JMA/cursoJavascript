//si nuestro texto tiene que estar entre comillas simples
console.log("'este texto se muestra entre comillas simples'")
//si nuestro texto tiene que estzr entre comillas dobles
console.log('"este texto se muestra entre comillas dobles"')
//si nuestro texto tendra tanto comillas dobles como simples
console.log(`'esta en en comillas simples', "esta en comillas dobles"`)

//usando caracter de escape
console.log(" de este texto solo esta \"palabra\" estara en comillas ")

// salto de linea usando acentos graves
console.log(`aqui una linea
  aqui otra linea`)

// salto de linea antes es6
console.log(" esta es mi prime linea \n y esta es la segunda linea")

// tabulacion con acentos graves
console.log(`
este texto no esta tabulado
    este no esta tabulado
  `)
// tabulando con el carcater de escape
console.log("si tabular \n \t y tabulado")
console.log("estea es una barra invertida \\")

// concatendo cadenas
console.log("hola"+" "+"mundo")
console.log("hola "+"mundo")

//usando plantillas literales
numeroUno=34
numeroDos=23
console.log(`la suma de ${numeroUno} + ${numeroDos} es = ${numeroUno+numeroDos}`)