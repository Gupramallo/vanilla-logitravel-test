import { renderItems } from '../handle-items.js'
import {
  getLocalStorageItems,
  ACTIONS,
  setNewItem,
  setRevertLastAction,
} from '../local-storage.js'
import { closeOverlay } from '../overlay.js'

const addButton = document.querySelector('#add-item-button')

const handleAddItem = () => {
  const input = document.querySelector('#item-name')
  const inputValue = input.value.trim()

  if (!inputValue) {
    return
  }

  setNewItem(inputValue)
  input.value = ''
  setRevertLastAction({ value: ACTIONS.add })
  renderItems(getLocalStorageItems())
  closeOverlay()
}

export { addButton, handleAddItem }
