// No cambies los nombres de las funciones.

function deObjetoAmatriz(objeto) {
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa
  // un par clave-valor en forma de matriz.
  //Ejemplo:
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  //Escribe tu código aquí
  var newArray = [];
  for (var clave in objeto) {
    newArray.push([clave, objeto[clave]]);
  }

  return newArray;
}

function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 }
  //Escribe tu código aquí
  var obj = {};
  for (var indice in string) {
    if (!obj.hasOwnProperty(string[indice])) {
      obj[string[indice]] = contarCaracter(string, string[indice]);
    }
  }
  function contarCaracter(cadena, caracter) {
    var contador = 0;
    var indice = cadena.indexOf(caracter);
    while (indice != -1) {
      contador++;
      indice = cadena.indexOf(caracter, indice + 1);
    }
    return contador;
  }
  return obj;
}

function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí

  var palabraMayuscula = s.toLocaleUpperCase();
  var mayuscula = "";
  var minuscula = "";
  for (var indice in s) {
    if (palabraMayuscula[indice] === s[indice]) {
      mayuscula = mayuscula + s.substr(indice, 1);
    } else {
      minuscula = minuscula + s.substr(indice, 1);
    }
  }
  palabraMayuscula = mayuscula + minuscula;

  return palabraMayuscula;
}

function asAmirror(str) {
  //La función recibe una frase.
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí
  var str2;
  var espejo = [];
  var espejo2 = "";
  str2 = str.split(" ");
  for (var i in str2) {
    espejo.push(str2[i].split("").reverse().join(""));
  }
  for (var i in espejo) {
    if (i < espejo.length - 1) {
      espejo2 = espejo2 + espejo[i] + " ";
    } else {
      espejo2 = espejo2 + espejo[i];
    }
  }
  return espejo2;
}

function capicua(numero) {
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí
  var num = numero.toString();
  num = num.split("").reverse();
  num = num.join("");
  if (num == numero) {
    return "Es capicua";
  } else {
    return "No es capicua";
  }
}

function deleteAbc(cadena) {
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí
  var nuevaCadena = [];
  for (var indice in cadena) {
    if (
      cadena[indice] !== "a" &&
      cadena[indice] !== "b" &&
      cadena[indice] !== "c"
    ) {
      nuevaCadena.push(cadena[indice]);
      /*nuevaCadena = nuevaCadena.replace(nuevaCadena[indice], "");*/
    }
  }
  nuevaCadena = nuevaCadena.join("");

  return nuevaCadena;
}

function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí
  return arr.sort(function (a, b) {
    return a.length - b.length;
  });
}

function buscoInterseccion(arreglo1, arreglo2) {
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí
  var arregloUnion = [];
  for (var indice in arreglo1) {
    for (var indice2 in arreglo2) {
      if (arreglo1[indice] === arreglo2[indice2]) {
        arregloUnion.push(arreglo1[indice]);
      }
    }
  }
  return arregloUnion;
}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  deObjetoAmatriz,
  numberOfCharacters,
  capToFront,
  asAmirror,
  capicua,
  deleteAbc,
  sortArray,
  buscoInterseccion,
};
