// ---------- Basic Syntax -------------
// function greet()
// {
//     console.log("Happy Birthday");
//     console.log("nothins Birthday");
//     console.log("mine Birthday");
//     console.log("bros Birthday");
//     console.log("meets Birthday");
// }

// greet(); //when we call the function it's
// execute whole finction line by line


// --- function arguments -------

// function needy(name)
// {
//     console.log(name);
// }

// needy("Aditya Kery");
// needy("chandan thakur");

// function bodmas(a, b, c)
// {
//     const ans = a+b-c;
//     console.log(ans);
// }

// bodmas(1, 2, 1);

// function numbers(add, sub)
// {
//     console.log(`Function of mumbers is ${add + sub}`); // Nan
// }
// numbers(1) // it has contain only one argument
//that means 2nd argument will be undefined...

// ---------return keyword-------------

// function yell()
// {
//     const sum = 486;
//     return sum; // because return keyword is there there will be no further execution process will done.
//     console.log("Hey I am here"); // this line will not run
// }

// const result = yell();
// console.log(result);

// function colorFunc(col)
// {
//     if(col === "purple")
//     {
//         return true;
//     }
//     else
//     {
//         return false;
//     }
// }

// const resultOfColor = colorFunc("purple");
// console.log(resultOfColor);


// ------- finding a specific element in array--------------

// function isContain(arr)
// {
//     for(let contain of arr)
//     {
//         if(contain.toLowercase === "purple")
//         return true;
//     }
//     return false;
// }

// const answer = isContain(["red", "purple", "magenta", "light green", "yellow"]);
// console.log(answer);


// Question ---------------- User & Password Validation --------------------

// caeat a function named : isValidPassword
// it contains two parameters : password , username
// Password must be meet following requirements :
//      -> password must be atleast 8 characters long
//      -> it cannot contains spaces
//      -> it cannot contain username 
// if all the requiremnts are met return true 
// else return false

// function isValidPassword(password, username)
// {
    // 1st Method
    // if(password.length <= 8 || password.includes(" ") || password.includes(username))
    // {
    //     return false;
    // }
    // return true;

    //2nd Method
    // if(password.length <= 8) // this line will check length of the password
    // {
    //     return false;
    // }

    // if(password.includes(" ") || password.includes(username)) 
    // // this will check space in the password or username
    // {
    //     return false;
    // }
    // return true;  
    
    //3rd method
//     const passwortTooShort = password.length < 8;
//     const spaceContains = password.includes(" ");
//     const containUsername = password.includes(username);

//     if (passwortTooShort || spaceContains || containUsername);
//     {
//         return false;
//     }
//     return true;

// }
// const resultofPassword = isValidPassword("adityafghkeri", "gghj");
// console.log(resultofPassword);

// Question ---------------- Average of an array --------------------

function averageOfArray(array)
{
    let sumOfArray = 0;
    for(let sum of array)
    {
        sumOfArray+=sum;
    }

    return sumOfArray / array.length;
}

const finalAverage = averageOfArray([75, 76, 80, 95, 100]);
console.log(finalAverage);

// Question ---------------- Pangram --------------------
// pangram is contains all the 26 alphabetic characters............

function isPangram(sentence)
{
    const pangram = "abcdefghijklmnopqrstuvwxyz";
    for(let letter of pangram)
    {
        if(!sentence.includes(letter))
        {
            return false;
        }        
    }
    return true;
}

const char = isPangram("abcdefghijklmnopqrstuvwxyz");
console.log(char);
