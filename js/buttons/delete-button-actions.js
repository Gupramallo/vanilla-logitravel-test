import { renderItems } from '../handle-items.js'
import {
  ACTIONS,
  getLocalStorageItems,
  setLocalStorageItems,
  setRevertLastAction,
} from '../local-storage.js'

const deleteButton = document.querySelector('#delete-button')

const deleteSelectedItems = () => {
  const items = getLocalStorageItems()
  const { updatedItems, deletedItems } = items.reduce(
    (prevItems, item) => {
      if (item.selected) {
        return {
          updatedItems: prevItems.updatedItems,
          deletedItems: [...prevItems.deletedItems, item],
        }
      }

      return {
        updatedItems: [...prevItems.updatedItems, item],
        deletedItems: prevItems.deletedItems,
      }
    },
    {
      updatedItems: [],
      deletedItems: [],
    }
  )

  if (deletedItems.length === 0) {
    return
  }

  setLocalStorageItems(updatedItems)
  setRevertLastAction({
    value: ACTIONS.delete,
    items: deletedItems,
  })

  renderItems(updatedItems)
}

export { deleteButton, deleteSelectedItems }
