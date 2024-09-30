let kopi = {name: "Kopi", age: "5"};
let mama = {name: "Sydney", age: "28"};
let papa = {name: "Bea", age: "29"};

let users = [papa, kopi, mama];

function sortByAge(array) {
    let ages = array.map((user) => user.age);
    ages.sort((a, b) =>  a - b);
    return array;
};

console.log(users[0]);
console.log(users[1]);
console.log(users[2]);
console.log(sortByAge(users));