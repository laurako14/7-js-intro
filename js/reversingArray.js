const wordlist = ['labas', 'rytas', 'Lietuva'];

for (let w=0; w<wordlist.length; w++) {
    const word = wordlist[w];
    let reverse = '';
    for (let r=0; r<word.length; r++) {
        const letter = word[r];
        reverse = letter + reverse;
    }
    console.log(reverse);
}