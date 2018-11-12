import React from 'react'
import FilterLink from '../containers/FilterLink'
import BottomNavigation from '@material-ui/core/BottomNavigation'
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction'
import Paper from '@material-ui/core/Paper'
import Icon from '@material-ui/core/Icon'

let selectedIndex = 0
const select = index => (selectedIndex = index)

const Footer = () => (
  <Paper zDepth={1}>
    <BottomNavigation selectedIndex={selectedIndex}>
      <FilterLink filter="SHOW_ALL">
        <BottomNavigationAction label="ALL" onClick={() => select(0)} />
      </FilterLink>
      <FilterLink filter="SHOW_PENDING">
        <BottomNavigationAction label="PENDING" onClick={() => select(1)} />
      </FilterLink>
      <FilterLink filter="SHOW_ONGOING">
        <BottomNavigationAction label="ONGOING" onClick={() => select(2)} />
      </FilterLink>
      <FilterLink filter="SHOW_COMPLETED">
        <BottomNavigationAction label="COMPLETED" onClick={() => select(3)} />
      </FilterLink>
    </BottomNavigation>
  </Paper>
)

export default Footer
