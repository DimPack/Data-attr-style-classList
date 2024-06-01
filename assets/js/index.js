'use strict';


const buttons = document.querySelectorAll('.btn');
const blockFlexDirection = document.querySelector('.block-item')
const items = document.querySelectorAll('.item');


function activeButtonClick(event) {
    buttons.forEach(button => button.classList.remove('active'));
    event.target.classList.add('active');
    console.log(event.target.dataset.key);
    blockFlexDirection.style.setProperty('flex-direction',`${event.target.dataset.key}`);
    if (event.target.dataset.key === 'column' || event.target.dataset.key === 'column-reverse') {
        items.forEach(item=> item.style.setProperty('max-width','100%'));
    } else {
        items.forEach(item=> item.style.setProperty('max-width','30px'));
    }
}
if (buttons.length > 0) {
    buttons[0].classList.add('active');
    console.log(buttons[0].dataset.key);
}

buttons.forEach(button => {
    button.addEventListener('click', activeButtonClick);
})