
function verificar(){ // Função que é declarada apos apertar no botão verificar //
    let data = new Date() // Pega a data atual //
    let ano = data.getFullYear() // pega a data do ano //
    let fano = document.getElementById('txtano') //  a var vai receber o number da caixa //
    let res = document.getElementById('res') // a var recebe a div puxada pelo id //
    if (fano.value.length == 0 || fano.value > ano){
        window.alert('[ERRO] Verifique os dados e tente novamente!') // msg de erro se não preencher os campos ou colocar uma data q não existe //
    }else{
       let fsex = document.getElementsByName('radsex')
       let idade = ano - Number(fano.value)
       let genero = ''
       let img = document.createElement('img') 
       img.setAttribute('id', 'foto')
       if (fsex[0].checked){
        genero = 'Homem'
        if (idade >= 0 && idade < 10){  // Masculino // 0 á 10 anos //
            img.setAttribute('src', 'bebe.jpg') 
        }else if (idade < 21) {  // 10 á 21 anos //
            img.setAttribute('src', 'criançah.jpg')
        }else if (idade  < 50){  // 21 á 50 //
            img.setAttribute('src', 'homenadulto.jpg')
        }else {  // se não, é idoso //
            img.setAttribute('src', 'homemvelho.jpg') 
        }
       }else if(fsex[1].checked){
        genero = 'Mulher'
         if (idade >= 0 && idade < 10){  // Feminino //
            img.setAttribute('src', 'bebemenina.jpg')
        }else if (idade < 21) {
            img.setAttribute('src', 'criançam.jpg') 
        }else if (idade  < 50){
            img.setAttribute('src', 'mulheradulta.jpg')
        }else {
            img.setAttribute('src', 'mulhervelha.jpg') // pega a img baixada pelo js // 
        }
       }
       res.style.textAlign = 'center' // coloca a img no centro //
       res.innerHTML = `Detectamos: ${genero} com ${idade} anos!` 
       res.appendChild(img) // coloca a img correspondente // 
    }
}








