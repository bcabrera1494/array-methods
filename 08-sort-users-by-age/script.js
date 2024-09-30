let kopi = {name: "Kopi", age: "5"};
let mama = {name: "Sydney", age: "28"};
let papa = {name: "Bea", age: "29"};

let users = [papa, kopi, mama];
let ages = map((user)=> user.age);

function sortByAge(array){
    array.sort((a, b) => {
        if (a>b) return 1;
        if (a==b) return 0;
        if (a<b) return -1;
    });
// Access the user age
// write the sorting to compare as numerics
// sort the users by ascending age
// check that they are in order by age
};

console.log();