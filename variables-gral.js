// Una variable es un espacio en memoria donde se almacena un dato.
/* -> Las variables de Javascript son sensibles a MAYUSCULAS y minusculas.
      miNombre =/= minombre
      Edad =/= edad */

sumando1 = 23 
sumando2 = 33
/* Su uso para nosotros es como si tuviésemos un apartado donde guardar un dato
y que se pueden acceder a ellos con sólo poner su nombre. */
suma = sumando1 + sumando2


/* -> Carácteres alfanuméricos (números y letras),
el carácter subrayado o guión bajo (_) y el carácter dólar $ */

var namesPermitidos = ["Edad", "paisDeNacimiento", "_nombre", "$elemento", "Otro$_Nombres"];


/* -> No se pueden usar palabras reservadas de JavaScript como nombres de variables. */

var namesNoPermitidos = ["12meses", "tu nombre", "return", "for", "mas-o-menos", "pe%pe","+-"]

/* DECLARACIÓN de variables. 
    Consiste en definir, y de paso informar al sistema, que vas a utilizar una variable. */

var operando 1 // Aqui se está declarando la variable (var).
var operando 2 = 33; // Aquí se está -asignando un *valor*- a la declaración. 
var operando1,operando2 // Se puede declarar más de una variable a la vez, separados por comas unicamente.

/* ECMAScript 6 (2015) introdujo cambios.
    -> Declaración let: Esta nueva manera de declarar las variables afecta a su ámbito,
    ya que son locales al bloque donde se están declarando.
    -> Declaración const: En realidad "const" no declara una variable sino una constante,
    que no puede variar su valor a lo largo de la ejecución de un programa.  */

