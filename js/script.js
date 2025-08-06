import {
  overlay,
  openOverlay,
  closeOverlay,
  handleOverlayClick,
} from './overlay.js'

const items = [
  { id: 1, name: 'Item 1', selected: true },
  { id: 2, name: 'Item 2', selected: false },
  { id: 3, name: 'Item 3', selected: false },
  { id: 4, name: 'Item 4', selected: false },
]
const addButton = document.querySelector(
  '#open-overlay-card'
)
const deleteButton = document.querySelector(
  '#delete-button'
)
const cancelButton = document.querySelector(
  '#cancel-button'
)

function renderItems(itemsArray) {
  const itemContainer = document.querySelector(
    '#item-container'
  )

  itemContainer.innerHTML = ''

  itemsArray.forEach((item) => {
    const itemBlock = document.createElement('div')
    itemBlock.className = item.selected
      ? 'item-block item-block-selected'
      : 'item-block'
    itemBlock.dataset.id = item.id

    const paragraph = document.createElement('p')
    paragraph.textContent = item.name

    itemBlock.appendChild(paragraph)

    itemBlock.addEventListener('click', () => {
      itemsArray.forEach((i) => (i.selected = false))

      item.selected = true

      renderItems(itemsArray)
    })

    itemContainer.appendChild(itemBlock)
  })
}

// Function to add a new item
function addItem() {
  const newId =
    Math.max(...items.map((item) => item.id)) + 1
  const newItem = {
    id: newId,
    name: `Item ${newId}`,
    selected: false,
  }
  items.push(newItem)
  renderItems(items)
}

function deleteSelectedItem() {
  const selectedIndex = items.findIndex(
    (item) => item.selected
  )

  if (selectedIndex !== -1) {
    items.splice(selectedIndex, 1)

    if (items.length > 0) {
      items[0].selected = true
    }
    renderItems(items)
  }
}

document.addEventListener('DOMContentLoaded', () => {
  renderItems(items)

  addButton.addEventListener('click', openOverlay)
  deleteButton.addEventListener('click', deleteSelectedItem)
  cancelButton.addEventListener('click', closeOverlay)
  overlay.addEventListener('click', handleOverlayClick)
})
