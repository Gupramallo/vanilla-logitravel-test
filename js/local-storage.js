import { STORAGE_KEYS } from './constants'

const storage = {
  set: (key, value) => {
    localStorage.setItem(key, JSON.stringify(value))
  },
  get: (key, defaultValue = null) => {
    const storageItem = localStorage.getItem(key)

    return storageItem ? JSON.parse(storageItem) : defaultValue
  },
  remove: (key) => {
    localStorage.removeItem(key)
  },
}

const getLocalStorageItems = () => storage.get(STORAGE_KEYS.items, [])

const setLocalStorageItems = (updatedItems) =>
  storage.set(STORAGE_KEYS.items, updatedItems)

const setNewItem = (item) => {
  const items = storage.get(STORAGE_KEYS.items, [])
  const latestId = storage.get(STORAGE_KEYS.latestId, 0)
  const newId = latestId + 1

  storage.set(STORAGE_KEYS.items, [
    ...items,
    { name: item, id: newId, selected: false },
  ])
  storage.set(STORAGE_KEYS.latestId, newId)
}

const removeRevertLastAction = () => storage.remove(STORAGE_KEYS.lastAction)
const setRevertLastAction = ({ value, items = [] }) =>
  storage.set(STORAGE_KEYS.lastAction, {
    value,
    items,
  })

export {
  storage,
  setNewItem,
  getLocalStorageItems,
  setLocalStorageItems,
  removeRevertLastAction,
  setRevertLastAction,
}
