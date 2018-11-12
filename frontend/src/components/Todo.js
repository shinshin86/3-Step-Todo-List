import React from 'react'
import PropTypes from 'prop-types'
import ListItem from '@material-ui/core/ListItem'
import Divider from '@material-ui/core/Divider'

const Todo = ({
  onClick,
  status,
  text,
  ongoingDatetime,
  completedDatetime,
  workingTime
}) => (
  <div>
    <ListItem onClick={onClick}>
      <span
        style={{
          fontWeight: status === 'ongoing' ? 'bold' : 'none',
          textDecoration: status === 'completed' ? 'line-through' : 'none'
        }}
      >
        {text}
      </span>
      {status === 'ongoing' && '💨'} {status === 'completed' && '🎉'}
    </ListItem>
    <Divider />
  </div>
)
Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  status: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
}

export default Todo
