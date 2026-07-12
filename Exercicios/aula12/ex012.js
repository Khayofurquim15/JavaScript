
let agora = new Date()
let hora = agora.getHours()
let mnt = agora.getMinutes()

if (hora < 12){
    console.log('Bom dia!')
}else if (hora <= 18){ 
    console.log('Boa tarde!')
}else{
    console.log('Boa noite!')
}

console.log(`Agora são exatamente ${hora} horas e ${mnt} minutos.`)

// Teste //
