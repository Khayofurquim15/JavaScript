
let num = [5, 8, 2, 9, 3]
num.push(1)
num.sort()
console.log(`O vetor tem ${num.length} posições`)
console.log(`O primeiro valor do vetor é ${num[0]}`)
let pos = num.indexOf(9)
if (pos == -1){
    console.log(`[ERROR] o valor não foi encontrado!`)
}else{
console.log(`O valor 8 está na posição ${pos}`)
}

/*
/// Apenas teste ///
let pessoa = ['khayo', 18, 2000]
pessoa.push('Masculino')

let pgt = window.prompt('')
if (pgt == 'qual o nome'){
    console.log(` o nome é ${pessoa[0]}`)
///
}else if (pgt == 'qual o sexo'){
     console.log(` o sexo é ${pessoa[3]}`)
///
}else  if (pgt == 'tem quantos anos'){
     console.log(` possui ${pessoa[0]} anos`)
///
}else if (pgt == 'qual o salario'){
     console.log(` o salario é de ${pessoa[0]}R$`)
///
}else{
    console.log('[ERROR] Pergunta invalida!')
}

*/