'use strict';

var zeroBtn = document.getElementById('zero-btn');
var oneBtn = document.getElementById('one-btn');
var twoBtn = document.getElementById('two-btn');
var threeBtn = document.getElementById('three-btn');
var fourBtn = document.getElementById('four-btn');
var fiveBtn = document.getElementById('five-btn');
var sixBtn = document.getElementById('six-btn');
var sevenBtn = document.getElementById('seven-btn');
var eightBtn = document.getElementById('eight-btn');
var nineBtn = document.getElementById('nine-btn');
var acBtn = document.getElementById('ac-btn');
var signBtn = document.getElementById('sign-btn');
var moduloBtn = document.getElementById('modulo-btn');
var divideBtn = document.getElementById('divide-btn');
var multiplyBtn = document.getElementById('multiply-btn');
var minusBtn = document.getElementById('minus-btn');
var plusBtn = document.getElementById('plus-btn');
var evalBtn = document.getElementById('eval-btn');
var dotBtn = document.getElementById('dot-btn');

var outputCell = document.getElementById('output-cell');
// outputCell.innerText = '0';
var calculatorOff = true;

var prevNum = null;
var currNum = null;
var operator = null;

zeroBtn.addEventListener('click', ()=>{
    console.log('Zero Pressed');
    if(calculatorOff){
        calculatorOff = false;
        prevNum = 0;
        outputCell.innerText = prevNum;
    }
    else{
        if(operator == null){
            prevNum = prevNum * 10;
            outputCell.innerText = prevNum;
        }else if(currNum == null){
            currNum = 0;
            outputCell.innerText = currNum;
        }else{
            currNum = currNum * 10;
            outputCell.innerText = currNum;
        }
    }
    console.log('prevNum: ' + prevNum);
    console.log('currNum: ' + currNum);
    console.log('operator: ' + operator);
    console.log('');
});
oneBtn.addEventListener('click', ()=>{
    console.log('One Pressed');
    if(calculatorOff){
        calculatorOff = false;
        prevNum = 1;
        outputCell.innerText = prevNum;
    }
    else{
        if(operator == null){
            prevNum = prevNum * 10 + 1;
            outputCell.innerText = prevNum;
        }else if(currNum == null){
            currNum = 1;
            outputCell.innerText = currNum;
        }else{
            currNum = currNum * 10 + 1;
            outputCell.innerText = currNum;
        }
    }
    console.log('prevNum: ' + prevNum);
    console.log('currNum: ' + currNum);
    console.log('operator: ' + operator);
    console.log('');
});
twoBtn.addEventListener('click', ()=>{
    console.log('Two Pressed');
    if(calculatorOff){
        calculatorOff = false;
        prevNum = 2;
        outputCell.innerText = prevNum;
    }
    else{
        if(operator == null){
            prevNum = prevNum * 10 + 2;
            outputCell.innerText = prevNum;
        }else if(currNum == null){
            currNum = 2;
            outputCell.innerText = currNum;
        }else{
            currNum = currNum * 10 + 2;
            outputCell.innerText = currNum;
        }
    }
    console.log('prevNum: ' + prevNum);
    console.log('currNum: ' + currNum);
    console.log('operator: ' + operator);
    console.log('');
});
threeBtn.addEventListener('click', ()=>{
    console.log('Three Pressed');
    if(calculatorOff){
        calculatorOff = false;
        prevNum = 3;
        outputCell.innerText = prevNum;
    }
    else{
        if(operator == null){
            prevNum = prevNum * 10 + 3;
            outputCell.innerText = prevNum;
        }else if(currNum == null){
            currNum = 3;
            outputCell.innerText = currNum;
        }else{
            currNum = currNum * 10 + 3;
            outputCell.innerText = currNum;
        }
    }
    console.log('prevNum: ' + prevNum);
    console.log('currNum: ' + currNum);
    console.log('operator: ' + operator);
    console.log('');
});
fourBtn.addEventListener('click', ()=>{
    console.log('Four Pressed');
    if(calculatorOff){
        calculatorOff = false;
        prevNum = 4;
        outputCell.innerText = prevNum;
    }
    else{
        if(operator == null){
            prevNum = prevNum * 10 + 4;
            outputCell.innerText = prevNum;
        }else if(currNum == null){
            currNum = 4;
            outputCell.innerText = currNum;
        }else{
            currNum = currNum * 10 + 4;
            outputCell.innerText = currNum;
        }
    }
    console.log('prevNum: ' + prevNum);
    console.log('currNum: ' + currNum);
    console.log('operator: ' + operator);
    console.log('');
});
fiveBtn.addEventListener('click', ()=>{
    console.log('Five Pressed');
    if(calculatorOff){
        calculatorOff = false;
        prevNum = 5;
        outputCell.innerText = prevNum;
    }
    else{
        if(operator == null){
            prevNum = prevNum * 10 + 5;
            outputCell.innerText = prevNum;
        }else if(currNum == null){
            currNum = 5;
            outputCell.innerText = currNum;
        }else{
            currNum = currNum * 10 + 5;
            outputCell.innerText = currNum;
        }
    }
    console.log('prevNum: ' + prevNum);
    console.log('currNum: ' + currNum);
    console.log('operator: ' + operator);
    console.log('');
});
sixBtn.addEventListener('click', ()=>{
    console.log('Six Pressed');
    if(calculatorOff){
        calculatorOff = false;
        prevNum = 6;
        outputCell.innerText = prevNum;
    }
    else{
        if(operator == null){
            prevNum = prevNum * 10 + 6;
            outputCell.innerText = prevNum;
        }else if(currNum == null){
            currNum = 6;
            outputCell.innerText = currNum;
        }else{
            currNum = currNum * 10 + 6;
            outputCell.innerText = currNum;
        }
    }
    console.log('prevNum: ' + prevNum);
    console.log('currNum: ' + currNum);
    console.log('operator: ' + operator);
    console.log('');
});
sevenBtn.addEventListener('click', ()=>{
    console.log('Seven Pressed');
    if(calculatorOff){
        calculatorOff = false;
        prevNum = 7;
        outputCell.innerText = prevNum;
    }
    else{
        if(operator == null){
            prevNum = prevNum * 10 + 7;
            outputCell.innerText = prevNum;
        }else if(currNum == null){
            currNum = 7;
            outputCell.innerText = currNum;
        }else{
            currNum = currNum * 10 + 7;
            outputCell.innerText = currNum;
        }
    }
    console.log('prevNum: ' + prevNum);
    console.log('currNum: ' + currNum);
    console.log('operator: ' + operator);
    console.log('');
});
eightBtn.addEventListener('click', ()=>{
    console.log('Eight Pressed');
    if(calculatorOff){
        calculatorOff = false;
        prevNum = 8;
        outputCell.innerText = prevNum;
    }
    else{
        if(operator == null){
            prevNum = prevNum * 10 + 8;
            outputCell.innerText = prevNum;
        }else if(currNum == null){
            currNum = 8;
            outputCell.innerText = currNum;
        }else{
            currNum = currNum * 10 + 8;
            outputCell.innerText = currNum;
        }
    }
    console.log('prevNum: ' + prevNum);
    console.log('currNum: ' + currNum);
    console.log('operator: ' + operator);
    console.log('');
});
nineBtn.addEventListener('click', ()=>{
    console.log('Nine Pressed');
    if(calculatorOff){
        calculatorOff = false;
        prevNum = 9;
        outputCell.innerText = prevNum;
    }
    else{
        if(operator == null){
            prevNum = prevNum * 10 + 9;
            outputCell.innerText = prevNum;
        }else if(currNum == null){
            currNum = 9;
            outputCell.innerText = currNum;
        }else{
            currNum = currNum * 10 + 9;
            outputCell.innerText = currNum;
        }
    }
    console.log('prevNum: ' + prevNum);
    console.log('currNum: ' + currNum);
    console.log('operator: ' + operator);
    console.log('');
});

// Clear and turn-off Button
    acBtn.addEventListener('click', ()=>{
        console.log('AC Button Pressed');
        outputCell.innerText = '';
        calculatorOff = true;
        prevNum = null;
        currNum = null;
        operator = null;
    });

// Operators
    // Sign Button
    signBtn.addEventListener('click', ()=>{
        console.log('Sign Button Pressed');
        if(currNum != null){
            currNum *= -1;
            outputCell.innerText = currNum;
        }else if(prevNum != null){
            prevNum *= -1;
            outputCell.innerText = prevNum;
        }
    });

    moduloBtn.addEventListener('click', ()=>{
        console.log('Module Button Pressed');
        if(operator == null){
            operator = '%';
        }else{
            let result = eval(prevNum+operator+currNum);
            prevNum = result;
            currNum = null;
            operator='%';
            outputCell.innerText = result;
        }
    });
    divideBtn.addEventListener('click', ()=>{
        console.log('Divide Button Pressed');
        if(operator == null){
            operator = '/';
        }else if(currNum!=null && currNum==0){
            outputCell
        }
        else{
            let result = eval(prevNum+operator+currNum);
            prevNum = result;
            currNum = null;
            operator='/';
            outputCell.innerText = result;
        }
    });
    multiplyBtn.addEventListener('click', ()=>{
        console.log('Multiply Buttn Pressed');
        if(operator == null){
            operator = '*';
        }else{
            let result = eval(prevNum+operator+currNum);
            prevNum = result;
            currNum = null;
            operator='*';
            outputCell.innerText = result;
        }
    });
    minusBtn.addEventListener('click', ()=>{
        console.log('Minus Button Pressed');
        if(operator == null){
            operator = '-';
        }else{
            let result = eval(prevNum+operator+currNum);
            prevNum = result;
            currNum = null;
            operator='-';
            outputCell.innerText = result;
        }
    });
    plusBtn.addEventListener('click', ()=>{
        console.log('Plus Button Pressed');
        if(operator == null){
            operator = '+';
        }else{
            let result = eval(prevNum+operator+currNum);
            prevNum = result;
            currNum = null;
            operator='+';
            outputCell.innerText = result;
        }
    });
    evalBtn.addEventListener('click', ()=>{
        let result = eval(prevNum + operator + currNum);
        outputCell.innerText = result;
        prevNum = result;
        currNum = null;
        operator = null;
        console.log('Eval Button Pressed');
    });
    dotBtn.addEventListener('click', ()=>{
        console.log('Decimal Point Button Pressed');
    });
