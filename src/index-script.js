'use strict';

const startTimeEle = document.getElementById('start-time');
console.log(startTimeEle);

document.getElementById('add-activity').addEventListener('click', () => {
    console.log(startTimeEle.value);
    console.log(typeof(startTimeEle.textContent));
});

