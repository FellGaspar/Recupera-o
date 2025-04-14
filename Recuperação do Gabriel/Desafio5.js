let eventos = ["15:30 - Reunião","7:20 - Aula","19:20 - Fechamento de Notas"];

function inserirEvento(posicao, evento)
{
    eventos.splice(posicao,0, evento)
}

function removerEvento(Evento, pos) {
    pos = eventos.indexOf(Evento)
    if (pos != -1){
    eventos.splice(pos, 1)
    }
}
console.log(eventos)
removerEvento("15:30 - Reunião")

console.log(eventos)
inserirEvento(2, "16:00 Comprar Materias")

console.log(eventos)