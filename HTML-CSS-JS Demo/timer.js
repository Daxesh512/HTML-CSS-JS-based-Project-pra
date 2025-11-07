const display = document.querySelector('#display')
const reset = document.querySelector('#reset')
const start = document.querySelector('#start')
const pause = document.querySelector('#pause')


let [hour, minute, second] = [0, 0, 0];

const displayTime = (hour, minute, second) => {
     let s = second < 10 ? "0" + second : second;
     let m = minute < 10 ? "0" + minute : minute;
     let h = hour < 10 ? "0" + hour : hour;

     display.innerText = h + ":" + m + ":" + s;
}
let id = null

start.addEventListener('click', () => {
     id = setInterval(() => {
          second++;
          console.log(second);
          if (second === 60) {
               minute++;
               second = 0;
               if (minute === 60) {
                    hour++;
                    minute = 0;
               }
          }
          displayTime(hour, minute, second)
     }, 1000);
})

pause.addEventListener('click', () => {
     clearInterval(id);

})
reset.addEventListener('click', () => {
     clearInterval(id);
     [hour, minute, second] = [0, 0, 0]
     displayTime[hour, minute, second]
})