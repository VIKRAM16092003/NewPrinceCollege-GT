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

// const numbers = [1, 2, 3, 4, 5, 6, 7];

// const squares = numbers.map(function(element){
//     return Math.pow(element, 2);
// });

// console.log(squares);

// function square(element) {
//     return Math.pow(element, 2);
// }

// const evenNums = numbers.filter(function(element) {
//     return element % 2 === 0;
// });

// console.log(evenNums);

 // a consise way to write functions expression
 
 
//  const hello = (name, age) => { console.log(`Hello ${name}`) 
//                                 console.log(`You are ${age} years old`)};
 
//  hello("Vicky", 22);

// setTimeout(() => {
//     console.log("Hello world");
// }, 3000);

// function hello() {
//     console.log("Hello");
// }


// const numbers = [1, 2, 3, 4, 5, 6]

// const squares = numbers.map((element) => Math.pow(element, 2));

// const evenNumbs = numbers.filter((element) => element % 2 === 0);

// const total = numbers.reduce((accumlator, element) => accumlator + element);

// console.log(squares);
// console.log(evenNumbs);
// console.log(total);


// objects - = a collections of related properties and/or methods.
// real world objects (people, products, places)

// objects = {key:values, function()}

// const person1 = {
//     name: "Vicky",
//     age: 22,
//     greet() {
//         console.log(`Hello ${this.name}`);
//     },
//     address: {
//         street: "123 Main St",
//         city: "New York",
//         state: "NY"
//     }
// }

// const person2 = {
//     name: "John",
//     age: 30,
//     greet() {
//         console.log(`Hello ${this.name}`);
//     },
//     address: {
//         street: "456 Elm St",
//         city: "Los Angeles",
//         state: "CA"
//     }
// }



// this - reference to the object where THIS is used 

// const person1 = {
//     name: "Vicky",
//     favFood: "Lemon rice",
//     sayHello: function(){console.log(`hi i am ${this.name}`)},
//     eat: function(){
//         console.log(`I am eating ${this.favFood}`);
//     }
// }

// const person2 = {
//     name: "John",
//     favFood: "Chicken",
//     sayHello: function(){console.log(`hi i am ${this.name}`)},
//     eat: function(){
//         console.log(`I am eating ${this.favFood}`);
//     }
// }

// person1.sayHello();

// person1.eat();

// person2.sayHello();

// person2.eat();


//constructors = special method for defining the properties of and methods of objects


// const car1 = {
//     make: "Toyota",
//     model: "Camry",
//     year: 2020,
//     startEngine() {
//         console.log("Engine started");
//     },
//     stopEngine() {
//         console.log("Engine stopped");
//     },
//     drive() {
//         console.log(`you driving the ${this.model}`);
//     }
// }

// const car2 = {
//     make: "Honda",
//     model: "amaze",
//     year: 2021,
//     startEngine() {
//         console.log("Engine started");
//     },
//     stopEngine() {
//         console.log("Engine stopped");
//     },
//     drive() {
//         console.log(`You driving the ${this.model}`);
//     }
// }

// const car3 = {
//     make: "Ford",
//     model: "Mustang",
//     year: 2022,
//     startEngine() {
//         console.log("Engine started");
//     },
//     stopEngine() {
//         console.log("Engine stopped");
//     },
//     drive() {
//         console.log(`You driving the ${this.model}`);
//     }
// }

// function Car(make, year, model, color) {

//     this.make = make;
//     this.year = year;
//     this.model = model;
//     this.color = color;
//     this.startEngine = function() {
//         console.log("Engine started");
//     };
//     this.stopEngine = function() {
//         console.log("Engine stopped");
//     };
//     this.drive = function() {
//         console.log(`You driving the ${this.model}`);
//     };
// }

// const car1 = new Car("tata", 2024, "nexon", "red");
// const car2 = new Car("kia", 2022, "sonet", "black");
// const car3 = new Car("maruthi", 2021, "swift", "white");

// console.log(car1.make);
// console.log(car1.model);
// car1.drive()


// class - ES6 feature provides a more structred and clearer way to work wih objects comapred to traditional constructor functions


// class Products {
//     constructor(name, price, quantity) {
//         this.name = name;
//         this.price = price;
//         this.quantity = quantity;
//     }
//     displayProduct() {
//         console.log(`product: ${this.name}`);
//         console.log(`price: $${this.price.toFixed(2)}`);
//         console.log(`quantity: ${this.quantity}`);
//     }

//     calculateTotal(salesTax) {
//         return this.price + (this.price * salesTax);
//     }

// }

// const saleTax = 0.05;
// const product1 = new Products("shirt", 300, 2);
// const product2 = new Products("shorts", 150, 1);
// const product3 = new Products("cap", 100, 1);

// product1.displayProduct();
// product2.displayProduct();
// product3.displayProduct();

// const total = product1.calculateTotal(saleTax);
// console.log(`Total price (with tax): ${total.toFixed(2)}`);

// const total = product2.calculateTotal(saleTax);
// console.log(`Total price (with tax): ${total.toFixed(2)}`);


// Static = keyword that defines properties or methods that belong to class itself rather than the object created from that class.


// class MathUtil {
//     static PI = 3.14159;
//     static getDiameter(radius) {
//         return 2 * radius;
//     }
//     static getCircumference(radius) {
//         return Math.PI * 2 * radius;
//     }
//     static getArea(radius) {
//         return this.PI * radius * radius;
//     }
// }

// console.log(MathUtil.PI);
// console.log(MathUtil.getDiameter(10));
// console.log(MathUtil.getCircumference(10));
// console.log(MathUtil.getArea(10)); 

// class Users {
//     static usersCount = 0;

//     constructor(useranme) {
//         this.useranme = useranme;
//         Users.usersCount++;
//     }

//     static getUserCount() {
//         console.log(`there are ${Users.usersCount} users online`);
        
//     }

//     sayHai() {
//         console.log(`hello my username is ${this.useranme}`);
//     }

// }


// const user1 = new Users("vicky");
// const user2 = new Users("john");

// user1.sayHai();
// Users.getUserCount();
// console.log(user1.useranme);
// console.log(user2.useranme);
// console.log(Users.usersCount);

// inheritance - allows a new class to inherit properties and method from an exiting class (parent -> child)

// class Animal {
//     alive = true;
//     eat() {
//         console.log(`this ${this.name} is eating`);
//     }
//     sleep() {
//         console.log(`this ${this.name} is sleeping`);
//     }
// }

// class Rabbit extends Animal {
//     name = "rabbit";
//     run() {
//         console.log(`this ${this.name} is running`);
//     }
// }

// class Fish extends Animal {
//     name = "fish";
//     swim() {
//         console.log(`this ${this.name} is swimming`);
//     }
// }

// class Eagle extends Animal {
//     name = "eagle";
    // fly() {
    //     console.log(`this ${this.name} is flying`);
    // }
// }

// const rabbit = new Rabbit();

// rabbit.eat();

// rabbit.sleep();

// console.log(rabbit.alive);

// console.log(rabbit.name);

// rabbit.run();


// const fish = new Fish();

// fish.eat();

// fish.sleep();

// console.log(fish.alive);

// console.log(fish.name);

// fish.swim();

// const eagle = new Eagle();

// eagle.eat();

// eagle.sleep();

// console.log(eagle.alive);

// eagle.fly();


// super = keybword is used in classes to call the constructor
// or access the properties and method of a parent

// this = this object
// super = the parent




// class Animal {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }

//     move(speed) {
//         console.log(`the ${this.name} moves at a speed of ${speed} mph`);
//     }
// }

// class Rabbit extends Animal {

//     constructor(name, age, runSpeed) {
//         super(name, age);
//         this.runSpeed = runSpeed;
//     }

//     run() {
//          console.log(`this ${this.name} is running`);
//          super.move(this.runSpeed);
//      }
    
// }
// class Fish extends Animal {
//     constructor(name, age, swimSpeed) {
//         super(name, age);
//         this.swimSpeed = swimSpeed;
//     }

//     swim() {
//         console.log(`this ${this.name} is swimming`);
//         super.move(this.swimSpeed);
//     }

// }

// class Eagle extends Animal {
//     constructor(name, age, flySpeed) {
//         super(name, age);
//         this.flySpeed = flySpeed;
//     }

//     fly() {
//         console.log(`this ${this.name} is flying`);
//         super.move(this.flySpeed);
//     }
// }

// const rabbit = new Rabbit("Fluffy", 2, 20);
// const fish = new Fish("nemo", 1, 10);
// const eagle = new Eagle("ram", 3, 35);


// rabbit.run();

// fish.swim();

// eagle.fly();

// console.log(rabbit.name);

// console.log(rabbit.age);

// console.log(rabbit.runSpeed);


// console.log(fish.name);

// console.log(fish.age);

// console.log(fish.swimSpeed);

// console.log(eagle.name);

// console.log(eagle.age);

// console.log(eagle.flySpeed);

// Destructuring - extract values from an arrays and object then assign them to varaible in convient way
// [] = to perform destructuring
// {} = to perform object destructuring 

// ex 1
// Assign array elements to varaible 

// const colors = ["red", "green", "blue", "yellow", "pink"];


// const [firstColor, secondColor, thirdColor, ...extraColors] = colors;

// console.log(firstColor);
// console.log(secondColor);
// console.log(thirdColor);
// console.log(extraColors);

// ex2

// Extract values from objects

// const person1 = {
    
    // firstName: 'John',
    // lastName: 'Doe',
    // age: 34,
    // job: "cook",
// }
// const person2 = {
    
//     firstName: 'ram',
//     lastName: 'kumar',
//     age: 31,
// }

// const {firstName, lastName, age, job="unemployed"} = person2;

// console.log(firstName);
// console.log(lastName);
// console.log(age);
// console.log(job);

// ex 3

// SWAP the values of two variables

// let a = 1;
// let b = 2;

// [a, b] = [b, a];

// console.log(a);
// console.log(b);


// ex 4 
// swap 2 elements from an array

// const colors = ["red", "green", "blue", "yellow", "pink"];

// [colors[0], colors[4]] = [colors[4], colors[0]];

// console.log(colors);

// ex 5

// destructuring in function parameters 

// function displayPerson({firstName, lastName, age, job}) {
//    console.log(`name: ${firstName} ${lastName}`);
//    console.log(`name: ${age}`);
//    console.log(`job: ${job}`);
   
// }

// const person1 = {
//     firstName: 'John',
//     lastName: 'Doe',
//     age: 34,
//     job: "cook",
// }

// const person2 = {
//     firstName: 'ram',
//     lastName: 'kumar',
//     age: 31,
// }

// displayPerson(person2);


// setTimeout - function in js that allows us to shedule the execution of a function after an amount of the time(milliseconds)

//  setTimeout(callback, delay);

// function sayHello() {
//     window.alert("hello");
// }

// setTimeout(function() {
//     console.log("hello!!!");
    
// }, 3000);

// setTimeout(() => console.log("helloo!!"), 3000);

// clearTimeout(timeoutID)- can cancel a timeout before trigger

// const timeoutId = setTimeout(() => console.log("helloo!!"), 3000);

// clearTimeout(timeoutId);

// let timeoutId;

// function startTimer() {
//    timeoutId = setTimeout(() => console.log("helloo!!"), 3000);
//    console.log("Started");
   
// }

// function clearTimer() {
//     clearTimeout(timeoutId);
//     console.log("CLEARED");
    
// }


// synchronous - Execute line by line consecutively in a sequentail manner.
// code that waits for an operation to complete

// Asynchronous - allows multiple operations to be performed concurrenlty without waiting.

// Doesn't block the execution flow and allows the program to contine.

// I/O operation, network requests, data fetching

// handle with : callback, promises, Async/Await




// console.log("Task1");
// console.log("Task2");
// console.log("Task3");

// function func1(callback) {
//     setTimeout(() => {console.log("task1")
//      callback()}, 4000);
// }

// function func2() {
//     console.log("Task2");
//     console.log("Task3");
//     console.log("Task4");
// }

// func1(func2);


// Error - an object that is created to represent a problem that occurs often with user input or establishing a connections 


// NETWORK ISSEUS
// PROMISES REJECTION
// SECURITY ERROR

// try
// catch
// finally

// try {
//     console.log("hello");
// } catch(error) {
//     console.error(error);
// }
// finally {
//     // CLOSE FILES
//     // CLOSE CONNECTIONS
//     // RELEASE resources
//     console.log("this always excutes");
    
// }

// console.log("You have reach the end of the program");

// try {
//     const dividend = Number(window.prompt("Enter a dividend: "));
//     const divisor = Number(window.prompt("Enter a divisor: "));
    
//     if(divisor == 0) {
//         throw new Error("You cannot divide by zero");
//     }
//     if(isNaN(dividend) || isNaN(divisor)) {
//         throw new Error("Values must be numbers");
//     }

//     const result = dividend / divisor;
    
//     console.log(result);

// } catch(error) {
//     console.error(error);
// }

// console.log("You have reach the end of the program");



// DOM - Document Object model 
// Object{} that represents the page you see in the web browser and provides us with an API to interact with it.
// web browser constructs the DOM when it loads an HTML document and structure all the elements in tree-like representation.
// Javascript can access the DOM to dynamically 
// change the content, structure and style of style page


// const username = "Ram Kumar";

// const welcomeMsg = document.getElementById("welcome-msg");

// welcomeMsg.textContent += username === "" ? `Guest` : username;

// console.dir(document);

// document.title = "My Website";
// document.body.style.backgroundColor = "hsl(0, 0%, 15%)";


// elements selectors = method used to target and manipulate HTML elements, that allows us to select one or multiple elements from the DOM (Document object model)

// 1) document.getElementById()    returns element or null
// 2) document.getElementsClassName() returns HTML Collection
// 3) document.getElementsByTagName() returns HTML Collection
// 4) document.querySelector()   returns first element or null
// 5) document.querySelectorAll() returns NODELIST


// const myHeading = document.getElementById("my-headinggg");

// myHeading.style.backgroundColor =  "red";
// myHeading.style.textAlign = "center";

// console.log(myHeading);

// const fruits = document.getElementsByClassName("fruits");

// friuts[2].style.backgroundColor = "red";

// for(let fruit of friuts) {
//     fruit.style.backgroundColor = "red";
// }

// Array.from(fruits).forEach(fruit => {
//     fruit.style.background = "red";
// });

// console.log(friuts);




// const h4Elements = document.getElementsByTagName('h4');
// const liElements = document.getElementsByTagName('li');


// h4Elements[].style.backgroundColor = "red";
// h4Elements[].style.backgroundColor = "red";

// for(let liElement of liElements) {
//     liElement.style.backgroundColor = "lightgreen";
// }


// const element = document.querySelector(".fruits");
// const element = document.querySelector("h4");
// const element = document.querySelector("li");
// const element = document.querySelector("ul");
// const element = document.querySelector("ol");

// element.style.backgroundColor = "lightgreen";

// console.log(element);


// const fruits = document.querySelectorAll(".fruits");
// const foods = document.querySelectorAll("li");

// console.log(fruits);
// console.log(food);

// fruits[2].style.backgroundColor = "lightgreen";
// foods[5].style.backgroundColor = "lightgreen";

// foods.forEach(food => {
//     food.style.backgroundColor = "lightgreen";
// })

























// DOM Navigation - the process of navigating through the structure of an HTML document using javascript

// .firstElementChild
// .lastElementChild
// .nextElementSibling
// .previousElementSibling
// .parentElement
// .children


// .firstElementChild

// const elements1 = document.getElementById("fruits");

// const firstChild = elements1.firstElementChild;

// firstChild.style.backgroundColor = "lightgreen";

// const elements2 = document.getElementById("veggies");

// const firstChild = elements2.firstElementChild;

// firstChild.style.backgroundColor = "lightgreen";

// const elements3 = document.getElementById("deserts");

// const firstChild = elements3.firstElementChild;

// firstChild.style.backgroundColor = "lightgreen";

// const ulElements = document.querySelectorAll("ul");

// ulElements.forEach(ulElement => {
//     const firstChild = ulElement.firstElementChild;
//     firstChild.style.backgroundColor = "lightgreen";
// })


// .lastElementChild

// const ulElements = document.querySelectorAll("ul");

// ulElements.forEach(ulElement => {
 
//     const lastChild = ulElement.lastElementChild;
//     lastChild.style.backgroundColor = "lightgreen";

// });

// console.log(ulElements);



// .nextElementSibling

// const element = document.getElementById("apple");
// const nextSibling = element.nextElementSibling;
// nextSibling.style.backgroundColor = "lightgreen";

// const element = document.getElementById("pie");
// const nextSibling = element.nextElementSibling;
// nextSibling.style.backgroundColor = "lightgreen";

// const element = document.getElementById("foods");
// const nextSibling = element.nextElementSibling;
// nextSibling.style.backgroundColor = "lightgreen";

// .previousElementSibling


// const element = document.getElementById("foods");
// const previousSibling = element.previousElementSibling;
// previousSibling.style.backgroundColor = "lightgreen";

// .parentElement

// const element = document.getElementById("deserts");
// const parent = element.parentElement;
// console.log(parent);


// parent.style.backgroundColor = "lightgreen";


// .children

// const element = document.getElementById("deserts");

// const children = element.children;

// console.log(children);

// Array.from(children).forEach(child => {
//     child.style.backgroundColor = "lightgreen";
// })

// Add and change HTML 

// h1 Ex1

// step 1 CREATE THE ELEMENT

// const newH1 = document.createElement("h1");

// // STEP 2 ADD ATTRIBUTEs/PROPERTIES

// newH1.textContent = "I like veg briyani";
// newH1.id = "myH1";
// newH1.style.color = "red";
// newH1.style.textAlign = "center";

// Step 3 APPEND ELEMENTS TO DOM

// document.body.append(newH1);
// document.body.prepend(newH1);
// document.getElementById("box1").appendChild(newH1);

// document.body.append(newListItem);
//document.body.prepend(newListItem);
// document.getElementById("fruits").appendChild(newListItem);
// document.getElementById("fruits").prepend(newListItem);
// const orange = document.getElementById("orange");
// document.getElementById("fruits").insertBefore(newListItem, orange);

// const listItems = document.querySelectorAll("#fruits li");
// document.getElementById("fruits").insertBefore(newListItem, listItems[0]);


// const box2 = document.getElementById("box2");
// document.body.insertBefore(newH1, box2);
// const box1 = document.getElementById("box1");
// document.body.insertBefore(newH1, box1);

// const boxes = document.querySelectorAll(".box");
// document.body.insertBefore(newH1, boxes[3]);

// REMOVE HTML ELEMENTS

// document.body.removeChild(newH1);
// document.getElementById("box1").removeChild(newH1);
// document.getElementById("fruits").removeChild(newListItem);


// event listners = listen for specfic events to create interactive web pages 

// events: click, mouseover, mouseout, keypress

// Mouse Events 

// .addEventListner(event, callback);
// .addEventListner(event, annonymous);
// .addEventListner(event, arrow function);


// const myBox = document.getElementById("myBox");
// const myBtn = document.getElementById("myBtn");

// function changeColor(event) {
//     console.log(event);   
    // event.target.style.backgroundColor = "lightgreen";
    // event.target.textContent = "Clicked!😃";
// }

// myBox.addEventListener("click", changeColor);

// myBox.addEventListener("click", function(event){
//     event.target.style.backgroundColor = "lightgreen";
//     event.target.textContent = "Clicked!😃";
// // });
// myBox.addEventListener("click", event => {
//     event.target.style.backgroundColor = "lightgreen";
//     event.target.textContent = "Clicked!😃";
// });

// myBox.addEventListener("mouseover", event => {
//     event.target.style.backgroundColor = "tomato";
//     event.target.textContent = "dont't do it😃";
// })

// myBox.addEventListener("mouseout", event => {
//     event.target.style.backgroundColor = "lightseagreen";
//     event.target.textContent = "Click Me 🙂";
// })



// myBtn.addEventListener("click", event => {
//   myBox.style.backgroundColor = "lightgreen";
//   myBox.textContent = "Clicked!😃";
// });

// myBtn.addEventListener("mouseover", event => {
//     myBox.style.backgroundColor = "tomato";
//     myBox.textContent = "dont't do it😃";
// })

// myBtn.addEventListener("mouseout", event => {
//     myBox.style.backgroundColor = "lightseagreen";
//     myBox.textContent = "Click Me 🙂";
// })


// key events - keypress 
// events: keydown, keyup
// document.addEventListener(event, callback);



// const myBox = document.getElementById("myBox");
// const moveAmount = 10;
// let x = 0;
// let y = 0;


// document.addEventListener("keydown", event => {
//     // console.log(event.key);
//     if(event.key.startsWith("Arrow")) {
//         switch(event.key) {
//             case "ArrowUp":
//                 y -= moveAmount;
//                 break;
//             case "ArrowDown":
//                 y += moveAmount;
//                 break;
//             case "ArrowLeft":
//                 x -= moveAmount;
//                 break;
//             case "ArrowRight":
//                 x += moveAmount;
//                 break;
//         }

//         myBox.style.top = `${y}px`;
//         myBox.style.left = `${x}px`;
//     }
// })

// document.addEventListener("keydown", event => {
//    myBox.textContent = "😃";
//    myBox.style.backgroundColor = "tomato";
// })

// document.addEventListener("keyup", event => {
//    myBox.textContent = "🙂"
//    myBox.style.backgroundColor = "lightblue";
// })


// document.addEventListener("keydown", event => {
//     console.log(event.key);
// console.log(`key down = ${event.key}`);
// })

// document.addEventListener("keyup", event => {
//     console.log(`key up = ${event.key}`);
// })























// Node List - Static collection of HTML elements by (id, class, elemennt)
// can be created by using queryselectoeAll()
// similar to an array but no (map, filter, reduce)
// nodelist won't update to automatiaclly reflect changes


let buttons = document.querySelectorAll(".myButtons");

// console.log(buttons);

// buttons.forEach(button => {
//    button.style.backgroundColor = "green";
//    button.textContent += "🙂";
// });


// click event

// buttons.forEach(button => {
//     button.addEventListener("click", event => {
//         event.target.style.background = "tomato";
//     });
// });

// buttons.forEach(button => {
//     button.addEventListener("mouseover", event => {
//         event.target.style.background = "lightblue";
//     })
// })
// buttons.forEach(button => {
//     button.addEventListener("mouseout", event => {
//         event.target.style.background = "green";
//     })
// })


// ADD an element 
// const newButton = document.createElement("button"); // step1

// newButton.textContent = "Button 5";// step 2 add attributes 
// newButton.classList = "myButtons";

// document.body.append(newButton)  // step 3 now we need to append to the dom

// console.log(buttons);


// let newButton = document.createElement("button"); // step1

// newButton.textContent = "Button 5";// step 2 add attributes 
// newButton.classList = "myButtons";

// document.body.append(newButton)  // step 3 now we need to append to the dom

// buttons = document.querySelectorAll(".myButtons");

// console.log(buttons);

// Remove an Element

// buttons.forEach(button => {
//     button.addEventListener("click", event => {
//         event.target.remove();
//         buttons = document.querySelectorAll(".myButtons");
//         console.log(buttons);
//     });
// })














// class List - element property in javascript used to interact with an elemnts list of classes (css classes), allows us to make reusable classes for many elements. across web pages.


// add()
// remoeve()
// toogle (remove if present, add if not)
// replace (oldClass, newClass)
// contains();


// const myButton = document.getElementById("myButton");

// myButton.classList.add("enabled");

// myButton.addEventListener("click", (event) => {

//      if(event.target.classList.contains("disabled")) {
//          event.target.textContent += "🙂"
//      } else {
//         event.target.classList.replace("enabled", "disabled");
//      }

   
// })

// myButton.addEventListener("mouseover", event => {
//     event.target.classList.toggle("hover");
// })
// myButton.addEventListener("mouseout", event => {
//     event.target.classList.toggle("hover");
// })

// myButton.addEventListener("mouseover", event => {
//     event.target.classList.add("hover");
// })
// myButton.addEventListener("mouseout", event => {
//     event.target.classList.remove("hover");
// })

// myButton.classList.add("enabled");
// myButton.classList.remove("enabled");


// myButton.classList.add("hover");





















// callback hell - situation in js where callbacks are nested with other callbacks to the degree where the code is difficult to read. old pattern to handle asynchronous functions.
// a(function (resultFromA)) {
//     b(resultFromA, function (resultFromB) {
//         c(resultFromB, function (resultFromC) {
//             d(resultFromC, function (resultFromD) {
//                 e(resultFromD, function (resultFromE) {
//                     f(resultFromE);
//                 });
//             });
//         });
//     });
// }

// use promises = async/await to avoid the callback hell 

// function task1(callback) {
//     setTimeout(() => {
//         console.log("Task 1 complete");
//         callback();
//     }, 2000);  
// }
// function task2(callback) {
//     setTimeout(() => {
//         console.log("Task 2 complete");
//         callback();
//     }, 1000); 
    
// }
// function task3(callback) {
//     setTimeout(() => {
//         console.log("Task 3 complete");
//         callback();
//     }, 3000); 
    
// }
// function task4(callback) {
//     setTimeout(() => {
//         console.log("Task 4 complete");
//         callback();
//     }, 1500); 
    
// }

// task1(() => {
//     task2(() => {
//         task3(() => {
//             task4(() => {
//                 console.log("All tasks completed");
//             });
//         });
//     });
// })







// Async/await - Async - makes a function return a promise 
// await - makes a async function wait for a promise promise.

// allows us to write asynchronous code in a synchronous manner, aynsc doess't have resoleve or reject parameters everything after await is placed event queue.
















// promises - Object that manages asynchronous operation. Wrap a promise object around {asynchronous code}
// "I promise to return the value"
// Pending - Resolved or Rejected

// new Promise(resolve, reject) => {asynchronous code}

// Do the chores in order

// 1) walk the pet
// 2) clean the house
// 3) take out the trash 


function walkDog() {
     return new Promise((resolve, reject) => {
        setTimeout(() => {
    
            const dogWalked = false;

            if(dogWalked) {
                resolve("You walk the dog 🐈");
            } else {
                reject("The dog didn't walk");
            }  
        }, 1500);
    })
}
function cleanKitchen() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const kitchenCleand = true;

            if(kitchenCleand) {
                resolve("you clean the kitchen 🖌️");
            } else {
                reject("The kitchen is not clean");
            }  
        }, 2500);
    })
}

function takeOutTrash() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const trashTakenOut = true;
            if(trashTakenOut) {
                resolve("You take out the trash 🚮");
            } else {
                reject("The trash is not taken out");
            }  
        }, 1000)
    })
}


// walkDog(() => {
//     cleanKitchen(() => {
//         takeOutTrash(() => {
//             console.log("You finished all the chores!!");
//         });
//     });
// });


// walkDog().then(value =>{ console.log(value); return cleanKitchen()})
//          .then(value => { console.log(value); return takeOutTrash()})
//          .then(value => { console.log(value); console.log("You finished all the chores!!!");})
//          .catch(error => { console.error(error); });


async function doChores() {
   
   try {
    const walkDogResult = await walkDog();
    console.log(walkDogResult);
    const cleanKitchenResult = await cleanKitchen();
    console.log(cleanKitchenResult);
    const takeOutTrashResult = await takeOutTrash();
    console.log(takeOutTrashResult);
    console.log("You finished all the chores!!!");
   }
   catch(error) {
    console.error(error);
   }
}

doChores();




// json files 
// fetch data from an API 
















