/*1 - Crie uma função que receba um número como parâmetro e determine se ele é primo ou não.
Um número primo é aquele que é divisível apenas por 1 e por ele mesmo. Liste todos os números primos entre 1 e 1000.*/

function listarNumerosPrimos() {

    let numeros_primos = []

    for (let i = 1; i <= 1000; i++) {
        var flag = 0;
        for (let j = 2; j < i; j++) {
            if (i % j == 0) {
                flag = 1;
                break;
            }
        }
        if (flag == 0 && i!=1) {
            numeros_primos.push(i)
        }
    }
    return numeros_primos
}

console.log(listarNumerosPrimos())

/*2 - Crie uma função que receba uma senha como parâmetro e verifique se ela atende 
aos seguintes critérios: ter pelo menos 8 caracteres, conter pelo menos uma letra maiúscula, 
uma letra minúscula e um número. Sua função deve receber uma senha e dizer para o usuário se ela é valida.*/

function validarSenha(senha) {

    const regex = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/

    if (regex.test(senha)) {
        console.log("Senha válida")
    } else {
        console.log("Senha inválida")
    }

}

validarSenha('Senha123456')

/*3 - Crie uma função que receba um número como parâmetro e retorne o fatorial desse número. 
O fatorial de um número é o produto de todos os números inteiros positivos menores ou iguais a ele. 
Por exemplo, o fatorial de 5 é 5 * 4 * 3 * 2 * 1 = 120. Sua função deve calcular os fatoriais de 1 a 10.*/

function fatorial(numero) {
    if(numero === 1) {
        return 1
    } else {
        return fatorial(numero - 1) * numero
    }
}

console.log(fatorial(10))

/*4 - Crie uma função que receba um número como parâmetro e determine se ele é um quadrado perfeito. 
Um quadrado perfeito é um número inteiro cuja raiz quadrada também é um número inteiro. 
Por exemplo, 25 é um quadrado perfeito porque a sua raiz quadrada é 5, um número inteiro.*/

function ehQuadradoPerfeito(numero) {

    let raiz_quadrada = numero ** 0.5

    if(Number.isInteger(numero) && Number.isInteger(raiz_quadrada)) {
        return true
    } else {
        return false
    }

}

console.log(ehQuadradoPerfeito(25))