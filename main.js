const timer = document.getElementById("timer");
const start = document.getElementById("start");
const stop = document.getElementById("stop");
const reset = document.getElementById("reset");

let elapsed = 0;

let intervalId = null;

function updateTime(){
   const ms = elapsed%1000;
   const s = Math.floor(elapsed / 1000) % 60;
   const m = Math.floor(elapsed / (1000 * 60)) % 60;
   const h = Math.floor(elapsed / (1000 * 60 * 60));
   
   const msStr = ms.toString().padStart(1,`0`);
   const sStr = s.toString().padStart(1,`0`);
   const mStr = m.toString().padStart(1,`0`);
   const hStr = h.toString().padStart(1,`0`);
   
   timer.innerHTML = `${hStr}:${mStr}:${sStr}:${msStr}`;
}
   
start.addEventListener('click',function(e){
   $("#start").prop('disabled', true);
   $("#stop, #reset").prop('disabled', false);
   if(intervalId !== null){return;}
   let pre = new Date();
   intervalId = setInterval(function(){
      const now = new Date();
      elapsed += now - pre;
      pre = now;
      updateTime();
      },10);
   });

stop.addEventListener('click',function(e){
   $("#stop").prop('disabled', true);
   $("#start, #reset").prop('disabled', false);
   clearInterval(intervalId);
   intervalId = null;
});

reset.addEventListener('click',function(e){
   $("#reset,#stop").prop('disabled', true);
   $("#start").prop('disabled', false);
   elapsed = 0;
   updateTime();
});