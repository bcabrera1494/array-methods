let kopi = {name: "Kopi", age: "5"};
let mama = {name: "Sydney", age: "28"};
let papa = {name: "Bea", age: "29"};

let users = [papa, kopi, mama];

function sortByAge(array){
    let ages = array.map((user)=> user.age);
    ages;
    ages.sort((a, b) => {
        if (a > b) return b;
        if (a == b) return 0;
        if (a < b) return a;
    });
    return ages;

};

console.log(users[0]);
console.log(users[1]);
console.log(users[2]);
console.log(sortByAge(users));