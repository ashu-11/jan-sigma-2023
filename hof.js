// let no =[1,2,3,4,5]
// const squares =no.map(square);

// console.log("result of hof", squares);
// function square(no){
//     return no*no;
// }


// lengthly prograaming
/*
let janBatch=['pradeep','alok','moinuddin','vijay'];
 let output1 =[];
 for(let i=0;i<3;i++){
    output1.push(janBatch[i].toUpperCase())
 }

 let output2=[]
 for(let i=0 ;i<2;i++ ){
    output2.push(janBatch[i].toLowerCase())
 }

let output3=[]

for(let i=0 ;i<janBatch.length;i++){
    output3.push(`Heelo hi ${janBatch[i]}`)
}

console.log(output1);
console.log(output2);
console.log(output3);

*/

//short code

let janBatch=['pradeep','alok','moinuddin','vijay'];

function operationOnArray(index,names,type){
   let result=[];
   for(let i=0;i<index;i++){
    result.push(type(names[i]))
   }
   return result;
}

console.log('op1:',operationOnArray(3,janBatch,(name)=>{
    return name.toUpperCase();
        }
    )
);

const x= operationOnArray(2,janBatch,function(name){
    return name.toLowerCase();
        }
    )
console.log('op1:',x);
console.log('op1:',operationOnArray(3,janBatch,function(name){
    return `hello hi ${name}`;
        }
    )
);
