// console.log("test")
// var students = ['john', 'FSF', 'Jamil', 'FSF', 'Roman', 'FSF'];



// // for (var index = 0; index < students.length; index +=2) {
// //     console.log('Name ;', students[index]);
// //     console.log('Course: ', students[index + 1]);
// // }


// // function printStudentInfo(studentName, studentCourse) {
// //     console.log("welcome to the class!");
// //     console.log('Name:', studentName);
// //     console.log('Course: ', studentCourse);
// //     console.log("please utilize office hours for help!");
// // }

// // printStudentInfo(students[2], students[3]);

// // function printStuff(name, age, other) {
// //     console.log(`${name} is ${age} years old. also fun fact: ${other}`);
// // }
// function printStuff(name, age, fruits) {
//     var output = '';

//     for (var index = 0; index < fruits.length; index++) {
//         // console.log(fruits[index]);
//         if (index == 0) {
//             output += fruits[index];
//         } else {
//             output += ', ' +fruits[index];
//         }
//     }

//     console.log(output);
// }

// printStuff('JD', 43, 'something', ['apple', 'orange', 'grape']);


var lowercase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']


var uppercase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']

var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']

var specialCharacters = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '-', '+', '=', '[', ']', '{', '}', '|', '\\', ';', ':', "'", '"', '<', '>', ',', '.', '/', '?'];

var combined =[];

// create a function that gets the amount of chars and returns a list of 
// the amount and booleans for each of the char sets
// function gathers the users choices or options to create the password

// and returns and array of the resulting values - 50, true,false,tru,true

function getuserInput() {
    var amount = Number(prompt('please provide an amount of characters'));
    var includeLowercase = confirm('would you like lowercase letters');
    var includeUppercase = confirm('would you like uppercase letters');
    var includeSpecials = confirm('would you like to add special characters');
    var includeNumbers = confirm('would you like numbers'); 
    return [amount, includeLowercase, includeUppercase, includeNumbers, includeSpecials];

}
// this function call becomes the array of their choices
var choices = getuserInput(); // => [amount, includeLowercase, includeUppercase, includeNumbers, includeSpecials]

// using our choices array. create a function that creates an array of the combined
// character sets based on the user's choices (hint-conditionals)
// and generates a resulting string of characters in the amount chosen by the user
// the function will return that generated string
function generatePass() {


//    generates random password
// functions, conditionals, variables, for loops, concatenation (ND)
    var pass = '';
    // variable to hold random string
    var charAmount = choices[0];
    var includeLowercase = choices[1];
    // grabs the value from the returned array in index 1
    var includeUppercase = choices[2];
    // grabs returned array in index 2
    var includeNumbers = choices[3];
    var includeSpecials = choices[4];
    var allPossibleChars = []; 

        if (includeLowercase) {
            allPossibleChars = allPossibleChars.concat(lowercase);

        }
        if (includeUppercase) {
            allPossibleChars = allPossibleChars.concat(uppercase);

        }
        if (includeSpecials) {
            allPossibleChars = allPossibleChars.concat(specialCharacters);
            
        }
        if (includeNumbers) {
            allPossibleChars = allPossibleChars.concat(numbers);
            
        }
        for (var count = 0; count < charAmount; count++) {
            // grab a random character from array
            var randomNum = Math.random();
            var randomIndex = Math.floor(randomNum * allPossibleChars.length);
            var randomChar = allPossibleChars[randomIndex];
            
            pass += allPossibleChars[randomIndex]

        }
        return pass;
}
var password = generatePass(); 
// variable holds values of generated pass

// var outPutParagraph = document.querySelector('.password-output');




console.log(password);
// prints passwords
// var amount = Number(prompt('please provide an amount of characters'));
// var includeLowercase = confirm('would you like lowercase letters');
// var includeUppercase = confirm('would you like uppercase letters');
// var includeSpecials = confirm('would you like to add special characters');
// var includeNumbers = confirm('would you like numbers'); 


// console.log(amount, includeLowercase, includeUppercase, includeSpecials, includeNumbers);

// confirm specials and numbers as well

// function sum(a, b) {
//     return a + b
// }

// var result = sum(5, 10);

// console.log(result);
// var combined = lowercase.concat(uppercase).concat(numbers);
// var amount = 50;
// var random = Math.random();
// var ranIndex = Math.floor(random * lowercase.length);

// var password = '';
// for (var count = 0; count< amount; count++) 
// {
//     // var randomNum = Math.random();
//     // var randomIndex = math.floor(randomNum * lowercase.length);

//     // password += lowercase[randomIndex];
//     random = Math.random();
//     ranIndex = Math.floor(random * lowercase.length);
//     passwords += lowercase[ranIndex];


// // console.log(random);
// console.log(passwords);
// }
// console.log(lowercase[10]);
//  after loop completes print 
// console.log(passwords);
// console.log(password);