
// usando async e await //

function tarefa1() { 

    return new Promise(resolve => {

        setTimeout(() =>{ // simula a chamada para API \\
            console.log('tarefa 1 feita...');
            resolve();
        }, 2000);
    });
}

function tarefa2() {

    return new Promise(resolve => {
        
        setTimeout(() =>{ // simula a chamada para API \\
            console.log('tarefa 2 feita...');
            resolve();
        }, 2000);
    });
}

async function executarTarefas() {
    // await tarefa1(); executa uma tarefa
    // await tarefa2(); e so depois a outra

    await Promise.all([tarefa1(), tarefa2()]); 
    console.log("todas as tarefas prontas");
}

executarTarefas();