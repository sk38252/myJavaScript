// Scope

// const outSide = "I am outside"; // we can say "this is a global scope"
// const comment = "Hello india"; // child can acess this variable only when variable is not
// // present in the function...

// function homeFunction()
// {
//     const inSide = "I am inside";    
//     console.log(inSide);
//     console.log(outSide); // child can inheritate from father
//     console.log(comment); // if variable is outside the
//     //                    function scope it will acess from parent.
// }

// homeFunction();
// console.log(inSide); // father cannot inheritate from child


// Block scope vs function scope

// function scoped()
// {
//     // these are block scope = > because its blocked by code of block
//     // like > if () { block }
//     let mirror = 5;
//     const blocked = 4;

//     // function scope
//     var circle = 2; 
//     // var is function scope because block of code cannot block these code only function
//     // can block this..
// }

// here are some exapmles of block

//  if()
// {
//     this is a block
// }

// while()
// {
//     this is a block
// }

// ----------Lexical scope --------------

// const fruits = "mango";

// function meals()
// {
//     console.log(fruits); // child scope is asking from parent scope
//     //                      this is called lexical scope
// }

// meals();


//-------- Nested function--------------

// -----easy method
// function outer()
// {
//     console.log("Hey World");
// }

// function inner()
// {
//     outer();
// }

// inner();

// ----------------medium method
// function outsider()
// {
//     function insider()
//     {
//         console.log("Mogembo Khus Hua");
//     }
//     insider();
// }
// outsider();

// --------------------advance method
// function mostOuter()
// {
//     console.log('a');
//     function firstInner()
//     {
//         console.log('b');
//         function anotherInner()
//         {
//             console.log('c');
//         }
//         anotherInner();
//     }
//     firstInner();
// }
// mostOuter();


// ================ first class citizens ============
// 1. premitive values
// 2. objects and arrays
// 3. function is also a first class citizens because we can assing a function
//    within an variable
// 4. function as argument -> we can pass a function as argument

// const name = "Aditya";
// const id = 1;
// const arr = ['b', 'k'];
// const obj = {id:1, class:5};

// ------- assinging a function within a variable------------
// const greeting = function saySometing()
// {
//     console.log("I am here");
// }
// greeting(); // in that case we can call that variable as function
            // ---- its invokes the function saySomething()

/* ------------------------- // function expression ------------------------- */

// const exp = function sayIt()
// {
//     console.log("Heloooo");
// }
// exp();  // in that case variable is working like function calling

// 1st way
// const operation = function multiply(a, b)
// {
//     console.log(a*b);
// }
// operation(4, 5);

// // 2nd way
// const multiplyOperation = function into(a, b)
// {
//     return a * b;
// }
// const result = multiplyOperation(20, 5);
// console.log(result);

// ---------------------functions are store in array also
// const sub = function (a,b)
// {
//     return a-b;
// }

// const add = function (a,b)
// {
//     return a+b;
// }

// const mathematical = [add, sub];
// // const mathematical = [add(5, 2), sub(3, 2)];
// console.log(mathematical);

// ---------------------functions are store in object also
// const addFunction = function (a, b)
// {
//     return a*b;
// }

// const obj = {
//     objKey: addFunction,
// }
// const objresult = obj.objKey(4,6);
// console.log(objresult);


// ---------------------- Looping over array of functions

// const sub = function (a,b)
// {
//     return a-b;
// }

// const add = function (a,b)
// {
//     return a+b;
// }

// const div = function (a,b)
// {
//     return a/b;
// }

// const multi = function (a,b)
// {
//     return a*b;
// }

// const arr = [sub, add, div, multi];

// for(let looping of arr)
// {
//     const answer = looping(30, 5);
//     console.log(answer);
// }

//-------------------------- Passing a function as argument
//        this is called callback / Higher order function --------------
// const subP = function (rage)
// {
//    rage();
// }

// const addP = function ()
// {
//     console.log("Hey there");
// }
// subP(addP);
// subP -> higher order function
// addP -> callback function
// syntax ->  higherOrderfunction(callbackFunction)


// const subP = function (rage, num)
// {
//     for(let i=0; i<num; i++)
//     {
//         rage();
//     }
//    ;
// }

// const addP = function ()
// {
//     console.log("Hey there");
// }
// subP(addP, 5); // addP function(prints 5 times);

// function multiply(num)
// {
//     return function innerfun(x)
//     {
//     console.log(x*num);
//     }    
// }
// const triple = multiply(3);
// triple(10);

// const double = multiply(2);
// double(10);

/* ---- // make a makeBetween() function that takes 2 arguments -------- */
// ----retuen true if child function is between parent arguments

// function makeBetween(a, b)
// {
//     return function (x)
//     {
// //=========   method 1 
//         // if(x>a && x<b)
//         // {
//         //     return true;
//         // }
//         // else
//         // {
//         //     return false;
//         // }

// //=========   method 2
//         return x>a && x<b; // we can return this type of code also
//     }
// }

// const isChild = makeBetween(0, 18);
// console.log(isChild(15));
// console.log(isChild(17));


// function outer(calling)
// {
//     calling();
// }
// function inner()
// {
//     console.log("Hey Thers");
// }
// outer(inner);


// -----------> Array Callback Methods <-------------

// =======forEach Method :-

// Example 1 :
//      array.forEach(we can pass a function here);
//          and the function will be a callback function

// const obj = {
//     func : function (callitself)
//     {
//         callitself(200);
//     },
// };

// obj.func(function (number)
// {
//     console.log("Apne Muh Miya Mitthu", number);
// });

// Example 2:

// const arrayMethod = [20, 30, 50, 62, 32, 55];

// arrayMethod.forEach(function (returnNum){
//     console.log(returnNum);
// });

//Example 3:

// const arrayMethod3 = [20, 30, 50, 62, 32, 55];

// arrayMethod3.forEach(function (element, index, array){
//     console.log(element, index, array);
// });

// Example 4:

// const books = [
//     {
//         title: "A Gentalman In Moscow",
//         authors:["Regi Oman"],
//         Rating:4.63,
//     },
//     {
//         title: "Kissing Booth",
//         authors:["Joy King", " Some Other"],
//         Rating:2.3,
//     },
//     {
//         title: "Noke Book",
//         authors:["Jones Stanley"],
//         Rating:5.0,
//     },
//     {
//         title: "American Gods",
//         authors:["Amor towels"],
//         Rating:3.3,
//     },
// ];

// // printing every book title

// books.forEach(function (book){
//     // console.log(book.title);
//     console.log(book.title);
//     console.log(book.authors);
// });

// ======= map method :-

// const nums = [67, 87, 54, 39, 90];

// const newArray = nums.map(function (nums) {
//     return nums + 1; // return value is very very important in map method
// });
//     console.log(newArray);


// its same like forEach method the only diffrence is 
// map method returns a new array to the console
// map is combination of = forEach + transfomation

// Quiz  1 :

// const arrNums = [67, 87, 54, 39, 90, 30, 32, 21];

// const returnValue = arrNums.map(function (arrNum){
//     return {
//         value : arrNum,
//         isEven: arrNum % 2 === 0,
//     };
// });
// console.log(returnValue);


// Quiz 2 :

// const mapBooks = [
//     {
//         title: "A Gentalman In Moscow",
//         authors:["Regi Oman"],
//         Rating:4.63,
//     },
//     {
//         title: "Kissing Booth",
//         authors:["Joy King", " Some Other"],
//         Rating:2.3,
//     },
//     {
//         title: "Noke Book",
//         authors:["Jones Stanley"],
//         Rating:5.0,
//     },
//     {
//         title: "American Gods",
//         authors:["Amor towels"],
//         Rating:3.3,
//     },
// ];

// const arrOfBooks = mapBooks.map(function (mapBooks){
//     return {
//         title: mapBooks.title,
//         authors: mapBooks.authors,
//         rating: mapBooks.Rating,
//     }
// });

// console.log(arrOfBooks);

// -------Arrow function :

// const newFunction = (a, b) => {
//     console.log(a + b);
// };

// newFunction(20, 2);

// if returning only one thing in entire function it may more sort

// const sum = (a, b) => a+b;

// const result = sum(20, 2);
// console.log(result);

// --------returning a object in arrow function

// const arrow = () => ( {id: 8} );

// console.log(arrow);

// -----------returning a arrow function with doubling nums

// const numbers = [3, 5, 6];

// const maping = numbers.map((number)=> number * 2);
// console.log(maping);

//--------find method -

// const names = ["Aditya", "Aishwarya", "Anjali"];

// const result = names.find((namess) =>{
//     return namess.startsWith('A');
// });

// console.log(result);

//---.filter method => it will a return a new array

// const names = ["Aditya", "Aishwarya", "Anjali"];

// const filterNames = names.filter((namess) =>{
//     return namess.startsWith('A');
// });

// console.log(filterNames);

// ----------.some method : if any of these found startsWith('')
// it will return true otherwise false

// const names = ["Aditya", "Aishwarya", "Anjali"];
// const names2 = ["Gopi", "Samantha", "Vijay"];

// const nameSome = names.some((name) =>{
//     return name.startsWith('A');
// });

// console.log(nameSome);

// --------------.every method :
// if every elements is stating from given method then return true

const humans = ["Billu Bhayankar", "Bishal Dadlani", "Baurav Singhaniya"];
const result = humans.every((name)=> {
    return name.startsWith("B")
});
console.log(result);

//------Quiz 4 :
/*
        1. Return an array which have rating 4.2 and above
        2. Return first book which have rating more than 4
        3. Return true when all the books rating 4 and above
        4. Raturn false if one of them rating less then 4
*/
const books = [
{
    title: "Good Onens",
    authors: ["Terry Pratchett", "Neil Gaiman"],
    rating: 4.25,
},
{
    title: "Bone: The Complete Edition",
    authors: ["Jeff Smith"],
    rating: 4.42,
},
{
    title: "American Gods",
    authors: ["Neil Gaiman"],
    rating: 4.11,
},
{
    title: "A Gentleman in Moscow",
    authors: ["Amor Towles"],
    rating: 4.36,
}
];














