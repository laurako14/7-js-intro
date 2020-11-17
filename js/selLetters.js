function selectLetters(text, step) {
    // input validation
    if (typeof text !== 'string') {
        return 'Netinkamas tipas';
    }

    if (text === '') {
        return 'Error: tekstas negali buti tuscias.';
    }

    if (typeof step !== 'number') {
        return 'Error: antroji reiksme ne skaiciaus tipo.';
    }

    if(step % 1 !== 0) {
        return 'Error: zingsnis turi buti sveikasis skaicius.';
    }

    // if (step !== Math.round(step)) {
        // return 'Error zingsnis turi buti sveikasis skaicius.';
    // }

    const size = text.length;

    if (step > size) {
        return 'Error: zingsnis yra per didelis lyginant su teksto ilgiu.';
    }

    if (step === 0) {
        return 'Error: zingsnis negali buti nulinis.';
    }

    // logic
    let rez = '';
    if (step > 0) {
    for (let i = step - 1; i < size; i += step) {
        rez += text[i];
        }
    } else {
        for (let i = size + step; i >= 0; i += step) {
            rez += text[i];
        }
    }
    // post logic validation


    // return
    return rez;
}

console.log(selectLetters(1561, 2));
console.log(selectLetters('abc', 4));
console.log(selectLetters('abc', 0));

console.log(selectLetters('abc', 3));
console.log(selectLetters('abcdefg', 2));
console.log(selectLetters('abcdefghijkl', 3));

console.log(selectLetters('abc', 1.5));
console.log(selectLetters('abc', -2));

console.log(selectLetters('', 3));
console.log(selectLetters('', [], 2, ['penki', 'sesiolika']));