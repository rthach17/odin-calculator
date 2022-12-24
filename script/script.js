const inputWrapper = document.getElementById('input-wrapper');
inputWrapper.addEventListener("click", event => {
  if (event.target.nodeName == "BUTTON") {
    let button = event.target.textContent;
    if (button === "DEL") console.log("Backspace");
    else if (button === "AC") console.log("Clear");
    else console.log(button);
  }
})

const inputs = document.querySelectorAll('button');
document.addEventListener("keydown", event => {
  if(event.repeat) return;
  event.preventDefault();
  let button = document.getElementById(event.key);
  if (button) console.log(button.textContent);
  return;
});

