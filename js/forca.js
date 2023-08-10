function buscaSimples(palavraSorteada, letraBuscada) { 
    let indice = undefined;

    for(let i = 0; i < palavraSorteada.length; i++) {
        if(palavraSorteada[i] === letraBuscada) {
            indice = i;
        }
    }
    return indice;
}

const palavraSorteada = 'javascript';
const letraBuscada = 'c';
const indiceSaida = buscaSimples(palavraSorteada, letraBuscada);

if(indiceSaida !== undefined) {
    console.log(`A letra ${letraBuscada} foi encontrada no indice ${indiceSaida}.`);
} else {
    console.log(`A letra ${letraBuscada} não foi encontrada na palavra.`);
}