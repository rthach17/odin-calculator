const inputWrapper = document.getElementById('input-wrapper');
const inputs = document.querySelectorAll('button');
const display = document.querySelector('p.display');

// Button Input
inputWrapper.addEventListener("click", event => {
  if (event.target.nodeName == "BUTTON") {
    display.textContent = event.target.textContent;
    }
})

// Keyboard Input
document.addEventListener("keydown", event => {
  if(event.repeat) return;
  event.preventDefault();
  let button = document.querySelector(`[class*="${event.key}"]`) || 
               document.querySelector(`[class*="${event.code}"]`);
  if (button) button.click();
  return;
});

