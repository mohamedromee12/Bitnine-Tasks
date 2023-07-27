function myDigitalClock() {
  var d1 = new Date();
  var hours = d1.getHours(); // 0 - 23
  var minutes = d1.getMinutes(); // 0 - 59
  var seconds = d1.getSeconds(); // 0 - 59
  var zone = "AM";

  // Add leading zeros to hours, minutes, and seconds if they are less than 10
  hours = hours < 10 ? "0" + hours : hours;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;

  // Determine if it's AM or PM
  if (hours >= 12) {
    zone = "PM";
    hours = hours == 12 ? "12" : String(hours % 12);
  } else {
    hours = hours == 0 ? "12" : String(hours);
  }

  
  console.log(hours + ":" + minutes + ":" + seconds + " " + zone);

  // Update the digital clock every second
  setTimeout(myDigitalClock, 1000);
}


myDigitalClock();
