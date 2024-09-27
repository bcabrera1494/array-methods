let array = ["HTML", "CSS", "JavaScript", "Spanish", "Cebuano"];
let copy = [];

function copyAndSortArray(arr){
   let length = arr.length;
   let arrCopy = arr.slice(-(length));
   let sortedArray = arrCopy.sort()
   return sortedArray;
};

console.log(copyAndSortArray(array));
//sort array 