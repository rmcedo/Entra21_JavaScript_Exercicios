function addParagrafo(conteudo) {

    let enter = document.createElement("br");

    document.body.append(enter);

    let elemento = document.createElement("hr");
    elemento.textContent = conteudo;

    document.body.append(elemento);

}

function soma(a, b) { return a + b; }


function subtrair(a, b) { return a - b }


function multiplicacao(a, b) { return a * b }


function divisao(a, b) { return a / b }



console.log(soma(1, 10));

console.log(subtrair(10, 1));

console.log(multiplicacao(10, 10));

console.log(divisao(100, 10));


console.group('jQuery - Funcionando no Console');

$('#teste').on("click", function (){

    console.warn("Oi... esse botão funciona");
})

console.groupEnd();

console.group('Evento de Submit');


// ?????


console.groupEnd();
