let string = 'kopi-joe-widdle';

function camelize(str){
    // split the string by '-' delim
    let split = str.split('-');
    return split;
    // Extract the 1st letter of each array item
};

function upperCase(ltr, index){
    //get a single character string "ltr" - use index 0?
    let modLtr = ltr[index].toUpperCase() + ltr.slice(1);
    return modLtr;
    //call the ltr.toUpperCase();
};

function concatStr(str){
    //rejoin the capital letters to the string
};

console.log(camelize(string));
console.log(upperCase(string, 0));