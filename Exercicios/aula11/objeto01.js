
let amigo = { /// Objeto ///
    nome: 'Jose',
    sexo:'M', 
    peso: 85.4,
    engordar(p=0){ /// Uma fuçao dentro de uma variavel ///
        console.log('Engordou')
        this.peso += p
    }}

amigo.engordar(2) /// usa a funçao
console.log(`${amigo.nome} pesa ${amigo.peso}Kg`)