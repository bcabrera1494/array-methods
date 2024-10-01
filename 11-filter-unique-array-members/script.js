let strings = ["kopi", "joe", "kopi", "joe", "widdle", "kopi", "joe", "nub"];

function unique(arr) {
    // initialize a new arary
    let uniqueStrings = new Array;
    // Filter array -> filter function: check each item to see if included in uniqueStrings
    strings.map(item => { if (!uniqueStrings.includes(item) === true) uniqueStrings.push(item) });
    return uniqueStrings;
};
// if item is not present in the uniqueStrings, add item to the uniqueStrings
// return should be kopi, joe, widdle, nub

console.log(unique(strings));