const week_c = document.getElementById('week-c');
const day_c = document.getElementById('day-c');
const hour_c = document.getElementById('hour-c');
const min_c = document.getElementById('min-c');
const sec_c = document.getElementById('sec-c');
const finishedDate = new Date('1 Jan 2021');


function timerInit() {
    const currentDate = new Date();
    const seconds = Math.floor((finishedDate - currentDate) / 1000);
    const weekDiff = Math.floor((seconds / 3600 / 24) / 7);
    const dayDiff = Math.floor(seconds / (3600 * 24)) - (weekDiff * 7);
    const hourDiff = Math.floor(seconds / 3600) % 24;
    const minDiff = Math.floor((seconds / 60) % 60);
    const secDiff = Math.floor (seconds % 60)


    week_c.innerText = weekDiff;
    day_c.innerText = dayDiff;
    hour_c.innerText = hourDiff;
    min_c.innerText = formatTimer(minDiff);
    sec_c.innerText = formatTimer(secDiff);
    
}

function formatTimer(time) {
    if(time < 10) {
        return `0${time}`;
    }
    else {
        return time;
    }
}


setInterval(() => {
    timerInit();
}, 1000);