# array-methods
https://www.theodinproject.com/lessons/foundations-object-basics#objects
https://javascript.info/array-methods#translate-border-left-width-to-borderleftwidth

Copy and sort array
importance: 5
We have an array of strings arr. We’d like to have a sorted copy of it, but keep arr unmodified.

Create a function copySorted(arr) that returns such a copy.

let arr = ["HTML", "JavaScript", "CSS"];

let sorted = copySorted(arr);

alert( sorted ); // CSS, HTML, JavaScript
alert( arr ); // HTML, JavaScript, CSS (no changes)