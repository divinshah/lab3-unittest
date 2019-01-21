//LAB 3 - UNIT TESTING
//======== THIS FILE IS FOR THE UNIT TEST ==========
//alert("lab 3 UNIT TEST");//please delete this line once connected.

function test_checkhumbrID(valueIn, expected){
    "use strict";
    let result = checkhumbrID(valueIn) 
    let msg = "Value : " + valueIn + "| Result :" + result + "| Expected :" + expected + "<br/>";
    
    let msgBox = document.getElementById("data");
    msgBox.innerHTML += msg;
    
    
}
test_checkhumbrID("a12345678",false);



