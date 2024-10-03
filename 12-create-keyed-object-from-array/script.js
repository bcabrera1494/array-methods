let users = [
    { id: 'kopi', name: 'Kopi Joe Widdle', age: 5 },
    { id: 'mama', name: 'Sydney Kate Sullivan', age: 28 },
    { id: 'papa', name: 'Beau Joe Widdle', age: 29 },
];

function groupById(array) {
    // using reduce method *** NOT WORKING YET
   return array.reduce((object, accObj) => {
        object[accObj.id] = accObj;
        return object}, {});
        // Trying to append the object to newArr
        //return the array
};

console.log(groupById(users));