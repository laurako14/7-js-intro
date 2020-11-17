const pirmas1 = 2;
const antras1 = 2;
const suma1 = pirmas1 + antras1;
console.log(`${pirmas1} + ${antras1} = ${suma1}`);

const pirmas2 = 4;
const antras2 = 7;
const suma2 = pirmas2 + antras2;
console.log(`${pirmas2} + ${antras2} = ${suma2}`);

function sumavimas (a, b) {
    const suma = a + b;
    console.log(`${a} + ${b} = ${suma}`);
}

sumavimas(5, 12);
sumavimas(-45, 115);

function pazymiuVidurkis(list) {
    let suma = 0;
    const kiekis = list.length;

    for (let i = 0; i < list.length; i++) {
        suma = suma + list[i];
    }
    const vidurkis = suma / kiekis;

    if (kiekis === 0) {
        console.log('Neturi pazymiu...');
    } else {
        console.log(`Vidurkis: ${vidurkis}.`)
    }
}

pazymiuVidurkis([5, 8, 9]);
pazymiuVidurkis([5, 8, 9, 7]);
pazymiuVidurkis([]);
pazymiuVidurkis([10, 10, 10, 10, 10, 10]);

function square (a) {
    const kvadratu = a * a;
    return kvadratu;
}

square(4);
square(15);
square(-4);
console.log(square(-5));