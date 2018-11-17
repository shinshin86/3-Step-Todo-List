import React from 'react'
import FilterLink from '../containers/FilterLink'
import BottomNavigation from '@material-ui/core/BottomNavigation'
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction'
import Paper from '@material-ui/core/Paper'
import RestoreIcon from '@material-ui/icons/Restore'
import FavoriteIcon from '@material-ui/icons/Favorite'
import LocationOnIcon from '@material-ui/icons/LocationOn'

let selectedIndex = 0
const select = index => (selectedIndex = index)

const Footer = () => (
  <Paper>
    <BottomNavigation selectedIndex={selectedIndex}>
      <FilterLink filter="SHOW_ALL">
        <BottomNavigationAction label="ALL" onClick={() => select(0)} />
      </FilterLink>
      <FilterLink filter="SHOW_PENDING">
        <BottomNavigationAction
          label="PENDING"
          icon={<RestoreIcon />}
          onClick={() => select(1)}
        />
      </FilterLink>
      <FilterLink filter="SHOW_ONGOING">
        <BottomNavigationAction
          label="ONGOING"
          icon={<RestoreIcon />}
          onClick={() => select(2)}
        />
      </FilterLink>
      <FilterLink filter="SHOW_COMPLETED">
        <BottomNavigationAction
          label="COMPLETED"
          icon={<RestoreIcon />}
          onClick={() => select(3)}
        />
      </FilterLink>
    </BottomNavigation>
  </Paper>
)

export default Footer
