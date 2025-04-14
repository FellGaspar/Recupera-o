let contatos = ['Pyetro', 'Felipe: +55 44 99934-3621', 'Nicolas']
let contato = encontrarContato(contatos);

function encontrarContato(contatos) {
    
    return contatos.find(contato => contato.length > 10);
}

console.log(contato);