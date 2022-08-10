function addParagrafo(conteudo) {

    let enter = document.createElement("br");

    document.body.append(enter);

    let elemento = document.createElement("hr");
    elemento.textContent = conteudo;

    document.body.append(elemento);

}



let numeroA = prompt("Qual é o primeiro Número?")
let numeroB = prompt("Qual é o Segundo Número?")
let operacao = prompt("Qual a operação matemática? Digite +, /, - ou * ?")

function soma(numeroA, numeroB) {
    
    console.log(numeroA + numeroB)
}


function subtrair(numeroA, numeroB) {
    
    console.log(numeroA - numeroB)
}


function multiplicacao(numeroA, numeroB) {

    console.log(numeroA * numeroB)
}

function divisao(numeroA, numeroB) {

    console.log(numeroA / numeroB)
}


switch (operacao) {
    case "+":
        soma(numeroA, numeroB)
        console.log(soma);
        break;

    case "-":
        subtrair(numeroA, numeroB)
        break;

    case "/":
        divisao(numeroA, numeroB)

        break;

    case "*":
        multiplicacao(numeroA, numeroB)

        break;

    default:
        break;
}


console.group('jQuery - Funcionando no Console');

$('#teste').on("click", function () {

    console.warn("Oi... esse botão funciona");
})

console.groupEnd();

console.group('Evento de Submit');

$("form").on("submit", (event) => {
    event.preventDefault()
    dados()
})

function dados() {


    let name = $("#name").val()
    let age = $("#age").val()

    console.log("Seu nome é: ", name, "e você tem ", age, " anos");

}


console.groupEnd();
