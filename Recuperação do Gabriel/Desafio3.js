let pecas = ['Teclado', 'Monitor', 'Mouse', 'CPU', 'Placa de video'];

estoque()

function estoque() {
    
    pecas.unshift('placa mãe')
    pecas.pop()
    console.log(pecas)
}