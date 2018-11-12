import React, { Component } from 'react'
import AppBar from '@material-ui/core/AppBar'
import Drawer from '@material-ui/core/Drawer'
import MenuItem from '@material-ui/core/MenuItem'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const LinkItem = styled(Link)`
  text-decoration: none;
  color: #333;
`

class Header extends Component {
  constructor(props) {
    super(props)
    this.state = {
      open: false
    }
  }

  openNav = state => {
    this.setState({
      open: !state.open
    })
  }

  render() {
    return (
      <div>
        <Drawer open={this.state.open}>
          <div>
            <LinkItem to="/">
              <MenuItem>Home</MenuItem>
            </LinkItem>
            <LinkItem to="/archives">
              <MenuItem>Archives</MenuItem>
            </LinkItem>
          </div>
        </Drawer>
        <AppBar
          title="3 STEP TODO LIST"
          iconClassNameRight="muidocs-icon-navigation-expand-more"
          onLeftIconButtonClick={() => this.openNav(this.state)}
        />
      </div>
    )
  }
}

export default Header
