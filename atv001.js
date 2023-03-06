let valor = Number(prompt("Insira o valor em segundos para ser convertido: "))

function convertorSec(sec, min, hour){
    hour = Math.floor(sec / 3600)
    sec = sec % 3600
    min = Math.floor(sec / 60)
    sec = Math.floor(sec % 60)


    document.getElementById(`info`).innerHTML = `${hour} horas, ${min} minutos e ${sec} segundos`
    return
}

convertorSec(valor)