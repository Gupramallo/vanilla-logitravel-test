import { ACTIONS } from './constants.js'
import {
  getLocalStorageItems,
  setLocalStorageItems,
  setRevertLastAction,
} from './local-storage.js'

const itemContainer = document.querySelector('#item-container')
// eslint-disable-next-line no-restricted-syntax
let clickTimeout = null

const handleItemClick = (event) => {
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
    setLocalStorageItems(items)
    renderItems(items)
    clickTimeout = null
  }, 250)
}

const handleItemDoubleClick = (event) => {
  const clickedItem = event.target.closest('.item-block')
  if (!clickedItem) return

  if (clickTimeout) {
    clearTimeout(clickTimeout)
    clickTimeout = null
  }

  const clickedId = parseInt(clickedItem.dataset.id)
  const items = getLocalStorageItems()

  const updatedItems = items.filter((item) => item.id !== clickedId)
  const deletedItem = items.find((item) => item.id === clickedId)
  setLocalStorageItems(updatedItems)
  setRevertLastAction({ value: ACTIONS.delete, items: [deletedItem] })
  renderItems(updatedItems)
}

const renderItems = (itemsArray) => {
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

export { itemContainer, renderItems, handleItemClick, handleItemDoubleClick }
