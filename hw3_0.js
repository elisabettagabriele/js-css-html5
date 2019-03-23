
'use strict';

let array1 = ['3','1','1','a','a','3','b','f','a','1','a'];
let arrayLength = array1.length;
let count = 0;
let maximum = 1;
let final = "";

function User(value) {
  this.value = final;
  this.num = maximum;
}

function frequency(thing) {
    for (let i = 0; i < arrayLength; i++) { 
        for (let a = i; a < arrayLength; a++) {  
            if (array1[i] == array1[a]) {
            count++;
            }
            if (count > maximum){
                maximum = count;
                final = array1[i];    
            }
            else{
                continue;
            } 
    }
        count = 0;
    }
    let user = new User(count);
    document.write("The maximum frequency is: " + user.num + " and the letter is: " + user.value);          
}
frequency(array1)

