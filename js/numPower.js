function square (a) {
    const kvadratu = a * a;
    return kvadratu;
}

square(4);
square(15);
square(-4);
console.log(square(-5));


function norimasLaipsnis (a, b) {
    const rez = Math.pow(a, b);
    return rez;
}

console.log(norimasLaipsnis(-5,3));

// return a ** b; kitas variantas
// function laipsnis(base, power) {
//     let rez = 1;

//     for (let i=0; i < power; i++) {
//         rez = rez * power;
//     }
// }


function faktorialas(n) {
    let rez = 0;

    for (let i = 0; i < n; i++) {
        rez = rez * i;
    }
    return rez;
}

const f0 = faktorialas(0);
const f1 = faktorialas(1);
const f2 = faktorialas(2);