// Initialize the variables(constants)
const secondHand = document.querySelector('.second-hand');
const minsHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

// Date function
function setDate(){
    const now = new Date();

    // How the seconds hand will rotate.
    const seconds = now.getSeconds();
    const secondsDegrees =  ((seconds / 60) * 360) + 90;
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

    // How the minute hand will rotate.
    const mins =now.getMinutes();
    const minsDegrees = ((mins / 60) * 360) + ((seconds / 60) * 6) + 90;
    minsHand.style.transform = `rotate(${minsDegrees}deg)`;

    // How the hour hand will rotate
    const hour = now.getHours();
    const hourDegrees = ((hour / 12) * 360) + ((mins / 60) * 30) + 90;
    hourHand.style.transform = `rotate(${hourDegrees}deg)`;
}

// Set Interval
setInterval(setDate, 1000);

setDate();