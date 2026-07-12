
let botao = document.getElementById('botao')
botao.addEventListener('mouseout', sair)
botao.addEventListener('mouseenter', entrou)

function entrou(){
    botao.style.transform = 'scaleX(1.09)'
    botao.style.transition = '0.5s'
}

function sair(){
    botao.style.transform = 'scaleX(1.0)'
    botao.style.transition = '0.5s'
}

function tabuada() {
    let num = document.getElementById('txtn')
    let tab = document.getElementById('selt')
    if(num.value.length == 0){
        window.alert('[ERROR] Por favor, digite um numero!')
    }else{
         let n = Number(num.value)
         let c = 1;
         tab.innerHTML = ''
        while(c <=10 ){
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            item.value =  `tab${c}`
            tab.appendChild(item)
            c++
        }

    }

}






