let kopi = {name: "Kopi", surname: "Widdle", id: 1};
let mama = {name: "Sydney", surname: "Sullivan", id: 2};
let beau = {name: "Bea", surname: "Cabrera", id: 3};

let users = [kopi, mama, beau];

let userMapped = users.map(item => ({fullName: `${item.name} ${item.surname}`, id: item.id }));

console.log(userMapped);
console.log(userMapped[0].fullName);
console.log(userMapped[1].fullName);
console.log(userMapped[2].fullName);