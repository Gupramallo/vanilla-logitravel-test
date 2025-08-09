import { renderItems } from '../handle-items.js'
import {
  getLocalStorageItems,
  setLocalStorageItems,
  removeRevertLastAction,
  storage,
  ACTIONS,
  STORAGE_KEYS,
} from '../local-storage.js'

const revertButton = document.querySelector('#revert-button')

const revertAddItem = () => {
  const items = getLocalStorageItems()
  const updatedItems = items.slice(0, -1)

  setLocalStorageItems(updatedItems)
  removeRevertLastAction()

  renderItems(updatedItems)
}

const revertDeletedItems = ({ itemsDeleted = [] }) => {
  if (!itemsDeleted.length) return

  const items = getLocalStorageItems()
  const updatedItems = [...items, ...itemsDeleted]
  const sortedItems = updatedItems.sort((a, b) => a.id - b.id)

  removeRevertLastAction()
  setLocalStorageItems(sortedItems)
  renderItems(sortedItems)
}

const handleRevertAction = () => {
  const lastAction = storage.get(STORAGE_KEYS.lastAction)

  if (!lastAction) {
    return
  }

  switch (lastAction.value) {
    case ACTIONS.add:
      return revertAddItem()

    case ACTIONS.delete:
      return revertDeletedItems({ itemsDeleted: lastAction.items })

    default:
      return
  }
}

export { revertButton, handleRevertAction }
