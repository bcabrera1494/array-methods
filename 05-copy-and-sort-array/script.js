let array = ["HTML", "CSS", "JavaScript", "Spanish", "Cebuano"];
let copy = [];

function copyArray(arr){
   let length = arr.length;
   let arrCopy = arr.slice(-(length));
   return arrCopy;
};

console.log(copyArray(array));
//sort array