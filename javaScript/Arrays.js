ARREGLOS O ARRAYS

//! los arrays son una lista de elemntos y se definen con corchetes o braquets []

var arreglo = [1, 2, 3, 4, 5];


//! pueden aceptar todos tipos de datos

var otroArreglo = [1, 2, 'hola', null, undefined];

//! inclusive pueden tenr un elemento que sea un arreglo

var arregloAdentro = [1, 2, 'chao', [2, 3, 'hola']];


//! arreglo vacio
var arreglo = [];

// puede tener incluso una funcion

var arrayFuncion = [1, 'toni', null,, function() { console.log('hola')}, 2, ]

 //! para acceder a los arreglos

 var array =['toni', 'emi', 'franco', 'jmmy'];
                0      1       2         3

console.log(array[0]);//toni
console.log(array[1]);//emi
console.log(array[10]);//??

var arrayFuncion = [1, 'toni', null, undefined, function() { console.log('hola')}, 2,[1, 2, 3, 4, 5] ]

console.log(arrayFuncion[4]());//para llama la funcion

arrayFuncion[0] * 3//3(multiplica 3 por el numero 0 del array siendun un numero)

arrayFuncion[1] + 'gafa'//tonigafa

arrayFuncion[7]//[1, 2, 3, 4, 5]

arrayFuncion[6][4]//5

arrayFuncion[1]//'toni'

arrayFuncion[1][0]//'t'(las Strings secretamente son un arreglo de caracteres)

'Andy'//'Andy'

'Andy'[0]//'A'

'Andy'[2]//'d'

var arrayFuncion = [1, 'toni', null, undefined, function() { console.log('hola')}, 2,[1, 2, 3, 4, 5], true ]

arrayFuncion.length//7(elementos)

arrayFuncion[6].length//4(por que el arreglo [1, 2, 3, 4, 5] tiene 4 elementos)

arrayFuncion[1].length//4(por que toni tiene 4 elementos)

arrayFuncion[arrayFuncion.length - 1]//true(va acceder a el arrglo llamado va a contar la cantidad de los elementos y le va a restar 1)

var i = 2;

arrayFuncion[i]//null

//! para agregar elementos a los arrays

var lista = [];// creo un array vacio

lista[] = 'primer'//agrego

lista[0]//'primer'

lista[1] = 'segundo'//agrego

lista[1]//'segundo'

lista[2] = 3

lista[2]//3

lista//['primer', 'segundo', 3]

lista[10] = 10//va a aparcer los elementos asignados y va  adecir q los otros no han sido asignados(undefined)

//! PUSH Y POPS

//creo un arrego

var lista = []

//! .push es una funcion que  agrega un item a la ultima posicion del arreglo

lista.push(1)///[1]

lista.push(2)//[1, 2]

lista.push('lina')//[1, 2, 'lina']

//! .pop es una funcion que quita el ultimo Item y lo devuelve

var str = lista.pop();//crea la variable con el valor quitado

str//'toni'

lista//[1, 2]

lista.pop()//2 (asi se elimina el utimo item)

lista//[1]

// ! COMO RECORRER UN ARREGLO?

var lista = [1, 2, 3, 4, 5];
             0  1  2  3  4
for(var i = 0; i < lista.length; i++) {
    console.log(lista[i]);
}//1
 //2
 //3
 //4
 //5

 var lista = [1, 2, 3, 4, 5, 6, 7, 9, 10, 'toni', 'mati', 'chao']:
//mientras lista.length sea mayor que 0 se va a devolver lista.pop
 while (lista.length > 0) {
    console.log(lista.pop());
 }//'chao'
  //'mati'
  //'toni'
  //10
  //9
  //7
  //6
  //5
  //4
  //3
  //2
  //1

  lista//[]

// ! Acceder a un elemento de Array mediante su índice

let primero = frutas[0]
// Manzana

let ultimo = frutas[frutas.length - 1]
// Banana

// ! Recorrer un Array

frutas.forEach(function(elemento, indice, array) {
    console.log(elemento, indice);
})
// Manzana 0
// Banana 1

//! Añadir un elemento al principio de un Array

let nuevaLongitud = frutas.unshift('Fresa') // Añade "Fresa" al inicio
// ["Fresa" ,"Manzana", "Banana"]

//! Eliminar el primer elemento de un Array

let primero = frutas.shift() // Elimina "Fresa" del inicio
// ["Manzana", "Banana"]

//! Encontrar el índice de un elemento del Array

frutas.push('Fresa')
// ["Manzana", "Banana", "Fresa"]

let pos = frutas.indexOf('Banana') // (pos) es la posición para abreviar
// 1

//** ncludes()
El método includes() determina si un array incluye un determinado elemento, 
devuelve true o false según corresponda. Utiliza el algoritmo sameValueZero para determinar 
si se encuentra el elemento dado.
*/

const arr = [1, 2, 3 ];
console.log(arr.includes(2));//true

const pets = ['cat', 'dog', 'bat'];
console.log(pets.includes('cat'));//true
console.log(pets.includes('at'));//false

//**
reduce()
El método reduce()aplica una función a un acumulador y a cada valor de un 
array (de izquierda a derecha) para reducirlo a un único valor.
*/

//**
El método map() crea un nuevo array con los resultados de la llamada a 
la función indicada aplicados a cada uno de sus elementos.
*/




