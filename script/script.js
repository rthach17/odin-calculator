const inputWrapper = document.getElementById('input-wrapper');
inputWrapper.addEventListener("click", event => {
  if (event.target.nodeName == "BUTTON") {
    let button = event.target.textContent;
    console.log(button);
  }
})

const inputs = document.querySelectorAll('button');
document.addEventListener("keydown", event => {
  if(event.repeat) return;
  event.preventDefault();
  let button = document.querySelector(`[class*="${event.key}"]`) || 
               document.querySelector(`[class*="${event.code}"]`);
  if (button) console.log(button.textContent);
  return;
});

