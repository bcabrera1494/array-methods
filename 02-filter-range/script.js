let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function filterRange(arr, a, b){
// Take an Array
// Look for elements: element >= a, element <=b

let filtered = arr.filter(element => {return element >= a && element<= b});
// Return results as an array
return filtered;
};

console.log(filterRange(nums, 3, 6));