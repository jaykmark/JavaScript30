console.log('hello world');

window.addEventListener('keyup', (event) => {
  console.log(event.code);
  const audio = document.querySelector(`audio[data-key="${event.code}"]`);
  console.log(audio);
})

window.addEventListener("keydown", function (event) {
  let str = "KeyboardEvent: key='" + event.key + "' | code='" +
    event.code + "'";
  console.log(str);
}, true);