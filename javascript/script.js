//let userName = prompt("Digite o seu nome")
//function welcome() {
//alert(`Bem vindo(a, ${userName})`)}

// function welcome(){
//     let number1 = +prompt("Digite o primeiro número")
//     let number2 = +prompt("Digite o segundo número")
//     alert(typeof number1)
//     alert(`A soma de ${number1} com ${number2} é igual a ${number1 + number2}` 
// }

//% é o restante do que sobra de uma divisão
function delta() {
    let number1 = +prompt("Digite o primeiro número")
    // > maior
    // < menor
    // == igual
    // === idêntico
    // ! não
    if (number1 % 2 == 0) {
        alert("O número digitado é par!")
    } else {
        alert("O número digitado é ímpar!")
    }
}

function welcome() {
    let number1 = +prompt("Digite o primeiro número")
    if (number1 < 0) {
        alert("o número digitado é negativo")
    } else if (number1 == 0)
        alert("O número digitado é nulo")
    else {
        alert("O número digitado é positivo")
    }
}

function beta() {
    let number1 = prompt("Digite o primeiro número")
    let number2 = prompt("Digite o segundo número")
    if (number1 > 10 && number2 > 10) {
        alert("Os números digitados são maiores que 10")
    } else if (number1 > 10 || number2 > 10) {
        alert("O número 1 ou o número 2 é maior que 10")
    } else {
        alert("Nenhum dos números digitados são maiores que 10")
    }
}

// + soma
// - subtração
// * multiplicação
// / divisão
// ** exponenciação
// % resto por

function nota() {
    let number1 = +prompt("Digite a nota do 1° bimestre")
    let number2 = +prompt("Digite a nota do 2° bimestre")
    let number3 = +prompt("Digite a nota do 3° bimestre")
    let number4 = +prompt("Digite a nota do 4° bimestre")
    let média = Math.ceil((number1 + number2 + number3 + number4) / 4)
    if (média >= 60) {
        alert(`Aprovado com a média ${media}`)
    } else (media < 60); {
        alert(`Aluno não aprovado com a ${media}`)

    }
}

let students = ["Maria Eduarda", "Maynara", "João Lucas", "João Henrique", "João Vitor"]
console.log(students[0])

function max() {
    let index = +prompt("Digite o index que deseja acessar")
    alert(students[index]);
}

function acessArray() {
    let idx = +prompt(`Digite o index do elemento que deseja acessar (de 0 a ${students.length - 1})`)
    alert(`O elemento do index desejado é "${students[idx]}". O primeiro elemento desse array é "${students[0]}". Esse array tem ${students.length} itens. O último elemento desse array é ${students[students.length - 1]}`);
}

function helloWorld10() {
    for (let contador = 0; contador < 10; contador = contador + 1) {
        console.log("Hello, World" + contador);
    }
}

function tabuada() {
    let number = +prompt("Digite um número para a tabuada")
    for (let contador = 1; contador <= 10; contador = contador + 1) {
        console.log(`${number} x ${contador} = ${number * contador}`)

    }
}

function showStudents() {
    let students = ["Maria", "Maynara", "João"]
    for (let index = 0; index < students.length; index++) {
        const element = students[index];
        console.log(`O estudante ${element} está no index ${index}`);
    }
}

let mariaEduarda = {
    name: "Maria Eduarda",
    idade: 24,
    maiorDeIdade: true,
    hobbies: ["ler", "assistir série/filmes", "comer", "viajar"]
}
console.log(mariaEduarda.hobbies[4])

let videos = [
    {
        title: "Aprendendo JS",
        duration: "4:30:00",
        link: "https://youtube.com.ber/testeJS"
    },
    {
        title: "Estudando HTML",
        duration: "5:00:00",
        link: "https://youtube.com.br/HTML"
    },
    {
        title: "Sobre CSS",
        duration: "3:30:00",
        link: "https://youtube.com.br/CSS"
    }
];
console.log('videos', videos);
console.log('videos[1]', videos[1])
console.log('videos[1], videos.title', videos[1], videos.title)

function showVideos() {
    for (let index = 0; index < videos.length; index++) {
        const element = videos[index];
        console.log(element.title);
    }
}
