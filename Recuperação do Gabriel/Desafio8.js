let biblioteca = ["Manual do FBI - John R. Schafer", "As 48 Leis do Poder - Robert Greene", "Pense em Python - Allen B. Downey", "Poder e Manipulação - Jacob Pétry"]

function verificarLivro(livro, pos) {
    
       pos = biblioteca.indexOf(livro)
    if (pos != -1) {
        console.log(`A posição é ${pos}`);
    }
    else{
        console.log("Livro não encontrado")
    }
}

verificarLivro("Senhor dos Aneis");

verificarLivro("Manual do FBI - John R. Schafer")