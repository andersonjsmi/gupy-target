let string = prompt("digite a string");
let stringInvertida = "";

for (let i = string.length - 1; i >= 0; i--) {
    stringInvertida += string[i];
}

console.log(stringInvertida);
