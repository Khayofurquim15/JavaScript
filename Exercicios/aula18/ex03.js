
const brasil = {
    populacao: '212.6 milhões',
    rendaPerCapita: 'US$ 6.796,84',
    expectativaVida: 75,
    pib:'US$ 1.445 trilhões',
    idioma:'portugues',
    capital:'brasilia',
    moeda:'real',
    religiao: { // ANINHAMENTO //
        catolica:'64.6%',
        protestante:'22.2$',
        espirita:'2.0%',
        outras:'11.2%'
    },
};

const {capital, religiao:{catolica}} = brasil; // PEGA O VALOR ESPECIFICO DO ANINHAMENTO //

console.log(catolica);

