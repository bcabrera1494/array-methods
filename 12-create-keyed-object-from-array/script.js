let users = [
    { id: 'kopi', name: 'Kopi Joe Widdle', age: 5 },
    { id: 'mama', name: 'Sydney Kate Sullivan', age: 28 },
    { id: 'papa', name: 'Beau Joe Widdle', age: 29 },
];

function groupById(array) {
    // declare an empty object
    let obj = new Object(array);

    // add the id as the group label + the full object to obj *** Done individually, but there may be an more elegant way
        // for (let i = 0; i < array.length; i++) {
        //     array.map(i => obj[array[i].id] = obj[i])
        // };
    obj[users[0].id] = obj[0];
    obj[users[1].id] = obj[1];
    obj[users[2].id] = obj[2];

    // array.reduce(() => {});
    // //return the newly created object
    return obj;
};

console.log(groupById(users));