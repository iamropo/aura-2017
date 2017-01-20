(function loadCountDownTimer () {
  
  var deadline = new Date("2017/03/02");

  function updateClock(){

    var today = Date();
    var diff = Date.parse(deadline) - Date.parse(today);

    if (diff <= 0){
      clearInterval(interval);
    } else {

      var seconds = Math.floor((diff/1000)%60);
      var minutes = Math.floor((diff/1000/60)%60);
      var hours = Math.floor((diff/1000/60/60)%24);
      var days = Math.floor(diff/(1000*60*60*24)%30.5);
      var months = Math.floor(diff/(1000*60*60*24*30.5)%12);

      document.querySelector("#months").innerText = ('0'+ months).slice(-2);
      document.querySelector("#days").innerText = ('0'+days).slice(-2);
      document.querySelector("#hours").innerText = ('0'+hours).slice(-2);
      document.querySelector("#minutes").innerText = ('0'+minutes).slice(-2);
      document.querySelector("#seconds").innerText = ('0'+seconds).slice(-2);
    
    }

  }
  
 var interval = setInterval(updateClock, 1000);
  
})();
