# array-methods
TOP/Javascript Info Array Methods Exercises 

https://www.theodinproject.com/lessons/foundations-object-basics#objects

https://javascript.info/array-methods


Task 4: Sort in Decreasing Order

let arr = [5, 2, 1, -10, 8];

// ... your code to sort it in decreasing order

alert( arr ); // 8, 5, 2, 1, -10

Task 5: Copy and sort array
We have an array of strings arr. We’d like to have a sorted copy of it, but keep arr unmodified.

Create a function copySorted(arr) that returns such a copy.

let arr = ["HTML", "JavaScript", "CSS"];

let sorted = copySorted(arr);

alert( sorted ); // CSS, HTML, JavaScript
alert( arr ); // HTML, JavaScript, CSS (no changes)