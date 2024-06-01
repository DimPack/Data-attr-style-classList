'use strict';


const buttons = document.querySelectorAll('.btn');
const blockFlexDirection = document.querySelector('.block-item')
const items = document.querySelectorAll('.item');

function maxWidthDependingDirection(direction) {
    const maxWidth = (direction === 'column' || direction === 'column-reverse') ? '100%' : '30px';
    items.forEach(item=> item.style.setProperty('max-width', maxWidth));
    
    blockFlexDirection.style.setProperty('flex-direction',`${direction}`);
}

function activeButtonClick(event) {
    buttons.forEach(button => button.classList.remove('active'));
    event.target.classList.add('active');
    const direction = event.target.dataset.key;

    maxWidthDependingDirection(direction);
}


if (buttons.length > 0) {
    buttons[0].classList.add('active');
}

buttons.forEach(button => {
    button.addEventListener('click', activeButtonClick);
})