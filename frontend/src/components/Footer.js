import React from 'react'
import FilterLink from '../containers/FilterLink'
import {
  BottomNavigation,
  BottomNavigationItem
} from 'material-ui/BottomNavigation'
import Paper from 'material-ui/Paper'
import FontIcon from 'material-ui/FontIcon'
import ActionWork from 'material-ui/svg-icons/action/work'
import ActionToday from 'material-ui/svg-icons/action/today'
import EditorModeEdit from 'material-ui/svg-icons/editor/mode-edit'
import ActionDone from 'material-ui/svg-icons/action/done'

const actionWork = <ActionWork />
const actionToday = <ActionToday />
const editorModeEdit = <EditorModeEdit />
const actionDone = <ActionDone />

let selectedIndex = 0
const select = index => (selectedIndex = index)

const Footer = () => (
  <Paper zDepth={1}>
    <BottomNavigation selectedIndex={selectedIndex}>
      <FilterLink filter="SHOW_ALL">
        <BottomNavigationItem
          label="ALL"
          icon={actionWork}
          onClick={() => select(0)}
        />
      </FilterLink>
      <FilterLink filter="SHOW_PENDING">
        <BottomNavigationItem
          label="PENDING"
          icon={actionToday}
          onClick={() => select(1)}
        />
      </FilterLink>
      <FilterLink filter="SHOW_ONGOING">
        <BottomNavigationItem
          label="ONGOING"
          icon={editorModeEdit}
          onClick={() => select(2)}
        />
      </FilterLink>
      <FilterLink filter="SHOW_COMPLETED">
        <BottomNavigationItem
          label="COMPLETED"
          icon={actionDone}
          onClick={() => select(3)}
        />
      </FilterLink>
    </BottomNavigation>
  </Paper>
)

export default Footer
