var countdownDate = new Date().getTime() + 14 * 60 * 60 * 24 * 1000;

var x = setInterval (function () {
    var now = new Date().getTime();
    console.log(now);
    var distance = countdownDate - now;
    console.log("distance", distance);
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    var element_days = document.getElementById("days");
    element_days.textContent = days.toString();
    var element_hours = document.getElementById("hours");
    element_hours.textContent = hours.toString();
    var element_minutes = document.getElementById("minutes");
    element_minutes.textContent = minutes.toString();
    var element_seconds = document.getElementById("seconds");
    element_seconds.textContent = seconds.toString();

    if (distance < 0) {
        clearInterval(x);
        element_days = "0";
        element_hours = "0";
        element_minutes = "0";
        element_seconds = "0";
    }
}, 1000);