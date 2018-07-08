import React, { Component } from 'react'
import AppBar from 'material-ui/AppBar'
import LeftNav from 'material-ui/Drawer'
import MenuItem from 'material-ui/MenuItem'
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
        <LeftNav open={this.state.open}>
          <div>
            <LinkItem to="/">
              <MenuItem>Home</MenuItem>
            </LinkItem>
            <LinkItem to="/archives">
              <MenuItem>Archives</MenuItem>
            </LinkItem>
          </div>
        </LeftNav>
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
