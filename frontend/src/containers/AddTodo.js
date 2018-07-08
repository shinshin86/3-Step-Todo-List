import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions'
import TextField from 'material-ui/TextField'

const KEY_ENTER = 13

let AddTodo = ({ dispatch }) => {
  return (
    <div>
      <TextField
        hintText="New Task is here"
        floatingLabelText="Key Enter is Add Task!"
        onKeyDown={e => {
          if (e.keyCode === KEY_ENTER) {
            dispatch(addTodo(e.target.value))
            e.target.value = ''
          }
        }}
      />
    </div>
  )
}

AddTodo = connect()(AddTodo)

export default AddTodo
