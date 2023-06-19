// Addition of element in dom 

let newPtag = document.createElement("p");
let ptext = document.createTextNode("this is dynamic p tag");
newPtag.appendChild(ptext);
document.body.appendChild(newPtag);


// editing the existing dom element

const p1 = document.querySelector('p')
console.log("ref query selector",p1);
p1.textContent="this is a dom manipulation"

const pid = document.getElementById('demo')
console.log("ref query selector",pid);
const pall = document.querySelectorAll('p')
console.log("ref query selector",pall);


// remove the tag
const h1 = document.querySelector('h1')
 h1.remove();

// add listen

const mybtn  = document.querySelector('button')
mybtn.addEventListener("click",function(){alert("hello button is cliked")})
