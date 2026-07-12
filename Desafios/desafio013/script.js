
const res = document.getElementById('res');

function entrar(){
    const nome = window.prompt('Coloque o nome do aluno.');
    const nota1 = Number(window.prompt('Digite a primeira nota.'));
    const nota2 = Number(window.prompt('Agora, digite a segunda nota.'));
    const media = (nota1 + nota2) / 2;
    
    if (media > 6){
        res.innerHTML = `<h3>Analisando situação de ${nome}.</h3>
        <p>Com as notas ${nota1} e ${nota2}, a media é ${media}.</p>
        <p>Com a media acima de 6.0, o aluno está <strong>APROVADO</strong>. </p>
        `

    }else if(media > 3 && media <= 6){
        res.innerHTML = `<h3>Analisando situação de ${nome}.</h3>
        <p>Com as notas ${nota1} e ${nota2}, a media é ${media}.</p>
        <p>Com a media acima de 6.0, o aluno está <strong>RECUPERAÇÃO</strong>. </p>
        `

    }else if(media <= 3){
        res.innerHTML = `<h3>Analisando situação de ${nome}.</h3>
        <p>Com as notas ${nota1} e ${nota2}, a media é ${media}.</p>
        <p>Com a media acima de 6.0, o aluno está <strong>REPROVADO</strong>! </p>
        `

    }else{
        alert('ERROR Digite a nota do aluno corretamente!');
    }
};
