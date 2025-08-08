const getLocalStorageItems = () =>
  JSON.parse(localStorage.getItem('items')) ?? []

const setNewItem = (item) => {
  const items = getLocalStorageItems()
  const itemId = items.length

  return localStorage.setItem(
    'items',
    JSON.stringify([...items, { name: item, id: itemId, selected: false }])
  )
}

export { setNewItem, getLocalStorageItems }
