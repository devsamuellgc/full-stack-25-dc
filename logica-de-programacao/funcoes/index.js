// function somar() {
//   const resultado = 5 + 10;
//   return resultado;
// }

// function somarSemReturn() {
//   const resultado = 20 + 10;
//   console.log(resultado);
// }

// function somarComParams(num1, num2) {
//   const resultado = num1 + num2;
//   console.log(nome);
//   return resultado;
// }

// console.log(somarComParams(1, 10));

// function multi(n1, n2) {
//   const multiplicacao = n1 * n2;
//   return multiplicacao;
// }

// function div(n1, n2) {
//   const divisao = n1 / n2;
//   return divisao;
// }

// function soma(n1, n2) {
//   const resultado = n1 + n2;
//   return resultado;
// }

// function calculate(num1, num2) {
//   const multiplicacao = multi(num1, num2);
//   const divisao = div(multiplicacao, 2);
//   const somar = soma(divisao, 100);
//   return somar;
// }

// function maiorQueZero(num) {
//   if (num > 0) {
//     message = `${num} é maior que zero`;
//   } else if (num < 0) {
//     message = `${num} é menor que zero`;
//   } else {
//     message = `${num} é igual a zero`;
//   }
//   return message;
// }
// maiorQueZero(0);

// function calcularImc(peso, altura) {
//   const resultado = peso / (altura * altura);
//   return resultado.toFixed(2);
// }

// function apresentarImc(imc) {
//   let message = "";

//   if (imc < 18.5) {
//     message = `Seu IMC é: Magreza, ${imc}`;
//   } else if (imc < 25) {
//     message = "Normal";
//   } else if (imc < 30) {
//     message = "Sobrepeso";
//   } else if (imc < 35) {
//     message = "Obesidade grau I";
//   } else if (imc < 40) {
//     message = "Obesidade grau II";
//   } else if (imc > 40) {
//     message = "Obesidade grau III";
//   }

//   return message;
// }

// console.log(calcularImc(80, 1.75));
// console.log(apresentarImc(calcularImc(80, 1.75)));
