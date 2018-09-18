/* 1How do we assign a value to a variable?
make it an object and give it keys so you add a value
2How do we change the value of a variable?
by saying "let blank = something" and then saying "let blank = somethingElse"
3How do we assign an existing variable to a new variable?
let newVariable = existingVariable
4Remind me, what are declare, assign, and define?
declare is to call it or use a function, assign define
5What is pseudocoding and why should you do it?
when you write out in plain english what you want to do in a code and you should use it 
when you don't know exactly what to put in the code;
6What percentage of time should be spent thinking about how you're going to solve a problem 
vs actually typing in code to solve it?
70% thinking about it and 30% writing it

Create a variable called firstVariable.
Assign it the value of the string "Hello World"
Change the value of this variable to some number.
Store the value of firstVariable in a new variable called secondVariable
Change the value of secondVariable to any string.
What is the value of firstVariable?
Create a variable called yourName and set it equal to your name as a string. 
Then, write an expression that takes the string "Hello, my name is " 
and the variable yourName so that it returns a new string with them concatenated.
*/
// let firstVariable = "Hello world";
// firstVariable = 4
// let secondVariable = firstVariable
// secondVariable = "New string";
// console.log(firstVariable);
// 4
// let yourName = "deirdre"
// console.log(`hello, my name is ${yourName}`);

/*C. Booleans
Using the provided variable definitions, replace the blanks so that all log statements 
print true in the console. Answers should be all be valid JS syntax and not weird 
things that don't make sense but happen to print true to the console.*/
//   const a = 4;
//   const b = 53;
//   const c = 57;
//   const d = 16;
//   const e = 'Kevin';

//   console.log(a < b);
//   console.log(c > d);
//   console.log('Name' == 'Name');
//   console.log(true > false);
//   console.log(false === false === false === false === false === false > true);
//   console.log(false === false)
//   console.log(e == 'Kevin');
//   console.log(a < b < c);
//   console.log(a < a < d);
//   console.log(48 == '48');
 
/*
D. The farm
Declare a variable animal. Set it to be either "cow" or something else.
Write code that will print out "mooooo" if the it is equal to cow.
Change your code so that if the variable animal is anything other than a cow, 
it will print "Hey! You're not a cow."
*/
// let animal = "cow";
// animal = "cat";
// if(animal === "cow"){
//     console.log("moo");
// } else console.log("not a cow");


/*
E. Driver's Ed
Make a variable that will hold a person's age. Be semantic.
Write code that will print out "Here are the keys", if the age is 16 years or older.
If the age is younger than 16, a message should print "Sorry, you're too young."
*/
// let age = 23;
// if(age > 16){
//     console.log("here are your keys")
// } else console.log("nope");

 

/*II. Loops
Remember: USE let when you initialize your for loops!
This is GOOD: for(let i = 0;i < 100; i++)
This is NO GOOD: for(i = 0; i < 100; i++)
A. The basics
Write a loop that will print out all the numbers from 0 to 10, inclusive.
Write a loop that will print out all the numbers from 10 up to and including 400.
Write a loop that will print out every third number starting with 12 and going no higher 
than 4000.
*/
// for(let i=0; i<=10; i++){
//     console.log(i);
// }

// for(let i=10; i<=400; i++){
//     console.log(i);
// }

// for(let i=12; i<4000; i+=3){
//   console.log(i);
// }

/*
B. Get even
Print out the even numbers that are within the range of 1 - 100.
Adjust your code to add a message next to even numbers only that says: "<-- is an even 
number".
*/
// for(let i=0; i<100; i +=2){
//     console.log(`${i} this is an even number`);
// }

// C. Give me Five
// For the numbers 0 - 100, print out "I found a number. High five!" if the number is a 
// multiple of five.
// Example Output:

// I found a 5. High five!
// I found a 10. High five!
// Add to the code from above to print out "I found a number. Three is a crowd" if the 
// number is a multiple of three.
// Example Output:

// I found a 3. Three is a crowd
// I found a 5. High five!
// I found a 6. Three is a crowd
// I found a 9. Three is a crowd
// I found a 10. High five!

// for(let i=0; i<=100; i++){
//     if(i%5 ===0){
//         console.log(`${i} hi five`);
//     }
//     if(i%3 ===0){
//         console.log(`${i} it's a 3`);
//     }
// }

/*
D. Savings account
Write code that will save the sum of all the numbers between 1 - 10 to a variable called 
bank_account.
Check your work! Your bank_account should have $55 in it.

You got a bonus! Your pay is now doubled each week. Write code that will save the sum of 
all the numbers between 1 - 100 multiplied by 2.
Check your work! Your banck_account should have $10,100 in it.

// for(let i=0; i<=10; i++){
// let bankAccount = 0;
// console.log(bankAccount);
// }

// const sum = (N)=>  {
//   let bank_account= 0;
//     for(let i = 0; i <= 10; i++){
//       bank_account += i;
//     }
//     return bank_account;
// }
// console.log(sum(10));

// const sum = (N)=>  {
//   let bank_account= 0;
//     for(let i = 0; i <= 100; i++){
//       (bank_account += i);
//     }
//     return bank_account;
// }
// console.log(sum(100)*2);

E. Multiples of 3 and 5
If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 
and 9. The sum of these multiples is 23.
Find the sum of all the multiples of 3 or 5 below 1000. If a previous question you've done 
has helpful bits of code in it that partially solves this problem, look back at them.

You just solved Project Euler problem 1!

Are you having dejà vu? This just in! From the "Read the entire problem before you start" 
dept: This problem was on a previous assignment. You may skip it if you've already done it, just include a comment saying that you've already done it. If you've now done the problem twice, perhaps next time you'll read the whole problem before starting it.
*/
// const multiplesBelowOne = () => {
//   let belowOnek = 0;
//   for(i=0; i<1000; i++){

//   }
// }
//COME BACK TO THIS
/////////////////////////////////////^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
/////////////////////////////////////^^^^^^^^^^^^^^^^^^^^^^^^

/*
III. Arrays & Control flow
A. Talk about it:
What are the things in an array called?
elements or values
Do Arrays guarantee those things will be in order?
no
What real-life thing could you model with an array?
a list of items
🔴 Commit.


B. Easy Does It
Create an array that contains three quotes and store it in a variable called quotes.
*/
// const quotes = ["shit happens", "what bear?", "it's 5 somewhere"]

/*
C. Accessing elements Given the following array:
How do you access the 1st element in the array?
Change the value of "Hello" to "World".
Check the value of the array to make sure it updated the array. How? Why, yes! console.log();
🔴 Commit.*/
// const randomThings = [1, 10, "Hello", true]
// console.log(randomThings[0]);
// randomThings[2] = "World";
// console.log(randomThings);

/*
D. Change values
Given the following array 

What would you write to access the 3rd element of the array?

Change the value of "Github" to "Octocat"

Add a new element, "Cloud City" to the array.

🔴 Commit.
*/
// const ourClass = ["Salty", "Zoom", "Sardine", "Slack", "Github"]
// ourClass[2];
// ourClass[4] = "Octocat";
// ourClass.push("Cloud City");
// console.log(ourClass);


/*
E. Mix It Up
Given the following array: 
Add the string "Egon" to the end of the array. Add another string of your choice to the end
 of the array.
Remove the 5 from the beginning of the array.
Add the string "Bob Marley" to the beginning of the array.
Remove the string of your choice from the end of the array.
Reverse this array using Array.prototype.reverse(). Did you mutate the array? 
What does mutate mean? Did the .reverse() method return anything?

🔴 Commit.*/

// const myArray = [5, 10, 500, 20]
// myArray.push("egon");
// myArray.push("anotherone");
// myArray.shift();
// myArray.unshift("Bob marley");
// myArray.pop();
// Array.prototype.reverse(myArray);
// myArray.reverse();
// // .reverse just reverses the order of the array, doesn't reverse order of letters in words
// console.log(myArray);

/*
F. Biggie Smalls
Create a variable that contains an integer.
Write an if ... else statement that:
console.log()s "little number" if the number is entered is less than 100
console.log()s big number if the number is greater than or equal to 100.

🔴 Commit.
*/
// const integer = 400
// if(integer<=100){
// console.log("little number")
// } else console.log("big number");


/*
G. Monkey in the Middle
Write an if ... else if ... else statement:
console.log() little number if the number entered is less than 5.
If the number entered is more than 10, log big number.
Otherwise, log "monkey". 
*/
// const isMonkey = 7
// if(isMonkey<5){
//   console.log("little num");
// } else if(isMonkey>10){
//   console.log("biggie");
// }
// else console.log("monkey");

/*
H. What's in Your Closet?
Below, we've given you examples of Kristyn and Thom's closets modeled as data in JavaScript.
*/
// const kristynsCloset = [
//   "left shoe",
//   "cowboy boots",
//   "right sock",
//   "GA hoodie",
//   "green pants",
//   "yellow knit hat",
//   "marshmallow peeps"
// ];

// // Thom's closet is more complicated. Check out this nested data structure!!
// const thomsCloset = [
//   [
//     // These are Thom's shirts
//     "grey button-up",
//     "dark grey button-up",
//     "light blue button-up",
//     "blue button-up",
//   ],[
//     // These are Thom's pants
//     "grey jeans",
//     "jeans",
//     "PJs"
//   ],[
//     // Thom's accessories
//     "wool mittens",
//     "wool scarf",
//     "raybans"
//   ]
// ];
/*
-What's Kristyn wearing today? Using bracket notation to access items in kristynsCloset, 
log the sentence "Kristyn is rocking that " + the third item in Kristyn's closet + " today!" 
to the console.
Kristyn just bought some sweet shades! Add "raybans" to her closet after "yellow knit hat".
Kristyn spilled coffee on her hat... modify this item to read "stained knit hat" instead of 
yellow.
Put together an outfit for Thom! Using bracket notation, access the first element in Thom's 
shirts array.
In the same way, access one item from Thom's pants array.
Access one item from Thom's accessories array.
Log a sentence about what Thom's wearing. Example: "Thom is looking fierce in a grey button-up, 
jeans and wool scarf!"
Get more specific about what kind of PJs Thom's wearing this winter. Modify the name of his PJ 
pants to Footie Pajamas.
*/
// console.log(`Kristyn is rocking that ${kristynsCloset[2]} today`);
// kristynsCloset.splice(6, 0, "raybans");
// kristynsCloset[5] = "stained yellow hat";
// console.log(kristynsCloset)

// console.log(thomsCloset[0][0]);
// console.log(thomsCloset[1][1]);
// console.log(thomsCloset[2][0]);
// console.log(`thom's looking good in ${thomsCloset[0][0]} ${thomsCloset[1][0]} and ${thomsCloset[2][1]}`);
// thomsCloset[1][2] = "footie PJs";
// console.log(thomsCloset);



/*
IV. Functions
A. printGreeting
Do you think you could write a function called printGreeting with a parameter name that returns 
a greeting with the argument interpolated into the greeting?
Like so?
console.log(printGreeting("Slimer"));
=> Hello there, Slimer!
You think you could? I think so too. Feel free to skip this problem, because you've already done 
it. If you've done the problem twice, read entire problems carefully before doing them from now 
on.
*/
// const printGreeting = (returnGreet) => {

//   console.log(`Hello ${returnGreet}`);
// }
// console.log(printGreeting("Slimer"));
/*
B. printCool
Write a function printCool that accepts one parameter, name as an argument. The function should 
print the name and a message saying that that person is cool.
console.log(printCool("Captain Reynolds"));
=> "Captain Reynolds is cool";
*/
// const printCool = (arguement) => {
// return `${arguement} is cool`;
// }
// console.log(printCool("Captain Reynolds"));


/*
C. calculateCube
Write a function calculateCube that takes a single number and prints the volume of a cube made 
from that number.
console.log(calculateCube(5));
=> 125
*/

// const cubing = (toCube) => {
// console.log(toCube*toCube*toCube);
// }
// console.log(cubing(5))





////////////////////////////////////////////////////////////^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
/*D. isVowel
Write a function isVowel that takes a character (i.e. a string of length 1) and returns true if 
it is a vowel, false otherwise. The vowel could be upper or lower case.

console.log(isVowel("a"));
=> true*/
// const isVowel = (str) => {
// //for(let i=0; i<str.length; i++){
//   //let str = "s";
//   if(str.toLowerCase() === "a" || str ==="e" || str === "i" || str === "o" || str === "u"){
// console.log(true)
//   } else if(str.toLowerCase() !== "a" || str !=="e" || str !== "i" || str !== "o" || str !== "u")
//   console.log(false)
// }
// console.log(isVowel("B"));


/*
E. getTwoLengths
Write a function getTwoLengths that accepts two parameters (strings). The function should return 
an array of numbers where each number is the length of the corresponding string.

console.log(getTwoLengths("Hank", "Hippopopalous"));
=> [4, 13]
*/
// const getTwoLengths = (str1, str2) => {
// let lengthOne = str1.length;
// let lengthTwo = str2.length;
// for(let i=0; i<str1.length; i++){
//  //console.log(str1.length);
// }
//only store paramArray[i] if it is bigger than what we've seen so far
// for(let i=0; i<str2.length; i++){
//   //console.log(str2.length);
// }
// return [lengthOne, lengthTwo];
// }
// console.log(getTwoLengths("Hank", "Hippopopalous"));
// _______________________________________________________________________________

/*
F. getMultipleLengths
Write a function getMultipleLengths that accepts a single parameter as an argument: an 
array of strings. The function should return an array of numbers where each number is the 
length of the corresponding string.
// */
// const getMultipleLengths = (paramArray) => {
// let newArray = [];
// //array of # with length of each string in it
//   for(let i=0; i<paramArray.length; i++){
//     //if(paramArray[i] == " "){
//       newArray.push(paramArray[i].length);
//     }return newArray;
//   } 
 
// console.log(getMultipleLengths(["hello", "what", "is", "up", "dude"]));



/*G. maxOfThree
Define a function maxOfThree that takes three numbers as arguments and returns the largest of 
them. If all numbers are the same, it doesn't matter which one is returned. If the two 
largest numbers are the same, one of them should be returned.
*/

// const maxOfThree = (num1, num2, num3) => {
//   let numCheck = 0;
//   for(let i=0; i<numCheck; i++){
//     if(i<numCheck){
//       console.log("largest number");
//     }
// }
// console.log(maxOfThree(6, 9, 1));


// const maxOfThree = (number1, number2, number3) => {
// return Math.max(number1, number2, number3);
//  if (number1 === number2 || number1 === number3) {
//     return number1;
//      } else if (number2 === number3) {
//       return number2;
//         }
//     }
//         console.log(maxOfThree(6, 9, 1));

//------------------------------------------------------------------------------------------------


/* H. printLongestWord
Write a function printLongestWord that accepts a single argument, an array of strings. 
The method should return the longest word in the array. In case of a tie, the method should 
return the word that appears first in the array.*/

// const printLongestWord = (arrOfStrings) => {
//   let longestString= "";
// let longest = 0;
//   // //string of letter of each i in the array and if that string > previous string, put that in ""
//  for(let i=0; i<arrOfStrings.length; i++){
//  if(arrOfStrings[i] > longest){
// let longest = arrayOfStrings[i].length;
// longestString = arrOfStrings[i];

//   //       //put new string in longestString 
//   //   //}return newArray;
// }
//   console.log(longestString);

//  }
// }
//console.log(printLongestWord(["BoJack", "Princess", "Diane", "a", "Max", "Peanutbutter", "big", "Todd"]));
// // => "Peanutbutter"

  //  longestString ++;
  // longestString.push(arrOfStrings[i]);
//---------------------------------------------come back------------------------------------

/*
I. transmogrify
Write a Javascript function called transmogrify. This function should accept three arguments, 
which you can assume will be numbers. Your function should return the "transmogrified" result.
The transmogrified result of three numbers is the product of the first two numbers, raised to the 
power of the third number.
For example, the transmogrified result of 5, 3, and 2 is (5 times 3) to the power of 2 is 225.
*/
// const transmogrify = (num1, num2, num3) => {
// return Math.pow((num1 * num2), num3);
// }

// console.log(transmogrify(5, 4, 2));
//=> 225


/*
J. reverseWordOrder v2
Without using .split(), .reverse(), or .join(), write a function reverseWordOrder that accepts a 
single argument, a string. The function should return a string with the order of the words reversed. 
Don't worry about punctuation.

See if you can do it without googling.

Remember: Jim showed you today that you can index directly into a string:

"hello world"[6]
=> "w"

That and basic loops and variables and arrays are all you need to solve this without the Array methods.

console.log(reverseWordOrder("Ishmael me Call"));
=> "Call me Ishmael"

console.log(reverseWordOrder("I use Lâncome on my comb"));
=> "comb my on Lâncome use I"
*/

const reverseString = (stringHere) => {
  //console.log(stringHere); = works
  //last index of stringHere moves to first
  //remove last character in string using .slice
  const reversed = [];
  let word = "";
  for(let i=0; i< stringHere.length; i++){
      if(stringHere[i]=== " "){
  reversed.push(word);
  word = ""
      } else {
    word =+ stringHere[i];
    }
      if(i === stringHere.length -1){
    reversed.push(word)
  }
}
const backwardsWords = [];
  for(let i=reversed.length-1; i>= 0; i--){
 backwardsWords.push(reversed[i])
let resultString = "";
  for(let i = 0; i < backwardsWords.length; i++){
    if(backwardsWords.length-1 === i){
      resultString += backwardsWords[i];
    }else{
      resultString += backwardsWords[i] + " ";
// i is keeping track of where we are in the array .length-1
    }
    }
resultString += backwardsWords[i];
}

//resultString = resultString.slice(0, -1);
return resultString;
}

console.log(reverseString("I use Lâncome on my comb"));
//---------------------------------------------reverses all letters------------------------------------


/*
Objects
Let's set up an object data structure. Let's say we have a website that sells products, and we have a user of our website, and we want to store that user's data. The object data structure is a good way to organize the data from our user.

A. Make a user object
Create an object called user.
Write in to the object the key-value pairs for name, email, age, and purchased. 
Set the value of purchased to an empty array []. Set the other values to whatever you would like.

const user ={
  name: "Geralt",
  email: "bob@bob.com",
  age: 499,
  purchased: []
};


/*
B. Update the user
Our user has changed his or her email address. Without changing the original user object, update the 
email value to a new email address.
Our user has had a birthday! Without changing the original user object, increment the age value 
using the postfix operator. Hint: age++

user.email = "nancy@bob.com";
user.age += 1;
//console.log(user);
*//*
C. Adding keys and values
You have decided to add your user's location to the data that you want to collect.


user.location = "France";
//console.log(user);

Without changing the original user object, add a new key location to the object, and give it a 
value or some-or-other location (a string).

user.location = "Boca Raton";
//console.log(user);
*/

/*
D. Shopaholic!
Our user has purchased an item! They have purchased some "carbohydrates". Using .push(), 
add the string "carbohydrates" to the purchased array.
Our user has purchased an item! They have purchased some "peace of mind". Using .push(), add the string "peace of mind" to the purchased array.
Our user has purchased an item! They have purchased some "Merino jodhpurs". Using .push(), 
add the string "Merino jodhpurs" to the purchased array.
Console.log just the "Merino jodhpurs" from the purchased array.

user.purchased.push("carbohydrates");
user.purchased.push("peace of mind");
user.purchased.push("merino jodhpurs");
//console.log(user.purchased[2]);
*//*
E. Object-within-object
Remember that you can add an object to an existing object in the same way that you can add any new 
property/value pair.

If we want to give our user a friend with a name and age, we could write:


user.friend = {
    name: "Grace Hopper",
    age: 85
}*/

/*
When we console.log user, we would see the friend object added to our user object.

Write a friend object into your user object and give the friend a name, age, location, 
and purchased array (empty for now)
Console.log just the friend's name
Console.log just the friend's location
CHANGE the friend's age to 55


user.friend = {
  name: "Ciri",
  age: 30,
  location: "Isle of mist",
  purchased: []

}

user.friend.age = 55;
// console.log(user.friend.name);
// console.log(user.friend.location);
// console.log(user);

*/
/*
The friend has purchased "The One Ring". Use .push() to add "The One Ring" to the friend's purchased array.
The friend has purchased "A latte". Use .push() to add "A latte" to the friend's purchased array.
Console.log just "A latte" from the friend's purchased array.

user.friend.purchased.push("ash nazg");
user.friend.purchased.push("a latte");
//console.log(user.friend.purchased[1])
*/
/*
F. Loops
Write a for loop that iterates over the User's purchased array (NOT the friend's purchased array), and prints each element to the console.
Write a for loop that iterates over the Friend's purchased array, and prints each element to the console.
]
for(let i=0; i<user.friend.purchased.length; i++){
  console.log(user.friend.purchased);
}
*/
/*
G. Functions can operate on objects
Write a single function updateUser that takes no parameters. When the function is run, it should:
increment the user's age by 1
make the user's name uppercase
The function does not need a return statement, it will merely modify the user object.

Write a function oldAndLoud that performs the exact same tasks as updateUser, but instead of 
hard-coding it to only work on our user object, make it take a parameter person, and have it 
modify the object that is passed in as an argument when the function is called. Call your oldAndLoud 
function with user as the argument.

const updateUser = (person) =>{
  for(let i=person.age; i<520; i++){
    console.log(i);
  }
  console.log(person.name.toUpperCase());
}
console.log(updateUser(user));
*/