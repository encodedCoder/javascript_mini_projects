"use strict";

var redBox = document.getElementById('innerBox');
var clickText = document.getElementById('clickText');
var count = 0;

function updateClickCount(){
    clickText.innerText = "Box clicked " + (++count) + " times";
    return;
}

redBox.addEventListener('click', updateClickCount);

redBox.addEventListener('mouseover', ()=>{
    console.log("Mouse Over");
});

redBox.addEventListener('mouseout', ()=>{
    console.log("Mouse Out");
});

window.location.replace('http://localhost:3000/index.html');
