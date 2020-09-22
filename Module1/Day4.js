/* EXERCISE 1
Write a function "area" which receives 2 parameters (l1,l2) and calculate the area of the rectangle.
*/
const area = function(l1, l2){
    let rectArea = l1 * l2;
    return rectArea;
    
}
console.log(area(20, 40));

/* EXERCISE 2
Write a function "crazySum" which receives two given integers. If the two values are same, then returns triple their sum.
*/
const crazySum = function(a, b){
    let sum = a + b;
    let sum2 = a === b ? tripleSum = sum * 3 : tripleSum = sum;
    return tripleSum;
}
console.log(crazySum(3,3))

/* EXERCISE 3
Write a function "crazyDiff" that computes the 
absolute difference between a given number and 19. 
Returns triple their absolute difference if 
the specified
number is greater than 19.
*/

const crazyDiff = function(x){
    let absoluteDiff = x - 19;
    let absoluteDiff1 = x > 19 ? absDiff = absoluteDiff * 3 : absDiff = absoluteDiff;
    return absDiff;
}
console.log(crazyDiff(43));

 /* EXERCISE 4
Write a function "boundary" which accept an integer N and returns true if N is within 20 and 100 (included) or equal to 400.
*/
const boundary = function(N){
    let int = (N > 20 && N < 100 || N === 400) ? int1 = true : false
    return int1
}
console.log(boundary(11))

 /* EXERCISE 5
Write a function "strivify" which accepts a string S. Add to S "Strive" in front
 of a given string, if the given string begins with "Strive" then return the original string.
*/
const strivify = function(S){
    let concatString = "Strive" + S
    let concatString2 = S !== "Strive" ? concatString : S 
    return concatString2
}
console.log(strivify("Strive - web developer's dream"))

 /* EXERCISE 6
Write a function "check3and7" which accepts a positive number 
and check if it is a multiple of 3 or a multiple of 7.
HINT: Module Operator
*/
const check3and7 = function(p){
    let check = (p % 3 || p % 7) ? true : false
    return check
}
console.log(check3and7(5))

 /* WRITE YOUR CODE HERE */
​
/* EXERCISE 7
Write a function "reverseString" to reverse programmatically a given string (es.: Strive => evirtS).
*/
const reverseString = function(s){
    let reversedString = s.reverse()
    return reversedString
}
console.log(reverseString("try"))

/* EXERCISE 8
Write a function "upperFirst" to capitalize the first letter of each word of a given string passed as parameter
*/
const upperFirst = function(sp){
    let string = sp.charAt(0).toUpperCase() + sp.slice(1)
    return string
}
console.log(upperFirst("hello Tom"))

/* EXERCISE 9
Write a function "cutString" to create a new string without the first and last character of a given string.
*/
const cutString = function(ts){
    return ts.slice(0, -1)
}
console.log(cutString("Hello"))

/* EXERCISE 10
Write a function "giveMeRandom" which accepts a number n and returns an array containing n random numbers between 0 and 10
*/
let giveMeRandom = function(n){
    let randomArray=[]
    function getRandomArbitrary(min, max) {
        return Math.random() * (max - min) + min;  
      }
      let randomCalc = n.getRandomArbitrary(0,10)
      return randomCalc.push(randomArray)   
}
console.log(giveMeRandom(7))

}