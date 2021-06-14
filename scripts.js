var negBtn = document.querySelector("#neg");
var posBtn = document.querySelector("#pos");
var input = document.querySelector("#qty");

negBtn.addEventListener("click", () => {
  input.innerHTML = input.value - 1;
});

negBtn.addEventListener("click", () => {
  input.innerHTML = input.value + 1;
});

function increment() {
  document.getElementById("demoInput").stepUp();
}
function decrement() {
  document.getElementById("demoInput").stepDown();
}
