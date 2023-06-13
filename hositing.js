/*
Hoisting is the javascript interpreter action of moving all variables 
and function to the top of the current scope. 

*/

/*    
function data() {

    console.log('inside function data');
}
a=undefined;X-----
inside function data
undefined
a=10


*/





// console.log(a);
console.log(b);
let  a=10;

const data = function() {

    console.log('inside function data');
}
data();
