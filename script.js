function anoNovo() {
    let num = -1;
    let i = 10
    while (i > num) {
        console.log(i)
        i--
    }
    console.log("Feliz ano novo")

}
function tabelaMultiplicacao() {
    let num = window.prompt()
    for (let i = 0; i <= 10; i++) {
        let x = i * num
        console.log(num, "X", i, "=", x)

    }
}
function somaPares() {
    let soma = 0
    let numero = 0
    let i = 0;

    while (numero <= 100) {
        i++
        if (i % 2 == 0) {
            numero++
            soma += i
            console.log(numero + ": " + i + "+" + (soma - i) + "=" + soma)
        }


    }

}
function numPrimo() {
    let num = window.prompt()
    let divisores = 0
    for (let i = 1; i <= num; i++) {
        if (num % i == 0) {
            divisores++
        }
    }
    if (divisores == 2) {
        console.log(num + " é um numero é primo")
    } else {
        console.log(num + " não é  um numero primo")
    }

}


function fibonacci() {
    let num = window.prompt()
    let anterior = 0
    let i = 0
    let resultado = 0
    while (i < num) {        
        resultado  = resultado + anterior
        let atual = anterior
        anterior = resultado - anterior     
        console.log(`${i}: ${atual} + ${anterior} = ${resultado}`)
        i++
        if(resultado == 0){
            resultado = 1;
        }
    }
}