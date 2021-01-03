function nonsense(str) {
    const char = {'0':'a','1':'e','2':'i','3':'o','4':'u'};
    const str1 = str.replace(/[01234]/g, m => char[m]); 
    const str2 = str1.toLowerCase();
    const str3 = str2.replace('trex', '');
    let str4 = str3.replace('raptor', '');
    if (str[str.length-1] !== '.') {
        str4 += '.';
    }
    const str5 = str4[0].toUpperCase() + str4.substring(1); 
    return str5.replace(/ i /g, ' I ');
  }

  console.log(nonsense('d2n3S04Rs 0r1 c33L.'));
  console.log(nonsense('h1Ll3 Wtrex3raptorRLD'));
  console.log(nonsense('i think therefore i am'));
