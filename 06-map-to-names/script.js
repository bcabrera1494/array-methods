// Create object with names and ages


// let names = /* ... your code */

// alert( names ); // John, Pete, Mary

let kopi = { name: "Kopi", age: 5 };
let mama = { name: "Sydney", age: 28 };
let beau = { name: "Beau", age: 29 };

let users = [kopi, mama, beau];
let arrayOfNames = new Array;

// function getNames() {
//     users.map((user) => {
//         arrayOfNames.push(user.name);
//         return arrayOfNames;
//     });
// };

// getNames(users);

let names = users.map(item => item.name);

console.log(names);