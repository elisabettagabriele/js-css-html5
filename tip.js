"use strict";
var insert = null;
var finalTotal = 0;
var temporary;
var temporary1;
function calculate(){
    temporary = document.getElementById("myRange");
    temporary1 = Number((temporary.value)/100);
    if (temporary1 > .01){
        sliding();
    }
    else{
        calculating()
    }
}

function calculating(){
    let subtotal = document.getElementById("earned");
    let theValue = Number(subtotal.value);    
    
    let percentTip = document.getElementById("max");
    let percentTipTotal = Number((percentTip.value)/100);
    
    let tempTotal = theValue * percentTipTotal;
    finalTotal = tempTotal + theValue;
    
    if ( percentTip.value < 15) {
        document.getElementById("max").style.backgroundColor="red";
        insert = document.createElement('div');
        insert.innerHTML = finalTotal;
        insert.className = "totalNumber";
        document.getElementById("finalAmount").appendChild(insert);

    }
    else{
        
        insert = document.createElement('div');
        insert.innerHTML = finalTotal;
        insert.className = "totalNumber";
        document.getElementById("finalAmount").appendChild(insert);
    }
}

function sliding(){
    let subtotal = document.getElementById("earned");
    let theValue = Number(subtotal.value);    
    
    let tempTotal = theValue * temporary1;
    finalTotal = tempTotal + theValue;
    
    if ( temporary.value < 15) {
        document.getElementById("max").style.backgroundColor="red";
        insert = document.createElement('div');
        insert.innerHTML = finalTotal;
        insert.className = "totalNumber";
        document.getElementById("finalAmount").appendChild(insert);

    }
    else{
        
        insert = document.createElement('div');
        insert.innerHTML = finalTotal;
        insert.className = "totalNumber";
        document.getElementById("finalAmount").appendChild(insert);
    
    
    }
    
    
}