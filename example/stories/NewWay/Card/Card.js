import './card.css'

export const createCard = ({
  button,
  text
}) => {
  const card = document.createElement('div')
  const cardImage = document.createElement('img')
  const cardText = document.createElement('div')

  cardImage.src = 'https://loremflickr.com/640/420'
  cardText.textContent = text
  cardText.classList.add('card-text')
  card.classList.add('card')

  card.append(cardImage)
  card.append(cardText)
  card.append(button)

  return card
}