// USANDO FOREACH //

const frutas = ['maça', 'banana', 'laranja'];

frutas.indexCallBack = frutas.forEach((fruta, indice) => {
    console.log(`indice ${indice}: ${fruta}`);
});

console.log('...............');

const pessoas = [
    {nome:'khayo', num:10 },
    {nome:'joao', num: 6},
    {nome:'maria', num: 1}
];

pessoas.aumentarNum = pessoas.forEach((pessoa) => {
    console.log(`pessoa: ${pessoa.nome} numero: ${pessoa.num + 2} `);
});