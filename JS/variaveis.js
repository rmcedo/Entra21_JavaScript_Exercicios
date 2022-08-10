
//-> String <-
let nome = prompt("Qual o seu nome?")
if (nome === "Rafael") {
    console.log("Bem-vindo Rafael");

} else {
    console.log("Você não é o Rafael Macedo, mas ainda assim, seja bem-vindo");
}
console.log("Uma variável do tipo STRING: " + nome);
console.warn(typeof (nome));

//-> Number <-
var idade = prompt("Qual a sua idade?")

if (idade >= 18) {
    console.log("Vejo que você é maior de idade");

} else {
    console.log("Olha só, temos um filhote por aqui");

}
console.log("Uma variável do tipo NUMBER: " + idade);
console.warn(typeof (idade));

//-> Boolean <-
let booleano = prompt("Você mora em Brusque?")
if (booleano === "sim") {
    console.log("Legal, eu também moro em Brusque :)");
    
} else {
    console.log("Que pena, poderiamos nos conhecer :(");
    
}
console.log("Uma variável do tipo BOOLEAN: " + booleano);
console.warn(typeof (booleano));

//-> Array <-

let listas = ["itemDoArray1", "itemDoArray2"]
console.log(listas);
console.warn(typeof (listas));

// for (let index = 0; index < listas.length; index++) {
//     const element = listas[index];
    
// }

listas.forEach(list => {

    console.log(listas);
    
});

//-> Object JSON e Function <-

objeto("Rafael", 28)
function objeto(name, age) {
    console.log("Olá, meu nome é: " + name + " e tenho " + age + " anos.");
}
console.warn(typeof (objeto));

switch (nome) {
    case "Rafael":
        console.log("Olá Rafael");
        break;

    default:
        console.log("Olá Visitante");
        break;
}

switch (idade) {
    case idade>=18:
        console.log("Você é maior de Idade");
        
        break;

    default:
        console.log("Você é menor de Idade");
        break;
}