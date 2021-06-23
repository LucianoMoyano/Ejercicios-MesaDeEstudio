/* 
TO TIME :
Crea una funcion llamada toTime() que tome como argumento un numero entero (segundos)
La funcion debe convertir el valor recibido en un string ("") que describa cuantas horas y minutos comprenden esa cantidad de segundos
El resultado debe tener el siguiente formato: "X hora (s) y X minuto (s)"

Ejemplos: 

toTime(3600) ==> "1 hour(s) and 0 minutes(s)"
toTime(3500) ==> "0 hour(s) and 58 minutes(s)"
toTime(323500) ==> "89 hour(s) and 51 minutes(s)"

*/

//primero llevar segundo a horas y despues llevar segundos a minutos ; tenemos que hacer las dos operaciones

function toTime(segundos) {
  //pasamos los segundos a horas
  let horas = Math.floor(segundos / 3600);

  //pasamos los segundos a minutos
  let minutos = Math.floor((segundos % 3600) / 60);

  return horas + " hora(s) y " + minutos + " minutos(s)";
  
}

//¿Vale la pena refactorizar? no

/* 
FINDSHORT

crea una funcion findShort() que tome como argumento un string
La funcion debe devolver la longitud de la palabra mas corta
Si se recibe un string vacio, retornar 0.

Ejemplos:

findShort("plataforma 5") ==> 1
findShort("la mostaza es el mejor aderezo") ==> 2
findShort("bootcamp") ==> 8
*/

function findShort(string) {
  //dividir las palabras de la cadena : .split()
  let palabras = string.split(" "); //llevamos a nuestro parametro string a un arreglo de palabras, spliteando con las comillas y el espacio
  let menorValor = palabras[0]; //guardamos en una variable complementaria el menor valor, en este caso el primer valor de lo que generamos anteriormente
  //recorrer el arreglo de palabras e identificar cual es la menor
  for (let i = 0; i < palabras.length; i++) {
    //luego recorrimos con el ciclo for
    // guardar el menor valor
    if (palabras[i].length < menorValor.length) {
      //si el elemento de longitud era menor al que ya teniamos guardado lo suplantara
      menorValor = palabras[i]; //de esta forma nos aseguramos que entre a todos los valores del arreglo y quedarnos con el menor valor
    }
  }

  return menorValor.length; //y como ultima opcion retornamos el menor valor de la cadena de string
}
//-----------------------------------------------------------------------------------------------
//REFACTORIZACIÓN: USANDO METODOS DE ARRAYS

function findShortRefactorizada(string) {
  return string
    .split(" ")
    .sort((a, b) => b.length - a.length)
    .pop().length;
} //
//------------------------------------------------------------------------------------------
let findShortRefactorizada = (string) =>
  string
    .split(" ")
    .sort((a, b) => b.length - a.length)
    .pop().length;

/* 
FILTERLIST: 
    Crea una funcion llamada filterList() que tome como argumento un array de strings y numeros
    La función debe retornar un nuevo array solo con los numeros.
    Si el arreglo filtrado no posee números, retornar elsiguiente mensaje: "lista de numeros vacía"
    No se puede usar el metodo filter() !!

    Ejemplos: 

    filterList([1,2, "a, "b]) ==> [1, 2]
    filterList([1, "a", "b", 0, 15]) ==> [1,0,15]
    filterList(["x", "y", "z"]) ==> "lista de numeros vacía"

    */
//.filter(): nos permite mediante una condicion establecer que valoreS si o que valores no, van a formar parte de un nuevo arreglo, yo apartir de un nuevo arreglo podria al filter decirle que evalue el typeOf() o tipo de dato de ese valor y que me devuelva un nuevo arreglo solamente con lo que sean string o solo con numeros o solo lo elementos que cumplan solo cierta condicion

//.push(): nos sirve para agregar al final del elemento ese nuevo elemento que recibimos por parametro

const filterList = function (array) {
  //definir arreglo resultado en donde se va almacenar los valores que coinciden

  let resultado = [];

  //acceder a cada elemento con un for
  for (let i = 0; i < array.length; i++) {
    //ya tengo acceso a cada uno de los valores

    //evaluar el typeOf de cada elemento
    if (typeof array[i] === "number") {
      //distinguir cual es un numero y cual una cadena de caracteres, lo que nos pide el ejercicio, evaluar si el ejericcios es un numero
      //guardamos el elemento en el arreglo final, lo pushiamos
      resultado.push(array[i]);
    }
  }
  //evaluar si el resultado(que es mi arreglo) es menor a 1 (que el elemento esta vacio) que me retorne otra cosa
  if (resultado.length < 1) {
    return "lista de numeros vacía";
  }

  return resultado;
};
//-------------------------------------------------------------------------------------------------------
/* REFACOTRIZAR CODIGO */

const filterList = function (array) {
  let resultado = [];

  for (let i = 0; i < array.length; i++) {


    //CONDICIONALES CON IF TERNARIOS
    // && : si la condicion de la izquiera y derecha se cumplen, es verdadero
    // || : nos dice que si se cumple 1 operación de las dos que tengamos es verdadero y pasa
    // !== : el operador de desigualdad es cuando un elemento es distinto a otro

    //asignación por operador logico , ejemplo &&, ||, !==
    typeof array[i] === "number" && resultado.push(array[i]);
  }

  return resultado.length < 1 ? "lista de numeros vacía" : resultado ;

};

//-----------------------------------------------------------------------------------------------------------------------------

