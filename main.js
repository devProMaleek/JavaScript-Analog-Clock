// Initialize the variables(constants)
const secondHand = document.querySelector('.second-hand');
const minsHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');
let selectTimezone = document.getElementById('tz');


// Timezone Array.
let my_timezones = [
    'Africa/Lagos',
    'Africa/Abidjan',

]

// Add all the values in the array to a select element.
for(let i = 0; i < my_timezones.length; i++){
    addOption(document.f1.tz, my_timezones[i], my_timezones[i])
}
// Add option function.
function addOption(selectBox, text, value){
    let optn = document.createElement('OPTION')
    optn.text = text
    optn.value = value
    selectBox.options.add(optn)
}

// Date function
function setTimezoneDate(){
    // Timezone selected.
    let tz = selectTimezone.options[selectTimezone.selectedIndex].value;
    // Changing the present timezone to the selected timezone.
    let dateTime2 = new Date();
    let str2 = new Date(dateTime2.toLocaleString('en-US', {timeZone:tz}));
    // Get the difference in timezone.
    let diffTimezone = dateTime2.getTime() - str2.getTime();
    // Get the new converted datetime.
    let convertedDateTime = new Date(dateTime2.getTime() - diffTimezone);
    console.log(convertedDateTime);
    // How the seconds hand will rotate.
    const seconds = convertedDateTime.getSeconds();
    const secondsDegrees =  ((seconds / 60) * 360) + 90;
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
    // How the minute hand will rotate.
    const mins = convertedDateTime.getMinutes();
    const minsDegrees = ((mins / 60) * 360) + ((seconds / 60) * 6) + 90;
    minsHand.style.transform = `rotate(${minsDegrees}deg)`;

    // How the hour hand will rotate
    const hour = convertedDateTime.getHours();
    const hourDegrees = ((hour / 12) * 360) + ((mins / 60) * 30) + 90;
    hourHand.style.transform = `rotate(${hourDegrees}deg)`;
}

// Set Interval
setInterval(setTimezoneDate, 1000);
