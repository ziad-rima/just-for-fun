const htmlHours = document.getElementById("hours");
const htmlMinutes = document.getElementById("minutes");
const htmlSeconds = document.getElementById("seconds");

const counter = document.getElementById("counter");
const header = document.getElementById("header-title");

let intervalID;

const stopInterval = () => { clearInterval(intervalID) };

const formatTime = (num) => String(num).padStart(2, "0");

const getCurrentTime = () => {
    const now = new Date();

    const currentUTC = new Date(Date.UTC(
        now.getUTCFullYear(),
        now.getUTCMonth(),
        now.getUTCDate(),
        now.getUTCHours(),
        now.getUTCMinutes(),
        now.getUTCSeconds()
    ));

    const targetUTC = new Date(Date.UTC(
        now.getUTCFullYear(),
        now.getUTCMonth(),
        now.getUTCDate(),
        21, 0, 0
    ));

    const difference = targetUTC - currentUTC;

    if (difference <= 0) {
        stopInterval();
        counter.innerHTML = `
            <h1 class="timeup">خلاص الوقت يا بسيطة</h1>
            <p class="timeup2">😏 اجري تبعثي اجري</p>
        `
        header.innerHTML = "";
    } else {
        const hours = Math.floor(difference / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        htmlHours.innerText = formatTime(hours);
        htmlMinutes.innerText = formatTime(minutes);
        htmlSeconds.innerText = formatTime(seconds);
    }
}

intervalID = setInterval(getCurrentTime, 1000);

getCurrentTime();