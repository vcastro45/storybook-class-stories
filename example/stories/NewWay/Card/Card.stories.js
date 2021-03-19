import { Story, Template } from '../../../../src'
import { createCard } from './Card'
import CardFixture from './Card.fixture'

@Story({
  title: 'New way/Card',
  fixtureClass: CardFixture
})
class Card {
  @Template((data) => createCard(data))
  Default
}

module.exports = Card