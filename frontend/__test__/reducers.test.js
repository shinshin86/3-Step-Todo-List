import * as actions from '../src/actions'
import reducers from '../src/reducers'

let state = {}
const test = action => reducers(state, action)

describe('Reducers', () => {
  describe('Todos', () => {
    beforeEach(() => {
      state = test(actions.addTodo('add todo test'))
    })
    it('can add todo at action of ADD_TODO', () => {
      expect(state.todos[0].id).toBe(0)
      expect(state.todos[0].text).toBe('add todo test')
      expect(state.todos[0].status).toBe('pending')
      expect(state.visibilityFilter).toBe('SHOW_ALL')
    })
    it('can toggle todo at action of TOGGLE_TODO', () => {
      test(actions.toggleTodo(1))
      expect(state.todos[1].id).toBe(1)
      expect(state.todos[1].text).toBe('add todo test')
      expect(state.todos[1].status).toBe('ongoing')
    })
  })
  describe('Visibility Filter', () => {
    it('can filter visibility at action of SET_VISIBILITY_FILTER', () => {
      state = test(actions.setVisibilityFilter('SHOW_ONGOING'))
      expect(state.visibilityFilter).toBe('SHOW_ONGOING')
    })
  })
});
