// Create object with names and ages


// let names = /* ... your code */

// alert( names ); // John, Pete, Mary

let kopi = { name: "Kopi", age: 5};
let mama = { name: "Sydney", age: 28};
let beau = { name: "Beau", age: 29};

let users = [kopi, mama, beau];

function getNames(list){
 list.map((user) => {
    return user.name;
 })
};

let names = getNames(users);

console.log(names);