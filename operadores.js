/* OPERADORES de Javascript
- aritméticos
- de asignación
- de comparación
- lógicos
- condicionales
- a nivel de bit
- preferencia de operadores

*/

miVariable = 23 * 5 //Operador aritmético: 23 y 5 son operandos y * es el operador. El operador = es de asignación.



//Operadores aritméticos:

opeSuma = 5 + 5 //Suma dos valores.
opeResta = 5 - 5 //Resta dos valores y modifica el signo cuando se utiliza con un solo operando (-50).
opeMultiplicación = 2 * 5 //Multiplica dos valores.
opeDivisión = 10 / 5 //Divide dos valores.
opeResto = 10 % 3 //Devuelve el resto de la división de dos valores, se representa con el porcentaje.
opeIncremento = ++5 //Incrementa en uno el valor de la variable, que puede ser de un solo operando.
opeDecremento = --5 //Decrementa en uno el valor de la variable, que puede ser de un solo operando.

//Ejemplos:
precio = 128;
unidades = 10;
factura = precio * unidades; //factura = 1280
resto = factura % 3; // resto = 2
precio++ //incrementa en una unidad el precio (ahora vale 129).



//Operadores de asignación: asignan un valor a una variable.
/* 
= Es de asignación de la derecha a la izquierda.
+= Asignación con suma. Suma de derecha a izquierda, donde guardará el resultado.
-= Asignación con resta. Resta de derecha a izquierda, donde guardará el resultado.
*= Asignación con multiplicación. Multiplicación de derecha a izquierda, donde guardará el resultado.
/= Asignación con división. División de derecha a izquierda, donde guardará el resultado.
%= Asignación con resto. Se obtiene el resto y se asigna a la variable.
 */

//Ejemplos:
ahorros = 7000; // asigna 7000 a ahorros.
ahorros += 3500; // ahorros = ahorros + 3500. Ahora vale 10500
ahorros /= 2; // ahorros = ahorros / 2. Ahora vale 5250.



// Operadores de Cadenas: JS solo tiene un operador para cadenas.
/*
+ Concatena dos cadenas. Pega la segunda cadena a continuación de la primera.

Este mismo operador también funciona como suma. Suma los operandos, concatena las cadenas de carácteras.

*/

//Ejemplos:
cadena1 = "Hola";
cadena2 = "Mundo";
cadenaConcatenada = cadena1 + cadena2; //cadenaConcatenada = "HolaMundo".
//Concatenando una cadena con un número. A veces a la cadena que tiene un numero, lo toma como número directamente.
miNumero= 23;
miCadena1 = "Hola";
miCadena2 = "23";
resultado1 = miNumero + miCadena1; //resultado1 = "23Hola"
resultado2 = miNumero + miCadena2; //resultado2 = 46
miCadena2 += miNumero; //miCadena2 = "2323"



//Operadores lógicos: son aquellas que devuelven un verdadero o falso (true - false) o sea operadores booleanos, se utilizan para tomar decisiones.
/* 
! ope de Negación: Si es true, lo cambia a false y viceversa.
&& ope AND: Devuelve true si ambos operandos son true.
|| ope OR: Devuelve true si alguno de los operandos es true.
*/
//Ejemplos: Si tengo hambre y tengo comida, entonces me pongo a comer.
if (x==2 && y!=3) {
    //haz algo
}
var x = 2;
var y = 3;
// Otros ejemplos:
miBoleano = true;
miBoleano = !miBoleano // se vuelve false.
tengoHambre = true;
tengoComida = true;
comoComida = tengoHambre && tengoComida; //comoComida = true



//Operadores condicionales: nos permiten hacer expresiones condicionles complejas.
/* 
== Igualdad: Devuelve true si los operandos son iguales.
!= Desigualdad: Devuelve true si los operandos no son iguales. ! =
=== Igualdad estricta: Devuelve true si los operandos son iguales y del mismo tipo.
!== Desigualdad estricta: Devuelve true si los operandos no son iguales o no son del mismo tipo.! = = =
> Mayor que: Devuelve true si el operando de la izquierda es mayor que el de la derecha.
< Menor que: Devuelve true si el operando de la izquierda es menor que el de la derecha.
>= Mayor o igual que: Devuelve true si el operando de la izquierda es mayor o igual que el de la derecha.
<= Menor o igual que: Devuelve true si el operando de la izquierda es menor o igual que el de la derecha.
*/



//Operadores a nivel de bit: operan sobre los bits de los operandos.
/*
& AND: Devuelve 1 si ambos bits son 1.
| OR: Devuelve 1 si alguno de los bits es 1.
^ XOR: Devuelve 1 si solo uno de los bits es 1.
~ NOT: Invierte los bits.
<< Desplazamiento a la izquierda: Desplaza los bits del operando de la izquierda el número de posiciones especificado por el operando de la derecha.
>> Desplazamiento a la derecha: Desplaza los bits del operando de la izquierda el número de posiciones especificado por el operando de la derecha.
>>> Desplazamiento a la derecha sin signo: Desplaza los bits del operando de la izquierda el número de posiciones especificado por el operando de la derecha, rellenando los bits vacíos con 0.
>>= Desplazamiento a la derecha con asignación: Desplaza los bits del operando de la izquierda el número de posiciones especificado por el operando de la derecha, rellenando los bits vacíos con 0.
<<= Desplazamiento a la izquierda con asignación: Desplaza los bits del operando de la izquierda el número de posiciones especificado por el operando de la derecha, rellenando los bits vacíos con 0.
*/

//Precedencia de los operadores: el orden por el que se irán ejecutando las operaciones que se encuentren en una expresión.
/* 
Todos los operadores se evalúan de izquierda a derecha, pero existe excepciones, por las cuales algunos operadores se resuelven antes que otros.
La mayoría vienen de matemáticas.

() [] . Parentesis, corchetes y punto que sirve para los objetos.
! - ++ -- negación, negativo, incremento y decremento.
* / % multiplicación, división y módulo.
+ - suma y resta.
<< >> >>> desplazamiento a la izquierda, derecha y sin signo. Cambios a nivel de bit.
< <= > >= Operadores condicionales.
== != === !== Operadores condicionales de igualdad y desigualdad.
& ^ | Lógicos a nivel de bit.
&& || Lógicos boleanos.
= += -= *= /= %= <<= >>= >>>= &= ˆ= != Operadores de asignación.
*/

//Ejemplos:

12 * 3 + 4 - 8 / 2 % 3 // Primero se ejecuta * / y % de izq a der. Primero mult. y luego div. por estár más a la izq en el módulo.
36 + 4 - 4 % 3
36 + 4 - 1 // Sumas y restas de izq a der.
40 - 1
39 //resultado
