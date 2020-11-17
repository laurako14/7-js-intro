function bigNum(list) {
// input validation
    if (typeof list !== 'object') {
        return 'Netinkamas tipas';
    }

    const size = list.length;

    if (size === 0) {
        return 'Sarasas tuscias.';
    }

// logic
    let biggestNumber = -Infinity;
    for (let i = 0; i < size; i++) {
        const num = list[i];

        // saraso elemento validacija
        if (typeof num !== 'number') {
            continue;
        }

        // logika

        if (num > biggestNumber) {
            biggestNumber = num;
        }
}

// post logic validation
    if (biggestNumber === -Infinity) {
        return 'Sarase nerastas nei vienas normalus skaicius.';
    }

// return
return biggestNumber;
}

console.log(bigNum('pomidoras'));
console.log(bigNum(585));
console.log(bigNum(true));
console.log(bigNum(false));
console.log(bigNum([]));

console.log(bigNum ([1]));
console.log(bigNum([1, 2, 3]));
console.log(bigNum([-5, 78, 14, 0, 18]));
console.log(bigNum([69, 69, 69, 69, 66]));
console.log(bigNum([-1, -2, -3, -4, -5, -6, -7, -8]));
console.log(bigNum([1, 2, 3, 2, 1, 'labas']));
console.log(bigNum(['labas', 1, 2, 3, 2, 1]));
console.log(bigNum([-1, -2, -3, -4, -5, NaN, -7, -8]));
console.log(bigNum([-Infinity, 'asd', [], [5, -9], undefined]));
