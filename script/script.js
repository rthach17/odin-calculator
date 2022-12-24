const inputs = document.querySelectorAll('button');
document.addEventListener("keydown", event => {
  if(event.repeat) return;
  event.preventDefault();
  
  for (const input of inputs) {
    if (event.key === input.textContent || event.key === input.className) {
      console.log(event.key);
      return;
    }
  }
  return;
});

const inputWrapper = document.getElementById('input-wrapper');
inputWrapper.addEventListener("click", event => {
  if (event.target.nodeName == "BUTTON") {
    let button = event.target.textContent;
    if (button === "DEL") console.log("Backspace");
    else if (button === "AC") console.log("Clear");
    else console.log(button);
  }
})