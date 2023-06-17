// regular expression

// text processing------ search, replace 

// -condtion-10





// function PhonenoValidation(userInput){
//     if(typeof userInput===String ||userInput.length==10){
//         return true;
//     }

//     else {
//         return false;
//     }  /   /
  
// }


// literal Pattern
/*
function PhonenoValidation(userInput){
    return /^\d{10}$/.test(userInput);
}
console.log('isvalidPhoneno',PhonenoValidation('9567417968')) */

// flags

const exp ='hello this is Hello  testHellotest ';
const expLiteral= /Hello/g;

console.log('output of flags',exp.match(expLiteral));

// constructor
const expC ='hello this is Hello  testHeLLotest ';
const regCons = new RegExp('Hello','gi')

console.log('output of flags constructoe',expC.match(regCons));

