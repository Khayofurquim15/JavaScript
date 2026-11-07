const menu = document.querySelector('menu');
const bloco = document.getElementById('bloco');
const conteudo = document.querySelector('main');

window.addEventListener('keydown', (evento)=>{ // aciona um evento de acordo com a tecla presionada //

    switch (evento.key) {
        case ' ':
            ligarMenu();
            break;
        case 'a':
            mandarMsg();
            break;
        case 'e':
            const nome = window.prompt('Qual seu nome?');
            break;

        default:
            console.log('nenhuma tecla encontrada...');
            break; 
    }
});

function mandarMsg(){ // tecla que aciona uma mensagem //
    window.alert('Voce apertou a tecla A...');
};

function ligarMenu() {

    if(menu.style.display === 'flex'){ // desligar o menu

        menu.style.display = 'none';
        bloco.style.gridTemplateColumns = 'auto 1fr auto';
        conteudo.style.gridColumn = '2 / 4';

    }else{ // ligar o menu

        menu.style.display = 'flex';
        bloco.style.gridTemplateColumns = 'auto 230px 1fr auto';
        conteudo.style.gridColumn = '3 / 4';
        menu.style.gridColumn = '2 / 3'
    }
};

