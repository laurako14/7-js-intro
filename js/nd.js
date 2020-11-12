const amzius = 35;
console.log(amzius);

const pajamos = 150;
console.log(pajamos);

const santaupos = 500;
console.log(santaupos);

const name = 'Adam';
console.log(name);

const city = 'Paris';
console.log(city);

const lektuvas = 'Boeing 747';
console.log(lektuvas);

const marks = [10 , 5, 7, 8, 9];
console.log(marks);

const lottery = [13, 7, 9, 21];
console.log(lottery);

const cities = ['Vilnius', 'Kaunas', 'Siauliai', 'Panevezys', 'Klaipeda'];
console.log(cities);

const names = ['Petras', 'Jonas', 'Ugnius', 'Adomas'];
console.log(names);

const sum = amzius + pajamos + santaupos;
console.log(sum);

const zodziai = name + ' ' + city + ' ' + lektuvas;
console.log(zodziai);

const logika = marks[0] - marks[1] + marks[2] - marks[3] + marks[4];
console.log(logika);

let marksMath = 0;
marksMath = marksMath + marks[0];
marksMath = marksMath - marks[1];
marksMath = marksMath + marks[2];
marksMath = marksMath - marks[3];
marksMath = marksMath + marks[4];
console.log(marksMath);

const loterija = lottery[0] - lottery[1] + lottery[2] - lottery[3];
console.log(loterija);

let loterija2 = 0;
loterija2 = loterija2 + lottery[0];
loterija2 = loterija2 - lottery[1];
loterija2 = loterija2 + lottery[2];
loterija2 = loterija2 - lottery[3];
console.log(loterija2);

let allCities = '';
allCities = allCities + cities[0];
allCities = allCities + ', ' + cities[1];
allCities = allCities + ', ' + cities[2];
allCities = allCities + ', ' + cities[3];
allCities = allCities + ', ' + cities[4];

console.log(allCities);

console.log(cities.join(', '));
