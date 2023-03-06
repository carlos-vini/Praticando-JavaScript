let n1 = parseFloat(prompt("Insira um número: "))

function converto(num){
    num.toFixed(2)

    document.getElementById(`info`).innerHTML = `${num.toFixed(2)}`
    return
}

converto(n1)
