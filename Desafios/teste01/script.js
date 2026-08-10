
const cadas = document.getElementById('cadastrar');
const limpar = document.getElementById('limpar');
const conteudo = document.getElementById('conteudo');

cadas.addEventListener('click',() => {
    const nome = document.getElementById('nome');
   
    conteudo.innerHTML += ` <tr>
    <td>${nome.value}</td>
    </tr> `;

    nome.value = ' ';
})

limpar.addEventListener('click', ()=>{
    conteudo.innerHTML = '';
})