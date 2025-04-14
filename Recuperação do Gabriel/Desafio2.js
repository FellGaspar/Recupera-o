let lista = ["Pyetro", "Nicolas", "Felipe", "Renan", "Arthur"];
lista.unshift('Rui')

function deletar() {
    const index = lista.indexOf('Nicolas');
    if (index > -1) {
        lista.splice(index, 1)
    }
}

console.log(deletar())

console.log(lista)