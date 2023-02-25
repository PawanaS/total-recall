//Example of What your JS File in VS Code should look like


/*
    Remember!!! Once you’ve completed a problem,
    COMMENT OUT YOUR WORK before moving on to the next one.
    This makes it easier to read and debug the current 
    Solution you are working on.
*/


// I. Variables & Data Types
// A. Q + A
// B. Strings
var firstVariable;
firstVariable = 5;
var secondVariable;
secondVariable = firstVariable;
secondVariable = "this is changed";
console.log(firstVariable);//it is 5
var yourName;
yourName = "Paula";
console.log("Hello,my name is"+yourName);

// C. Booleans
const a = 4;
const b = 53
const c = 57;
const d = 16;
const e = 'Kevin';
console.log(a < b);
console.log(c > d);
console.log('e');

//using || and &&
console.log(true || false);
console.log(false && false && false && false && false && true);
console.log(false && false)
console.log(e || 'Kevin');
console.log(a && b || c); // note: a < b < c is NOT CORRECT (and is not a valid JS expression, think about using other math operations)
console.log(a && a || d); // note: the answer is a simple arithmetic equation, not something "weird"
console.log(48 != '48');

// D. The Farm
var animal;
animal = "cat";
if (animal == "cow") {
    console.log("mooooo");
}
else {
    console.log("Hey! you're not a cow");
}

// E. Driver's Ed
//_____________________________________________________________
let Age = 16;
Age++
console.log("Here are the keys!");


Age--
console.log('Sorry.you"re too young')


// // II. Loops(Basics)
// for (let i = 0; i <=10; i++){
//     console.log(i)
// }
  

//number from 10 up to and including 400
// for (let i = 10; i <= 400; i++) {
//     console.log(i)
// }

// loop that will print out every third number starting with 12 and going higher than 4000
// for (let i = 12; i <= 4000; i += 3){
//     console.log(i)
// }


// B. Get even
// for (i = 0; i <= 100; i++){
//     console.log(i);
// }
    
//getting the even numbers
// for (i = 0; i <= 100; i++) {
//     if (i % 2 === 0) {
//         console.log(i + '<--is even number')
//     }
//     else {
//         console.log(i);
//     }

// }
// C. Give me Five
// for (let i=0; i<=100; i++){
//   if ((i%3==0)&& (i%5==0)){
//     console.log(`I found a ${i} High Five! three is a crowd`)
//   }
// //    else if(i%5==0){
//   console.log(`I found a ${i} High Five!`)
// }

// else if (i%3==0){
//   console.log(`I found a ${i} three is crowd`)
// }
// }
// // {
// //     console.log('I found a + i . Three is crowd!')



// // D. Savings accountc
const bank_account=i
while(i<=10){
console.log(i)
    i++
}








//_____________________________________________________________








// III. Arrays & Control Flow
// A. Talk about it:
// B. Easy Does It
const quotes=["peanut butter", "jelly", "creamcheese"]
console.log(quotes)
// C. Accessing elements
const randomThings=[1,10,"Hello",true]

console.log(randomThings[0]);//accessing first element

// D. Change values

randomThings[0]=15
console.log(randomThings)

const ourClass=["salty","zoom", "sardine","slack","Github"]
console.log(ourClass[2])
ourClass[4]="Octocat"
ourClass.push("Cloud City")
//console.log(ourClass)



// E. Mix It Up
const myArray = [5, 10, 500, 20]
myArray.push("Aegon")//add to the end of an array
myArray.shift()//to remove the first element of the array
myArray.unshift("Bob Marley")//add in the beggining of the array
myArray.pop()//removes the last element of the array
//console.log(myArray)

// F. Biggie Smalls

// if (i=0; i<100; i++){
//     console.log("little number")
// else () 
//    // console.log("big number")
// }





// G. Monkey in the Middle







// H. What's in Your Closet?__________________________________________________

const kristynsCloset = [
    "left shoe",
    "cowboy boots",
    "right sock",
    "Per Scholas hoodie",
    "green pants",
    "yellow knit hat",
    "marshmallow peeps"
  ];
  
  // Thom's closet is more complicated. Check out this nested data structure!!
  const thomsCloset = [
    [
      // These are Thom's shirts
      "grey button-up",
      "dark grey button-up",
      "light blue button-up",
      "blue button-up",
    ],[
      // These are Thom's pants
      "grey jeans",
      "jeans",
      "PJs"
    ],[
      // Thom's accessories
      "wool mittens",
      "wool scarf",
      "raybans"
    ]
  ];

console.log("Kristyn is rocking that" +(kristynsCloset[2])+ "today!")

kristynsCloset.splice([4],"raybans");

kristynsCloset[5]="stained knit hat";

console.log(thomsCloset[0][0])//access the first element form first array.

console.log(thomsCloset[1][0])// accessing 1 elemnt of the 2nd array
 

console.log(thomsCloset[2][2])//accessing 3rd item from 3rd array
let shirt= thomsCloset[0][0]
let pant= thomsCloset[2][2]

console.log(`Thom is looking fierce in a ${shirt} ${pant}!` )
thomsCloset[1][2]="Footie Pajamas"

// IV. Functions
// A.
// B.
// C.
// D.
// E.
// F.
// G.
// H.
//_____________________________________________________________






// V. Objects
// A.
// B.
// C.
// D.
// E.
// F.
// G.
//_____________________________________________________________


// Extra
