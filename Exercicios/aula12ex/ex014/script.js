function carregar(){
let msg = window.document.getElementById('msg') // A variavel recebe a div, puxada atraves do id //
 let img = window.document.getElementById('imagem') 
 let data = new Date()
 let hora = data.getHours() // Pega a hora atual //
 let nome = window.prompt('Olá, qual seu nome?')
 let tx = window.document.getElementById('Tnome')
 tx.innerHTML = `<strong>${nome}</strong> seja bem vindo!`
 msg.innerHTML = `Agora são ${hora} horas.`
 if (hora >= 0 && hora <= 12){
    //bom dia 
    img.src = 'fotomanha.png.jpg'
    document.body.style.background = '#e6dd68'
 }else if (hora >= 12 && hora <= 18){
    //boa tarde
    img.src = 'fototarde.png.jpg'
    document.body.style.background = '#b9846f'
 }else{
    //boa noite
    img.src = 'fotonoite.png.jpg'
    document.body.style.background = '#e4873b'
 }
}