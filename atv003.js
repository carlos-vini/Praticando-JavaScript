let n1 = Number(prompt("Insira um número: "))
let porce = Number(prompt("Quantos % você quer saber do número? "))
let result

function porcentagem(num, porcentagem, valor){
    porcentagem = porcentagem / 100
    valor = num * porcentagem
    
    document.getElementById(`info`).innerHTML = `${valor}`
    return
}

porcentagem(n1, porce, result)
