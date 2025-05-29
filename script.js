const htmlHours = document.getElementById("hours");
const htmlMinutes = document.getElementById("minutes");
const htmlSeconds = document.getElementById("seconds");

const counter = document.getElementById("counter");
const header = document.getElementById("header-title");

let intervalID;

const stopInterval = () => { clearInterval(intervalID) };

const formatTime = (num) => String(num).padStart(2, "0");

const getCurrentTime = () => {
    const currentDate = new Date();
    currentDate.setHours(currentDate.getHours() - 1);
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    const day = currentDate.getDate();

    const targetTime = new Date(year, month, day, 22, 0, 0);

    const difference = targetTime - currentDate;

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