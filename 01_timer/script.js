var timerElement = document.getElementById("timer");

var time = 5;
timerElement.innerText = 'Time Left: ' + time;

function countdownTimer(){
    time = 6;
    buttonElement.innerText = 'Restart Timer';
    function timer(){
        timerElement.innerText = 'Time Left: ' + --time;
        if(time < 0){
            timerElement.innerText = '!!!Game Over';
            buttonElement.innerText = 'Start Timer Again';
            clearInterval(id);
        }
    }
    id = setInterval(timer, 1000);
};

var buttonElement = document.getElementById("btn");

buttonElement.innerText = 'Start Timer';

buttonElement.addEventListener("click", countdownTimer);

