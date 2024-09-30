let kopi = { name: "Kopi", age: "5" };
let mama = { name: "Sydney", age: "28" };
let papa = { name: "Bea", age: "29" };

let users = [papa, kopi, mama];

function sortByAge(array) {

    array.sort((a, b) =>  a.age - b.age)
};

sortByAge(users);
console.log(users);
console.log(users[0]); //should be kopi
console.log(users[1]); //should be mama
console.log(users[2]); //should be papa