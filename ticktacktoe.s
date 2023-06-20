// javascript code goes here
let p1='player1';
let p2='player2';

let box = document.getElementsByClassName('row');
let count =0;
let player1=0;
let player2=0;

let arrPlayer1 =[0,0,0,0,0,0,0,0,0];
let arrPlayer2 =[0,0,0,0,0,0,0,0,0];

function check(arr){
    if(arr[0]==1&&arr[1]==1&&arr[2]==1){
        return true
    }
}


for(let i =0; i<box.length;i++){
    box[i].onclick = function(){
        let id = this.id;
        let no  = Number(id);
       if(this.getAttribute('checked')!=true){
           this.setAttribute("checked",'true');
           if(count%2==0){
               player1++
               this.innerHTML="X";
               arrPlayer1[no-1]=1;
               if(player1>=3){
                   if(check(arrPlayer1)){
                       alert(`Congratulations! Player1 wins`)
                      
                   }
               }

           }

           else {

               player2++;
               this.innerHTML="O";
               arrPlayer2[no-1]=1;
               if(player2>=3){
                   if(check(arrPlayer2)){
                       alert(`Congratulations! Player2 wins`)
                      
                   }
               }
           }
             count++;

           if(count==9){
               alert('Draw')
           }
       } 
    }
}
