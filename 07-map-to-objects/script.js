let kopi = {name: "Kopi", surname: "Widdle", id: 1};
let mama = {name: "Sydney", surname: "Sullivan", id: 2};
let beau = {name: "Bea", surname: "Cabrera", id: 3};

let users = [kopi, mama, beau];

let userMapped = users.map(item => `${item.name} ${item.surname}`);

console.log(userMapped);