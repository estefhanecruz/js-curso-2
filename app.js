let titulo = document.querySelector('h1');
titulo.innerHTML = "Hora do desafio";

function botaoConsole(){
    console.log ('O botão foi clicado');
}
function botaoAlerta(){
    alert('Eu amo JS');
}
function botaoPrompt(){
    nomeCidade = prompt(`Digite o nome de uma cidade do Brasil`);
    console.log(`Peguei a cidade ${nomeCidade}` );
    alert(`Estive em ${nomeCidade} e lembrei de você`);
}
function botaoSoma(){
    num1 = prompt(`Digite um número inteiro: `);
    num2 = prompt(`Digite outro numero inteiro`);
    soma = num1+num2;
    alert(`O resultado da soma é ${soma}`);
}