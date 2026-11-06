
/*
    MAP EM ARRAYS (Mapear item por item do array)

    -- Cria um novo array com base no original
    -- Continua com a mesma quantidade de itens
    -- Voce tem acesso a:
        - Item por item do array
        - Pocição atual
        - Array completo

    REDUCE EM ARRAYS (Reduzir a um valor)

    -- Reduz um array inteiro a um unico valor 
    -- Voce tem acesso:
        - Acumulador
        - Valor Atual
        - Pocição Atual
        - Array completo

    FILTER EM ARRAYS (filtrar o array)

    -- Cria um novo array filtrando os valores desejados
    -- Possui o acesso a:
        - Item por Item do array
        - Posição atual do item
        - Array completo
*/

const produtos =[
    { id: 1, nome: 'Notebook Dell Inspiron', preco: 4500.00, desconto: false, estoque: 11},
    { id: 2, nome: 'Smart TV LG 55', preco: 7520.00, desconto: true, estoque: 2},
    { id: 3, nome: 'Iphone 15 ProMax', preco: 11900.00, desconto: false, estoque: 6},
    { id: 4, nome: 'PlayStation 5', preco: 4690.00, desconto: false, estoque: 9},
    { id: 5, nome: 'Apple Watch', preco: 2490.00, desconto: true, estoque: 18}
];

// CRIAR UM NOVO ARRY FORMATANDO A MOEDA E COM DESCONTO APLICADO //

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

// QUAL SERA O FATURAMENTO, SE VENDERMOS TODO O ESTOQUE //

const totalVendas = produtos.reduce((acumulador, produto)=>{

    return acumulador + (produto.preco * produto.estoque);
}, 0);
console.log('O total é: ' + totalVendas.toLocaleString('pt-br', {style:'currency', currency:'BRL'}));

// FILTRAR SOMENTE OS PRODUTOS EM PROMOÇÃO //

const promocao = produtos.filter( (produto) => {
    return produto.desconto;
});
console.log(promocao);
