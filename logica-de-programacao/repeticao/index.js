// Imprima os números de 1 a 5.
// Não precisa de um array

// Imprima os múltiplos de 3 de 1 a 20.
// vai precisar de If
// const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]

// Imprima os números pares de 1 a 10.
// vai precisar de If
// const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// Conte quantas vogais há em uma palavra.
// vai precisar de If;

const arrTeste = [1, 2, 3];

function mostrarItens() {
  for (let i = 0; i < arr.length; i++) {
    console.log(`index: ${i}, valor: ${arr[i]}`);
  }
}

function number1to5() {
  for (let i = 1; i <= 5; i++) {
    console.log(i);
  }
}

// number1to5()

const numeros = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
];

function multiploDeTres() {
  for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] % 3 === 0) {
      console.log(numeros[i]);
    }
  }
}

// multiploDeTres()

function numerosPares() {
  for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] % 2 === 0) {
      console.log(numeros[i]);
    }
  }
}

// numerosPares()

const vogais = ["a", "e", "i", "o", "u"];

const palavra = "samuel";
//s a m u e l
//0 1 2 3 4 5

function imprimirVogais() {
  for (let i = 0; i < palavra.length; i++) {
    if (
      palavra[i] === "a" ||
      palavra[i] === "e" ||
      palavra[i] === "i" ||
      palavra[i] === "o" ||
      palavra[i] === "u"
    ) {
      console.log(palavra[i]);
    }
  }
}

imprimirVogais();

function imprimirVogaisComFor() {
  for (let i = 0; i < palavra.length; i++) {
    for (let index = 0; index < vogais.length; index++) {
      if (palavra[i] === vogais[index]) {
        console.log(palavra[i]);
      }
    }
  }
}

imprimirVogaisComFor()