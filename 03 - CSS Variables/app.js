console.log('hello!')

const inputs = document.querySelectorAll('.controls input');

function handleUpdate() {
  const suffix = this.dataset.sizing || '';
  document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix)
}

// 'change' listener for color wheel
inputs.forEach((input) => {
  input.addEventListener('change', handleUpdate)
})

// 'mousemove' listener for range input
inputs.forEach((input) => {
  input.addEventListener('mousemove', handleUpdate)
})
