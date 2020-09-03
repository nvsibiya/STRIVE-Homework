// /*
// ASSIGNMENT RULES
// - All the answers must be in JavaScript
// - The solution must be pushed to the repository and be available for the tutors by the end of the day
// - You can ask for tutor's help
// - You can google / use StackOverflow BUT we suggest you to use just the material provided
// - You can test your code in a separate file or commenting the single parts in this file or directly in the Developer Console or in the Node Console.
// */
// ​
// /* EXERCISE 1
// Create and array with the first 5 positive numbers
// */

// /* WRITE YOUR CODE HERE */
const array = [1, -2, 3, -4, -5, -6, 7, -8, 9, 10, 11, 12, 13];
let pos = array.filter(function(v) {
    return v > 0;
  });
  console.log("Exercise 1");
  console.log(pos);


// /* EXERCISE 2
// Create an object containing your name, surname, email address and age.
// */

// /* WRITE YOUR CODE HERE */
const object = {
    name: "Nomfundo",
    surname: "Sibiya",
    email: "nvsibiya0@gmail.com",
    age: 30
}
console.log("Exercise 2");
console.log(object)

// /* EXERCISE 3
// Add to the previously created object a boolean value to rappresent wheter you have or not a driving license
// */
// /* WRITE YOUR CODE HERE */
if (object.driversLicense){
    console.log(object)
}else {
    object.driversLicense = true;
}
console.log("Exercise 3");
console.log(object)


// /* EXERCISE 4
// Remove from the previously created object the age
// */

// /* WRITE YOUR CODE HERE */
delete object.age
console.log("Exercise 4");
console.log(object)


// /* EXERCISE 5
// Create a second object with name, surname, email address and verify that this object has a different email address
// */
// /* WRITE YOUR CODE HERE */
console.log("Exercise 5");
const object1 = {
    name: "Avuyonke",
    surname: "Balfour",
    email: "avuyonkebalfour0@gmail.com",
    age: 26
}
if (object.email !== object1.email){
    console.log("Emails are different")
} else {
console.log("Emails are the same")
}

// /* EXERCISE 6
// You are working for a eCommerce. In the variable totalShoppingCart you have the total amount spent by the current user.
// In your eCommerce you have a promotion: if the customer shopping cart is more than 50€, they can have free shipping (otherwise it costs 10€).
// Write an algorithm that calculate totalCost based on this assumption.
// */

// /* WRITE YOUR CODE HERE */
console.log("Exercise 6")
const total = 41
if (total > 50){
    console.log(total, "with free shipping")
}else {
 
    console.log(total + 10,"$ with shipping") 
}

// /* EXERCISE 7
// You are working for the same eCommerce. Today is the black friday and everything has a 20% discount at the end of the purchase.
// Modify the previous answer inserting this information and, applying the same rules for the shipping cost, calculate the totalShopping.
// */

// /* WRITE YOUR CODE HERE */
console.log("Exercise 7")
let discountTotal = total - (total * 0.2)

if (discountTotal > 50){
    console.log(discountTotal, "with free shipping")
}else {
 
    console.log(discountTotal + 10,"$ with shipping") 
}

// /* EXERCISE 8
// Create an object rapresenting a car with properties like brand, model, licensePlate.
// After you create the first car, clone it and change the licensePlate without affecting the original car.
// Do it for five cars.
// */

// /* WRITE YOUR CODE HERE */

let licencePlateCar1 = 411;
const car1 = {
    brand: "Renault",
    model: "Sandero Stepway",
    licensePlate: `NS${licencePlateCar1}-BA`,
}

const car2 = {};
const car3 = {};
const car4 = {};
const car5 = {};

// Object.assign(car2,car1);
// Object.assign(car3,car1);
// Object.assign(car4,car1);
// Object.assign(car5,car1);

let cars = [car1,car2,car3,car4,car5]

for (index=1; index<5; index++){
    Object.assign(cars[index],cars[0]);
    cars[index].licensePlate = `NS${licencePlateCar1+index}-BA`;
}

// car2.licensePlate = "NS412-BA";
// car3.licensePlate = "NS413-BA";
// car4.licensePlate = "NS414-BA";
// car5.licensePlate = "NS415-BA";
console.log("Exercise 8");
console.log(car1);
console.log(car2);
console.log(car3);
console.log(car4);
console.log(car5);


// /* EXERCISE 9
// Create a new array called carsForRent containing all the cars from the previous exercise
// */

// /* WRITE YOUR CODE HERE */
console.log("Exercise 9");
let carsForRent = [car1, car2, car3,car4, car5]
console.log(carsForRent);

// /* EXERCISE 10
// Remove the first and the last car from the carsForRent array.
// */
carsForRent.shift()
carsForRent.pop()
console.log("Exercise 10");
console.log(carsForRent);
// /* WRITE YOUR CODE HERE */


// /* EXERCISE 11
// Print in the console, the types of a single car, of the car licensePlate and of the brand
// */

// /* WRITE YOUR CODE HERE */
console.log("Exercise 11")
console.log("Type of a single car is:" ,typeof car1)
console.log("Type of license plate is:", typeof car1.licensePlate)
console.log("Type of brand is:", typeof car1.brand);

// /* EXERCISE 12
// Create a new array called carsForSale and insert 3 cars in it.
// Store in the variable totalCars the number of cars in both carsForSale and carsForRent arrays
// */

// /* WRITE YOUR CODE HERE */
let carsForSale = cars.splice(0,3);
var totalCars = carsForSale.length + carsForRent.length
console.log("Exercise 12")
console.log(totalCars)


// let carsForSale = cars.copyWithin(1,3);

// /* EXERCISE 13
// Print in the console the data from each car in the carsForSale array
// */

// /* WRITE YOUR CODE HERE */
console.log("Exercise 12")
console.log(carsForSale)

// /* WHEN YOU ARE FINISHED
// Send the code via Slack to the tutor! In the next days we'll also learn how to use GIT 
// */