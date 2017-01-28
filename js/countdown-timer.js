function countdown() {

  var now = new Date();
  var eventDate = new Date(2017, 02, 03);
  var currentTime = now.getTime();
  var evenTime = eventDate.getTime();

  var remTime = evenTime - currentTime;

  var sec = Math.floor(remTime / 1000);
  var min = Math.floor(sec / 60);
  var hur = Math.floor(min / 60);
  var day = Math.floor(hur / 24);

   hur %= 24;
   min %= 60;
   sec %= 60;

  hur = (hur < 10) ? "0" + hur : hur;
  min = (min < 10) ? "0" + min : min;
  sec = (sec < 10) ? "0" + sec : sec;

  document.querySelector("#days").innerText = day;
  document.querySelector("#hours").innerText = hur;
  document.querySelector("#minutes").innerText = min;
  document.querySelector("#seconds").innerText = sec;

  setTimeout(countdown, 1000);
  
}

countdown();
