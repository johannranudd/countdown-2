const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  const weekdays = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];

const giveaway = document.querySelector('.giveaway');
const countDownContainer = document.querySelector('.countdown-container');

const futureDate = new Date(2021, 6, 15, 19, 55);

const year = futureDate.getFullYear();
let month = futureDate.getMonth();
month = months[month];
const day = futureDate.getDay();
const weekday = weekdays[futureDate.getDay()];
const hour = futureDate.getHours();
const minutes = futureDate.getMinutes();

giveaway.textContent = `Giveaway Ends On ${weekday}, ${day} ${month} 
${year} ${hour}:0${minutes}pm`;

// print to DOM
const futureDateTime = futureDate.getTime();

function setTime() {
    setInterval(function() {
        const today = new Date().getTime();

        let distance = futureDateTime - today;
        // console.log(distance);
        let daysLeft = Math.floor(distance / (1000 * 60 * 60 * 24));
        let hoursLeft = Math.floor(distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
        let minutesLeft = Math.floor(distance % (1000 * 60 * 60) / (1000 * 60));
        let secondsLeft = Math.floor(distance % (1000 * 60) / (1000));
        
        countDownContainer.innerHTML = `<div class="countdown-box">
        <h3>${daysLeft}</h3>
        <p>DAYS</p>
    </div>
    <div class="countdown-box">
        <h3>${hoursLeft}</h3>
        <p>HOURS</p>
    </div>
    <div class="countdown-box">
        <h3>${minutesLeft}</h3>
        <p>MINS</p>
    </div>
    <div class="countdown-box">
        <h3>${secondsLeft}</h3>
        <p>SECS</p>
    </div>`;

    if (distance <= 0) {
        futureDate.setDate(today.getDate() + 1);
    }
    }, 1000)
}

// window.addEventListener("DOMContentLoaded", function() {
//     setInterval(function() {
//         setTime();
//     }, 1)
// })

setTime();

