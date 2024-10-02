let users = [
    { id: 'kopi', name: 'Kopi Joe Widdle', age: 5 },
    { id: 'mama', name: 'Sydney Kate Sullivan', age: 28 },
    { id: 'papa', name: 'Beau Joe Widdle', age: 29 },
];

function groupById(array) {
    // declare an empty object
    let obj = new Object(array);
    // array.forEach(user => {user[user.id] = user[i]});

    obj.forEach(o => {
    let i = obj.indexOf(o);
    array[array[i].id] = o;
    return obj;
    });

    // obj[users[0].id] = obj[0];
    // obj[users[1].id] = obj[1];
    // obj[users[2].id] = obj[2];

    // array.reduce(() => {});
    // //return the newly created object
    return obj;
};

console.log(groupById(users));