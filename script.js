let digitalElement = document.querySelector('.digital');
let sElement = document.querySelector('.p_s');
let mElement = document.querySelector('.p_m');
let hElement = document.querySelector('.p_h');

function updadeClock() {
    let now = new Date();
    let hour = now.getHours();
    let minute = now.getMinutes();
    let second = now.getSeconds();
    let day = now.getDate();
    let mes = now.getMonth()+1;
    let ano = now.getFullYear();

    digitalElement.innerHTML = `${fixZero(hour)}:${fixZero(minute)}:${fixZero(second)}: ${dataZero(day)}/${dataZero(mes)}/${dataZero(ano)}`;
    let sDeg = (360 / 60) * (second) - 90;
    let mDeg = (360 / 60) * (minute) - 90;
    let hDeg = (360 / 12) * (hour) - 90;
    sElement.style.transform = `rotate(${sDeg}deg)`;
    mElement.style.transform = `rotate(${mDeg}deg)`;
    hElement.style.transform = `rotate(${hDeg}deg)`;


}

function fixZero(time) {
    if (time < 10) {
        return '0' + time;
    } else {
        return time;
    }
}

function dataZero(data) {
    if( data < 10) {
        return '0'+ data;
    } else{
        return data
    }
}

setInterval(updadeClock, 1000);
updadeClock();