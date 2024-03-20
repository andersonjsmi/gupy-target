let numero = parseInt(prompt("insira o numero"));
let proximo = 1;
let anterior = 0
while(proximo < numero){
    
    let sequencia = anterior + proximo;
    anterior = proximo;
    proximo = sequencia;
    console.log(sequencia);
}

if(proximo == numero){
    console.log("o numero " + numero + " pertence a sequência!");
}else{
    console.log("o numero " + numero + " não pertence a sequência!");
}
