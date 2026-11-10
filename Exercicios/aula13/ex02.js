// chamando uma API pra treinar //

const URL = 'https://dummyjson.com/test'; // API 

async function chamarApi(){

    const resp = await fetch(URL); // faz a chamada da API

    if(resp.status === 200){ // o status 200 significa que deu bom :)

        const obj = await resp.json(); // converte com JSON
        console.log(obj)

    }else{
        console.log('ERROR...');
    }
             
}

chamarApi();

