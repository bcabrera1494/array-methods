let users = [
    {id: 'kopi', name: 'Kopi Joe Widdle', age: 5},
    {id: 'mama', name: 'Sydney Kate Sullivan', age: 28},
    {id: 'papa', name: 'Beau Joe Widdle', age: 29},
];

function groupById(array){
// declare an empty object
let obj = Object.create(users);
// access users.id for each object
let ids = users.map(object => object.id);
ids;
obj.constructor()
// access users objects
let userObjects = users.map(object => object);
userObjects;
// array.reduce(() => {});
// // add the id as the group label + the full object to obj
// //return the newly created object
return obj;
}; 

console.log(groupById(users));
console.log(users[0]);
console.log(users[1]);
console.log(users[2]);