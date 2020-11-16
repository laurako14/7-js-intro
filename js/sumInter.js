const nuo = 574;

const iki = 815;

let sum = 0;
 if (nuo < iki) {
for (let i = nuo; i <= iki; i++) {
    sum = sum + i;
}        
} else {
    for (let i = iki; i <= nuo; i++)
    sum = sum + i;
}

console.log(sum);