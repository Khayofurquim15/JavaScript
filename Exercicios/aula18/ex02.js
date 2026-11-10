// USANDO DESTRUCTURING //

const usuario = {
    nome: 'khayo',
    idade: 15,
    hobby:'desenhar',
    profissao: 'dev'
};


// CASO EU JA TENHA UMA VARIAVEL DEFINIDA DE MESMO NOME //

const {nome: nomeUsu, idade, hobby, profissao: profUsu} = usuario;
console.log(hobby);

console.log(`O ${nomeUsu} é um jovem de ${idade} anos que busca ser um ${profUsu}.`);