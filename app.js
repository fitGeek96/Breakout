//jshint esversion:9
const rulesBtnEl = document.getElementById('rules__btn');
const closeBtnEl = document.getElementById('close__btn');
const rulesEl = document.getElementById('rules');

// Rules and Close event handlers

rulesBtnEl.addEventListener('click', () => {
    rulesEl.classList.add('show');
});

closeBtnEl.addEventListener('click', () => {
    rulesEl.classList.remove('show');
});

