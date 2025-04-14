let jogadores = ["Jogador #F", "Jogador #N", "Jogador #P", "Jogador #R"]
console.log(jogadores)

for (let i = 0; i < 4; i++) {

    comecarPartida(jogadores.length)
    console.log(jogadores)
}

function comecarPartida(indexJogadores) {
    
    if (indexJogadores >= 3) {
        jogadores.shift()
    } else {
        jogadores.push("Jogador #A")
    }
}