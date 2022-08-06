function elapsedTime() {
    const startDate = new Date('August 4, 2022 23:00:00');
    const endDate = new Date();
    let msDateDiff = endDate - startDate;
    return msDateDiff;
}

function getUnit (pool, unit, upUnit) {
    return Math.floor((pool % upUnit) / unit);
}

function updateTime(el, elapsedTime) {
    let elTime = elapsedTime();
    let milis = elTime % cr.msPerSec;
    let seconds = getUnit(elTime, cr.msPerSec, cr.msPerMin);
    let minutes = getUnit(elTime, cr.msPerMin, cr.msPerHour);
    let hours = getUnit(elTime, cr.msPerHour, cr.msPerDay);
    let days = getUnit(elTime, cr.msPerDay, cr.msPerWeek);
    let weeks = Math.floor(elTime / cr.msPerWeek);
    el.innerText = `${weeks}:${days}:${hours}:${minutes}:${seconds}:${milis}`;
}

const cr = {
    msPerSec: 1000,
    secondsPerMinute: 60,
    minutesPerHour: 60,
    hoursPerDay: 24,
    daysPerWeek: 7,
    msPerWeek: 7 * 24 * 60 * 60 * 1000,
    msPerDay: 24 * 60 * 60 * 1000,
    msPerHour: 60 * 60 * 1000,
    msPerMin: 60000,
}

const timeElPara = document.getElementById("elapsed-time-para");

setInterval(updateTime, 50, timeElPara, elapsedTime);