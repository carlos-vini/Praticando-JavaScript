let n1 = Number(prompt("Insira o primeiro valor: "))
let n2 = Number(prompt("Insira o segundo valor: "))

function verdadeiro(num1, num2){
    if(num1 === num2){
        document.getElementById(`info`).innerHTML = `Verdadeiro`
        return
    }
    else{
        document.getElementById(`info`).innerHTML = `Falso`
        return
    }
}

verdadeiro(n1, n2)