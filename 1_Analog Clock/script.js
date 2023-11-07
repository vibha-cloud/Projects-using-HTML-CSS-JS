let hour = document.getElementById("hour");
let minute = document.getElementById("minute");
let second = document.getElementById("second");

setInterval(() => {
  let date = new Date();
  let h = date.getHours();
  let m = date.getMinutes();
  let s = date.getSeconds();

  let hour_rotation = 30 * h + m / 2;
  let minute_rotation = 6 * m;
  let second_rotation = 6 * s;

  hour.style.transform = `rotate(${hour_rotation}deg)`;
  minute.style.transform = `rotate(${minute_rotation}deg)`;
  second.style.transform = `rotate(${second_rotation}deg)`;
}, 1000);
