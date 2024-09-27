let array = [14, 3, 2, 33, 78, 39];

function compareNumbers(a, b){
    if (a < b) return 1;
    if (a == b) return 0;
    if (a > b) return -1;
};

function sortDecreasing (arr){
    arr.sort(compareNumbers);
    return arr;
};

console.log(sortDecreasing(array));