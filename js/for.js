const kiek = 5;

for (let i=0; i < kiek; i++) {
    console.log('Labas rytas!', i);
}

const salary = 5000;
const months = 12;
let pajamos = 0;

for (let i = 1; i <= months; i++) {
    pajamos = i * salary;
    // pajamos = pajamos + salary
    console.log(`${i}) ${pajamos} pinigu.`);
}

for (let i = 8; i >= 4; i--) {
    console.log(i);
}

console.clear();

const valanda = 3;
const maxValanda = 12;

for (let i=3; i<=maxValanda; i++) {
    console.log(i);
}

const miestai = ['Vilnius', 'Kaunas', 'Panevezys', 'Siauliai', 'Klaipeda'];

for (let i = 0; i < miestai.length; i++) {
    const miestoPavadinimas = miestai[i];
    console.log(`Aplankiau: ${miestoPavadinimas}.`);
}

const sarasas = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l']

for (let i = sarasas.length - 1; i >= 0; i--) {
    console.log(sarasas[i]);
}

console.clear();

const text = 'dedokahedronas';

console.log(text);
console.log(text.length);

for (let i = 0; i < text.length; i++) {
    console.log(text[i]);
}

for (let i = text.length - 1; i >= 0; i--) {
    console.log(text[i]);
}

const str = 'abcdef';
let rez = '';
const step = 2;

 for (i = step - 1; i <= str.length; i = i + step) {
     const raide = str[i];
     rez = rez + raide;
 }
 console.log(rez);

 