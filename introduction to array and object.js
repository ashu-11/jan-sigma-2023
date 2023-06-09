'use strict'

// let arr= [1,2,3,4,5,6,7,68,9,10,11];
// let barr  = [23,25,56,778]
// let carr =[343434,45,445,34]


// let add the element from the end

// let newArray = arr.slice(-11,-1)

// let spliceARRAY = arr.splice(6,0,56)
// console.log('spliceArray',spliceARRAY);
// console.log("original Array", barr.concat(arr,carr));
// console.log("new Array", newArray);


let arr =['A','s','h','u'] 
let a = 1234;
let c =a.toString()


let b ='ashu'
let convertArr = b.split('');   





// ...   spread opearator

let dr=[1,3,44,53,543,5,353,34]

let d2 =[...dr,2,45,3,53,43,54,35,4]



let nam =['Ashu','nehal','sachin','ajinkya','rahul'];


let no= [1,2,3,4,5,6,7,8]


// no.forEach(function(na) {
//     console.log(`square of ${na} :`, na*na);
// });






// modify =['Ashu','ajinkya']
let newArr = [...nam.slice(0,1),...nam.slice(3,4)]

let age =[1,21,23,4,53,53,5,43,34,1,23,13,14,12,4,34,2,32,3]
let uniqueValue = new Set(age);
console.log("unique age",uniqueValue);
for (const ele of age) {
    console.log(ele);
}

for (const ele in age) {
    console.log("in",ele);
}

let voters = age.filter( age=> age>17);



// iterview level

let mapArr = age.map(age=> age*2)



let money =[1,21,23,4,53,53,5,43,34,1,23,13,14,12,4,34,2,32,3]

let totalMoney = money.reduce((sum,ele)=> sum+ele
)
console.log("Tol money",totalMoney);


// objects

const human ={
   name:"Ashu",
   age:"25",
   city:"Dehradun"
}

const family ={
    nameF:"mishra",
    ...human
}

Object.assign(human,{profession:"Developer"})
let k = Object.keys(human);
let value = Object.values(human)
let entries = Object.entries(human)

console.log("keys fo an object",family['age']);






