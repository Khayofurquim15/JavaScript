// PROMISE (PROMESSA) //

const URL = 'https://dummyjson.com/products/1';

async function pegarProduto() {
    const produtos = await fetch(URL);
    const produtoConv = await produtos.json()
    console.log(produtoConv);
};

pegarProduto();
