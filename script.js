function elapsedTime() {
    const startDate = new Date('August 4, 2022 23:00:00');
    const endDate = new Date();
    let msDateDiff = endDate - startDate;
    return msDateDiff;
}

function getUnit (pool, unit, upUnit) {
    return Math.floor((pool % upUnit) / unit);
}

function zeroPad (num, width) {
    let n = Math.abs(num);
    let zeroes = Math.max(0, width - Math.floor(n).toString().length);
    let zeroString = Math.pow(10, zeroes).toString().substring(1);
    if (num < 0) {
        zeroString = '-' + zeroString;
    }
    return zeroString+n;
}

function updateTime(el, elapsedTime) {
    let elTime = elapsedTime();
    let milis = zeroPad(elTime % cr.msPerSec,3);
    let seconds = zeroPad(getUnit(elTime, cr.msPerSec, cr.msPerMin),2);
    let minutes = zeroPad(getUnit(elTime, cr.msPerMin, cr.msPerHour),2);
    let hours = zeroPad(getUnit(elTime, cr.msPerHour, cr.msPerDay),2);
    let days = zeroPad(getUnit(elTime, cr.msPerDay, cr.msPerWeek),2);
    let weeks = zeroPad(Math.floor(elTime / cr.msPerWeek), 2);
    el.innerText = `${weeks}w:${days}d:${hours}h:${minutes}m:${seconds}s:${milis}ms`;
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