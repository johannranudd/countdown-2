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

let futureDate = new Date(2021, 6, 16, 11, 45, 0);

function givawayTextFn() {
    const year = futureDate.getFullYear();
    let month = futureDate.getMonth();
    month = months[month];
    const day = futureDate.getDate();
    const weekday = weekdays[futureDate.getDay()];
    const hour = futureDate.getHours();
    const minutes = futureDate.getMinutes();
    
    giveaway.textContent = `Giveaway Ends On ${weekday}, ${day} ${month} 
    ${year} ${hour}:${minutes}pm`;
}
givawayTextFn();

    


// print to DOM
function setTime() {
    setInterval(function() {
        const today = new Date().getTime();

        let distance = futureDate.getTime() - today;

        let daysLeft = Math.floor(distance / (1000 * 60 * 60 * 24));
        let hoursLeft = Math.floor(distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
        let minutesLeft = Math.floor(distance % (1000 * 60 * 60) / (1000 * 60));
        let secondsLeft = Math.floor(distance % (1000 * 60) / (1000));
        
            if (distance < 0) {
                futureDate.setDate(new Date().getDate() + 9);
                givawayTextFn();
            }
        
        

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

    }, 1000)
}

window.addEventListener("DOMContentLoaded", function() {
    setInterval(function() {
        setTime();  
    }, 1)
})

// setTime();

