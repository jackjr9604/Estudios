ARREGLOS O ARRAYS

// los arrays son una lista de elemntos y se definen con corchetes o braquets []

var arreglo = [1, 2, 3, 4, 5];


//pueden aceptar todos tipos de datos

var otroArreglo = [1, 2, 'hola', null, undefined];

//inclusive pueden tenr un elemento que sea un arreglo

var arregloAdentro = [1, 2, 'chao', [2, 3, 'hola']];


//arreglo vacio
var arreglo = [];

// puede tener incluso una funcion

var arrayFuncion = [1, 'toni', null,, function() { console.log('hola')}, 2, ]

 // para acceder a los arreglos

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

// para agregar elementos a los arrays

var lista = [];// creo un array vacio

lista[] = 'primer'//agrego

lista[0]//'primer'

lista[1] = 'segundo'//agrego

lista[1]//'segundo'

lista[2] = 3

lista[2]//3

lista//['primer', 'segundo', 3]

lista[10] = 10//va a aparcer los elementos asignados y va  adecir q los otros no han sido asignados(undefined)


