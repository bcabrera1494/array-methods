let array = [1, 2, 3, 4, 5];

function shuffleArray(arr){
    arr.sort((a,b) => 0.5 - Math.random());
    return arr;
};

console.log(shuffleArray(array));

//Fisher-Yates Shuffle

function fisherShuffle(arr){
    for (let i = arr.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
};

let arrayTwo = [5, 4, 3, 2, 1];

console.log(fisherShuffle(arrayTwo));