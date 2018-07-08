import { getDatetime, getWorkingTime } from '../utils/datetime'

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

      const t = getDatetime()

      // status update
      if(state.status === 'pending') {
        state.status = 'ongoing'
        state.ongoingTimestamp = t.ts
        state.ongoingDatetime = t.dt
      } else if(state.status === 'ongoing') {
        state.status = 'completed'
        state.completedTimestamp = t.ts
        state.completedDatetime = t.dt
        state.workingTime = getWorkingTime(state.ongoingTimestamp,
                                           state.completedTimestamp)
      } else if(state.status === 'completed') {
        console.log(`archive action : [ ${state.id} : ${state.text} ]`)
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
