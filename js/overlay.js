const overlay = document.querySelector('#add-item-card-overlay')

const openOverlay = () => {
  overlay.classList.add('display-overlay')
  const input = document.querySelector('#item-name')

  if (input) {
    input.focus()
  }
}

const closeOverlay = () => {
  overlay.classList.remove('display-overlay')
}

const handleOverlayClick = (event) => {
  const card = overlay.querySelector('.card')

  if (event.target === overlay && !card.contains(event.target)) {
    closeOverlay()
  }
}

export { overlay, closeOverlay, openOverlay, handleOverlayClick }
