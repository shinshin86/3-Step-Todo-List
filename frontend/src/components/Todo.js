import React from 'react'
import PropTypes from 'prop-types'
import { ListItem } from 'material-ui/list'
import Divider from 'material-ui/Divider'

const Todo = ({ onClick, status, text, ongoingDatetime, completedDatetime, workingTime }) => (
  <div>
    <ListItem
      onClick={onClick}
      style={{fontWeight: status === 'ongoing' ? 'bold' : 'none',
              textDecoration: status === 'completed' ? 'line-through' : 'none'}}
    >
      {text}
      ONGOING : {ongoingDatetime}
      COMPLETED : {completedDatetime}
      WORKING TIME : {workingTime}
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
