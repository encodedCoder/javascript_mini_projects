'use strict'

var currShape = 'shape';
var shapes = [
    'square',
    'upper-triangle',
    'lower-triangle',
    'left-triangle',
    'right-triangle',
    'r-triangle-left',
    'r-triangle-right',
    'r-triangle-upper',
    'r-triangle-lower',
    'circle',
    'ovel',
    'rectangle'
]

var colorBtn = document.getElementById('color-button');
var shapeBtn = document.getElementById('shape-button');

function generateRandomColor() {
    let maxVal = 0xFFFFFF;
    let randomNumber = Math.random() * maxVal;
    randomNumber = Math.floor(randomNumber);
    randomNumber = randomNumber.toString(16);
    let randColor = randomNumber.padStart(6,0);
    return `#${randColor.toUpperCase()}`;
}

colorBtn.addEventListener('click', ()=>{
    shapeContainer.style.backgroundColor = generateRandomColor();
});

function generateRandomShape(){
    var prevRandIndex = 0;
    do{
        var currRandIndex = Math.floor(Math.random()*shapes.length);
    }while(prevRandIndex == currRandIndex);
    prevRandIndex = currRandIndex;

    var randShape = shapes[currRandIndex];
    document.getElementById(currShape).setAttribute('id', randShape);
    currShape = randShape;
    console.log(randShape);
}

shapeBtn.addEventListener('click', generateRandomShape);


