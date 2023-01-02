"use strict";

var toggleButton = document.getElementById('switchBox');
var darkMode = false;

toggleButton.addEventListener('click', (e)=>{
    if(!darkMode){
        text.style.color = 'white';
        mainBox.style.backgroundColor = 'black';
        switchBox.style.backgroundColor = 'white';
        switchBox.style.paddingRight = '3px';
        // switchBox.style.border = '1px solid white';
        // switchCircle.style.margin-right = '100px';
        switchCircle.style.position="relative";
        switchCircle.style.float ="right";
        // switchCircle.style.transitionDuration='10s';
        darkMode = true;
    }
    else{
        text.style.color = 'black';
        mainBox.style.backgroundColor = 'white';
        switchBox.style.backgroundColor = 'white';
        switchBox.style.border = '2px solid black';
        switchCircle.style.position="relative";
        switchCircle.style.float ="left";
        // switchCircle.style.transitionDuration='10s';

        darkMode = false;
    }
});
