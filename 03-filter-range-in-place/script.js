let array = [5, 3, 8, 1];

function filterRangeInPlace(arr, a, b){
    function spliceArray(element){
        let index = arr.indexOf(element);
        if ( a<= element <= b){
            return arr.splice(index, 1);
        };
    };
    arr.map(spliceArray);
    return arr;
    //removes all values except a < values < b
    //splice function 
};
console.log(array);
console.log(filterRangeInPlace(array, 1, 4));
console.log(array);