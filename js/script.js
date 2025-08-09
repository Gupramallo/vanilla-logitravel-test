import { setNewItem, getLocalStorageItems } from './local-storage.js'
import {
  overlay,
  openOverlay,
  closeOverlay,
  handleOverlayClick,
} from './overlay.js'

const openOverlayButton = document.querySelector('#open-overlay-card')
const addButton = document.querySelector('#add-item-button')
const deleteButton = document.querySelector('#delete-button')
const cancelButton = document.querySelector('#cancel-button')
const itemContainer = document.querySelector('#item-container')

let clickTimeout = null

function renderItems(itemsArray) {
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
    itemContainer.appendChild(itemBlock)
  })
}

function handleItemClick(event) {
  const clickedItem = event.target.closest('.item-block')
  if (!clickedItem) return

  if (clickTimeout) {
    clearTimeout(clickTimeout)
    clickTimeout = null

    return
  }

  clickTimeout = setTimeout(() => {
    const clickedId = parseInt(clickedItem.dataset.id)
    const items = getLocalStorageItems()

    const itemClicked = items.find((item) => item.id === clickedId)
    if (!itemClicked) {
      return
    }

    itemClicked.selected = !itemClicked.selected
    localStorage.setItem('items', JSON.stringify(items))
    renderItems(items)
    clickTimeout = null
  }, 200)
}

const handleDeleteDoubleClick = (event) => {
  const clickedItem = event.target.closest('.item-block')
  if (!clickedItem) return

  if (clickTimeout) {
    clearTimeout(clickTimeout)
    clickTimeout = null
  }

  const clickedId = parseInt(clickedItem.dataset.id)
  const items = getLocalStorageItems()

  const updatedItems = items.filter((item) => item.id !== clickedId)
  localStorage.setItem('items', JSON.stringify(updatedItems))
  renderItems(updatedItems)
}

function deleteSelectedItems() {
  const items = getLocalStorageItems()
  const selectedItems = items.filter((item) => item.selected)

  if (selectedItems.length === 0) {
    return
  }

  const updatedItems = items.filter((item) => !item.selected)
  localStorage.setItem('items', JSON.stringify(updatedItems))
  renderItems(updatedItems)
}

const addItem = () => {
  const input = document.querySelector('#item-name')
  const inputValue = input.value.trim()

  if (!inputValue) {
    return
  }

  setNewItem(inputValue)
  input.value = ''
  renderItems(getLocalStorageItems())
  closeOverlay()
}

document.addEventListener('DOMContentLoaded', () => {
  renderItems(getLocalStorageItems())

  openOverlayButton.addEventListener('click', openOverlay)
  deleteButton.addEventListener('click', deleteSelectedItems)
  cancelButton.addEventListener('click', closeOverlay)
  overlay.addEventListener('click', handleOverlayClick)
  addButton.addEventListener('click', addItem)
  itemContainer.addEventListener('click', handleItemClick)
  itemContainer.addEventListener('dblclick', handleDeleteDoubleClick)
})
