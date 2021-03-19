import './list.css'

export const createList = ({
  items
}) => {
  const list = document.createElement('div')

  list.classList.add('list')

  if (items) {
    list.append(...items)
  }

  return list
}