let users = [
    {id: 'kopi', name: 'Kopi Joe Widdle', age: 5},
    {id: 'mama', name: 'Sydney Kate Sullivan', age: 28},
    {id: 'papa', name: 'Beau Joe Widdle', age: 29},
];

function groupById(array){
// declare an empty object
let obj = new Object(array);

obj[array[0].id] = obj[0];
// add the id as the group label + the full object to obj

// Object.defineProperty(obj[0], 'id', (users[0].id)); ***Don't understand how to use .defineProperty***

// array.reduce(() => {});
// //return the newly created object
return obj;
}; 

console.log(groupById(users));
console.log(users[0]);
console.log(users[1]);
console.log(users[2]);