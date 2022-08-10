//-> JS Puro <-

let leitura = document.getElementById("titulo")
console.log("Lendo através do ID ", leitura);

let leitura2 = document.getElementById("cabecalho")
console.log("Lendo através do ID ", leitura2);


let leitura3 = document.getElementsByClassName("conforta2")
console.log("Lendo através do nome da classe ", leitura3);

let leitura4 = document.getElementsByTagName("div")
console.log("Lendo todas as tags div: ", leitura4);

let escrever = document.getElementById("cabecalho")

escrever.textContent = "Olá, isso foi escrito através do JS :)"

let criarParagrafo = document.createElement("p")
document.getElementById("paragrafo").append(criarParagrafo)
criarParagrafo.textContent = "Esse paragrafo foi escrito totalmente com JavaScript Puro"


//-> jQuery <-

console.group('Lendo através do jQuery');

console.log($("#titulo").text());
console.log($("#cabecalho").text());

console.log($("#titulo"));
console.log($("#cabecalho"));

console.groupEnd();

console.group('Alterando conteúdo com jQuery');

$("#cabecalho").text("Modifiquei o conteúdo novamente, mas dessa vez com o jQuery")
console.log($("#cabecalho").text);

console.groupEnd();

console.group('Criando elementos');

$('<h5>', {
    text: "Criei esse pequeno título com o jQuery",
    class: "orienta pt-5 pb-5 border text-center"
}).appendTo("#cabecalho")

console.groupEnd();

console.group('Exibir Elementos por Class');

console.log($("#maven"));


console.groupEnd();