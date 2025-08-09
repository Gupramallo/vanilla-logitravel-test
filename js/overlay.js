const overlay = document.querySelector('#add-item-card-overlay')
const openOverlayButton = document.querySelector('#open-overlay-button')
const closeOverlayButton = document.querySelector('#close-overlay-button')
const input = document.querySelector('#item-name')

const openOverlay = () => {
  overlay.classList.add('display-overlay')

  if (input) {
    input.focus()
  }
}

const closeOverlay = () => {
  input.value = ''
  overlay.classList.remove('display-overlay')
}

const handleOverlayClick = (event) => {
  const card = overlay.querySelector('.card')

  if (event.target === overlay && !card.contains(event.target)) {
    closeOverlay()
  }
}

export {
  overlay,
  openOverlayButton,
  closeOverlayButton,
  closeOverlay,
  openOverlay,
  handleOverlayClick,
}
