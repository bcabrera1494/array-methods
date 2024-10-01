let array = [1, 2, 3, 4, 5];

function shuffleArray(arr){
    arr.sort((a,b) => 0.5 - Math.random());
    return arr;
};

console.log(shuffleArray(array));