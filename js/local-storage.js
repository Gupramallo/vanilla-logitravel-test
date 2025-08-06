const items = localStorage.getItem('items')

export const setNewItem = (item) => {
  const items = JSON.parse(localStorage.getItem('items')) ?? []

  if (!items.length) {
    localStorage.setItem('items', JSON.stringify([item]))
  }
}
