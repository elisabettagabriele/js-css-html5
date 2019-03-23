"use strict";


let imgObj;
let animate;
var x = 10;
var xPos= 0;
var k = 0;


function begin(){
    let asking = prompt("Do you want the speed of the ball to decay instead of constant speed ?", "yes/no");
    if (asking == "yes"){
        decay()
        init()
    }
    else{
        init()
    }
}
            
function init() {
    imgObj = document.getElementById('ball');
    imgObj.style.position = 'relative'; 
    imgObj.style.top = '0px'; 
    let asking0 = prompt("Do want ball to bounce to right and dissappear instead of normal?", "yes/no");
    if (asking0 == "yes"){
        bounceRight()
        moveDown()
    }
    else{
        moveDown()
    }
    
}

function moveDown() {
    imgObj.position = 0 + 'px';
    imgObj.style.left = xPos + "px";
    imgObj.style.top = parseInt(imgObj.style.top) + 10 + 'px';
    animate = setTimeout(moveDown, x);   
    if (imgObj.style.top == 350 + 'px'){
       
        stop()
    }
}

function stop() {
   
    clearTimeout(animate);
    imgObj.style.top = '350px';
    moveUp()
}

function moveUp(){
    imgObj.style.left = xPos + "px";
    imgObj.style.top = parseInt(imgObj.style.top) - 10 + 'px';
    animate = setTimeout(moveUp, x);   
    if (imgObj.style.top == 10 + 'px'){
        stop2()
    } 
}

function stop2(){
    clearTimeout(animate);
    imgObj.style.top = '10px';
    moveDown()
}

function decay(){
    setTimeout(decay, 20);
    x++;                     //eventually the speed will decay to "zero" here
    return;
    
}

function bounceRight(){
    if (imgObj.style.left == "450px"){
        imgObj.style.visibility = "hidden";
    }
    else{
    
    setTimeout(bounceRight, 5);
    xPos++;
    return;
    }
}

function control(e){
    let temp = parseInt(imgObj.style.top);
    let temp2 = parseInt(imgObj.style.bottom);
    setTimeout(control, 2);
    if (e.keyCode == "90") {
        x = x + 5; //slows down
        return;
    }
    else if (e.keyCode == "88"){
        x = x - 5; //speeds up
        return;
    }
    else if (e.keyCode == "67"){
        imgObj.style.height = "20px";
        imgObj.style.width = "20px";
        return;
    }
     else if (e.keyCode == "86"){
        imgObj.style.height = "100px";
        imgObj.style.width = "100px";
        return;
    }
    

    return;
}

     
    // if I press Z, it slows down
    // if I press X,  it speeds up
    // if I press C it makes it smaller
    // if i press V it makes the image larger
    
   

window.onload = begin;
window.addEventListener("keydown", control, true);     


