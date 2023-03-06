let valor = parseInt(prompt("Insira um número: "))

function parImpar(num){
    if(num % 2 == 0){
        document.getElementById(`info`).innerHTML = `Seu número é par!`
        return
    }

    else if(num % 2 != 0){
        document.getElementById(`info`).innerHTML = `Seu número é impar!`
        return
    }
}

parImpar(valor)