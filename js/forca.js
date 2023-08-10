function buscaSimples(palavraSorteada, letraBuscada) { 
    let indice = undefined;

    for(let i = 0; i < palavraSorteada.length; i++) {
        if(palavraSorteada[i] === letraBuscada) {
            indice = i;
        }
    }
    return indice;
}

function verificaLetraCertaOuErrada(indiceSaida){
    if(indiceSaida !== undefined) {
        return console.log(`A letra ${letraBuscada} foi encontrada no indice ${indiceSaida}.`);
    } else {
        return console.log(`A letra ${letraBuscada} não foi encontrada na palavra.`);
    }
}

const palavraSorteada = 'javascript';
const letraBuscada = 'c';
const indiceSaida = buscaSimples(palavraSorteada, letraBuscada);
const saida = verificaLetraCertaOuErrada(indiceSaida);
