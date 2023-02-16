////////////////////////////////
// Easy Going
////////////////////////////////

//  for (let input = 0; input <= 20; input++) {
//     console.log(input);
//     }
// ////////////////////////////////
// // Get Even
// for(let i=0; i<=200; i++){
//     if(i%2===0){
//         console.log("even");
//     }
//  }
////////////////////////////////


////////////////////////////////
// Fizz Buzz
////////////////////////////////
// for(let i=0; i<=100; i++){

//     console.log(i)
// }

// for(let i=0; i<=100; i++){
//     if(i%3===0){
//     console.log("FIZZ") 

//     }
// }

// for(let i=0; i<=100; i++){
//     if(i%5===0){
//     console.log("BUZZ") 
//     }
// } 

//     console.log(i)

// for(let i=0; i<=100; i++){
//     if(i%3===0&&i%5===0){
//     console.log("FizzBuzz") 
//     }
// } 


////////////////////////////////
// Wild Wild Life
// const wolfy = ["Wolfy", "wolf", 16, "Yukon Territory"]
// const sharky = ["Sharky", "shark", 20, "Left Coast"]
// const plantee = ["Plantee", "plant",  5000 , "Mordor"]
// const porgee = ["Porgee", "Porg", 186, "Ahch-To"]
// const dart = ["D'Art" , "Demogorgan Dog", 2, "Upside Down"]

// plantee[2]=5001
// console.log(plantee)

// ////////////////////////////////
// wolfy[3]=("Gotham City")
// console.log(wolfy)

// dart.push="Hawkins"
// console.log(dart)

// wolfy[1]=("Gameboy")
// console.log(wolfy)
////////////////////////////////
// Yell at the Ninja Turtles
////////////////////////////////
// const ninjaTurtles=["Donatello","Leonardo","Raphael","Michaelangelo"]
// // console.log(ninjaTurtles)


// // for (const element of ninjaTurtles) {
// //     console.log (element.toUpperCase());
// //      } //changing the elements in uupercase

// // //other way

// for (i = 0; i < 4; i++){

//     let a = ninjaTurtles[i].toUpperCase();
// console.log(a);
// }
// ////////////////////////////////
// // Methods, Revisited

// const favMovies=['Jaws', 'The Fellowship of the Ring', 'Howl\'s Moving Castle', 'Django Unchained', 'Cloud Atlas', 'The Usual Suspects', 'Toy Story', 'Conan the Barbarian', 'Titanic', 'Harry Potter', 'Fried Green Tomatoes', 'Volver', 'Oculus', 'Seven', 'Black Panther', 'Harry Potter', 'Imitation of Life', 'Snatch', 'Fast and Furious'];

// // console.log(favMovies[8])//console log Titanic

// // favMovies.sort // sort the element by alphabetical order

// // favMovies.pop()// removes the last element of the array.
// // favMovies.push("Guardians of the Galaxy")//add element to the end of an array
// // favMovies.reverse()// reverse the order of the elements
// // favMovies.shift()//removes the first item of the array.
// // favMovies.unshift()// add the element in the first of the array
// favMovies.splice(3,1,"Avatar")//splise/remove Django and add Avatar instead.
// console.log (favMovies)

////////////////////////////////

const whereIsWaldo = [["Timmy", "Frank"], "Eggbert",
["Lucinda", "Jacc", "Neff", "Snoop"],
["Petunia", ["Baked Goods", "Waldo"]]];

//console.log(whereIsWaldo);

whereIsWaldo.splice(1, 1)//removing "eggbert from the array"
//Change "Neff" to "No One"

console.log(whereIsWaldo);

//Change "Neff" to "No One"
whereIsWaldo[1][2] = ("No One")

//Access and console.log "Waldo"






////////////////////////////////


////////////////////////////////
//  Excited Kitten

//Write code that logs "Love me, pet me! HSSSSSS!" 20 times.

let text = "loveme, pet me! HSSSSSS!"
for (let i = 0; i <= 20; i++) {
    //text +=i 
    //console.log(i,"loveme, pet me! HSSSSSS!")

}




////////////////////////////////
//  Find the Median
const nums = [14, 11, 16, 15, 13, 16, 15, 17, 19, 11, 12, 14, 19, 11, 15, 17, 11, 18, 12, 17, 12, 71, 18, 15, 12];
function median(arr) {
    arr.sort(); //sort the array
    const middleIndex = arr.length / 2
    //if odd return middle element
    if (arr.length % 2 !== 0) {
     return arr[Math.floor(middleIndex)]
    }
    return (arr[middleIndex - 1] + arr[middleIndex] / 2)

}

console.log(median(nums))//calling the function here


//////////////////////////////