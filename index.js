const container = document.querySelectorAll(".num");

console.log(container);

for (let i = 0; i < container.length; i++) {
  container[i].style.transform = `translate(0px, -120px) rotate(${i * 6}deg)`;
  if (i % 5 === 0) {
    container[i].style.borderTop = "15px solid #3a393c";
  }
}

const minHand = document.querySelector(".needle-min");
const secHand = document.querySelector(".needle-sec");
const hourHand = document.querySelector(".needle-hour");

let hr = 0;
let min = 0;
let sec = 0;
function timer() {
  setInterval(() => {
    sec += 1;
    min = (sec - (sec % 60)) / 60;
    hr = (min - (min % 60)) / 60;
    console.log(sec, min, hr);
    secHand.style.transform = `translate(0px, -110px) rotate(${
      (sec % 60) * 6
    }deg)`;
    minHand.style.transform = `translate(0px, -120px)  rotate(${
      (min % 60) * 6
    }deg)`;
    hourHand.style.transform = `translate(0px, -70px) rotate(${
      (hr % 60) * 6
    }deg)`;
  }, 1000);
}
timer();
