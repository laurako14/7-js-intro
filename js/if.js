const accountBalance = 100;
const transfer = 200;

if (transfer >= accountBalance) {
    console.log('Banko zinute: saskaitoje truksta pinigu.')
}

if (transfer <= accountBalance) {
    console.log('Banko zinute: pavedimas padarytas.')
}

if (accountBalance >= transfer) {
    console.log('Banko zinute: pavedimas padarytas.');
} else {
    console.log('Banko zinute: saskaitoje truksta pinigu.');
}

const akys = 'raudonos';

if (akys == 'melynos') {
    console.log('Grazios sirdies zmogus');
} else if (akys == 'zalios') {
    console.log('Melagiai');
} else if (akys == 'rudos') {
    console.log('mmm...');
} else {
    console.log('Taip nebuna');
}

const eyes = 'raudonos';

if (eyes == 'zalios') {
    console.log('Nu ir ka?')
} else {
    if (eyes == 'melynos') {
        console.log('Melynakis');
    } else {
        if (eyes == 'raudonos') {
            console.log('Apsirukes?');
        } else {
            console.log('Ar tu turi akis?')
        }
    }
}

