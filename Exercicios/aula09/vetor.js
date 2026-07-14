
let valores = [3, 4, 9, 7, 1, 6] // array(vetor) //
/*
for (let pos = 0; pos< valores.length; pos++ ){
console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}
*/

valores.sort()// Organiza do menor para o maior //
for (let pos in valores) { 
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}