import { addButton, handleAddItem } from './buttons/add-item-button-actions.js'
import {
  deleteSelectedItems,
  deleteButton,
} from './buttons/delete-button-actions.js'
import {
  revertButton,
  handleRevertAction,
} from './buttons/revert-button-actions.js'
import {
  itemContainer,
  renderItems,
  handleItemClick,
  handleItemDoubleClick,
} from './handle-items.js'
import { getLocalStorageItems } from './local-storage.js'
import {
  overlay,
  openOverlayButton,
  openOverlay,
  closeOverlay,
  closeOverlayButton,
  handleOverlayClick,
} from './overlay.js'

document.addEventListener('DOMContentLoaded', () => {
  renderItems(getLocalStorageItems())

  // Overlay
  openOverlayButton.addEventListener('click', openOverlay)
  overlay.addEventListener('click', handleOverlayClick)

  // Buttons
  addButton.addEventListener('click', handleAddItem)
  deleteButton.addEventListener('click', deleteSelectedItems)
  closeOverlayButton.addEventListener('click', closeOverlay)
  revertButton.addEventListener('click', handleRevertAction)

  // Item Container
  itemContainer.addEventListener('click', handleItemClick)
  itemContainer.addEventListener('dblclick', handleItemDoubleClick)
})
