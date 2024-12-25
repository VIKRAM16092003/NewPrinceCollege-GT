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


//hi