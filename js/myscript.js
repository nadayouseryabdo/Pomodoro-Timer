var startWork = document.getElementById("startwork");
var startBreak = document.getElementById("startbreak");
var resumeWork = document.getElementById("resumework");
var endWork = document.getElementById("endwork");
var hour = 0,
      min = 0,
      sec = 0,
      hour1 = 0,
      sec1 = 0,
      min1 = 0;
var time = "0" + hour + ":" + "0" + min + ":" + "0" + sec;
var time1 = "0" + hour1 + ":" + "0" + min1 + ":" + "0" + sec1;
document.getElementById("worktime").innerText = time;
document.getElementById("workbreak").innerText = time1;

var timer;
var timer2;


function startingWork() {
      clearTimeout(timer);
      clearTimeout(timer2);
      sec++;
      if (sec > 59) {
            sec = 0;
            min++;
      }
      if (min > 59) {
            min = 0;
            hour++;
      }
      var s = sec < 10 ? "0" + sec : sec;
      var m = min < 10 ? "0" + min : min;
      var h = hour < 10 ? "0" + hour : hour;
      var wtime = h + ":" + m + ":" + s;
      document.getElementById("worktime").innerText = wtime;
      timer = setTimeout(function () {
            startingWork()
      }, 1000);
};
startWork.addEventListener("click", startingWork);

function startingBreak() {
      clearTimeout(timer);
      clearTimeout(timer2);

      sec1++;
      if (sec1 > 59) {
            sec1 = 0;
            min1++;
      }
      if (min1 > 59) {
            min1 = 0;
            hour1++;
      }
      var s1 = ((sec1 < 10) ? ("0" + sec1) : sec1);
      var m1 = min1 < 10 ? "0" + min1 : min1;
      var h1 = hour1 < 10 ? "0" + hour1 : hour1;

      var btime = h1 + ":" + m1 + ":" + s1;
      document.getElementById("workbreak").innerText = btime;
      timer2 = setTimeout(function () {
            startingBreak()
      }, 1000);
};


resumeWork.addEventListener("click", function () {
      clearTimeout(timer2);
      startingWork();
});

endWork.addEventListener("click", function () {
      clearTimeout(timer);
      var s = 0,
            m = 0,
            h = 0;
      document.getElementById("worktime").innerHTML = "0" + h + ":0" + m + ":0" + s;
      clearTimeout(timer2);
      document.getElementById("workbreak").innerHTML = "0" + h + ":0" + m + ":0" + s;
});

