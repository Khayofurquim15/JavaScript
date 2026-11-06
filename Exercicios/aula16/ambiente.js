// USANDO MAP, REDUCE E FILTER PARA RESOVER O PROBLEMA //

const produtos =[
    { id: 1, nome: 'Notebook Dell Inspiron', preco: 4500.00, desconto: false, estoque: 11},
    { id: 2, nome: 'Smart TV LG 55', preco: 7520.00, desconto: true, estoque: 2},
    { id: 3, nome: 'Iphone 15 ProMax', preco: 11900.00, desconto: false, estoque: 6},
    { id: 4, nome: 'PlayStation 5', preco: 4690.00, desconto: false, estoque: 9},
    { id: 5, nome: 'Apple Watch', preco: 2490.00, desconto: true, estoque: 18}
];

/* AUMENTAR O ESTOQUE +10 > APENAS NOS PRODUTOS COM DESCONTO > FATURAMENTO TOTAL DE TUDO */

const totalVendas = produtos.map( (produto) =>{ // aumenta o estoque //
    return {...produto, estoque: produto.estoque + 10}; // repete tudo e muda apenas oq eu qro // 

}).filter( (produto) => { // filtra produtos com desconto //
    return produto.desconto;

}).reduce( (acumulador, produto ) =>{ // faz o faturamento total e formata a moeda //
    return acumulador + (produto.preco * produto.estoque);
},0);

console.log('Valor total: ' + totalVendas.toLocaleString('pt-br', {style:'currency',currency:'BRL'}));


