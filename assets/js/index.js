'use strict';


const buttons = document.querySelectorAll('.btn');


function activeButtonClick(event) {
    buttons.forEach(button => button.classList.remove('active'));
    event.target.classList.add('active');  
}
if (buttons.length > 0) {
    buttons[0].classList.add('active');
}

buttons.forEach(button => {
    button.addEventListener('click', activeButtonClick);
})