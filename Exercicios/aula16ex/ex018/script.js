
let num = document.getElementById('fnum') /// puxa o valor digitado ///
let lista = document.getElementById('flista') /// puxa a lista ///
let res = document.getElementById('res') /// puxa o espaço abaixo de finalizar ///
let valores = []

function isNumero(n){ 
    if(Number(n) >= 1 && Number(n) <= 100){ /// verifica se o valor esta entre 1 e 100 ///
        return true
    }else{
        return false
    }
}

function inlista(n, l){
    if (l.indexOf(Number(n)) != -1) {
        return true
    }else{
        return false
    }
}

function adicionar(){ /// fuçao exe apos clicar no botao adicionar ///
    if (isNumero(num.value) && !inlista(num.value, valores)){ /// verifica se num é 0, nada ou um number acima de 100 ///
        valores.push(Number(num.value)) /// adiciona um valor para o array ///
        let item = document.createElement('option') /// cria um Opç para a lista ///
        item.text = `Valor ${num.value} adicionado.` /// adi visualmente o valor correspodente ///
        lista.appendChild(item) /// faz a magica acontecer ///
        res.innerHTML = ` `

    }else{ /// se o num for 0, nada ou um numero acima 100, entao msg de erro na tela :) ///
        window.alert('Valor invalido ou Já encontrado na lista!')
    }
    num.value = ' '
    num.focus() /// foca o mause na barra de digito ///
}

function finalizar(){ /// funçao que é exe apos clicar no botao finalizador ///
    if (valores.length == 0){ /// se nao tiver nenhum numero na lista entao msg de erro na tela :) ///
        window.alert('Adicione valores antes de finalizar!')
        
    }else{ /// se nao, esse bloco é executado :0 ///
        let tot = valores.length /// total de numeros adi na lista ///
        let maior = valores[0] /// maior numero da lista ///
        let menor = valores[0] /// menor numero da lista ///
        let soma = 0 
        let media = 0
        for(let pos in valores){ 
            soma += valores[pos]
            if(valores[pos] > maior)
                maior = valores[pos]
            if (valores[pos]<menor)
                menor = valores[pos]
        }
        media = soma / tot
        res.innerHTML = ` `
        res.innerHTML += `<p> Ao todo, temos ${tot} números cadastrados. </p>`
        res.innerHTML += `<p> O maior valor informado foi ${maior}.</p>`
        res.innerHTML += `<p> O menor valor informado foi ${menor}.</p>`
        res.innerHTML += ` <p> Somando todos os valores, temos ${soma}. </p> `
        res.innerHTML += `<p> A media dos valores digitados é ${media} </p>`
    }
}



