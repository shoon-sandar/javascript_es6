//VAR, LET, CONST
//VAR
// var number1=10
// var number1=20
// number1=30
// correct! VAR can be declared or reassigned more than once!

//lET
// let number1=10
// let number1=20
// wrong! let can't be declared more than once but
// number1=20
//correct! let can be reassigned more than once

//CONST
// const number1=10
// const number1=20
// wrong const can't be declared more than once and
// number1=30
//wrong const can't be reassigned more than once

// const shoonInfo = {
//     firstName: 'Shoon',
//     lastName: 'Shoon',
//     city: 'Mandalay',
//     height: 4,
//     weight: 86,
// }
// // const { firstName, lastName, city, height } = shoonInfo
// // console.log(`My name is ${firstName + lastName}.\nI live in ${city}.\nMy height is ${height} feet.`)
// console.log(shoonInfo)


// let [firstName, middleName, lastName] = ['Shoon', 'Sandar', 'Kyaw'];

// lastName = 'Yin';
// console.log(lastName)

// //Object Literal
// function addressMaker(city, state) {
//     const newAddress = { city, state };
//     console.log(newAddress);
// }
// addressMaker('shoon', 'sandar');

// //6.Object Literal(Challenge)
// function addressMaker(address) {
//     const { city, state } = address;

//     const newAddress = {
//         city,
//         state,
//         country: 'Myanmar'
//     };
//     console.log('${newAddress.city},${newAddress.state},${newAddress.country}')
// }
// addressMaker({ city: 'Austin', state: 'Edwerd' });

// //7.For of Loop
// let incomes = [6623, 564, 45265];
// let total = 8;
// for (const income of incomes) {
//     console.log(income);
//     total += income;
// }

// console.log(total);

// let fullName = "Shoon Shoon is cute";

// for (const char of fullName) {
//     console.log(char);
// }

// //for of Loop(Challenge)
// let incones = [5545, 456, 231];

// for (let income of incomes) {
//     income += 5050
// }
// console.log(incones);

// //9.Spread Operator
// let example1m = {
//     firstName: 'Shoon'
// };
// let example2 = {
//     firstName: 'N/A'
// }
// example2 = { firstNmae: 'Shoon' }


// //Rest Operator
// function add(nums) {
//     console.log(arguments);
// }
// add(1, 2, 3, 4)

// //Arrow Functions
// function add(...nums) {
//     let total = nums.reduce((x, y) => x + y);
//     console.log(total);
// }
// add(4, 5, 7, 8, 12)

// //Default Params
// // function add(numArray = []) {
// //     let total = 0;
// //     numArray.forEach((element) => {
// //         total += element;
// //     });
// //     console.log(total);
// // }
// // add();



// //Include()
// let numArray = [1, 2, 3, 4, 5];
// console.log(numArray.includes(2))


// //14Let&Const
// const example = [];
// example.firstname = 'shoon';
// console.log(example)


// //15. Import & Export
// // import (data) from './example.js';
// // let updateData =data;
// // updateData.push(5)
// // console.log(updateData);

// //16.padStart() & padEnd()
// let example1 = 'Dylan';

// console.log(example1.padEnd(10, 'a'));

// //17.padStart() & padEnd() (Challenge)
// let example2='youTube.com/CodingTutorials360';
// console.log(example2.padStart(100).longth);
// console.log(example2.padEnd(1));

// //18.Classes
// export class Animal {
//     constructor(type,legs) {
//         this.type =type;
//         this.legs= legs;
//     }
//     makeNoise(sound='Loud Noise') {
//         console.log(sound);
//     }
//     get metaData() {
//         return 'Type : ${this.type}, legs: ${this.legs}'
//     }
//     static return10(){
//         return 10;
//     }
// }

// export class Cat extends Animal {
//         makeNoise(sound = "Meow") {
//             console.log(sound);
//         }
// }

//19.Trailing Commas
function add(paran1,){
    const example ={
        name:"Shoon",
    };
    console.log(example)
};
add ();