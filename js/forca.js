const palavras = ["angular", "java", "html", "css", "script"];

const palavraSecreta =
  palavras[Math.floor(Math.random() * palavras.length)];

  console.log (palavraSecreta);

function buscaLetraNaPalavraSecreta(palavraSecreta, letraBuscada) { 
    let indice = undefined;

    for(let i = 0; i < palavraSecreta.length; i++) {
        if(palavraSecreta[i] === letraBuscada) {
            indice = i;
        }
    }
    return indice;
}

function exibePalavra(palavraSecreta){
    let auxiliar = '_'*(palavraSecreta.length);
    console.log(auxiliar);
    output = auxiliar.split('');
    return output;
}

function verificaLetraCertaOuErrada(indiceSaida){
    let output = exibePalavra(palavraSecreta);
    if(indiceSaida !== undefined) {
        output[indiceSaida] = palavraSecreta[indiceSaida];
        // console.log(`A letra ${letraBuscada} foi encontrada no indice ${indiceSaida}.`);
    } else {
        output[indiceSaida] = 'X';
        //return console.log(`A letra ${letraBuscada} não foi encontrada na palavra.`);
    }
    console.log(output)
    return output;
}


let palavraSorteada = 'script';
palavraSecreta = palavraSorteada.split('');
const letraBuscada = 'c';
const indiceSaida = buscaLetraNaPalavraSecreta(palavraSecreta, letraBuscada);
const saida = verificaLetraCertaOuErrada(indiceSaida);
