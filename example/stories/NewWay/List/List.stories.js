import { Story, Template } from '../../../../src'
import { createList } from './List'
import ListFixture from './List.fixture'

@Story({
  title: 'New way/List',
  fixtureClass: ListFixture
})
class List {
  @Template((data) => createList(data))
  Default
}

module.exports = List