/*

Variaveis

var nome = "Thiago Pacheco";
var idade = 24;
var idade2 = 10;
var frase = "Japao é o melhor time do mundo."
alert(nome + " tem " + idade + " anos.");
alert(idade + idade2);
console.log(nome);
console.log(frase);
console.log(idade*idade2);
console.log(frase.replace("Japao", "Brasil"));
console.log(frase.toUpperCase());
console.log(frase.toLowerCase());
alert(frase.replace("Japao", "Brasil"));


Array

var lista = ["maca", "pera", "laranja"];
lista.push("uva"); insere um valor ao Array
lista.pop();
console.log(lista);
console.log(lista.length); mostra no console o tamanho do Array
console.log(lista.reverse()); Inverte a ordem dos valores do Array
console.log(lista.toString()); Mostra os valores do Array em texto
console.log(lista[0]); Lista o valor da posição indicada do Array
console.log(lista.toString()[0]); Mostra o valor indicado da posição da String
console.log(lista.join(" - ")); Substitui os espaçamentos do Array pelo char indicado


Dicionario

var fruta = {nome:"maca", cor:"vermelha"}
console.log(fruta);
console.log(fruta.nome);

Lista de dicionario
var frutas = [{nome:"maca", cor:"vermelha"}, {nome:"uva", cor:"roxo"}]
console.log(frutas);
console.log(frutas[1].nome);


Condicionais

var idade = 18;
var idade = prompt("Qual a sua idade?");
if (idade >= 18){
    alert("Maior");
} else {
    alert("Menor");
}


Estrutura de repetição

var count = 0;
while (count <= 5) {
    console.log(count);
    count++;
}

for (count = 0; count <= 5; count++) {
    console.log(count);
}


Date

var d = new Date();
alert(d.getDay());
alert(d.getHours());
alert(d.getMonth()+1);

Funçoes

function soma(n1, n2){
    return n1 + n2;
}

console.log(soma(5, 10));

function setReplace(frase, nome, novoNome) {
    return frase.replace(nome, novoNome)
}

console.log(setReplace("Vai Japao", "Japao", "Brasil"));

function validaIdade(idade) {
    var validar;
    if (idade >= 18) {
        return true
    } else {
        return false
    }
}

var idade = prompt("Sua idade:");
console.log(validaIdade(idade));

*** Variavel declarada fora da função, é uma variavel global
*** Variavel declarada dentro da função, é uma variavel local

function clickButton() {
    //alert("Botao clicado.");
    document.getElementById("thanks").innerHTML = "Botao clicado";
}

function clickButton() {
    //alert("Botao clicado.");
    document.getElementById("thanks").innerHTML = "Botao clicado";
}

function redirect() {
    window.open("https://unsplash.com/s/photos/coding"); 
    window.location.href = "https://unsplash.com/s/photos/coding";
}

*** window.open - abre a URL em uma nova aba
*** window.location.href - abre a url na mesma aba

function changeText(elemento) {
    document.getElementById("mouse").innerHTML = "Mouse ok!";
}

function returnText(elemento) {
    document.getElementById("mouse").innerHTML = "Passe o mouse.";
}

 ====OU====

function changeText(elemento) {
    elemento.innerHTML = "Mouse ok!";
}

function returnText(elemento) {
    elemento.innerHTML = "Passe o mouse.";
}

function loaded() {
    alert("OK");
}

function change(elemento) {
    console.log(elemento.value);
}
*/

