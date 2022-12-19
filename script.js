'use strict';


let hasDriversLicense = false;
const passTest = true;


if (passTest) hasDriversLicense = true
if (hasDriversLicense) console.log('I can drive');

const interface = 'Audio';
const private = 534;




//  functions 

function logger() {
    console.log('My name is Nurudeen');
}
//  Calling / Runnig / Involking function
logger()


function fruitProcessor(apple, orange) {
    console.log(apple, orange);
    const juice = `juice with ${apple} apple and ${orange} orange`;
    return juice;
}

const appleJuice = fruitProcessor(5, 4);
console.log(appleJuice);



// function decleration



function calcAge1(birthYear) {
    // can be access before initialization
    return 2037 - birthYear;
}
const age1 = calcAge1(1991);
console.log(age1);



// function expression
const calcAge2 = function (birthYear) {
    // can not be access before initialization
    return 2037 - birthYear;
}
const age2 = calcAge2(1991);
console.log(age2);




// arrow function
const calcAge3 = birthYear => 2037 - birthYear;
const age3 = calcAge3(1991);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2037 - birthYear;
    const retirement = 65 - age;
    return `${firstName} retires in ${retirement} years`
}
console.log(yearsUntilRetirement(1991, 'Bayo'));


function cutFruitPieces(fruit) {
    return fruit * 4;
}
function fruitProcessor(apple, orange) {
    const applePieces = cutFruitPieces(apple);
    const orangePieces = cutFruitPieces(orange)
    const juice = `juice with ${applePieces} apple and ${orangePieces} orange`;
    return juice;
}

const appleJuice = fruitProcessor(5, 4);
console.log(appleJuice);


const calcAverage = (avgDolphins, avgKoalas) => {
    const dolhins = (44 + 23 * 71)
    const koalas = 85 * 54 / 41;
    if (dolhins >= 2 * koalas) {
        console.log(`team one win the game with ${avgDolphins} `);

    }
}
calcAverage(30, 13);

const calcAverage = (a, b, c) => (a + b + c) / 3;
console.log(calcAverage(10, 20, 30));

let scoreDolhins = calcAverage(44, 23, 71);
let scoreKoalas = calcAverage(65, 54, 49);

console.log(scoreDolhins, scoreDolhins);

const checkWinner = function (avgDolphins, avgKoalas) {
    if (avgDolphins >= 2 * avgKoalas) {
        console.log(`Dolhins win the trophy ${avgDolphins} vs. ${avgKoalas}`);
    } else if (avgKoalas >= 2 * avgDolphins) {
        console.log(`Koalas win ${avgKoalas} vs. ${avgDolphins}`);
    } else {
        console.log('No team win th throphy');
    }
}

checkWinner(scoreDolhins, scoreKoalas);

// test 2
checkWinner(576, 111)


scoreDolhins = calcAverage(25, 54, 41);
scoreKoalas = calcAverage(23, 34, 27);
checkWinner(scoreDolhins, scoreKoalas);
checkWinner(scoreDolhins, scoreKoalas)

const friend1 = 'Nuru';
const friend2 = 'Bayo';
const friend3 = 'Taye';


const friends = ["Mustapha", "Nurudeen", 'Ade', 2000, 'Shola'];

console.log(friends[2]);
console.log(friends[friends.length - 1]);

friends[2] = "Ayib";
console.log(friends);

const firstName = 'Bayo';
const ade = [firstName, 'Nuru', 2022 - 1991, friends[0]];

console.log(ade);

const calcAge = function (birthYear) {
    return 2037 - birthYear;
}
// const age2 = calcAge(1991);
// console.log(age2);

const year = [1333, 1999, 2000, 1996, 1990];


const age = calcAge(year[0]);

console.log(age);

const friends = ["Mustapha", "Nurudeen", 'Ade', 2000];

const newLength = friends.push('Bayo');


// add new element
friends.unshift('Ade');

console.log(friends);
console.log(newLength);


// Remove element


// first element
friends.shift();

// last element
friends.pop()
const popped = friends.pop()
console.log(friends);
console.log(popped);

console.log(friends.indexOf('Ade'));
console.log(friends.indexOf('Adebayour'));

// add new element
friends.push(23);
console.log(friends.includes('Ade'));
console.log(friends.includes('Adebayour'));

console.log(friends);

if (friends.includes('Ade')) {
    console.log('You have friend called Ade');
} else {
    console.log('You dont have friend called that name');
}

const calcTip = function (bill) {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}

const bills = [125, 555, 44];

const tip = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];

// const results = calcTip(200);

const totals = [bills[0] + tip[0], bills[1] + tip[1], bills[2] + tip[2],];

console.log(bills, tip, totals);

const adeArray = [
    'Nuru',
    'Bayo',
    2037 - 1991,
    'developer',
    ['musa', 'luk', 'mari']
];

const ades = {
    firstName: 'Nuru',
    lastName: 'Bayo',
    age: 2037 - 1991,
    job: 'Developer',
    friends: ['musa', 'luk', 'mari']
};


console.log(ades);
console.log(ades.firstName);
console.log(ades['firstName']);

const nameKey = 'Name';

console.log(ades['first' + nameKey]);
console.log(ades['last' + nameKey]);


const inputName = prompt('What did you what to know ?');

console.log(ades[inputName]);

if (ades[inputName]) {
    console.log(`he ${ades[inputName]}`);
} else {
    console.log('Not valid details');
}


ades.location = 'Nigeria';

ades['twitter'] = ['Proficientng'];
// console.log(ades);

//  challenges

console.log(`${ades.firstName} has 
${ades.friends.length} and his best friend 
is called ${ades.friends[0]}`);

const ades = {
    firstName: 'Nuru',
    lastName: 'Bayo',
    birthYear: 1991,
    job: 'Developer',
    friends: ['musa', 'luk', 'mari'],
    hasDriversLices: true,

    // calcAge: function () {
    //     return 2037 - this.birthYear
    // }
    calcAge: function () {
        this.age = 2037 - this.birthYear;
        return this.age;
    },

    getSummary: function () {
        return `${ades.firstName} is a ${ades.calcAge()}-years old ${ades.job}, and he has ${ades.hasDriversLices ? 'a' : 'no'} driver license`;
    }
};
console.log(ades.calcAge());
// console.log(ades['calcAge'](1991));
console.log(ades.getSummary());

const ade = {
    fullName: 'Mustapha ',
    mass: 78,
    height: 1.69,
    calcBMI: function () {
        this.bmi = this.mass / this.height ** 2;
        return this.bmi;
    },

}
const bayo = {
    fullName: 'Nurudeen ',
    mass: 92,
    height: 1.95,
    calcBMI: function () {
        this.bmi = this.mass / this.height ** 2;
        return this.bmi;
    },
}
ade.calcBMI();
bayo.calcBMI();
console.log(ade.bmi, bayo.bmi);

if (ade.bmi > bayo.bmi) {
    console.log(`${ade.fullName} BMI (${ade.bmi}) is higher
     than ${bayo.fullName} BMI (${bayo.bmi})`);
} else if (bayo.bmi > ade.bmi) {
    console.log(`${bayo.fullName} BMI (${bayo.bmi}) is higher
     than ${ade.fullName} BMI (${ade.bmi})`);
}

// for loop keep running while condition is TRUE
for (let i = 1; i < 9; i++) {
    console.log(`${i} Am in love with you `);
}

const adeArray = [
    'Nuru',
    'Bayo',
    2037 - 1991,
    'developer',
    ['musa', 'luk', 'mari'],
    true,
];
const types = [];
for (let i = 0; i < adeArray.length; i++) {
    // reading from adeArray array
    console.log(adeArray[i], typeof adeArray[i]);

    // filling types array
    // types[i] = typeof adeArray[i];
    types.push(typeof adeArray[i]);
}

console.log(types);

const years = [1991, 2007, 1996, 2020];
const ages = [];

for (let i = 0; i < years.length; i++) {
    ages.push(2022 - years[i])
}
console.log(ages);

console.log('---- ONLY STRING ----');
for (let i = 0; i < adeArray.length; i++) {
    if (typeof adeArray[i] !== 'string') continue;

    console.log(typeof adeArray[i], adeArray[i],);
}

console.log('---- BREAK WITH NUMBER ----');
for (let i = 0; i < adeArray.length; i++) {
    if (typeof adeArray[i] === 'number') break;

    console.log(typeof adeArray[i], adeArray[i],);
}

const adeArray = [
    'Nuru',
    'Bayo',
    2037 - 1991,
    'developer',
    ['musa', 'luk', 'mari'],
];

for (let i = adeArray.length - 1; i >= 0; i--) {
    console.log(i, adeArray[i]);
}

for (let exercise = 1; exercise < 4; exercise++) {
    console.log(`------ Starting exercise ------ ${exercise}`);

    for (let rep = 1; rep < 6; rep++) {
        console.log(`Lifting weight repetition ${rep}`);
    }
}

for (let rep = 1; rep < 7; rep++) {
    console.log(`Lifting weight repetition ${rep}`);
}
let rep = 1;
while (rep <= 10) {
    // console.log(`WHILE: Lifting weight repetition ${rep}`);
    rep++;
}


let dice = Math.trunc(Math.random() * 6) + 1;
console.log(dice);

while (dice !== 6) {
    console.log(`you rolled a ${dice}`);
    dice = Math.trunc(Math.random() * 6) + 1;
    if (dice === 6) {
        console.log(`You win with number ${dice}`);
    }
}


const calcTip = function (bill) {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}

const bills = [12, 75, 15, 556, 784, 987, 55, 44];

const tips = [];
const totals = [];

for (let i = 0; i < bills.length; i++) {
    const tip = calcTip(bills[i]);
    tips.push(tip);
    totals.push(tip + bills[i])
}
console.log(bills, tips, totals);

const calcAverage = function (arr) {
    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum / arr.length;
}

const rest = calcAverage([2, 3, 7]);
console.log(calcAverage(totals));
console.log(calcAverage(tips));