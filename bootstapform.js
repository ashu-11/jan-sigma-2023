// code to disable button and fill the progress bar
let progress =0;
let uname=true, email=true,server=true,password=true,college=true, condition=true;

document.getElementById("submit-button").disabled=true;

function onInput(typep){
    if(document.getElementById(typep).value!=="") {
        if(typep==="username-input" && uname) {
            progress++;
            uname=false;
        }
         if(typep==="email-handler-input" && email) {
            progress++;
            email=false;
        }
         if(typep==="server-input" && server) {
            progress++;
            server=false;
        }
        if(typep==="password-input" && password) {
            progress++;
            password=false;
        }
        if(typep==="college-input" && college) {
            progress++;
            college=false;
        }
        if(typep==="conditions-input" ) {
            if(condition){
                 progress++;
            }
            if(!condition){
                progress--;
            }
           
            condition=false;
        }

        document.getElementById('progress-bar-new').style="width:"+progress*100/6+"%";
        if(progress==6){
            document.getElementById("submit-button").disabled=false;
        }
        else{
            document.getElementById("submit-button").disabled=true;
        }
    }

    else if(document.getElementById(typep).value==""){
          if(typep==="username-input" && !uname) {
            progress--;
            uname=true;
        }
         if(typep==="email-handler-input" && !email) {
            progress--;
            email=true;
        }
         if(typep==="server-input" && !server) {
            progress--;
            server=true;
        }
        if(typep==="password-input" && !password) {
            progress--;
            password=true;
        }
        if(typep==="college-input" && !college) {
            progress--;
            college=true;
        }
        if(typep==="conditions-input" && !condition) {
            progress--;
            condition=true;
        }
        document.getElementById('progress-bar-new').style="width:"+progress*100/6+"%";
        if(progress==6){
            document.getElementById("submit-button").disabled=false;
        }
        else{
            document.getElementById("submit-button").disabled=true;
        }

    }
}
