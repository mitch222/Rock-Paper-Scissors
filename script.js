let playerScore = 0;
let machineScore = 0;

document.addEventListener('DOMContentLoaded', function() {
    let btnPiedra = document.getElementById("piedra");
    let btnPapel = document.getElementById("papel");
    let btnTijeras = document.getElementById("tijeras");

    btnPiedra.addEventListener("click", () => getHumanChoice("piedra"));
    btnPapel.addEventListener("click", () => getHumanChoice("papel"));
    btnTijeras.addEventListener("click", () => getHumanChoice("tijeras"));
})

reglas = {
    "piedra" : "tijeras",
    "tijeras" : "papel",
    "papel" : "piedra"
}

function getComputerChoice(){
    let choices = ['piedra', 'papel', 'tijera'];
    return choices[Math.floor(Math.random() * 3)]
}

function getHumanChoice(input){
    machineChoice = getComputerChoice()

    if(input === machineChoice){
        result = "Empate"
    }
    else if(reglas[input] === machineChoice){
       playerScore++
       result = "Ganaste"
    }
    else{
        machineScore++
        result = "Perdiste"
    }

    document.getElementById('resultado').innerHTML = `
                Elegiste ${input}. La máquina eligió ${machineChoice}. <br>
                ${result}
            `;

            document.getElementById('puntuacionJugador').textContent = playerScore;
            document.getElementById('puntuacionMaquina').textContent = machineScore;

    restart(playerScore, machineScore)
}

function restart(humanScore, computerScore) {
    if(humanScore >= 5 || computerScore >= 5){
        playerScore = 0;
        machineScore = 0;
        document.getElementById('puntuacionJugador').textContent = playerScore;
        document.getElementById('puntuacionMaquina').textContent = machineScore;
    }
  }