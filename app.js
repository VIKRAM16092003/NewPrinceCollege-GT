// function printSomething() {
//     console.log('Hello, World!');

//     return 0;
// }

// let message = () => console.log("hello vignesh");

// let a = 12;

// printSomething("udahfuidh" + "cascadc dc", "acdcdascv message");

// literals = `oshcuohcosdh opushcuhchd osdchduhcd ${message} oascpsach`;

// let fruits = ["apple", "banana", "orange", "coconut"];
// let vegetables = ["carrot", "potato", "tomato", "brinjal"];
// let foods = [...fruits, ...vegetables, "eggs", "milk"];

// console.log(foods);


// for(let i = 0; i < fruits.length; i++) {
//     console.log(fruits[i]);
// }
// for(let fruit of fruits) {
//     console.log(fruit);
// }

// spread operator

// ... --> allows to iterable such as array or string to be expanded into seperate elements ()

//unpacks the elements

// let numbers = [1, 2, 3, 4, 5 ,3555];
// let maximum = Math.max(...numbers);
// let minimum = Math.min(...numbers);
// console.log(minimum);

// let username = "vignesh murugan";
// console.log(username);
// let letters = [...username];
// console.log(letters);


// rest operastor = (...) allows a function work with a variable number of arguments by bundling them in a array

//function openFridge(...foods) {
//     console.log(...foods);
// }

// function getFood(...foods) {
//     return foods;
// }

// const food1 = "milk";
// const food2 = "bread";
// const food3 = "egg";
// const food4 = "chicken";
// const food5 = "maggi";

//openFridge(food1, food2, food3, food4, food5);

// const foods = getFood(food1, food2, food3, food4, food5);

// console.log(foods);


// function sum(...numbers) {
//     let result = 0;
//     for(let number of numbers) {
//         result += number;
//     }
//     return result;
// }

// const total = sum(1, 3, 223, 54);

// console.log(`Your total is ₹${total}`);

// callbacks - function that is passed as an argument to another function

// network request
// interating with database

// hey, when you are done, call this next 

// sum(displayPage, 10, 20);

// function sum(callback, x, y) {
//    let result = x + y;
//    callback(result);
// }

// function displayConsole(result) {
//     console.log(`The sum is: ${result}`);
// }

// function displayPage(result) {
//     document.getElementById("myH1").textContent =`The sum is:  ${result}`;
// }

// For Each - method used to iterate over the elements of an array and apply a specified function(callback) to each element 

// array.forEach(callback);
// elemment, array, index

// let numbers = [1, 2, 3, 4, 5, 6];


// numbers.forEach(double);
// numbers.forEach(square);
// numbers.forEach(display);

// function double(elements, index, array) {
//     array[index] = elements * 2;
// }

// function square(elements, index, array) {
//     array[index] = Math.pow(elements, 2)
// }


// function display(elements) {
//     console.log(elements);    
// }


// .map() - accepts a callback and applies that function to each element of an array, then return a new array. 

// const numbers = [1, 2, 3, 4, 5];

// const squares = numbers.map(square);

// console.log(squares);


// function square(elements) {
//     return Math.pow(elements, 2);
// }


// const students = ["Ram", "Adam", "Aslam"];

// const studentsUpper = students.map(upperCase);

// console.log(studentsUpper);

// function upperCase(elements) {
//    return elements.toUpperCase();
// }


// .filter() = create a new array by filtering out elemnets


// == compare operator (compare if values are equal)

// === (compare if values and datatypes are equal)

// "2" === 2

// const PI = 3.14;

// if(PI === "3.14") {
//     console.log("That is PI");
    
// } else {
//     console.log("not a PI");  
// }

// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// let evenNums = numbers.filter(isEven);

// console.log(evenNums);

// function isEven(elements) {
//     return elements % 2 === 0;
// }


// reduce() = reduce the elements of an array to a single value 

// const prices = [5, 10, 20.4, 30];

// const total = prices.reduce(sum);

// console.log(`${total.toFixed(2)}`);

// function sum(accumulator, element) {
//   return accumulator + element;
// }

// const grades = [75, 50, 90, 80, 95];

// const max = grades.reduce(getMax);

// console.log(max);

// function getMax(accumulator, element) {
//     return Math.max(accumulator, element)
// }


// function declaration - define a reusable block of code that performs a specific task

// function hello() {
//     console.log(`Hello world`);
// }

// function expression - a way to define functions as values or variables 

// we are not polluting the global namespaces with function names

// const helloStudents = function() {
//     console.log("Hello");
    
// }

// helloStudents();

// setTimeout(function(){
//     console.log("hello world");
    
// }, 3000);

const numbers = [1, 2, 3, 4, 5, 6, 7];

const squares = numbers.map(function(element){
    return Math.pow(element, 2);
});

console.log(squares);

// function square(element) {
//     return Math.pow(element, 2);
// }

const evenNums = numbers.filter(function(element) {
    return element % 2 === 0;
});

console.log(evenNums);

 


















