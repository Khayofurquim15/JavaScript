
const botao = document.getElementById('botao');
const botaoRec = document.getElementById('botaoRec');

const Pnome = document.getElementById('nome');
const PcorFav = document.getElementById('corFav');


botao.addEventListener('click', ()=>{

    const pessoa = {
        nome: String(Pnome.value),
        cor: String(PcorFav.value)
    };

    localStorage.setItem('dadosPessoa', JSON.stringify(pessoa));


});

const infoSalvo = localStorage.getItem('dadosPessoa');
const pessoaConvert = JSON.parse(infoSalvo);

botaoRec.addEventListener('click', ()=>{
    console.log(infoSalvo);
    window.alert(`Ola, ${pessoaConvert.Pnome} seja bem vindo novamente`);
});