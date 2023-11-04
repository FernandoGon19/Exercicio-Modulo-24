function Artista(nome) {
    this.nome = nome
    this.Pensa = function() {
        console.log('Pensando...')
    }
}

function Idade(idade) {
    this.idade = idade
    this.DizIdade = function() {
        console.log('A idade do artista é ' + this.idade )
    }
}

function Papel(RecebeDesenho,cor,nome, idade) {
    this.RecebeDesenho = RecebeDesenho
    this.cor = cor

    this.Desenhando = function() {
        console.log('Desenhando ' + this.RecebeDesenho + ' no papel')
    }
    this.Pintando = function() {
        console.log('Pintando o desenho com a cor ' + this.cor)
    }

    Artista.call(this, nome)
    Idade.call(this, idade)
}

const papel1 = new Papel('Gato', 'Preto')
const papel2 = new Papel('Prédio', 'Cinza')
const papel3 = new Papel('Cachorro', 'Azul')

console.log(papel1,papel2,papel3)