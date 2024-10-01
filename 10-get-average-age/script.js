let kopi = { name: "Kopi", age: 5 };
let mama = { name: "Sydney", age: 28 };
let papa = { name: "Bea", age: 29 };

// access the users ages
let ages = [kopi.age, mama.age, papa.age];
let users = [kopi, mama, papa];

function getAverageAge(array) {
    // add the users ages
    let arraySum = array.reduce((sum, current) => sum + current, 0);
    // divide by number of ages to calculate average
    let averageAge = arraySum / array.length;
    return averageAge
    // return average age
}

console.log(getAverageAge(ages)); 