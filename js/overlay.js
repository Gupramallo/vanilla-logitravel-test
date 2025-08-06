const overlay = document.querySelector('#add-item-card-overlay')

const openOverlay = () => {
  overlay.classList.add('display-overlay')
}

const closeOverlay = () => {
  overlay.classList.remove('display-overlay')
}

const handleOverlayClick = (event) => {
  const overlay = document.querySelector('#add-item-card-overlay')
  const card = overlay.querySelector('.card')

  if (event.target === overlay && !card.contains(event.target)) {
    closeOverlay()
  }
}

export { overlay, closeOverlay, openOverlay, handleOverlayClick }
