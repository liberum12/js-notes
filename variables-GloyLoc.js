/* Variables GLOBALES: son accesibles desde cualquier parte de la script,
  incluidos los manejadores de eventos, como el onclick. */
var variableGlobal

/* Variables LOCALES: actúan en lugares más acotados
(como en una funcion, solo podremos acceder a ella cuando estemos en esa función)
También pueden ser locales a otros ámbitos: */
function miFuncion (){ // Las llaves se utilizan par acotar el lugar su ámbito.
  var numero 
}
/* La variable *numero* solo funcionará dentro del bloque {} de la función,
  por fuera de ésta, no existirá. Sin embargo,
  si existiera una variable *numero* por fuera de la función, con un valor distinto,
  lo que sucede es esto:  */

  var numero = 2 
function miFuncion (){ 
    var numero = 19 
    console.log(numero) //imprime 19 
} 
console.log(numero) //imprime 2

/* La variable que tendrá validez en cualquier sitio de la página es la global.
  Menos en el ámbito donde está declarada la variable local, que será ella quien tenga validez y prioridad. */

// Declarar variables con o sin var:
var numero = 2 
function miFuncion (){ 
    numero = 19 //Se ceclara sin var.
    console.log(numero) //Imprime 19 
} 
console.log(numero) //Imprime 2. Aqui, si se usaba var, imprimiría 19.

miFuncion() //Llamamos a la función 
console.log(numero) //Imprime 19

/* Declarando con var, estamos haciendo que sea local al ámbito donde se declara.
Por lo que si, dentro de una función no la declaramos con var, la declaración será global,
es decir, se le asignará el valor global,
afectando asi a las demás variables locales sobreescribiendolas.*/
