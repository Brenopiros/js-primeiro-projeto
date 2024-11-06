

//parte da soma basica

let x = 33;
let y = 77;
const soma = x + y;

//parte da junção do nome com a idade
var nome = 'breno,';
var idade = ' 17';

const ni = nome + idade;
console.log(soma)
console.log(ni)
if ( idade < 18 ){
  console.log('Vc é menor de idade')
} else {
  console.log('Já ta podendo ser preso')
}



//variavel de verificação de idade



//variavel da media
var a = 5;
var b = 8;
var c = 10;

var media = (a + b + c) / 3;

console.log(media)

//calculo de aumento de preço
var preco = 30.0;

var pup = (preco * 0.1) + preco;

console.log(pup)

// calculo do ano de nascimento
var atual = 2024;
var ai = 17;

var datanas = atual - ai;
console.log(datanas)

// verificador de numero impar ou par
var number = 3 

if ( number == 1){
  var f = false;
  console.log(f);

} else if (number == 3) {
  var f = false;
  console.log(f);
  
} else if (number == 5) {
  var f = false;
  console.log(f);
  
} else if (number == 7) {
  var f = false;
  console.log(f);
  
} else if (number == 9) {
  var f = false;
  console.log(f);
  
} else { 
  var t = true;
  console.log(t);
 }

 
// versão melhor  de numero impar ou par
 console.log("nova versão")
 var n = 5 
 console.log( n % 2 === 0)


//calculo de desconto ou acrescento de salario
var salario = 1900

if ( salario > 2000) {
  var dec10 = salario - (salario * 0.1); 
  console.log(dec10);
  } else  {
    var up5 = salario + (salario * 0.05); 
    console.log(up5); }

//calculo do raio
  var r = 30;
  var pi = 3.14;

  var peri = 2 * pi * r;
  console.log(peri);

//mostrador de qual é o numero maior
  console.log( 'Este são os numero de quem é maior')
  var num1 = 20;
  var num2 = 15;
  console.log (num1)
  console.log(num2)
  if ( num1 > num2){
    var n1 = 'numero 1 é maior';
    console.log(n1)
  } else {
    var n2 = 'numero 2 é maior';
    console.log(n2)
  }

// conversor de graus celcius para fahrenheit
  let cel = 35;
  let mul = 1.8;

  let conversor =  cel * mul + 32;
  let mensagem = 'ºC equivale o Fahrenheit = ';
  console.log(cel + mensagem + conversor)

//alterador de variavel
  let aa = 40
  let bb = 30

  console.log("Antes da troca")
  console.log("aa =", aa)
  console.log("bb =", bb)


  aa = aa + bb
  bb = aa - bb
  aa = aa - bb

  console.log("Depois da troca")
  console.log("aa =", aa)
  console.log("bb =", bb)

//verificador se o numero é divisivel por 3 e 5
  var pri = 45;
  var div = 3;
  var sdiv = 5;

  var com = 'o numero é ' + pri;

  console.log(com)

  if(Number.isInteger(pri / div) & (pri / sdiv)){
    console.log('é divisivel por 3 e 5')
  }
  else {
    console.log('não é divisivel por 3 e 5')
  }

//calculador fatorial
  var imput = 10
  
  console.log('o numero é')
  console.log(imput)

  if( imput == 1){
    var p1 = imput 
    console.log('resultado fatorial é')
    console.log(p1)


  } else if ( imput == 2) {
    var p2 = imput * (imput - 1) 
    console.log('resultado é')
    console.log(p2)

  } else if ( imput == 3){
    var p3 = imput * (imput - 1) * (imput - 2) 
    console.log('resultado é')
    console.log(p3)

  } else if ( imput == 4){
    var p4 = imput * (imput - 1) * (imput - 2) * (imput - 3) 
    console.log('resultado é')
    console.log(p4)

  } else if ( imput == 5){
    var p5 = imput * (imput - 1) * (imput - 2) * (imput - 3) * (imput - 4) 
    console.log('resultado é')
    console.log(p5)

  } else if ( imput == 6){
    var p6 = imput * (imput - 1) * (imput - 2) * (imput - 3) * (imput - 4) * (imput - 5) 
    console.log('resultado é')
    console.log(p6)

  } else if ( imput == 7){
    var p7 = imput * (imput - 1) * (imput - 2) * (imput - 3) * (imput - 4) * (imput - 5) * (imput - 6) 
    console.log('resultado é')
    console.log(p7)

  } else if ( imput == 8){
    var p8 = imput * (imput - 1) * (imput - 2) * (imput - 3) * (imput - 4) * (imput - 5) * (imput - 6) * (imput - 7) 
    console.log('resultado é')
    console.log(p8)

  } else if ( imput == 9){
    var p9 = imput * (imput - 1) * (imput - 2) * (imput - 3) * (imput - 4) * (imput - 5) * (imput - 6) * (imput - 7) * (imput - 8) 
    console.log('resultado é')
    console.log(p9)

  } else {
    var p10 = imput * (imput - 1) * (imput - 2) * (imput - 3) * (imput - 4) * (imput - 5) * (imput - 6) * (imput - 7) * (imput - 8) * (imput - 9)
    console.log('resultado é')
    console.log(p10)

  }


  const registro = 'Breno Pereira Piros'; 
  const ST = `Bem vindo ao nosso sistema! Você está registrado como ${registro}`;
  console.log(ST)

  const fi = 15;
  const s = 25;
  const RS = `a soma de ${fi} mais o ${s} é igual a ${fi+s}`
  console.log(RS)

  const no = 'breno';
  const id = 15;
  const CB = `eai blz? meu nome é ${no}!
Minha idade é ${id}`;

  console.log(CB)

  const nu1 = 27;
  const nu2 = 23.25;
  const nu3 = -40;
  const TT = nu1 + nu2 + nu3;

  console.log(TT)

  const valor1 = true;
  const valor2 = false;

  const valor1e2 = valor1 && valor2
  const valor1ouvalor2 = valor1 || valor2
  const inversovalor1 = !valor1
  const inversovalor2 = !valor2

  console.log(valor1e2)
  console.log(valor1ouvalor2)
  console.log(inversovalor1)
  console.log(inversovalor2)

  let xy = 4;

  console.log(`o numero ${xy} é maior que 1 e 10`)
  console.log(xy > 1);
  console.log(xy > 10);

  let z = "string de teste";
  console.log("comparação de palavras")
  console.log(z === "string de teste");
  console.log(z ==="novo texto")
  console.log(z !=="novo texto")

  // codigo diferente

  let m = 2;
  let mm = 'striteste';

  console.log(`01:${m > 1}`);
  console.log(`02:${m > 10}`);

  console.log(`03:${mm === 'striteste'}`);
  console.log(`04:${mm !== 'novo texto inventado'}`);

  console.log(`05:${m >= 2}`);
  console.log(`06:${m >= 1}`);
  console.log(`07:${m >= 3}`);
  console.log(`08:${m <= 3}`);
  console.log(`09:${m < 10}`);


  let vl1;
  console.log(vl1);

  console.log(typeof vl1)

  
