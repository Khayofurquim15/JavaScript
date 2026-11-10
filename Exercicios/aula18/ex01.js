// USANDO DESTRUCTURING //

const usuario = {
    nome: 'khayo',
    idade: 15,
    hobby:'desenhar',
    profissao: 'dev'
};

// METODO CONVENCIONAL //
/*
const nome = usuario.nome;
const idade = usuario.idade;
const hobby = usuario.hobby;
const profissao = usuario.profissao;

console.log(hobby);
*/

// METODO DESTRUCTURING (ES6) //

const {nome, idade, hobby, profissao} = usuario;
console.log(hobby);

console.log(`O ${nome} é um jovem de ${idade} anos que busca ser um ${profissao}.`);