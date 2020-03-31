// Play sound
const playSound = (event) => {
  const audio = document.querySelector(`audio[data-key="${event.code}"]`);
  const key = document.querySelector(`.key[data-key="${event.code}"]`);

  if (!audio) return;
  audio.currentTime = 0; // Rewinds audio clip to start to allow multiple hits
  audio.play();
  key.classList.add('playing');
}


// Removes 'playing' class 
function removeTransition(event) {
  if (event.propertyName !== 'transform') return; // skip if its not a transform

  this.classList.remove('playing');
};

const keys = document.querySelectorAll('.key');

keys.forEach((key) => {
  key.addEventListener('transitionend', removeTransition);
})


// Fires audio elements on key down
window.addEventListener('keydown', playSound)
