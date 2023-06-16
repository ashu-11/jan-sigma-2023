// callback functions
// functional  programming

// let ageA =[11,12,34,23,19,18]

// const votersA = ageA.filter((age)=> age>18);

// console.log("votersl list", votersA);


// setTimeout--- async

// setInterval---sync

// function greet(){
//     console.log("how are you?");
// }

// function hi() {
//     console.log('Hi Ashutosh');
// }

// setTimeout(greet,2000);
// hi();



const a = function demo() {

console.log("inside a");
}

function b(c) {
    console.log('inside b');
    c();
}

b(a);
