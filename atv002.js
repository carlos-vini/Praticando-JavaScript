let horaInicio = Number(prompt("Insira a hora que foi iniciado o jogo: "))
let minInicio = Number(prompt("Insira o minuto que foi iniciado o jogo: "))
let horaFim = Number(prompt("Insira a hora que foi finalizado o jogo: "))
let minFim = Number(prompt("Insira o minuto que foi finalizado o jogo: "))

function calculaHora(startHour, startMinute, endHour, endMinute, resultHour, resultMin){
    if(endHour >= startHour && endMinute >= startMinute){
        resultHour = endHour - startHour
        resultMin = endMinute - startMinute

        document.getElementById(`info`).innerHTML = `O jogo durou ${resultHour} horas e ${resultMin} minutos`
        return
    }

    else if(endHour >= startHour && startMinute >= endMinute){
        resultHour = endHour - startHour
        resultMin = startMinute - endMinute

        document.getElementById(`info`).innerHTML = `O jogo durou ${resultHour} horas e ${resultMin} minutos`
        return
    }

    else if(startHour >= endHour && endMinute >= startMinute){
        resultHour = (startHour - endHour - 24) * -1
        resultMin = endMinute - startMinute

        document.getElementById(`info`).innerHTML = `O jogo durou ${resultHour} horas e ${resultMin} minutos`
        return
    }

    else if(startHour >= endHour && startMinute >= endMinute){
        resultHour = (startHour - endHour - 24) * -1
        resultMin = startMinute - endMinute 

        document.getElementById(`info`).innerHTML = `O jogo durou ${resultHour} horas e ${resultMin} minutos`
        return
    }
}

calculaHora(horaInicio, minInicio, horaFim, minFim)