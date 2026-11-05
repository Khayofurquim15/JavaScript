
/*
    MAP EM ARRAYS (Mapear item por item do array)

    -- Cria um novo array com base no original
    -- Continua com a mesma quantidade de itens
    -- Voce tem acesso a:
        - Item por item do array
        - Pocição atual
        - Array completo

*/

const produtos =[
    { id: 1, nome: 'Notebook Dell Inspiron', preco: 4500.00, desconto: false, estoque: 11},
    { id: 2, nome: 'Smart TV LG 55', preco: 7520.00, desconto: true, estoque: 2},
    { id: 3, nome: 'Iphone 15 ProMax', preco: 11900.00, desconto: false, estoque: 6},
    { id: 4, nome: 'PlayStation 5', preco: 4690.00, desconto: false, estoque: 9},
    { id: 5, nome: 'Apple Watch', preco: 2490.00, desconto: true, estoque: 18}
];

const novosProdutos = produtos.map((produto)=>{

    const novoPreco = produto.desconto ? produto.preco * 0.9 : produto.preco;

    // Ternario = if / else - ? = if / else //

    return {
        id: produto.id,
        nome: produto.nome,
        preco: novoPreco.toLocaleString('pt-br', {style:'currency', currency:'BRL'}), // faz a converção para o real brasileiro //
        estoque: produto.estoque
    };
});

console.log(novosProdutos);