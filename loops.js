// loop are having 2 types of approach
 // a> Inpreative approach :
 //                         Where we have to specify every single instructions.
 
 // b> 

// for loop
// for(let i=50; i>=0; i-=10)
// {
//     console.log(i);    
// }
// 50
// 40
// 30
// 20
// 10
// 0

// Looping into arrays
// const animal = ["tiger", "loins", "cheetas"];

// for(let i=0; i<animal.length; i++)
// {
//     console.log(animal[i]);
// }
// tiger
// loins
// cheetas

// Nested Loop



// while loop 

// const target = Math.floor(Math.random() * 10); // 0...9 random num
// let guess = Math.floor(Math.random() * 10);  // 0...9 random num

// while(guess !== target)
// {
//     // console.log(`Gueesd ${guess} was Incorrect`);
//     guess = Math.floor(Math.random() * 10);
// }

// console.log(`Guessd ${guess} was Correct`);

// break keyword
// let num = 0;
// while(num < 3)
// {
//     console.log(num);
//     break; //num ++; we can stop loop like this

// }

// ----------------for of loop--------------------

// const actor = ["Hritik", "Sanjay Dutt", "Akshay Kumar", "Govinda"];

// for(host of actor)
// {
//     console.log(host);
// }

// const states = ["Jharkhand", "Bihar", "West Bengal", "Uttarpradesh"];
// for(state of states)
// {
//     console.log(state);
// }

// const numbers = [2,6,7];
// let sum = 0;
// for(num of numbers)
// {
//     sum+=num;
// }
// console.log(sum);

// const magicSquare = [
//     [2,7,8], // find sum => 15
//     [9,5,8], // find sum => 15
//     [4,3,8], // find sum => 15
// ];

// for(row of magicSquare)
// {
//     let sum = 0;
//     for(num of row)
//     {
//         sum += num;
//     }

//     console.log(sum);
// }


// --------------- Looping over Objects --------------

// const userObj = {
//     name:"Miles Morales", // [0][0] [0][1]
//     age:17, // [1][0] [1][1]
//     id:495,// [2][0] [2][1]
//     city:"Washington DC", // [3][0] [3][1]
// };

// const userkey = Object.keys(userObj); // print object keys into an array
// const uservalue = Object.values(userObj); // print object values into an array
// const userEntries = Object.entries(userObj); // print keys and values together within sub array.
// console.log(userkey);
// console.log(uservalue);
// console.log(userEntries);
// console.log(userEntries[0][0], userEntries[0][1]);
// console.log(userEntries[1][0], userEntries[1][1]);
// console.log(userEntries[2][0], userEntries[2][1]);
// console.log(userEntries[3][0], userEntries[3][1]);

// const forObj = {
//     name:"Singhania",
//     class:"Middle Class",
//     roll:"Run as Administrator",
//     timing:"10am sharp",
//     classified:true,
//     classifiedStatus:"Top Secret",
// }

// for(printing of Object.entries(forObj))
// {
//     console.log(printing);
// };

// const movieReviews = {
//     Arrival:9.0,
//     ZeroDarkThirty:8.7,
//     BladeTrinity:6.8,
//     IronManThree:7.3,    
// }


// const value = "ZeroDarkThirty";
// movieReviews[value]; // -> moviesReview.ZeroDarkThirty 
// console.log(value);

// for(let movie of Object.keys(movieReviews)) // ↓
// {
    // 1st iteration - Object.keys(movieReviews) -> ["Arrival"]
    // 2nd iteration - Object.keys(movieReviews) -> ["ZeroDarkThirty"]
    // 3rd iteration - Object.keys(movieReviews) -> ["BladeTrinity"]
    // 4th iteration - Object.keys(movieReviews) -> ["IronManThree"]


    // const value = movieReviews[movie]; // ↓
    // 1st iteration - movieReview[arrival] -> 9.0
    // 2nd iteration - movieReview[ZeroDarkThirty] -> 8.7
    // 3rd iteration - movieReview[BladeTrinity] -> 6.8
    // 4th iteration - movieReview[IronManThree] -> 7.3
   
    // console.log(`IMDB Rating of ${movie} ${value}/10`); 
    
// }

// ======================== for In loop =========================

const score = {
    sachin:48,
    dhoni:95,
    kohli:10,
    boomrah:50,
};

// for(let key in score)
// {
//     // console.log(key); // this will print keys only

//     const value = score[key]; // this will print values
//     console.log(`${key} = ${value}`); // this will print key value pair
// }
let sum = 0;
for(let ki in score)
{
    const value = score[ki]; // => 48,95,10,50 = 203
    sum+=value;    
}
console.log(sum);