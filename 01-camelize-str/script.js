let string = 'kopi-joe-widdle';

function camelize(str){
    // split the string by '-' delim
    let split = str.split('-');
    split;
    // Map the array split and run upperCase()
    let upperCased = split.map(upperCase);
    return upperCased;
};

function upperCase(str){
    //get a single character string "ltr" - use index 0?
    let modLtr = str[0].toUpperCase() + str.slice(1);
    return modLtr;
    //call the ltr.toUpperCase();
};

function concatStr(str){
    //rejoin the capital letters to the string
};

console.log(camelize(string));
console.log(camelize("jeremy-allen-white"));