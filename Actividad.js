//Ejercicio 1
function noRepetido() {
  cadena = document.getElementById("cadena").value
  const numrep = {};

  for (let i = 0; i < cadena.length; i++) {
    if (numrep[cadena[i]]) {
      numrep[cadena[i]]++;
    } else {
      numrep[cadena[i]] = 1;
    }
  }

  for (let i = 0; i < cadena.length; i++) {
    if (numrep[cadena[i]] === 1) {
      return document.getElementById("resp-1").textContent=String(cadena[i]);
    }
  }

  return document.getElementById("resp-1").textContent = String("No se encontraron elementos que no se repitan");
}

//Ejercicio 2
function bubbleSort() {
  const texto = document.getElementById("input-2").value;
  listaCadenas = texto.split(",");
  listaNum = [];
  respuesta = "";

  for (const str of listaCadenas) {
    try{
      numeros = str.match(/(\d+)/);
      numero = Number(numeros[0]);
      listaNum.push(numero);
    } catch {
      console.log("Inserte numeros");
    }
  }

  for (let i = 0; i < listaNum.length; i++) {
    for (let j = 0; j < listaNum.length - 1; j++) {
      if (listaNum[j] > listaNum[j + 1]) {
        const aux = listaNum[j];
        listaNum[j] = listaNum[j + 1];
        listaNum[j + 1] = aux;
      }
    }
  }


  for (const num of listaNum) {
    respuesta += String(num)+", ";
  }

  if (respuesta.length >= 2) { 
    respuesta = respuesta.substring(0,respuesta.length-2);
  }

  document.getElementById("resp-2").textContent = respuesta;
}

//Ejercicio 3 
function reverseAndDisplay() {
  const array = document.getElementById("input-3").value.split(",").map(Number);
  const reversedArray = reverseArray(array);
  document.getElementById("resp-3-2").innerHTML = ` Arreglo invertido: ${reversedArray}`;
}

function reverseInPlaceAndDisplay() {
  const array = document.getElementById("input-3").value.split(",").map(Number);
  reverseArrayInPlace(array);
  document.getElementById("resp-3-2").innerHTML = ` Arreglo invertido en su lugar: ${array}`;
}

function reverseArray(array) {
  const newArray = [];
  for (let i = array.length - 1; i >= 0; i--) {
    newArray.push(array[i]);
  }
  return newArray;
}

function reverseArrayInPlace(array) {
  for (let i = 0; i < Math.floor(array.length / 2); i++) {
    const temp = array[i];
    array[i] = array[array.length - 1 - i];
    array[array.length - 1 - i] = temp;
  }
}

//Ejercicio 4
function capitalizar() {
  let texto = document.getElementById('input-4').value;
  let resultado = capitalizarPalabras(texto);
  document.getElementById('resp-4').innerText = resultado;
}

function capitalizarPalabras(texto) {
  let palabras = texto.split(' ');
  for (let i = 0; i < palabras.length; i++) {
    let palabra = palabras[i];
    palabras[i] = palabra.charAt(0).toUpperCase() + palabra.slice(1);
  }
  return palabras.join(' ');
}


// Ejercicio 5 
function recibirAB(){
  const a = document.getElementById("a").value;
  const b = document.getElementById("b").value;
  resp = calcularMCD(a, b);
  document.getElementById("resp").textContent=String(resp);
}
function calcularMCD(a, b) {
  if (b == 0) {
      return a;
  }
  return calcularMCD(b, a % b);
}

//Ejercicio 6
function HackerSpeak() {
  str = document.getElementById("input-6").value
  let hackerStr = '';
  for (let i = 0; i < str.length; i++) {
      const char = str.charAt(i);
      switch (char) {
          case 'a':
            hackerStr += '4';
            break;
          case 'e':
            hackerStr += '3';
            break;
          case 'i':
            hackerStr += '1';
            break;
          case 'o':
            hackerStr += '0';
            break;
          case 's':
            hackerStr += '5';
            break;
          default:
            hackerStr += char;
          }
        }
        return document.getElementById("resp-6").textContent = String(hackerStr);
}

//Ejercicio 7
function Factores() {
  valor = document.getElementById("input-7").value
  let factores = [];
  for (let i = 1; i <= valor; i++) {
      if (valor % i === 0) {
          factores.push(i);
      }
  }
  return document.getElementById("resp-7").textContent = factores;
}

//Ejercicio 8
function Duplicados() {
  arr = document.getElementById("input-8").value;
  let NoDuplicados = [];
  for (let i = 0; i < arr.length; i++) {
      if (NoDuplicados.indexOf(arr[i]) === -1) {
          NoDuplicados.push(arr[i]);
      }
  }
  return document.getElementById("resp-8").textContent = String(NoDuplicados);
}


//Ejercicio 9
function mostrarLongitudMasCorta() {
  const cadenas = document.getElementById("cadenas").value.split(",");
  const longitudMasCorta = longitudCadenaMasCorta(cadenas);
  document.getElementById("resp-9").textContent = longitudMasCorta;
}

function longitudCadenaMasCorta(cadenas) {
  let longitudMasCorta = Infinity;
  for (let i = 0; i < cadenas.length; i++) {
    if (cadenas[i].length < longitudMasCorta) {
      longitudMasCorta = cadenas[i].length;
    }
  }
  return longitudMasCorta;
}

//Ejercicio 10
function Palindromo() {
  cadena = document.getElementById("input-10").value;
  cadena = cadena.toLowerCase().replace(/\s/g, ''); 
  let cadenaAlReves = cadena.split('').reverse().join('');
  if(cadena === cadenaAlReves){
    return document.getElementById("resp-10").textContent = "Es un palindromo";
  }
  else{
    return document.getElementById("resp-10").textContent = "No es un palindromo";
  }
}


// Ejercicio 11 
function ordenarAZList() {
    const inputText = document.getElementById("unorderList").value;
    const caracteres = inputText.split(""); // Para dividir string en char
    caracteres.sort(); // Para ordenar en orden alfabetico
    const orderText = caracteres.join("");
    document.getElementById("orderList").textContent=orderText;
}
// Ejercicio 12
function calcular() {
  let cadenaNum = document.getElementById("input-12").value.split(",").map(Number);
  let resultado = calcularMedianaYModa(cadenaNum);
  document.getElementById("resp-12").innerHTML = "Mediana: " + resultado.mediana + "<br>Moda: " + resultado.moda;
}

function calcularMedianaYModa(cadenaNum) {
  cadenaNum.sort(function(a, b) {
    return a - b;
  });

  let mediana;
  let mitad = Math.floor(cadenaNum.length / 2);
  if (cadenaNum.length % 2 === 0) {
    mediana = (cadenaNum[mitad - 1] + cadenaNum[mitad]) / 2;
  } else {
    mediana = cadenaNum[mitad];
  }

  let frecuencias = {};
  let moda = [];
  let maxFrecuencia = 0;
  for (let i = 0; i < cadenaNum.length; i++) {
    let numero = cadenaNum[i];
    frecuencias[numero] = (frecuencias[numero] || 0) + 1;
    if (frecuencias[numero] > maxFrecuencia) {
      moda = [numero];
      maxFrecuencia = frecuencias[numero];
    } else if (frecuencias[numero] === maxFrecuencia) {
      moda.push(numero);
    }
  }

  return {
    mediana: mediana,
    moda: moda
  };
}

// Ejercicio 13
function encontrarCadenaMasFrec() {
  let cadenaInput = document.getElementById('cadena-input');
  let resultado = document.getElementById('resultado');
  let cadena = cadenaInput.value;
  let lista = cadena.split(',');
  let cadenaMasFrec = cadenaMasFrecuente(lista);
  resultado.textContent = `La cadena más frecuente es "${cadenaMasFrec}"`;
}

function cadenaMasFrecuente(lista) {
  let contador = {};
  let maxCuenta = 0;
  let cadenaMasFrec = '';
  
  for (let i = 0; i < lista.length; i++) {
    let cadena = lista[i];
    if (contador[cadena] == null) {
      contador[cadena] = 1;
    } else {
      contador[cadena]++;
    }
    
    if (contador[cadena] > maxCuenta) {
      maxCuenta = contador[cadena];
      cadenaMasFrec = cadena;
    }
  }

  return cadenaMasFrec;
}

//Function 14
function esPotenciaDeDos(numero) {
  return (numero & (numero - 1)) === 0;
}

function verificarPotenciaDeDos() {
  const numero = document.getElementById("input-14").value;

  if (esPotenciaDeDos(numero)) {
    document.getElementById("resp-14").innerHTML = `${numero} es una potencia de dos.`;
  } else {
    document.getElementById("resp-14").innerHTML = `${numero} no es una potencia de dos.`;
  }
}

//Ejercicio 15
function ordenarDescendente(numeros) {
  return numeros.sort(function(a, b) {
    return b - a;
  });
}

function ordenar() {
  let numeros = document.getElementById("input-15").value.split(",").map(Number);
  let numerosOrdenados = ordenarDescendente(numeros);
  document.getElementById("resp-15").innerHTML = `${numerosOrdenados}`;
}