const todo = (state, action) => {
  switch(action.type) {
    case 'ADD_TODO':
      return {
        id: action.id,
        text: action.text,
        status: 'pending'
      }
    case 'TOGGLE_TODO':
      if(state.id !== action.id) {
        return state
      }

      // status update
      if(state.status === 'pending') {
        state.status = 'ongoing'
      } else if(state.status === 'ongoing') {
        state.status = 'completed'
      } else if(state.status === 'completed') {
        return state
      } else {
        return state
      }

      return Object.assign({}, state, {
        status: state.status
      })
    default:
      return state
  }
}

const todos = (state = [], action) => {
  switch(action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        todo(undefined, action)
      ]
    case 'TOGGLE_TODO':
      return state.map((t) => 
        todo(t,action)
      )
    default:
      return state
  }
}

export default todos
