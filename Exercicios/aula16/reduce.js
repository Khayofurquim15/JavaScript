/* 
    REDUCE EM ARRAYS (Reduzir a um valor)

    -- Reduz um array inteiro a um unico valor
    -- Voce tem acesso:
        - Acumulador
        - Valor Atual
        - Pocição Atual
        - Array completo
*/

const produtos =[
    { id: 1, nome: 'Notebook Dell Inspiron', preco: 4500.00, desconto: false, estoque: 11},
    { id: 2, nome: 'Smart TV LG 55', preco: 7520.00, desconto: true, estoque: 2},
    { id: 3, nome: 'Iphone 15 ProMax', preco: 11900.00, desconto: false, estoque: 6},
    { id: 4, nome: 'PlayStation 5', preco: 4690.00, desconto: false, estoque: 9},
    { id: 5, nome: 'Apple Watch', preco: 2490.00, desconto: true, estoque: 18}
];


// QUAL O FATURAMENTO, SE VENDERMOS TODO O ESTOQUE //

const totalVendas = produtos.reduce((acumulador, produto)=>{

    return acumulador + (produto.preco * produto.estoque);
}, 0);

console.log(totalVendas.toLocaleString('pt-br', {style:'currency', currency:'BRL'}));