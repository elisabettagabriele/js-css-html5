"use strict";

let score = 0;
let sum = 0;
let newsum = 0;
let points = 0;
let sum2 = 0;
let newsum2 = 0;
var percentage = 0;
var total2 = 0;


function clearing() {
    document.getElementById("myForm").reset();
    
}    


function ComputeClick() {
    let lis = document.querySelectorAll("input");
    for (let i = 0; i<6 ; i++){        
        if(i % 2 === 0) {
            score = lis[i];
            sum = Number(score.value);
            newsum += sum;
            if (i < 5 ) {
                continue;
            }  
        }
         if(i % 2 !== 0) {
             points = lis[i];
             sum2 = Number(points.value);
             newsum2 += sum2;
             if (i < 6 ) {
                continue; 
             }
         }        
}
    
    percentage = Math.round((newsum/newsum2)* 100);
   
    return percentage;
    
}



function clearClick(){
    if (document.getElementById("curve").checked == true){
        var total = (percentage * .05);
        total2 = (percentage + total);
        bringIfChecked()
    }
    else { 
        bring()
    }
}


function bringIfChecked(){
    if (percentage > 60){
        var insert1 = document.createElement('div');
        insert1.innerHTML = percentage + "<br>" + "<br>" + Math.round(total2);
        insert1.className = "pass";
        document.getElementById("resultsarea").appendChild(insert1);
}
    else{
        var insert1 = document.createElement('div');
        insert1.innerHTML = percentage + "<br>" + "<br>" + Math.round(total2);
        insert1.className = "fail";
        document.getElementById("resultsarea").appendChild(insert1);
    }
    
}

function bring(){
alert("do we get here");
alert("this is the current percent" + percentage);
alert("this is the current curved percent" + total2);

if (percentage > 60){
        alert("its over 60"); 
        var insert1 = document.createElement('div');
        insert1.innerHTML = percentage;
        insert1.className = "pass";
        document.getElementById("resultsarea").appendChild(insert1);
}
    else{
        alert("its under 60"); 
        var insert1 = document.createElement('div');
        insert1.innerHTML = percentage;
        insert1.className = "fail";
        document.getElementById("resultsarea").appendChild(insert1);
    }
}


