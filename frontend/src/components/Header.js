import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import LeftNav from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import { Link } from 'react-router-dom';


class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    }
  }

  openNav = (state) => {
    this.setState({
      open: !state.open
    })
  }


  render() {
    return (
      <div>
        <LeftNav open={this.state.open}>
          <div>
            <MenuItem>
              <Link to='/'>
                Home
              </Link>
            </MenuItem>
            <MenuItem>
              <Link to='/archives'>
                Archives
              </Link>
            </MenuItem>
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

export default Header;
